
-- Tighten profiles insert to only allow the trigger (service role) or authenticated users for their own profile
DROP POLICY "System inserts profiles" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Contact submissions INSERT with true is intentional for anonymous form submissions - no change needed
-- But let's add basic rate limiting by requiring non-empty fields (already enforced by NOT NULL constraints)
