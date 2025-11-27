/**
 * СТАТИЧЕСКАЯ СИСТЕМА АУТЕНТИФИКАЦИИ
 * 
 * Этот модуль обеспечивает базовую аутентификацию для статической версии сайта.
 * 
 * ВНИМАНИЕ: Это НЕ безопасное решение для продакшена!
 * - Хеши паролей видны в клиентском коде
 * - Проверка происходит на клиенте и может быть обойдена
 * - Нет защиты от brute-force атак
 * 
 * Используйте только для демо/разработки.
 * Для продакшена - используйте Lovable Cloud или полноценный backend.
 */

import { ADMIN_USERS, SESSION_CONFIG, AdminUser } from '@/config/admin-config';

// Импортируем bcryptjs для работы с хешами в браузере
// Установите: npm install bcryptjs
// import bcrypt from 'bcryptjs';

/**
 * MOCK функция для проверки пароля (замените на реальную bcrypt)
 * В продакшене используйте bcrypt.compare()
 */
const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  // TODO: Раскомментируйте для использования bcrypt
  // const bcrypt = await import('bcryptjs');
  // return await bcrypt.compare(password, hash);
  
  // ВРЕМЕННАЯ MOCK ПРОВЕРКА (УДАЛИТЕ В ПРОДАКШЕНЕ!)
  console.warn('⚠️ Используется mock проверка паролей. Установите bcryptjs!');
  return password === 'admin123'; // Небезопасно! Только для демо!
};

/**
 * АУТЕНТИФИКАЦИЯ ПОЛЬЗОВАТЕЛЯ
 * 
 * @param username - Логин администратора
 * @param password - Пароль
 * @returns Promise<AdminUser | null> - Данные пользователя или null
 */
export const authenticateUser = async (
  username: string, 
  password: string
): Promise<AdminUser | null> => {
  // Находим пользователя по username
  const user = ADMIN_USERS.find(u => u.username === username);
  
  if (!user) {
    console.warn('❌ Пользователь не найден:', username);
    return null;
  }
  
  // Проверяем пароль
  const isValid = await verifyPassword(password, user.passwordHash);
  
  if (!isValid) {
    console.warn('❌ Неверный пароль для пользователя:', username);
    return null;
  }
  
  console.log('✅ Успешная аутентификация:', username);
  return user;
};

/**
 * ИНТЕРФЕЙС СЕССИИ
 */
interface Session {
  username: string;
  role: string;
  expiresAt: number;
  createdAt: number;
}

/**
 * СОЗДАНИЕ СЕССИИ
 * 
 * Сохраняет сессию в localStorage после успешной аутентификации
 */
export const createSession = (user: AdminUser): Session => {
  const session: Session = {
    username: user.username,
    role: user.role,
    createdAt: Date.now(),
    expiresAt: Date.now() + SESSION_CONFIG.SESSION_DURATION,
  };
  
  // Сохраняем в localStorage
  localStorage.setItem(SESSION_CONFIG.SESSION_KEY, JSON.stringify(session));
  
  console.log('📝 Сессия создана:', session.username);
  return session;
};

/**
 * ПОЛУЧЕНИЕ ТЕКУЩЕЙ СЕССИИ
 * 
 * @returns Session | null - Активная сессия или null
 */
export const getSession = (): Session | null => {
  try {
    const sessionData = localStorage.getItem(SESSION_CONFIG.SESSION_KEY);
    
    if (!sessionData) {
      return null;
    }
    
    const session: Session = JSON.parse(sessionData);
    
    // Проверяем, не истекла ли сессия
    if (Date.now() > session.expiresAt) {
      console.warn('⏰ Сессия истекла');
      clearSession();
      return null;
    }
    
    return session;
  } catch (error) {
    console.error('❌ Ошибка при получении сессии:', error);
    clearSession();
    return null;
  }
};

/**
 * ПРОВЕРКА АУТЕНТИФИКАЦИИ
 * 
 * @returns boolean - true если пользователь аутентифицирован
 */
export const isAuthenticated = (): boolean => {
  return getSession() !== null;
};

/**
 * УДАЛЕНИЕ СЕССИИ (ВЫХОД)
 */
export const clearSession = (): void => {
  localStorage.removeItem(SESSION_CONFIG.SESSION_KEY);
  console.log('🚪 Сессия удалена (выход)');
};

/**
 * ПРОВЕРКА РОЛИ
 * 
 * @param requiredRole - Требуемая роль
 * @returns boolean - true если у пользователя есть нужная роль
 */
export const hasRole = (requiredRole: string): boolean => {
  const session = getSession();
  
  if (!session) {
    return false;
  }
  
  return session.role === requiredRole || session.role === 'superadmin';
};
