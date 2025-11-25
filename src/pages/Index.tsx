import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
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
            VOID VPN
          </motion.div>
          <nav className="hidden md:flex gap-8">
            {["Features", "Security", "Speed", "Pricing"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/70 hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint">
              Get Started
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
          className="absolute -top-[300px] w-[1400px] h-[1400px] rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 30%, hsl(0 0% 6%) 0%, hsl(0 0% 4%) 40%, hsl(0 0% 2%) 70%, hsl(0 0% 1%) 100%)",
          }}
        />
        
        {/* Light beam from behind planet - lower edge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute -top-[300px] w-[1400px] h-[1400px] rounded-full pointer-events-none"
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
          className="absolute -top-[300px] w-[1450px] h-[1450px] rounded-full border border-primary/20"
        />

        {/* Title ON the planet */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -400 }}
          animate={{ scale: 1, opacity: 1, y: -150 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="absolute text-center z-20"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-foreground/90 tracking-wider">
            VOID
            <span className="block text-primary glow-mint">VPN</span>
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
            <span className="text-primary">Непробиваемая защита. Космическая скорость.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint text-lg px-8">
                Начать бесплатно
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8"
                onClick={() => window.open('https://t.me/your_bot_username', '_blank')}
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

      {/* Premium Features Grid */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
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
                  <p className="text-foreground/60">Доступ к контенту из любой точки планеты. Обходите любые географические ограничения и наслаждайтесь свободным интернетом.</p>
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
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-6 text-foreground"
          >
            Выберите свой <span className="text-primary">ПУТЬ</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-foreground/70 text-xl mb-16"
          >
            Начните бесплатно или получите полный доступ к космической скорости
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-8 group cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2 text-foreground">Базовый</h3>
              <p className="text-foreground/60 mb-6">Для начала путешествия</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">$0</span>
                <span className="text-foreground/60">/месяц</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  5 GB трафика
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  3 локации
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  Базовая скорость
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                onClick={() => window.location.href = '/checkout?plan=basic'}
              >
                Начать
              </Button>
            </motion.div>

            {/* Pro Plan - Featured */}
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
                ПОПУЛЯРНЫЙ
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Премиум</h3>
                <p className="text-foreground/60 mb-6">Полная свобода</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">$9.99</span>
                  <span className="text-foreground/60">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    Безлимитный трафик
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    50+ локаций
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    Максимальная скорость
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    До 5 устройств
                  </li>
                  <li className="flex items-center gap-2 text-foreground/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint-strong" />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-mint-strong"
                  onClick={() => window.location.href = '/checkout?plan=premium'}
                >
                  Попробовать бесплатно
                </Button>
              </div>
            </motion.div>

            {/* Ultimate Plan */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="island-container p-8 group cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2 text-foreground">Максимум</h3>
              <p className="text-foreground/60 mb-6">Для профессионалов</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">$19.99</span>
                <span className="text-foreground/60">/месяц</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  Всё из Премиум
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  До 10 устройств
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  Выделенный IP
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-mint" />
                  VIP поддержка 24/7
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                onClick={() => window.location.href = '/checkout?plan=maximum'}
              >
                Выбрать план
              </Button>
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
              Готовы войти в <span className="text-primary">ПУСТОТУ</span>?
            </h2>
            <p className="text-xl text-foreground/70 mb-10">
              Присоединяйтесь к тысячам пользователей, которые выбрали свободу
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint-strong text-xl px-12">
                Начать сейчас
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer - Island Style */}
      <motion.footer
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pb-8 px-4"
      >
        <div className="max-w-6xl mx-auto island-container p-12">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">VOID VPN</h3>
              <p className="text-foreground/60">
                Безопасность в каждом байте
              </p>
            </div>
            
            {[
              { title: "Продукт", links: ["Возможности", "Цены", "Серверы", "Приложения"] },
              { title: "Компания", links: ["О нас", "Блог", "Карьера", "Пресса"] },
              { title: "Поддержка", links: ["Помощь", "FAQ", "Контакты", "Статус"] },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-foreground/60 hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60">© 2024 VOID VPN. Все права защищены.</p>
            <div className="flex gap-6">
              {["Конфиденциальность", "Условия", "Cookies"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
