// Supabase Configuration
const SUPABASE_CONFIG = {
    url: 'https://your-project.supabase.co',  // Update with your Supabase URL
    key: 'your-anon-key'                       // Update with your Supabase anon key
};

// Initialize Supabase client
const supabase = window.supabase.createClient(
    SUPABASE_CONFIG.url,
    SUPABASE_CONFIG.key
);

console.log('✓ Supabase configured');
