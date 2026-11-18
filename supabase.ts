import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
export type Game = { id: string; slug: string; name: string; cover_url: string | null; description: string | null; developer: string | null; release_date: string | null; genres: string[]; platforms: string[]; is_demo: boolean; updated_at: string }
