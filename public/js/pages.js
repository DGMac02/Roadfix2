// Page templates and initialization

const pages = {
    home: () => `
        <section class="hero-section">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center text-lg-start">
                        <h1 class="display-4 fw-bold mb-4">RoadFix</h1>
                        <p class="lead mb-4">Professional Pothole Detection and Repair Services</p>
                        <p class="mb-4">We specialize in identifying, assessing, and repairing potholes to ensure safe and smooth roads for our community.</p>
                        <div>
                            <button class="btn btn-primary btn-lg me-2 mb-2" onclick="navigateTo('login')">
                                <i class="bi bi-tools"></i> Order Services
                            </button>
                            <button class="btn btn-outline-primary btn-lg" onclick="document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })">
                                <i class="bi bi-info-circle"></i> Learn More
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center">
                        <div class="display-1 text-primary">
                            <i class="bi bi-road-lanes"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="py-5 bg-light">
            <div class="container">
                <h2 class="text-center mb-5">Why Choose RoadFix?</h2>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <i class="bi bi-person-check display-6 text-primary mb-3"></i>
                                <h5 class="card-title">Expert Team</h5>
                                <p class="card-text">Our certified technicians have years of experience in road maintenance and repair, ensuring professional service every time.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <i class="bi bi-lightning display-6 text-primary mb-3"></i>
                                <h5 class="card-title">Advanced Technology</h5>
                                <p class="card-text">We use cutting-edge detection and repair technologies to provide accurate assessments and long-lasting solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <i class="bi bi-clock-history display-6 text-primary mb-3"></i>
                                <h5 class="card-title">Quick Response</h5>
                                <p class="card-text">Emergency pothole repairs available 24/7 to address urgent safety concerns and minimize disruption.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 shadow-sm">
                            <div class="card-body">
                                <i class="bi bi-cash-coin display-6 text-primary mb-3"></i>
                                <h5 class="card-title">Competitive Pricing</h5>
                                <p class="card-text">Transparent pricing with no hidden fees. We provide detailed quotes and work with insurance companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5">
            <div class="container">
                <h2 class="text-center mb-5">Get In Touch</h2>
                <div class="row text-center">
                    <div class="col-md-4 mb-3">
                        <i class="bi bi-telephone display-5 text-primary mb-2"></i>
                        <h5>Call Us</h5>
                        <p><a href="tel:+27555123ROAD" class="text-decoration-none">(555) 123-ROAD</a></p>
                    </div>
                    <div class="col-md-4 mb-3">
                        <i class="bi bi-envelope display-5 text-primary mb-2"></i>
                        <h5>Email Us</h5>
                        <p><a href="mailto:info@roadfix.com" class="text-decoration-none">info@roadfix.com</a></p>
                    </div>
                    <div class="col-md-4 mb-3">
                        <i class="bi bi-geo-alt display-5 text-primary mb-2"></i>
                        <h5>Visit Us</h5>
                        <p>123 Road Way<br>Johannesburg, South Africa</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    login: () => `
        <div class="auth-container">
            <div class="card auth-card shadow-lg">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4">
                        <i class="bi bi-door-open"></i> Sign In
                    </h2>
                    <form id="loginForm" onsubmit="handleLoginSubmit(event)">
                        <div class="mb-3">
                            <label for="loginEmail" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="loginEmail" placeholder="Enter your email" required>
                        </div>
                        <div class="mb-3">
                            <label for="loginPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="loginPassword" placeholder="Enter your password" required>
                        </div>
                        <div id="loginError" class="alert alert-danger d-none" role="alert"></div>
                        <button type="submit" class="btn btn-primary w-100 btn-lg">Sign In</button>
                    </form>
                    <hr class="my-4">
                    <p class="text-center">
                        New here? <a href="#register" onclick="navigateTo('register'); return false;" class="text-decoration-none">Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    `,

    register: () => `
        <div class="auth-container">
            <div class="card auth-card shadow-lg">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4">
                        <i class="bi bi-person-plus"></i> Create Account
                    </h2>
                    <form id="registerForm" onsubmit="handleRegisterSubmit(event)">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="First name" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Last name" required>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="regEmail" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="regEmail" placeholder="Enter your email" required>
                        </div>
                        <div class="mb-3">
                            <label for="regPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="regPassword" placeholder="Create a password" required>
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm password" required>
                        </div>
                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input" id="agreeTerms" required>
                            <label class="form-check-label" for="agreeTerms">
                                I agree to the <a href="#" class="text-decoration-none">Terms of Service</a>
                            </label>
                        </div>
                        <div id="registerError" class="alert alert-danger d-none" role="alert"></div>
                        <button type="submit" class="btn btn-primary w-100 btn-lg">Create Account</button>
                    </form>
                    <hr class="my-4">
                    <p class="text-center">
                        Already have an account? <a href="#login" onclick="navigateTo('login'); return false;" class="text-decoration-none">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    `,

    dashboard: () => `
        <div class="container py-5">
            <h1 class="mb-4">Dashboard</h1>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body text-center">
                            <i class="bi bi-tools display-4 text-primary mb-3"></i>
                            <h5 class="card-title">Order Services</h5>
                            <p class="card-text">Request pothole repair services</p>
                            <button class="btn btn-primary" onclick="navigateTo('services')">View Services</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body text-center">
                            <i class="bi bi-clock-history display-4 text-primary mb-3"></i>
                            <h5 class="card-title">Service History</h5>
                            <p class="card-text">View your past repair requests</p>
                            <button class="btn btn-primary" onclick="navigateTo('history')">View History</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body text-center">
                            <i class="bi bi-map display-4 text-primary mb-3"></i>
                            <h5 class="card-title">Map View</h5>
                            <p class="card-text">See pothole locations</p>
                            <button class="btn btn-primary" onclick="navigateTo('map')">View Map</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    services: () => `
        <div class="container py-5">
            <h1 class="mb-4">Order Services</h1>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title mb-4">Request Pothole Repair</h5>
                            <form id="servicesForm" onsubmit="handleServiceSubmit(event)">
                                <div class="mb-3">
                                    <label for="location" class="form-label">Location</label>
                                    <input type="text" class="form-control" id="location" placeholder="Enter pothole location" required>
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">Description</label>
                                    <textarea class="form-control" id="description" rows="4" placeholder="Describe the pothole damage" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" id="phone" placeholder="Your contact number" required>
                                </div>
                                <div id="serviceError" class="alert alert-danger d-none" role="alert"></div>
                                <button type="submit" class="btn btn-primary btn-lg w-100">Submit Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    history: () => `
        <div class="container py-5">
            <h1 class="mb-4">Service History</h1>
            <div id="historyContent">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    `,

    map: () => `
        <div class="container-fluid py-5">
            <h1 class="mb-4">Pothole Map</h1>
            <div id="map" style="height: 500px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"></div>
        </div>
    `,

    profile: () => `
        <div class="container py-5">
            <h1 class="mb-4">User Profile</h1>
            <div class="row">
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Account Information</h5>
                            <p><strong>Email:</strong> ${appState.currentUser?.email}</p>
                            <p><strong>User ID:</strong> <code>${appState.currentUser?.id}</code></p>
                            <button class="btn btn-danger" onclick="logout()">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Page initialization functions
const pageInit = {
    map: initializeMap,
    history: loadServiceHistory
};

// Form handlers
function handleLoginSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    login(email, password);
}

function handleRegisterSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'danger');
        return;
    }

    register(email, password, firstName, lastName);
}

function handleServiceSubmit(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const phone = document.getElementById('phone').value;
    
    // TODO: Submit to Supabase
    showToast('Service request submitted successfully!', 'success');
    setTimeout(() => navigateTo('dashboard'), 2000);
}

// Load service history
async function loadServiceHistory() {
    const historyContent = document.getElementById('historyContent');
    
    try {
        // TODO: Fetch from Supabase
        historyContent.innerHTML = '<p class="text-center text-muted">No service history yet.</p>';
    } catch (error) {
        historyContent.innerHTML = '<div class="alert alert-danger">Failed to load service history</div>';
    }
}

// Initialize map
function initializeMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Create map centered on Johannesburg
    const map = L.map('map').setView([-26.2041, 28.0473], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // TODO: Load potholes from Supabase and add markers
}

console.log('✓ Pages module loaded');
