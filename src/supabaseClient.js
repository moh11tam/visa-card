import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kfffcaxovwdpknfteapm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_t0MxB1uxLewOeAF0KHPX6A_jvLET...';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);