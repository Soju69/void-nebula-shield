import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, DollarSign, Globe, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  // Mock data - с Lovable Cloud можно получить реальную статистику
  const stats = [
    { 
      title: "Всего пользователей", 
      value: "1,234", 
      change: "+12%", 
      icon: Users, 
      trend: "up" 
    },
    { 
      title: "Доход за месяц", 
      value: "$12,345", 
      change: "+23%", 
      icon: DollarSign, 
      trend: "up" 
    },
    { 
      title: "Активные подписки", 
      value: "892", 
      change: "+8%", 
      icon: TrendingUp, 
      trend: "up" 
    },
    { 
      title: "Посещений сайта", 
      value: "5,678", 
      change: "-3%", 
      icon: Globe, 
      trend: "down" 
    }
  ];

  const trafficSources = [
    { source: "Прямые переходы", visits: 2345, percentage: 41 },
    { source: "Google", visits: 1567, percentage: 28 },
    { source: "Социальные сети", visits: 1123, percentage: 20 },
    { source: "Реферальные ссылки", visits: 643, percentage: 11 }
  ];

  const recentOrders = [
    { id: "VOID-A3F7G", plan: "Премиум", amount: "$9.99", status: "Успешно", date: "2024-01-15" },
    { id: "VOID-B8K2M", plan: "Максимум", amount: "$19.99", status: "Успешно", date: "2024-01-15" },
    { id: "VOID-C5N9P", plan: "Премиум", amount: "$9.99", status: "Ожидание", date: "2024-01-14" },
    { id: "VOID-D1Q4R", plan: "Базовый", amount: "$0.00", status: "Успешно", date: "2024-01-14" }
  ];

  return (
    <div className="min-h-screen bg-space-dark starfield noise-texture relative overflow-hidden">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="island-container px-6 py-4 flex items-center justify-between w-full max-w-7xl">
          <motion.div 
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
          >
            VOID VPN Admin
          </motion.div>
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
            className="border-primary/50 text-foreground hover:bg-primary/10"
          >
            Выйти
          </Button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Панель <span className="text-primary">управления</span>
            </h1>
            <p className="text-foreground/70">Обзор статистики и аналитики</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="island-container p-6 hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-sm text-foreground/60">{stat.title}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Traffic Sources & Recent Orders */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traffic Sources */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="island-container p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Источники трафика</h2>
                <div className="space-y-4">
                  {trafficSources.map((source, idx) => (
                    <div key={source.source} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/80">{source.source}</span>
                        <span className="text-foreground/60">{source.visits} визитов</span>
                      </div>
                      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${source.percentage}%` }}
                          transition={{ duration: 1, delay: 0.6 + idx * 0.1 }}
                          className="h-full bg-primary glow-mint"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-foreground/50 mt-6">
                  💡 Подключите Lovable Cloud для отслеживания реальной статистики переходов
                </p>
              </Card>
            </motion.div>

            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="island-container p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Последние заказы</h2>
                <div className="space-y-3">
                  {recentOrders.map((order, idx) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors"
                    >
                      <div>
                        <p className="text-sm font-mono text-primary">{order.id}</p>
                        <p className="text-xs text-foreground/60">{order.plan} · {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">{order.amount}</p>
                        <p className={`text-xs ${order.status === 'Успешно' ? 'text-green-500' : 'text-yellow-500'}`}>
                          {order.status}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="island-container p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Расширенная аналитика с Lovable Cloud
              </h3>
              <p className="text-foreground/70 mb-4">
                Подключите Lovable Cloud для получения реальной статистики: отслеживание переходов, 
                поведение пользователей, источники трафика, конверсии и многое другое.
              </p>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-mint"
                onClick={() => alert('Свяжитесь с нами для подключения Lovable Cloud')}
              >
                Узнать больше
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
