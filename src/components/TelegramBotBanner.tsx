import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

interface TelegramBotBannerProps {
  botUrl?: string;
}

const TelegramBotBanner = ({ botUrl = "https://t.me/your_bot" }: TelegramBotBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      <div className="island-container p-8 md:p-12 relative">
        {/* Background glow effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-3xl"
        />
        
        {/* Floating particles */}
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-4 right-8 text-primary/30"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-4 left-8 text-primary/20"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center glow-mint-strong shrink-0"
          >
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Подключайтесь через <span className="text-primary">Telegram</span>
            </h3>
            <p className="text-foreground/70 text-lg mb-4 md:mb-0">
              Быстрая покупка и управление подпиской в нашем боте. 
              Мгновенное получение конфигурации!
            </p>
          </div>

          {/* Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="shrink-0"
          >
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint-strong text-lg px-8 py-6 group"
              onClick={() => window.open(botUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Открыть бот
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export default TelegramBotBanner;
