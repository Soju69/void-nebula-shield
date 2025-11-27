/**
 * КОНФИГУРАЦИЯ АДМИНИСТРАТОРОВ
 * 
 * ВАЖНО: Этот файл содержит хеши паролей для доступа к админ-панели.
 * Для генерации хеша используйте bcrypt:
 * 
 * Online: https://bcrypt-generator.com/ (rounds: 10)
 * Node.js: const bcrypt = require('bcrypt'); bcrypt.hashSync('your-password', 10);
 * 
 * ВНИМАНИЕ: В статической версии это НЕ БЕЗОПАСНО для продакшена!
 * Любой может обойти проверку на клиенте. Используйте только для демо/тестов.
 * Для продакшена используйте полноценный backend (Lovable Cloud/Supabase).
 */

export interface AdminUser {
  username: string;      // Логин администратора
  passwordHash: string;  // BCrypt хеш пароля (rounds: 10)
  role: string;          // Роль (admin, superadmin, moderator)
}

/**
 * СПИСОК АДМИНИСТРАТОРОВ
 * 
 * Добавьте ваших администраторов здесь:
 * 1. Сгенерируйте BCrypt хеш для пароля (https://bcrypt-generator.com/)
 * 2. Добавьте объект с username, passwordHash и role
 * 
 * Пример:
 * {
 *   username: 'admin',
 *   passwordHash: '$2a$10$...',  // хеш для пароля 'admin123'
 *   role: 'admin'
 * }
 */
export const ADMIN_USERS: AdminUser[] = [
  {
    username: 'admin',
    // Хеш для пароля: 'admin123' (замените на свой!)
    passwordHash: '$2a$10$YourHashHere',
    role: 'admin'
  },
  // Добавьте больше администраторов здесь:
  // {
  //   username: 'moderator',
  //   passwordHash: '$2a$10$AnotherHashHere',
  //   role: 'moderator'
  // }
];

/**
 * НАСТРОЙКИ СЕССИИ
 */
export const SESSION_CONFIG = {
  // Время жизни сессии в миллисекундах (24 часа)
  SESSION_DURATION: 24 * 60 * 60 * 1000,
  
  // Ключ для хранения в localStorage
  SESSION_KEY: 'void_admin_session',
};

/**
 * ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ ХЕШЕЙ (только для разработки)
 * 
 * Используйте эту функцию только локально для генерации хешей.
 * НЕ ВКЛЮЧАЙТЕ её в продакшен код!
 */
// import bcrypt from 'bcryptjs';
// export const generateHash = async (password: string) => {
//   return await bcrypt.hash(password, 10);
// };
