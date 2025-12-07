// -- Enable necessary extensions
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

// -- Projects table
// CREATE TABLE projects (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     name VARCHAR(255) NOT NULL,
//     description TEXT,
//     owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
//     settings JSONB DEFAULT '{}',
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
// );

// -- Files table
// CREATE TABLE files (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
//     path VARCHAR(1000) NOT NULL,
//     name VARCHAR(255) NOT NULL,
//     content TEXT,
//     language VARCHAR(50),
//     is_directory BOOLEAN DEFAULT FALSE,
//     parent_id UUID REFERENCES files(id) ON DELETE CASCADE,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//     UNIQUE(project_id, path)
// );

// -- Collaborators table
// CREATE TABLE collaborators (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
//     user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
//     role VARCHAR(20) DEFAULT 'viewer' CHECK (role IN ('owner', 'editor', 'viewer')),
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//     UNIQUE(project_id, user_id)
// );

// -- AI chat history table
// CREATE TABLE ai_conversations (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
//     user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
//     messages JSONB DEFAULT '[]',
//     context JSONB DEFAULT '{}',
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
// );

// -- User preferences table
// CREATE TABLE user_preferences (
//     user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
//     theme VARCHAR(20) DEFAULT 'dark',
//     editor_settings JSONB DEFAULT '{}',
//     ai_settings JSONB DEFAULT '{}',
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
// );

// -- Presence tracking for realtime collaboration
// CREATE TABLE presence (
//     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//     project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
//     user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
//     file_id UUID REFERENCES files(id) ON DELETE CASCADE,
//     cursor_position JSONB,
//     last_seen TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
//     UNIQUE(project_id, user_id)
// );

// -- Create indexes for better performance
// CREATE INDEX idx_files_project_id ON files(project_id);
// CREATE INDEX idx_files_parent_id ON files(parent_id);
// CREATE INDEX idx_collaborators_project_id ON collaborators(project_id);
// CREATE INDEX idx_collaborators_user_id ON collaborators(user_id);
// CREATE INDEX idx_ai_conversations_project_id ON ai_conversations(project_id);
// CREATE INDEX idx_presence_project_id ON presence(project_id);

// -- Row Level Security Policies

// -- Projects: Users can see projects they own or collaborate on
// ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

// CREATE POLICY "Users can view own projects" ON projects
//     FOR SELECT USING (
//         owner_id = auth.uid() OR
//         id IN (SELECT project_id FROM collaborators WHERE user_id = auth.uid())
//     );

// CREATE POLICY "Users can create own projects" ON projects
//     FOR INSERT WITH CHECK (owner_id = auth.uid());

// CREATE POLICY "Users can update own projects" ON projects
//     FOR UPDATE USING (owner_id = auth.uid());

// CREATE POLICY "Users can delete own projects" ON projects
//     FOR DELETE USING (owner_id = auth.uid());

// -- Files: Users can access files in projects they have access to
// ALTER TABLE files ENABLE ROW LEVEL SECURITY;

// CREATE POLICY "Users can view files in accessible projects" ON files
//     FOR SELECT USING (
//         project_id IN (
//             SELECT id FROM projects WHERE owner_id = auth.uid()
//             UNION
//             SELECT project_id FROM collaborators WHERE user_id = auth.uid()
//         )
//     );

// CREATE POLICY "Users can create files in accessible projects" ON files
//     FOR INSERT WITH CHECK (
//         project_id IN (
//             SELECT id FROM projects WHERE owner_id = auth.uid()
//             UNION
//             SELECT project_id FROM collaborators WHERE user_id = auth.uid() AND role IN ('owner', 'editor')
//         )
//     );

// CREATE POLICY "Users can update files in accessible projects" ON files
//     FOR UPDATE USING (
//         project_id IN (
//             SELECT id FROM projects WHERE owner_id = auth.uid()
//             UNION
//             SELECT project_id FROM collaborators WHERE user_id = auth.uid() AND role IN ('owner', 'editor')
//         )
//     );

// CREATE POLICY "Users can delete files in accessible projects" ON files
//     FOR DELETE USING (
//         project_id IN (
//             SELECT id FROM projects WHERE owner_id = auth.uid()
//             UNION
//             SELECT project_id FROM collaborators WHERE user_id = auth.uid() AND role IN ('owner', 'editor')
//         )
//     );

// -- Collaborators: Project owners can manage collaborators
// ALTER TABLE collaborators ENABLE ROW LEVEL SECURITY;

// CREATE POLICY "Users can view collaborators in accessible projects" ON collaborators
//     FOR SELECT USING (
//         project_id IN (
//             SELECT id FROM projects WHERE owner_id = auth.uid()
//             UNION
//             SELECT project_id FROM collaborators WHERE user_id = auth.uid()
//         )
//     );

// CREATE POLICY "Project owners ca
// n manage collaborators" ON collaborators
//     FOR ALL USING (
//         project_id IN (SELECT id FROM projects WHERE owner_id = auth.uid())
//     );

// -- AI Conversations: Users can access their own conversations
// ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;

// CREATE POLICY "Users can access own AI conversations" ON ai_conversations
//     FOR ALL USING (user_id = auth.uid());

// -- User preferences: Users can only access their own preferences
// ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

// CREATE POLICY "Users can access own preferences" ON user_preferences
//     FOR ALL USING (user_id = auth.uid());

// -- Presence: Users can see presence in projects they have access to
// ALTER TABLE presence ENABLE ROW LEVEL SECURITY;

// CREATE POLICY "Users can view presence in accessible projects" ON presence
//     FOR SELECT USING (
//         project_id IN (
//             SELECT id FROM projects WHERE owner_id = auth.uid()
//             UNION
//             SELECT project_id FROM collaborators WHERE user_id = auth.uid()
//         )
//     );

// CREATE POLICY "Users can update own presence" ON presence
//     FOR ALL USING (user_id = auth.uid());

// -- Functions for updating timestamps
// CREATE OR REPLACE FUNCTION update_updated_at_column()
// RETURNS TRIGGER AS $$
// BEGIN
//     NEW.updated_at = NOW();
//     RETURN NEW;
// END;
// $$ LANGUAGE plpgsql;

// -- Triggers for auto-updating timestamps
// CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
//     FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

// CREATE TRIGGER update_files_updated_at BEFORE UPDATE ON files
//     FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

// CREATE TRIGGER update_ai_conversations_updated_at BEFORE UPDATE ON ai_conversations
//     FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

// CREATE TRIGGER update_user_preferences_updated_at BEFORE UPDATE ON user_preferences
//     FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();