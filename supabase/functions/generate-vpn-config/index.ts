import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, plan } = await req.json();
    
    console.log('Generating VPN config for:', email, plan);

    // Generate a unique VPN configuration
    const serverId = Math.floor(Math.random() * 10) + 1;
    const userId = Math.random().toString(36).substring(2, 15);
    const privateKey = generatePrivateKey();
    const publicKey = generatePublicKey(privateKey);
    const presharedKey = generatePresharedKey();
    
    const config = `[Interface]
PrivateKey = ${privateKey}
Address = 10.0.0.${Math.floor(Math.random() * 254) + 1}/32
DNS = 1.1.1.1, 1.0.0.1

[Peer]
PublicKey = ${publicKey}
PresharedKey = ${presharedKey}
Endpoint = ${getServerEndpoint(serverId, plan)}
AllowedIPs = 0.0.0.0/0, ::/0
PersistentKeepalive = 25`;

    // Save config to database
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { error: insertError } = await supabase
      .from('vpn_configs')
      .insert({
        user_email: email,
        subscription_plan: plan,
        config_data: config
      });

    if (insertError) {
      console.error('Error saving config:', insertError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        config,
        serverLocation: getServerLocation(serverId, plan)
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in generate-vpn-config:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});

function generatePrivateKey(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let result = '';
  for (let i = 0; i < 44; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generatePublicKey(privateKey: string): string {
  // In real implementation, this would derive from private key
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let result = '';
  for (let i = 0; i < 44; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generatePresharedKey(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let result = '';
  for (let i = 0; i < 44; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getServerEndpoint(serverId: number, plan: string): string {
  const servers: { [key: string]: string[] } = {
    'basic': [`vpn${serverId}.voidvpn.space:51820`],
    'базовый': [`vpn${serverId}.voidvpn.space:51820`],
    'premium': [`vpn-premium${serverId}.voidvpn.space:51820`],
    'премиум': [`vpn-premium${serverId}.voidvpn.space:51820`],
    'maximum': [`vpn-max${serverId}.voidvpn.space:51820`],
    'максимум': [`vpn-max${serverId}.voidvpn.space:51820`]
  };
  const planKey = plan.toLowerCase();
  return servers[planKey] ? servers[planKey][0] : servers['basic'][0];
}

function getServerLocation(serverId: number, plan: string): string {
  const locations = [
    'Амстердам, Нидерланды',
    'Франкфурт, Германия',
    'Лондон, Великобритания',
    'Нью-Йорк, США',
    'Сингапур',
    'Токио, Япония',
    'Сидней, Австралия',
    'Торонто, Канада',
    'Париж, Франция',
    'Стокгольм, Швеция'
  ];
  return locations[serverId % locations.length];
}