// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Initialize Supabase client
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END