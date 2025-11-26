import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAnalytics = () => {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        const data = {
          page_url: window.location.href,
          referrer: document.referrer || 'direct',
          user_agent: navigator.userAgent,
          screen_resolution: `${window.screen.width}x${window.screen.height}`,
          country: 'Unknown' // В реальном приложении можно получить через API геолокации
        };

        await supabase.from('analytics').insert(data);
      } catch (error) {
        console.error('Analytics error:', error);
      }
    };

    trackPageView();
  }, []);
};

export const trackEvent = async (eventName: string, eventData?: any) => {
  try {
    await supabase.from('analytics').insert({
      page_url: `${window.location.href}#event:${eventName}`,
      referrer: JSON.stringify(eventData || {}),
      user_agent: navigator.userAgent,
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      country: 'Unknown'
    });
  } catch (error) {
    console.error('Event tracking error:', error);
  }
};