// src/utils/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and public API key
const supabaseUrl = 'https://xyjzynotacmgksvotkad.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5anp5bm90YWNtZ2tzdm90a2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NDY5MjAsImV4cCI6MjAzOTEyMjkyMH0.jTlN03ZH3VA1SvjIrSABw6Licn90ZofF7UYQGFhAiPw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
