// Authentication Functions

async function login(email, password) {
    if (typeof supabase === 'undefined' || !supabase.auth) {
        showToast('Supabase is not configured. Please update config.js', 'danger');
        return;
    }

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;

        appState.currentUser = data.user;
        appState.isAuthenticated = true;
        updateAuthNav();
        navigateTo('dashboard');
        
        showToast('Login successful!', 'success');
    } catch (error) {
        console.error('Login error:', error);
        showToast(error.message || 'Login failed', 'danger');
    }
}

async function register(email, password, firstName, lastName) {
    if (typeof supabase === 'undefined' || !supabase.auth) {
        showToast('Supabase is not configured. Please update config.js', 'danger');
        return;
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName
                }
            }
        });

        if (error) throw error;

        showToast('Registration successful! Please check your email.', 'success');
        setTimeout(() => navigateTo('login'), 2000);
    } catch (error) {
        console.error('Registration error:', error);
        showToast(error.message || 'Registration failed', 'danger');
    }
}

async function logout() {
    if (typeof supabase === 'undefined' || !supabase.auth) {
        appState.currentUser = null;
        appState.isAuthenticated = false;
        updateAuthNav();
        navigateTo('home');
        return;
    }

    try {
        const { error } = await supabase.auth.signOut();
        
        if (error) throw error;

        appState.currentUser = null;
        appState.isAuthenticated = false;
        updateAuthNav();
        navigateTo('home');
        
        showToast('Logged out successfully', 'info');
    } catch (error) {
        console.error('Logout error:', error);
        showToast('Logout failed', 'danger');
    }
}

// Toast notification
function showToast(message, type = 'info') {
    const toastHtml = `
        <div class="toast align-items-center text-bg-${type} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;

    const toastContainer = document.createElement('div');
    toastContainer.className = 'position-fixed bottom-0 end-0 p-3';
    toastContainer.style.zIndex = '11';
    toastContainer.innerHTML = toastHtml;

    document.body.appendChild(toastContainer);

    const toast = new bootstrap.Toast(toastContainer.querySelector('.toast'));
    toast.show();

    setTimeout(() => {
        toastContainer.remove();
    }, 3000);
}

console.log('✓ Auth module loaded');
