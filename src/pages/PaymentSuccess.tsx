import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, MessageCircle, Copy } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAnalytics } from "@/hooks/useAnalytics";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  useAnalytics();
  
  const [config, setConfig] = useState<string>("");
  const [serverLocation, setServerLocation] = useState<string>("");
  const [loading, setLoading] = useState(true);
  
  const email = location.state?.email || "user@example.com";
  const plan = location.state?.plan || "Базовый";

  useEffect(() => {
    const generateConfig = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('generate-vpn-config', {
          body: { email, plan }
        });

        if (error) throw error;

        setConfig(data.config);
        setServerLocation(data.serverLocation);
      } catch (error) {
        console.error('Error generating config:', error);
        toast({
          title: "Ошибка",
          description: "Не удалось получить конфигурацию. Попробуйте позже.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    generateConfig();
  }, [email, plan]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(config);
    toast({
      title: "Скопировано!",
      description: "Конфигурация скопирована в буфер обмена"
    });
  };

  const downloadConfig = () => {
    const blob = new Blob([config], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'void-vpn.conf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
            Добро пожаловать в <span className="text-primary font-bold">VOID Shield</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-background/50 rounded-2xl p-6 mb-8 border border-border/30"
          >
            <p className="text-foreground/80 mb-4">
              Ваш аккаунт активирован! План: <span className="text-primary font-bold">{plan}</span>
            </p>
            <p className="text-sm text-foreground/60 mb-4">
              Сервер: <span className="text-primary">{serverLocation}</span>
            </p>
            
            {loading ? (
              <div className="text-center py-4">
                <p className="text-foreground/60">Генерация конфигурации...</p>
              </div>
            ) : (
              <>
                <div className="bg-background/80 rounded-xl p-4 mb-4 border border-border/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-primary">Ваша конфигурация WireGuard:</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={copyToClipboard}
                      className="text-primary hover:text-primary/80"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <pre className="text-xs text-foreground/70 font-mono overflow-x-auto whitespace-pre-wrap">
                    {config}
                  </pre>
                </div>

                <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                  <p className="text-sm font-bold text-foreground mb-2">📱 Инструкция по подключению:</p>
                  <ol className="text-xs text-foreground/70 space-y-2">
                    <li>1. Скачайте приложение HAPP или V2rayTun</li>
                    <li>2. Откройте приложение и нажмите "+" или "Добавить конфигурацию"</li>
                    <li>3. Выберите "Импорт из буфера обмена" или "Создать вручную"</li>
                    <li>4. Вставьте скопированную конфигурацию</li>
                    <li>5. Сохраните и активируйте VPN</li>
                  </ol>
                </div>
              </>
            )}
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
              onClick={downloadConfig}
              disabled={loading}
            >
              <Download className="w-5 h-5 mr-2" />
              Скачать конфигурацию
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
