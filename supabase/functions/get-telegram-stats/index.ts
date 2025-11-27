import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const channelId = Deno.env.get('TELEGRAM_CHANNEL_ID');

    if (!botToken || !channelId) {
      throw new Error('Missing Telegram configuration');
    }

    // Get chat member count from Telegram Bot API
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/getChatMemberCount?chat_id=${channelId}`
    );

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description || 'Failed to get Telegram stats');
    }

    return new Response(
      JSON.stringify({ 
        memberCount: data.result,
        success: true 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error fetching Telegram stats:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Return mock data in case of error for development
    return new Response(
      JSON.stringify({ 
        memberCount: 1247, // Mock number for development
        success: false,
        error: errorMessage 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  }
});
