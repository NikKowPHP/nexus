-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Select policy: users can read their own data
CREATE POLICY "Users can view their own data" ON users
FOR SELECT USING (auth.uid() = id);

-- Update policy: users can update their own data
CREATE POLICY "Users can update their own data" ON users
FOR UPDATE USING (auth.uid() = id);

-- Delete policy: users can delete their own data
CREATE POLICY "Users can delete their own data" ON users
FOR DELETE USING (auth.uid() = id);