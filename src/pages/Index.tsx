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
        {/* Massive Planet Background */}
        <motion.div 
          initial={{ y: -800, scale: 1.2, opacity: 0 }}
          animate={{ y: -200, scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute -top-96 w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-space-gray/30 to-transparent"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(0 0% 25% / 0.3) 0%, hsl(0 0% 15% / 0.2) 40%, transparent 70%)",
          }}
        />
        
        <motion.div
          initial={{ y: -800, opacity: 0 }}
          animate={{ y: -200, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          className="absolute -top-96 w-[1100px] h-[1100px] rounded-full border border-primary/20"
        />

        <motion.div
          initial={{ y: -800, opacity: 0 }}
          animate={{ y: -200, opacity: 1, rotate: 360 }}
          transition={{ 
            y: { duration: 1.8, ease: "easeOut", delay: 0.1 },
            opacity: { duration: 1.8, ease: "easeOut", delay: 0.1 },
            rotate: { duration: 120, repeat: Infinity, ease: "linear" }
          }}
          className="absolute -top-96 w-[1000px] h-[1000px] rounded-full border border-primary/10"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="relative inline-block mb-8"
          >
            <motion.div 
              className="absolute inset-0 bg-primary/20 rounded-full blur-3xl glow-mint-strong"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h1 className="text-7xl md:text-9xl font-bold text-foreground relative">
              VOID
              <span className="block text-primary">VPN</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            Погрузитесь в бескрайнюю пустоту безопасности. 
            Непробиваемая защита. Космическая скорость.
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
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8">
                Узнать больше
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
