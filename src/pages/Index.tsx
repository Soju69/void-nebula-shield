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
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl"
      >
        <div className="island-container px-6 py-4 flex items-center justify-between">
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
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        {/* Planet/Moon Background */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-20 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-space-gray/40 to-space-dark/60 blur-3xl"
        />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 w-[500px] h-[500px] rounded-full border border-primary/10"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            Погрузитесь в бескрайнюю пустоту безопасности. 
            Непробиваемая защита. Космическая скорость.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4 justify-center"
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
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-20 w-2 h-2 bg-primary rounded-full glow-mint"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-32 w-3 h-3 bg-primary/60 rounded-full glow-mint"
        />
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-20 text-foreground"
          >
            Почему <span className="text-primary">VOID</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Непробиваемая защита", desc: "Военный уровень шифрования AES-256" },
              { icon: Zap, title: "Космическая скорость", desc: "Высокоскоростные серверы по всему миру" },
              { icon: Globe, title: "Без границ", desc: "Доступ к контенту из любой точки планеты" },
              { icon: Lock, title: "Нулевые логи", desc: "Полная анонимность и конфиденциальность" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="island-container p-8 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 glow-mint group-hover:glow-mint-strong transition-all"
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/60">{feature.desc}</p>
              </motion.div>
            ))}
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
