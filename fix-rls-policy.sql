-- Fix RLS policy for contacts table
-- Run this in your Supabase SQL Editor

-- First, drop the existing policy if it exists
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contacts;

-- Create a new, more explicit policy for inserting contacts
CREATE POLICY "Enable insert for anonymous users" ON public.contacts FOR
INSERT
    TO anon,
    authenticated
WITH
    CHECK (true);

-- Also allow service role to do anything (for your API)
CREATE POLICY "Enable all for service role" ON public.contacts TO service_role USING (true)
WITH
    CHECK (true);

-- Verify the table structure
SELECT
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE
    table_name = 'contacts'
    AND table_schema = 'public';