// Authentication functions

async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) throw error;

        // Store user session
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        localStorage.setItem('authToken', data.session.access_token);
        
        updateAuthNav();
        navigate('dashboard');
    } catch (error) {
        errorDiv.textContent = 'Incorrect email or password.';
        errorDiv.style.display = 'block';
        console.error('Login error:', error);
    }
}

async function handleRegister(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('regFirstName').value;
    const lastName = document.getElementById('regLastName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const errorDiv = document.getElementById('registerError');

    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match.';
        errorDiv.style.display = 'block';
        return;
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName
                }
            }
        });

        if (error) throw error;

        // Store user session
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        if (data.session) {
            localStorage.setItem('authToken', data.session.access_token);
        }
        
        updateAuthNav();
        navigate('login');
    } catch (error) {
        errorDiv.textContent = error.message || 'Registration failed. Please try again.';
        errorDiv.style.display = 'block';
        console.error('Registration error:', error);
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    updateAuthNav();
    navigate('home');
}

function isAuthenticated() {
    return localStorage.getItem('currentUser') !== null;
}

function updateAuthNav() {
    const navAuthContainer = document.getElementById('navAuthContainer');
    const navDashboard = document.getElementById('navDashboard');
    
    if (isAuthenticated()) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        navAuthContainer.innerHTML = `
            <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    ${user.email}
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#" onclick="logout(); return false;">Logout</a></li>
                </ul>
            </div>
        `;
        navDashboard.style.display = 'block';
    } else {
        navAuthContainer.innerHTML = `<li class="nav-item"><a class="nav-link" href="#" onclick="navigate('login')">Login</a></li>`;
        navDashboard.style.display = 'none';
    }
}

async function handleServiceOrder(event) {
    event.preventDefault();
    
    const location = document.getElementById('serviceLocation').value;
    const description = document.getElementById('serviceDescription').value;
    const phone = document.getElementById('servicePhone').value;
    const errorDiv = document.getElementById('serviceError');

    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        const { error } = await supabase
            .from('service_requests')
            .insert([
                {
                    user_id: currentUser.id,
                    location: location,
                    description: description,
                    phone: phone,
                    status: 'pending',
                    created_at: new Date().toISOString()
                }
            ]);

        if (error) throw error;

        alert('Service request submitted successfully!');
        navigate('dashboard');
    } catch (error) {
        errorDiv.textContent = 'Failed to submit service request. Please try again.';
        errorDiv.style.display = 'block';
        console.error('Service order error:', error);
    }
}

async function loadServiceHistory() {
    const historyContent = document.getElementById('historyContent');
    
    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        const { data, error } = await supabase
            .from('service_requests')
            .select('*')
            .eq('user_id', currentUser.id)
            .order('created_at', { ascending: false });

        if (error) throw error;

        if (data.length === 0) {
            historyContent.innerHTML = '<p class="text-center">No service history yet.</p>';
            return;
        }

        let html = '<div class="table-responsive"><table class="table"><thead><tr><th>Location</th><th>Status</th><th>Date</th><th>Description</th></tr></thead><tbody>';
        
        data.forEach(request => {
            const date = new Date(request.created_at).toLocaleDateString();
            html += `<tr><td>${request.location}</td><td><span class="badge bg-info">${request.status}</span></td><td>${date}</td><td>${request.description}</td></tr>`;
        });
        
        html += '</tbody></table></div>';
        historyContent.innerHTML = html;
    } catch (error) {
        historyContent.innerHTML = '<div class="alert alert-danger">Failed to load service history.</div>';
        console.error('Load history error:', error);
    }
}
