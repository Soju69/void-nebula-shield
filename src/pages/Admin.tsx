import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, DollarSign, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface AnalyticsData {
  page_url: string;
  referrer: string;
  created_at: string;
}

const Admin = () => {
  useAnalytics();
  const navigate = useNavigate();
  
  const [stats, setStats] = useState({
    totalVisits: 0,
    uniquePages: 0,
    todayVisits: 0,
    growthRate: "+0%"
  });

  const [trafficSources, setTrafficSources] = useState<{source: string, visits: number}[]>([]);
  const [recentVisits, setRecentVisits] = useState<AnalyticsData[]>([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const { data: allData, error } = await supabase
          .from('analytics')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (allData) {
          setStats(prev => ({
            ...prev,
            totalVisits: allData.length,
            uniquePages: new Set(allData.map(d => d.page_url)).size
          }));

          const today = new Date().toISOString().split('T')[0];
          const todayData = allData.filter(d => 
            d.created_at.startsWith(today)
          );
          setStats(prev => ({ ...prev, todayVisits: todayData.length }));

          const sources = allData.reduce((acc: any, item) => {
            let source = 'Прямые переходы';
            if (item.referrer && item.referrer !== 'direct') {
              if (item.referrer.includes('google')) source = 'Google';
              else if (item.referrer.includes('t.me')) source = 'Telegram';
              else if (item.referrer.includes('facebook') || item.referrer.includes('vk')) source = 'Социальные сети';
              else source = 'Другое';
            }
            acc[source] = (acc[source] || 0) + 1;
            return acc;
          }, {});

          setTrafficSources(
            Object.entries(sources).map(([source, visits]) => ({
              source,
              visits: visits as number
            }))
          );

          setRecentVisits(allData.slice(0, 10));
        }
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-space-dark starfield noise-texture relative overflow-hidden">
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

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Панель <span className="text-primary">управления</span>
            </h1>
            <p className="text-foreground/70">Реальная статистика и аналитика</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="island-container">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground/70">
                  Всего посещений
                </CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stats.totalVisits}</div>
              </CardContent>
            </Card>

            <Card className="island-container">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground/70">
                  Уникальных страниц
                </CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stats.uniquePages}</div>
              </CardContent>
            </Card>

            <Card className="island-container">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground/70">
                  Сегодня
                </CardTitle>
                <BarChart className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stats.todayVisits}</div>
              </CardContent>
            </Card>

            <Card className="island-container">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground/70">
                  Рост
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stats.growthRate}</div>
              </CardContent>
            </Card>
          </div>

          <Card className="island-container">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Источники трафика</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSources.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-background/30 rounded-lg hover:bg-background/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.source}</p>
                      <p className="text-sm text-foreground/60">{item.visits} визитов</p>
                    </div>
                  </div>
                ))}
                
                {trafficSources.length === 0 && (
                  <p className="text-center text-foreground/50 py-8">Пока нет данных</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;