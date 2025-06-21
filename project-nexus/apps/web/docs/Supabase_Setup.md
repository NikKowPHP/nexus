# ROO-AUDIT-TAG :: 1.2_cloud_infrastructure_setup.md :: Create Supabase Project
## Supabase Project Setup Guide

### Step 1: Create Project
1. Navigate to https://supabase.com
2. Click 'Sign in' or 'Sign up' and complete authentication
3. Click 'New project'
4. Select your organization
5. Enter 'Project Nexus' as the project name
6. Generate and securely save a database password
7. Select the nearest geographical region
8. Click 'Create new project'

### Step 2: Verification
- Confirm project appears in Supabase dashboard with status 'Active'
- Note the project URL and anon public key for environment variables

# ROO-AUDIT-TAG :: 1.2_cloud_infrastructure_setup.md :: END
# ROO-AUDIT-TAG :: 1.2_cloud_infrastructure_setup.md :: Configure Supabase API
## API Configuration Steps

### Step 1: Access API Settings
1. In Supabase dashboard, click gear icon for 'Project Settings'
2. Navigate to 'API' tab

### Step 2: Retrieve Credentials
1. Copy 'Project URL' value - this is your SUPABASE_URL
2. Copy 'anon public' key - this is your SUPABASE_KEY
3. Store these securely for environment variables

### Verification
- Both values should be alphanumeric strings
- SUPABASE_URL should start with https://
- SUPABASE_KEY should be ~50 characters long

# ROO-AUDIT-TAG :: 1.2_cloud_infrastructure_setup.md :: END
# ROO-AUDIT-TAG :: 1.2_cloud_infrastructure_setup.md :: Create Storage Bucket
## Storage Bucket Setup

### Step 1: Create Bucket
1. In Supabase dashboard, click 'Storage' in left menu
2. Click 'New bucket'
3. Enter 'assessment-uploads' as bucket name
4. Set to public access
5. Click 'Create bucket'

### Verification
- Bucket named 'assessment-uploads' appears in storage list
- Bucket status shows as 'Active'

# ROO-AUDIT-TAG :: 1.2_cloud_infrastructure_setup.md :: END