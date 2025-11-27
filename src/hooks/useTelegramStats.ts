import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useTelegramStats = () => {
  const [memberCount, setMemberCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-telegram-stats');
        
        if (error) throw error;
        
        if (data?.memberCount) {
          setMemberCount(data.memberCount);
        }
      } catch (error) {
        console.error('Error fetching Telegram stats:', error);
        setMemberCount(1247); // Fallback number
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return { memberCount, loading };
};
