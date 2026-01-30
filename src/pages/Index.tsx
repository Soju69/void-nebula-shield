import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useTelegramStats } from "@/hooks/useTelegramStats";
import TelegramBotBanner from "@/components/TelegramBotBanner";

const TELEGRAM_BOT_URL = "https://t.me/your_bot"; // Замените на реальную ссылку бота

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

      {/* Telegram Bot Banner */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <TelegramBotBanner botUrl={TELEGRAM_BOT_URL} />
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

          <div className="grid md:grid-cols-2 gap-8 mb-32">
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

      {/* Premium Features Grid with Fade Animation */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Animated background fade effect */}
        <motion.div
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.15) 0%, transparent 70%)"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 text-foreground"
          >
            Почему <span className="text-primary">VOID</span>?
          </motion.h2>

          {/* Large Feature Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="island-container p-12 mb-8 group cursor-pointer overflow-hidden relative"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center glow-mint-strong shrink-0"
              >
                <Shield className="w-12 h-12 text-primary" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Непробиваемая защита</h3>
                <p className="text-lg text-foreground/70">Военный уровень шифрования AES-256 обеспечивает максимальную безопасность ваших данных. Никто не сможет перехватить или расшифровать ваш трафик.</p>
              </div>
            </div>
          </motion.div>

          {/* Grid of smaller blocks */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-8 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-mint group-hover:glow-mint-strong transition-all"
              >
                <Zap className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Космическая скорость</h3>
              <p className="text-foreground/60">Высокоскоростные серверы по всему миру</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-8 group cursor-pointer md:col-span-2"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center glow-mint group-hover:glow-mint-strong transition-all shrink-0"
                >
                  <Globe className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Без границ</h3>
                  <p className="text-foreground/60">Доступ к контенту из любой точки планеты. Void Internet открывает для вас весь мир без ограничений.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Medium sized blocks */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-10 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-mint group-hover:glow-mint-strong transition-all"
              >
                <Lock className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Нулевые логи</h3>
              <p className="text-foreground/60 text-lg">Полная анонимность и конфиденциальность. Мы не храним никаких данных о вашей активности.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-10 group cursor-pointer relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-primary/20 blur-3xl"
              />
              <div className="relative z-10">
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Поддержка</h3>
                <p className="text-foreground/60 text-lg">Наша команда всегда готова помочь вам в любое время суток.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-4 relative" id="тарифы">
        <div className="max-w-7xl mx-auto">
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
            Чем дольше — тем выгоднее
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
                  Высокая скорость
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
                    Максимальная скорость
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
              className="island-container p-8 group cursor-pointer"
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
                  Максимальная скорость
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

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto island-container p-16 text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-primary/10 blur-3xl"
          />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Готовы войти в <span className="text-primary">VOID</span>?
            </h2>
            
            {/* Telegram Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">Уже с нами:</span>
                <span className="text-2xl font-bold text-primary">
                  {loading ? '...' : memberCount.toLocaleString()}
                </span>
                <span className="text-foreground/70">клиентов</span>
              </div>
            </motion.div>
            
            <p className="text-xl text-foreground/70 mb-10">
              Присоединяйтесь к тысячам пользователей Void Internet
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint-strong text-xl px-12"
                  onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
                >
                  Начать сейчас
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary/10 text-xl px-12"
                  onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
                >
                  Открыть Telegram бот
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer - Simplified Island Style */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pb-8 px-4"
      >
        <div className="max-w-6xl mx-auto island-container p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
