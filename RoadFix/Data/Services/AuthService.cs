using Microsoft.VisualBasic;


namespace Roadfix2.Services // Matches your folder name

{
    public class AuthService
    {
        private readonly Supabase.Client _supabase;
        public AuthService(Supabase.Client supabase)
    {
        _supabase = supabase;
    }

    public async Task<bool> RegisterUser(string email, string password, string firstName, string lastName)
{
    try
    {
        // Package the names into a dictionary so Supabase records them
        var metadata = new Dictionary<string, object>
        {
            { "first_name", firstName },
            { "last_name", lastName }
        };

        var options = new Supabase.Gotrue.SignUpOptions { Data = metadata };

        // Pass the options to the SignUp method
        var session = await _supabase.Auth.SignUp(email, password, options);
        
        return session?.User != null;
    }
    catch (Exception)
    {
        return false;
    }
}
        // ... your Supabase logic ...
    }
}