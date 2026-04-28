-- 1. Create a schema (namespace) for the application
CREATE SCHEMA IF NOT EXISTS app;

-- 2. Set search path so tables are created inside 'app' schema
SET search_path TO app;

-- 3. Visits table (tracks page views)
CREATE TABLE IF NOT EXISTS visits (
    id SERIAL PRIMARY KEY,
    visit_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    ip_address INET
);

-- Index on visit_time for range queries
CREATE INDEX IF NOT EXISTS idx_visits_time ON visits (visit_time);

-- 4. Items table
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index on name for fast lookups
CREATE INDEX IF NOT EXISTS idx_items_name ON items (name);

-- 5. Optional: categories table (to demonstrate foreign key)
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) UNIQUE NOT NULL
);

-- Add category_id to items (foreign key)
ALTER TABLE items ADD COLUMN IF NOT EXISTS category_id INTEGER REFERENCES categories(id);

-- 6. Index on foreign key column
CREATE INDEX IF NOT EXISTS idx_items_category ON items (category_id);

-- 7. Insert some default categories
INSERT INTO categories (category_name) VALUES ('General'), ('Important') ON CONFLICT (category_name) DO NOTHING;

-- 8. Create a view for recent visits (last 24 hours)
CREATE OR REPLACE VIEW recent_visits AS
SELECT id, visit_time, user_agent
FROM visits
WHERE visit_time > NOW() - INTERVAL '1 day'
ORDER BY visit_time DESC;

-- 9. Function to automatically update 'updated_at' timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 10. Trigger to call the function on update of items
DROP TRIGGER IF EXISTS trigger_update_items_updated_at ON items;
CREATE TRIGGER trigger_update_items_updated_at
BEFORE UPDATE ON items
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 11. Grant privileges (adjust user/role as needed)
-- GRANT USAGE ON SCHEMA app TO app_user;
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA app TO app_user;
-- GRANT USAGE ON ALL SEQUENCES IN SCHEMA app TO app_user;
