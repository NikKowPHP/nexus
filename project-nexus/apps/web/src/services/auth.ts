import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const signUp = async (email: string, password: string) => {
  const response = await supabase.auth.signUp({ email, password });
  if (response.error) throw response.error;
  return response;
};

export const signIn = async (email: string, password: string) => {
  const { data: { session }, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return session;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};