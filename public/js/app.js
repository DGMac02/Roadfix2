// App State
const appState = {
    currentPage: 'home',
    currentUser: null,
    isAuthenticated: false
};

// Navigation function
function navigateTo(page) {
    // Check if page requires authentication
    const protectedPages = ['dashboard', 'services', 'history', 'profile'];
    
    if (protectedPages.includes(page) && !appState.isAuthenticated) {
        navigateTo('login');
        return;
    }

    appState.currentPage = page;
    renderPage(page);
    window.scrollTo(0, 0);
}

// Render page based on current page
function renderPage(page) {
    const appContent = document.getElementById('app-content');
    
    if (typeof pages[page] === 'function') {
        appContent.innerHTML = pages[page]();
        
        // Call page-specific initialization
        if (typeof pageInit[page] === 'function') {
            pageInit[page]();
        }
    } else {
        appContent.innerHTML = '<div class="container py-5"><div class="alert alert-danger">Page not found</div></div>';
    }
}

// Initialize app
async function initializeApp() {
    console.log('🚀 Initializing RoadFix App...');
    
    // Check if Supabase is available
    if (typeof supabase !== 'undefined' && supabase.auth) {
        try {
            // Check if user is already logged in
            const { data: { session } } = await supabase.auth.getSession();
            
            if (session) {
                appState.currentUser = session.user;
                appState.isAuthenticated = true;
                console.log('✓ User logged in:', session.user.email);
            } else {
                appState.isAuthenticated = false;
                console.log('✓ No active session');
            }
        } catch (error) {
            console.warn('⚠️ Supabase error:', error.message);
            appState.isAuthenticated = false;
        }
    } else {
        console.warn('⚠️ Supabase not configured. Update config.js with your credentials.');
    }
    
    updateAuthNav();
    navigateTo('home');
}

// Update auth navigation
function updateAuthNav() {
    const navAuthContainer = document.getElementById('navAuthContainer');
    const navDashboard = document.getElementById('navDashboard');
    
    if (appState.isAuthenticated && appState.currentUser) {
        navDashboard.style.display = 'block';
        navAuthContainer.innerHTML = `
            <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-circle"></i> ${appState.currentUser.email}
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#profile" onclick="navigateTo('profile'); return false;">Profile</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" onclick="logout(); return false;">Logout</a></li>
                </ul>
            </div>
        `;
    } else {
        navDashboard.style.display = 'none';
        navAuthContainer.innerHTML = `
            <li class="nav-item">
                <a class="nav-link" href="#login" onclick="navigateTo('login'); return false;">Login</a>
            </li>
        `;
    }
}

// Show loading state
function showLoading(message = 'Loading...') {
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = `
        <div class="container py-5 text-center">
            <div class="spinner-border text-primary mb-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p>${message}</p>
        </div>
    `;
}

// Show error state
function showError(message) {
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = `
        <div class="container py-5">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <i class="bi bi-exclamation-triangle"></i> ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        </div>
    `;
}

console.log('✓ App initialized');
