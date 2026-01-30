import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock, Users, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTelegramStats } from "@/hooks/useTelegramStats";

const TELEGRAM_BOT_URL = "https://t.me/your_bot"; // Замените на реальную ссылку бота

const floatingFeatures = [
  { icon: Shield, text: "Надёжная защита" },
  { icon: Zap, text: "Высокая скорость" },
  { icon: Globe, text: "Без границ" },
  { icon: Lock, text: "Полная приватность" },
  { icon: Wifi, text: "Стабильное соединение" },
];

const Index = () => {
  useAnalytics();
  const { memberCount, loading } = useTelegramStats();
  
  return (
    <div className="min-h-screen bg-space-dark starfield noise-texture relative overflow-hidden">
      {/* Header - Island Style */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="island-container px-6 py-4 flex items-center justify-between w-full max-w-6xl">
          <motion.div 
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            VOID Shield
          </motion.div>
          
          {/* User count display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-foreground/70 text-sm">Пользователей:</span>
            <span className="text-lg font-bold text-primary">
              {loading ? '...' : memberCount.toLocaleString()}
            </span>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint"
              onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
            >
              Начать
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section - Planet */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Large Dark Planet */}
        <motion.div 
          initial={{ y: -800, scale: 1.1, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-[600px] w-[1200px] h-[1200px] rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 30%, hsl(0 0% 6%) 0%, hsl(0 0% 4%) 40%, hsl(0 0% 2%) 70%, hsl(0 0% 1%) 100%)",
          }}
        />
        
        {/* Light beam from behind planet - lower edge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute -top-[600px] w-[1200px] h-[1200px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 15% at 50% 75%, hsla(165 45% 75% / 0.6) 0%, hsla(165 45% 75% / 0.3) 30%, transparent 60%)",
            filter: "blur(20px)"
          }}
        />

        {/* Subtle planetary ring glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ 
            opacity: { duration: 2, ease: "easeOut", delay: 0.3 },
            rotate: { duration: 180, repeat: Infinity, ease: "linear" }
          }}
          className="absolute -top-[600px] w-[1250px] h-[1250px] rounded-full border border-primary/20"
        />

        {/* Title ON the planet */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -400 }}
          animate={{ scale: 1, opacity: 1, y: -200 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="absolute text-center z-20"
        >
          <h1 className="text-7xl md:text-8xl font-bold text-foreground/90 tracking-wider">
            VOID
            <span className="block text-primary text-5xl md:text-6xl mt-2">Shield</span>
          </h1>
        </motion.div>

        {/* Content below planet */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[400px]">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Погрузитесь в бескрайнюю пустоту безопасности. 
            <br />
            <span className="text-primary">Void Internet — свобода без границ.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint text-lg px-8"
                onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
              >
                Начать бесплатно
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8"
                onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
              >
                Telegram Bot
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
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
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-20 w-2 h-2 bg-primary/40 rounded-full glow-mint"
        />
      </section>

      {/* Pricing Section with Floating Features Background */}
      <section className="py-32 px-4 relative overflow-hidden" id="тарифы">
        {/* Animated floating features in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.15, 0],
                y: [100, -100],
                x: [0, (index % 2 === 0 ? 50 : -50)]
              }}
              transition={{ 
                duration: 12 + index * 2,
                repeat: Infinity,
                delay: index * 3,
                ease: "easeInOut"
              }}
              className="absolute flex items-center gap-3 text-primary/20"
              style={{
                left: `${15 + (index * 18)}%`,
                top: `${20 + (index * 15)}%`,
              }}
            >
              <feature.icon className="w-8 h-8" />
              <span className="text-xl font-medium whitespace-nowrap">{feature.text}</span>
            </motion.div>
          ))}
          
          {/* Additional ambient glow */}
          <motion.div
            animate={{ 
              opacity: [0.05, 0.12, 0.05],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.1) 0%, transparent 60%)"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-foreground"
          >
            Выберите свой <span className="text-primary">тариф</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-foreground/70 text-xl mb-16"
          >
            Работаем там, где другие не могут
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1 Month Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-8 group cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2 text-foreground">1 месяц</h3>
              <p className="text-foreground/60 mb-6">Попробуйте Void Internet</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">400 ₽</span>
                <span className="text-foreground/60">/месяц</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  Безлимитный трафик
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  До 5 устройств
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  Работает везде
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  Поддержка 24/7
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full border-primary/50 text-foreground hover:bg-primary/10 mb-3"
                onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
              >
                Выбрать
              </Button>
              <button
                onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
                className="w-full text-sm text-primary/70 hover:text-primary transition-colors underline underline-offset-2"
              >
                Команды TG бота
              </button>
            </motion.div>

            {/* 3 Months Plan - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="island-container p-8 group cursor-pointer relative overflow-hidden md:-mt-4"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-primary/20 blur-3xl"
              />
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-full glow-mint">
                ВЫГОДНО
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-foreground">3 месяца</h3>
                <p className="text-foreground/60 mb-6">Экономия 12%</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">1 050 ₽</span>
                  <div className="text-foreground/60 text-sm">350 ₽/месяц</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    Безлимитный трафик
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    До 5 устройств
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    Работает везде
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-mint-strong mb-3"
                  onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
                >
                  Выбрать
                </Button>
                <button
                  onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
                  className="w-full text-sm text-primary/70 hover:text-primary transition-colors underline underline-offset-2"
                >
                  Команды TG бота
                </button>
              </div>
            </motion.div>

            {/* 6 Months Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-8 group cursor-pointer relative"
            >
              <div className="absolute -top-2 -right-2 bg-foreground/20 text-foreground px-4 py-1 text-sm font-bold rounded-full">
                МАКСИМУМ
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">6 месяцев</h3>
              <p className="text-foreground/60 mb-6">Экономия 25%</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">2 100 ₽</span>
                <div className="text-foreground/60 text-sm">350 ₽/месяц</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  Безлимитный трафик
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  До 5 устройств
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  Работает везде
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  VIP поддержка 24/7
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full border-primary/50 text-foreground hover:bg-primary/10 mb-3"
                onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
              >
                Выбрать
              </Button>
              <button
                onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
                className="w-full text-sm text-primary/70 hover:text-primary transition-colors underline underline-offset-2"
              >
                Команды TG бота
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Apps Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-8 text-foreground"
          >
            Партнерские <span className="text-primary">приложения</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-foreground/70 text-xl mb-16"
          >
            Рекомендуем использовать для максимальной производительности
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-12 group cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center mb-6 glow-mint">
                  <span className="text-3xl font-bold text-primary">H</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">HAPP</h3>
                <p className="text-lg text-foreground/70 mb-6">
                  Профессиональное приложение для управления Void Internet соединениями с расширенными настройками и аналитикой.
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary/50 text-foreground hover:bg-primary/10"
                  onClick={() => window.open('https://happ.example.com', '_blank')}
                >
                  Узнать больше
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-12 group cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center mb-6 glow-mint">
                  <span className="text-3xl font-bold text-primary">V2</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">V2rayTun</h3>
                <p className="text-lg text-foreground/70 mb-6">
                  Мощный клиент с поддержкой V2Ray протокола для максимальной скорости и безопасности подключения.
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary/50 text-foreground hover:bg-primary/10"
                  onClick={() => window.open('https://v2raytun.example.com', '_blank')}
                >
                  Узнать больше
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced Island Style with Animation */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pb-8 px-4"
      >
        <div className="max-w-6xl mx-auto island-container p-8 relative overflow-hidden">
          {/* Animated background for footer */}
          <motion.div
            animate={{ 
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 30% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, hsl(var(--primary) / 0.1) 0%, transparent 40%)"
            }}
          />
          
          {/* Floating particles in footer */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-4 left-10 w-1 h-1 bg-primary/30 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-4 right-16 w-1.5 h-1.5 bg-primary/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            className="absolute top-6 right-1/3 w-1 h-1 bg-primary/25 rounded-full"
          />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60">© 2024 VOID Shield. Все права защищены.</p>
            <motion.a
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Политика конфиденциальности
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
