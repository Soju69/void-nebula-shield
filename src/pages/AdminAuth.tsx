import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";

const AdminAuth = () => {
  const navigate = useNavigate();
  useAnalytics();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple auth check - in production use real authentication
    if (formData.email && formData.password) {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-space-dark starfield noise-texture relative overflow-hidden flex items-center justify-center">
      {/* Background effects */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(165 45% 75% / 0.2) 0%, transparent 70%)",
          filter: "blur(80px)"
        }}
      />

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="island-container px-6 py-4 flex items-center justify-between w-full max-w-6xl">
          <motion.div 
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
          >
            VOID VPN
          </motion.div>
        </div>
      </motion.header>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md px-4"
      >
        <div className="island-container p-8">
          <div className="flex items-center justify-center mb-8">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center glow-mint"
            >
              <Shield className="w-10 h-10 text-primary" />
            </motion.div>
          </div>

          <h1 className="text-3xl font-bold text-center text-foreground mb-2">
            Админ <span className="text-primary">панель</span>
          </h1>
          <p className="text-center text-foreground/60 mb-8">
            Войдите для доступа к панели управления
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-foreground/90 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Email
              </Label>
              <Input 
                id="email"
                type="email"
                placeholder="admin@voidvpn.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="mt-2 bg-background/50 border-border/50 text-foreground"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-foreground/90 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Пароль
              </Label>
              <Input 
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
                className="mt-2 bg-background/50 border-border/50 text-foreground"
              />
            </div>

            <Button 
              type="submit"
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-mint text-lg"
            >
              Войти
            </Button>

            <div className="flex items-center gap-2 text-xs text-foreground/50 justify-center">
              <Lock className="w-3 h-3" />
              <span>Защищенное соединение</span>
            </div>
          </form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6"
        >
          <button 
            onClick={() => navigate('/')}
            className="text-foreground/60 hover:text-primary transition-colors text-sm"
          >
            ← Вернуться на главную
          </button>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-20 w-2 h-2 bg-primary rounded-full glow-mint"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-32 w-3 h-3 bg-primary/60 rounded-full glow-mint"
      />
    </div>
  );
};

export default AdminAuth;
