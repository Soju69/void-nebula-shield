// ========================================
// СТРАНИЦА АУТЕНТИФИКАЦИИ АДМИНИСТРАТОРА
// ========================================
// 
// Эта страница отвечает за вход администраторов в систему.
// 
// Как это работает:
// 1. Администратор вводит логин (username) и пароль
// 2. Система проверяет данные по списку в src/config/admin-config.ts
// 3. При успешной аутентификации создается сессия в localStorage
// 4. Администратор перенаправляется в админ-панель (/admin)
//
// ========================================

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Shield, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";
// ========================================
// ИМПОРТ: Система статической аутентификации
// ========================================
import { authenticateUser, createSession } from "@/lib/static-auth";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AdminAuth = () => {
  const navigate = useNavigate();
  useAnalytics();
  
  // ========================================
  // СОСТОЯНИЕ ФОРМЫ
  // ========================================
  // username: Логин администратора (из admin-config.ts)
  // password: Пароль администратора
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  
  // ========================================
  // СОСТОЯНИЕ ЗАГРУЗКИ И ОШИБОК
  // ========================================
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ========================================
  // ОБРАБОТКА ОТПРАВКИ ФОРМЫ
  // ========================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // ========================================
      // ШАГ 1: Проверка данных пользователя
      // ========================================
      // Функция authenticateUser проверяет:
      // 1. Существует ли пользователь с таким username
      // 2. Совпадает ли пароль с сохраненным хешем
      const user = await authenticateUser(formData.username, formData.password);
      
      if (!user) {
        // ========================================
        // ОШИБКА: Неверный логин или пароль
        // ========================================
        setError('Неверный логин или пароль');
        setIsLoading(false);
        return;
      }
      
      // ========================================
      // ШАГ 2: Создание сессии
      // ========================================
      // Сохраняем информацию о сессии в localStorage
      createSession(user);
      
      // ========================================
      // ШАГ 3: Перенаправление в админ-панель
      // ========================================
      console.log('✅ Успешный вход:', user.username);
      navigate('/admin');
      
    } catch (err) {
      // ========================================
      // ОБРАБОТКА ОШИБОК
      // ========================================
      console.error('❌ Ошибка аутентификации:', err);
      setError('Произошла ошибка при входе');
      setIsLoading(false);
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

          {/* ========================================
              ФОРМА АУТЕНТИФИКАЦИИ
              ========================================
              
              Поля формы:
              1. username - Логин администратора
              2. password - Пароль администратора
              
              После отправки формы происходит проверка
              данных и создание сессии.
              ======================================== */}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ========================================
                ОТОБРАЖЕНИЕ ОШИБОК
                ======================================== */}
            {error && (
              <Alert variant="destructive" className="bg-destructive/10 border-destructive/50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {/* ========================================
                ПОЛЕ: Логин (username)
                ========================================
                
                Введите username из файла:
                src/config/admin-config.ts
                
                Например: "admin"
                ======================================== */}
            <div>
              <Label htmlFor="username" className="text-foreground/90 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Логин
              </Label>
              <Input 
                id="username"
                type="text"
                placeholder="admin"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                required
                disabled={isLoading}
                className="mt-2 bg-background/50 border-border/50 text-foreground"
              />
            </div>

            {/* ========================================
                ПОЛЕ: Пароль
                ========================================
                
                Введите пароль для администратора.
                
                Пароль проверяется по BCrypt хешу из:
                src/config/admin-config.ts
                
                Для генерации хеша используйте:
                https://bcrypt-generator.com/
                ======================================== */}
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
                disabled={isLoading}
                className="mt-2 bg-background/50 border-border/50 text-foreground"
              />
            </div>

            {/* ========================================
                КНОПКА ВХОДА
                ========================================
                
                При нажатии:
                1. Проверяются учетные данные
                2. Создается сессия в localStorage
                3. Происходит перенаправление в /admin
                ======================================== */}
            <Button 
              type="submit"
              size="lg" 
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-mint text-lg"
            >
              {isLoading ? 'Вход...' : 'Войти'}
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
