import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-space-dark starfield noise-texture relative overflow-hidden flex items-center justify-center">
      {/* Background effects */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(165 45% 75% / 0.3) 0%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />

      <div className="relative z-10 px-4 max-w-2xl w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="island-container p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8 glow-mint-strong"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Оплата успешна!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-foreground/70 mb-8"
          >
            Добро пожаловать в <span className="text-primary font-bold">VOID VPN</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-background/50 rounded-2xl p-6 mb-8 border border-border/30"
          >
            <p className="text-foreground/80 mb-4">
              Ваш аккаунт активирован! Инструкции по настройке отправлены на вашу почту.
            </p>
            <p className="text-sm text-foreground/60">
              ID заказа: <span className="text-primary font-mono">VOID-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="space-y-4"
          >
            <Button 
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-mint text-lg"
              onClick={() => window.open('https://t.me/your_bot_username', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Скачать приложение
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="w-full border-primary/50 text-foreground hover:bg-primary/10 text-lg"
              onClick={() => window.open('https://t.me/your_bot_username', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Открыть Telegram Bot
            </Button>

            <Button 
              size="lg"
              variant="ghost"
              className="w-full text-foreground/70 hover:text-primary"
              onClick={() => navigate('/')}
            >
              Вернуться на главную
            </Button>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-foreground/50 text-sm mt-6"
        >
          Нужна помощь? Свяжитесь с нами в Telegram: @void_support
        </motion.p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
