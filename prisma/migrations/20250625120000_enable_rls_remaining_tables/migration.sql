-- ROO-AUDIT-TAG :: 1.2_cloud_infrastructure_setup.md :: Enable RLS for remaining tables

-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Users can only view their own profile
CREATE POLICY "Users can view their own profile" ON users
FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update their own profile" ON users
FOR UPDATE USING (auth.uid() = id);

-- Enable RLS on nodes table
ALTER TABLE nodes ENABLE ROW LEVEL SECURITY;

-- Users can view nodes from roadmaps they own
CREATE POLICY "Users can view nodes from their roadmaps" ON nodes
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM roadmaps 
    WHERE roadmaps.id = nodes.roadmap_id 
    AND roadmaps.owner_id = auth.uid()
  )
);

-- Enable RLS on node_progress table
ALTER TABLE node_progress ENABLE ROW LEVEL SECURITY;

-- Users can only access their own progress
CREATE POLICY "Users can access their own progress" ON node_progress
FOR ALL USING (user_id = auth.uid());

-- Enable RLS on streaks table
ALTER TABLE streaks ENABLE ROW LEVEL SECURITY;

-- Users can only access their own streaks
CREATE POLICY "Users can access their own streaks" ON streaks
FOR ALL USING (user_id = auth.uid());

-- Enable RLS on xps table
ALTER TABLE xps ENABLE ROW LEVEL SECURITY;

-- Users can only access their own XP
CREATE POLICY "Users can access their own XP" ON xps
FOR ALL USING (user_id = auth.uid());

-- Enable RLS on badges table
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;

-- Users can only access their own badges
CREATE POLICY "Users can access their own badges" ON badges
FOR ALL USING (user_id = auth.uid());

-- Enable RLS on habits table
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;

-- Users can only access their own habits
CREATE POLICY "Users can access their own habits" ON habits
FOR ALL USING (user_id = auth.uid());