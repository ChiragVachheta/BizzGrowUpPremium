/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `business_name` (text, not null) — the name of the business enquiring
  - `phone` (text, not null) — contact phone number
  - `email` (text, nullable) — optional contact email
  - `requirements` (text, not null) — what the business needs
  - `created_at` (timestamptz, default now()) — when the submission was received
2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth marketing site: the public form must be able to INSERT new submissions.
- Only INSERT is allowed for anon/authenticated — no SELECT/UPDATE/DELETE from the client,
  so visitors cannot read or tamper with other people's submissions.
3. Important notes
- The site has no sign-in screen, so policies must allow the `anon` role to insert.
- Reading submissions is done from the Supabase dashboard (service role), not from the site.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  phone text NOT NULL,
  email text,
  requirements text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to INSERT new submissions only.
DROP POLICY IF EXISTS "anon_insert_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
