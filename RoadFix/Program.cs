using RoadFix.Components;
using Supabase;
using Roadfix2.Services; // Add this at the top


var builder = WebApplication.CreateBuilder(args);
// Add this after builder.Services.AddScoped<Supabase.Client>(...)
builder.Services.AddScoped<AuthService>();



// Add Supabase Client to Dependency Injection

    var url = builder.Configuration["SupabaseUrl"];
    var key = builder.Configuration["SupabaseKey"];

    
     //2. Validate them IMMEDIATELY (outside the service registration)
    if (string.IsNullOrEmpty(url) || string.IsNullOrEmpty(key))
    {
       throw new Exception("Supabase URL or Key is missing from appsettings.json");
    }
    

    builder.Services.AddSingleton(provider =>
     new Supabase.Client(url, key, new Supabase.SupabaseOptions 
    { 
        AutoConnectRealtime = true 
    }));
    

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}


app.UseHttpsRedirection();


app.UseAntiforgery();

app.MapStaticAssets();
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
