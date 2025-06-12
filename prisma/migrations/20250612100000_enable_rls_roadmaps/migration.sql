-- Enable RLS on roadmaps table
ALTER TABLE roadmaps ENABLE ROW LEVEL SECURITY;

-- Select policy: users can read their own roadmaps
CREATE POLICY "Users can view their own roadmaps" ON roadmaps
FOR SELECT USING (auth.uid() = owner_id);

-- Update policy: users can update their own roadmaps
CREATE POLICY "Users can update their own roadmaps" ON roadmaps 
FOR UPDATE USING (auth.uid() = owner_id);

-- Delete policy: users can delete their own roadmaps
CREATE POLICY "Users can delete their own roadmaps" ON roadmaps
FOR DELETE USING (auth.uid() = owner_id);