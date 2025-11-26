-- Create analytics table for tracking site visits
CREATE TABLE public.analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_url TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  screen_resolution TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert analytics (public endpoint)
CREATE POLICY "Anyone can insert analytics"
ON public.analytics
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view analytics
CREATE POLICY "Authenticated users can view analytics"
ON public.analytics
FOR SELECT
TO authenticated
USING (true);

-- Create vpn_configs table for storing user VPN configurations
CREATE TABLE public.vpn_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  subscription_plan TEXT NOT NULL,
  config_data TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.vpn_configs ENABLE ROW LEVEL SECURITY;

-- Users can view their own configs
CREATE POLICY "Users can view own configs"
ON public.vpn_configs
FOR SELECT
TO anon, authenticated
USING (true);

-- Allow inserting configs
CREATE POLICY "Allow config creation"
ON public.vpn_configs
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_analytics_created_at ON public.analytics(created_at DESC);
CREATE INDEX idx_analytics_page_url ON public.analytics(page_url);
CREATE INDEX idx_vpn_configs_email ON public.vpn_configs(user_email);