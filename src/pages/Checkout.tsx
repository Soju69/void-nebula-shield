import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAnalytics, trackEvent } from "@/hooks/useAnalytics";

const plans = {
  "1month": { name: "1 месяц", price: 400, currency: "₽", features: ["Безлимитный трафик", "До 5 устройств", "Высокая скорость", "Поддержка 24/7"] },
  "3months": { name: "3 месяца", price: 1050, currency: "₽", features: ["Безлимитный трафик", "До 5 устройств", "Максимальная скорость", "Приоритетная поддержка"] },
  "6months": { name: "6 месяцев", price: 2100, currency: "₽", features: ["Безлимитный трафик", "До 5 устройств", "Максимальная скорость", "VIP поддержка 24/7"] }
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useAnalytics();
  const searchParams = new URLSearchParams(location.search);
  const planKey = (searchParams.get('plan') || 'premium') as keyof typeof plans;
  const plan = plans[planKey];
  
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('payment_initiated', { plan: plan.name });
    navigate('/payment-success', { state: { email: formData.email, plan: plan.name } });
  };

  return (
    <div className="min-h-screen bg-space-dark starfield noise-texture relative overflow-hidden">
      {/* Background planet effect */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle at 30% 30%, hsl(165 45% 75% / 0.2) 0%, transparent 70%)",
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
            VOID Shield
          </motion.div>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-foreground/70 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Оформление <span className="text-primary">заказа</span>
            </h1>

            <div className="island-container p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">План: {plan.name}</h2>
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground/70">Итого:</span>
                  <span className="text-2xl font-bold text-primary">{plan.price} {plan.currency}</span>
                </div>
              </div>
            </div>

            <div className="island-container p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-foreground/90 font-medium">Безопасная оплата</span>
              </div>
              <p className="text-sm text-foreground/60">
                Все платежи защищены 256-битным SSL шифрованием. 
                Мы не храним данные ваших карт.
              </p>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="island-container p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Данные оплаты</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-foreground/90">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="mt-2 bg-background/50 border-border/50 text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="name" className="text-foreground/90">Имя на карте</Label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="IVAN IVANOV"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="mt-2 bg-background/50 border-border/50 text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="cardNumber" className="text-foreground/90">Номер карты</Label>
                  <Input 
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                    required
                    maxLength={19}
                    className="mt-2 bg-background/50 border-border/50 text-foreground"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="text-foreground/90">Срок действия</Label>
                    <Input 
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                      required
                      maxLength={5}
                      className="mt-2 bg-background/50 border-border/50 text-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv" className="text-foreground/90">CVV</Label>
                    <Input 
                      id="cvv"
                      type="text"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                      required
                      maxLength={3}
                      className="mt-2 bg-background/50 border-border/50 text-foreground"
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-mint text-lg"
              >
                Оплатить {plan.price} {plan.currency}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-space-dark px-4 text-foreground/60">или</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="w-full border-primary/50 text-foreground hover:bg-primary/10 text-lg"
                  onClick={() => window.open('https://t.me/your_bot_username', '_blank')}
                >
                  Оплатить через Telegram Bot
                </Button>

                <div className="island-container p-6 text-center">
                  <p className="text-sm text-foreground/70 mb-4">Оплата по QR коду</p>
                  <div className="w-48 h-48 mx-auto bg-background/50 rounded-xl flex items-center justify-center border border-border/50 mb-3">
                    <div className="text-center">
                      <div className="w-40 h-40 bg-foreground/10 rounded-lg mb-2" />
                      <p className="text-xs text-foreground/50">QR код для оплаты</p>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/50">Отсканируйте QR код в вашем банковском приложении</p>
                </div>
              </div>

              <p className="text-xs text-center text-foreground/50">
                Нажимая "Оплатить" вы соглашаетесь с условиями использования и политикой конфиденциальности
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
