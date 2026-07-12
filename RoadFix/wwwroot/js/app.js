// Initialize Supabase
const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_KEY = 'your-supabase-key';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Page definitions
const pages = {
    home: `
        <div class="hero-section">
            <div class="container">
                <h1 class="display-4 fw-bold text-center mb-4">RoadFix</h1>
                <p class="lead text-center mb-4">Professional Pothole Detection and Repair Services</p>
                <p class="text-center mb-5">We specialize in identifying, assessing, and repairing potholes to ensure safe and smooth roads for our community.</p>
                <div class="text-center">
                    <button class="btn btn-primary btn-lg me-3" onclick="navigate('login')">Request Services</button>
                    <a href="#contact" class="btn btn-success btn-lg me-3">Get a Quote</a>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <section id="about" class="mb-5">
                <h2 class="text-center mb-4">Why Choose RoadFix?</h2>
                <div class="row">
                    <div class="col-md-6">
                        <h4>Expert Team</h4>
                        <p>Our certified technicians have years of experience in road maintenance and repair, ensuring professional service every time.</p>
                    </div>
                    <div class="col-md-6">
                        <h4>Advanced Technology</h4>
                        <p>We use cutting-edge detection and repair technologies to provide accurate assessments and long-lasting solutions.</p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6">
                        <h4>Quick Response</h4>
                        <p>Emergency pothole repairs available 24/7 to address urgent safety concerns and minimize disruption.</p>
                    </div>
                    <div class="col-md-6">
                        <h4>Competitive Pricing</h4>
                        <p>Transparent pricing with no hidden fees. We provide detailed quotes and work with insurance companies.</p>
                    </div>
                </div>
            </section>

            <section id="contact" class="text-center py-5">
                <h2 class="mb-4">Contact Us Today</h2>
                <p class="mb-4">Ready to fix those potholes? Get in touch for a free assessment and quote.</p>
                <div class="row">
                    <div class="col-md-4">
                        <i class="bi bi-telephone display-6 text-primary mb-2"></i>
                        <h5>Call Us</h5>
                        <p>(555) 123-ROAD</p>
                    </div>
                    <div class="col-md-4">
                        <i class="bi bi-envelope display-6 text-primary mb-2"></i>
                        <h5>Email Us</h5>
                        <p>info@roadfix.com</p>
                    </div>
                    <div class="col-md-4">
                        <i class="bi bi-geo-alt display-6 text-primary mb-2"></i>
                        <h5>Visit Us</h5>
                        <p>123 Road Way<br>City, State 12345</p>
                    </div>
                </div>
            </section>
        </div>
    `,
    
    login: `
        <div class="login-page-wrapper">
            <div class="login-card">
                <div class="login-header">
                    <h3>Sign In</h3>
                    <p class="text-muted">Access your dashboard</p>
                </div>

                <form id="loginForm" onsubmit="handleLogin(event)">
                    <div class="form-floating mb-3">
                        <input type="email" id="loginEmail" class="form-control" placeholder="Email" required>
                        <label for="loginEmail">Email address</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" id="loginPassword" class="form-control" placeholder="Password" required>
                        <label for="loginPassword">Password</label>
                    </div>

                    <div id="loginError" class="alert alert-danger" role="alert" style="display: none;"></div>

                    <button type="submit" class="btn btn-primary w-100 btn-lg mb-3">Log In</button>

                    <div class="footer-links text-center">
                        <p>New here? <a href="#" onclick="navigate('register'); return false;">Create an account</a></p>
                    </div>

                    <div class="footer-links text-center">
                        <p><a href="#">Forgot Password</a></p>
                    </div>
                </form>
            </div>
        </div>
    `,

    register: `
        <div class="register-page-wrapper">
            <div class="register-card">
                <div class="register-header">
                    <h3>Create Account</h3>
                    <p class="text-muted">Join us today to get started</p>
                </div>

                <form id="registerForm" onsubmit="handleRegister(event)">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" id="regFirstName" class="form-control" placeholder="First Name" required>
                                <label for="regFirstName">First Name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" id="regLastName" class="form-control" placeholder="Last Name" required>
                                <label for="regLastName">Last Name</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" id="regEmail" class="form-control" placeholder="Email" required>
                        <label for="regEmail">Email address</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" id="regPassword" class="form-control" placeholder="Password" required>
                        <label for="regPassword">Password</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" id="regConfirmPassword" class="form-control" placeholder="Confirm Password" required>
                        <label for="regConfirmPassword">Confirm Password</label>
                    </div>

                    <div class="form-check mb-3">
                        <input type="checkbox" id="regTerms" class="form-check-input" required>
                        <label class="form-check-label" for="regTerms">
                            I agree to the <a href="#">Terms of Service</a>
                        </label>
                    </div>

                    <div id="registerError" class="alert alert-danger" role="alert" style="display: none;"></div>

                    <button type="submit" class="btn btn-primary w-100 btn-lg mb-3">Register</button>

                    <div class="footer-links text-center">
                        <p>Already have an account? <a href="#" onclick="navigate('login'); return false;">Sign in here</a></p>
                    </div>
                </form>
            </div>
        </div>
    `,

    dashboard: `
        <div class="container py-5">
            <h1 class="mb-4">Dashboard</h1>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card hero-bg fade-in-box">
                        <div class="card-body">
                            <a href="#" onclick="navigate('services'); return false;" class="main-wrapper">
                                <h5 class="card-title">Order Services</h5>
                                <p class="card-text">Request pothole repair services</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card hero-bg fade-in-box">
                        <div class="card-body">
                            <a href="#" onclick="navigate('history'); return false;" class="main-wrapper">
                                <h5 class="card-title">Service History</h5>
                                <p class="card-text">View your past repairs</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card hero-bg fade-in-box">
                        <div class="card-body">
                            <a href="#" onclick="navigate('map'); return false;" class="main-wrapper">
                                <h5 class="card-title">View Map</h5>
                                <p class="card-text">See pothole locations</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section class="text-center py-5">
                <h2 class="mb-4">Contact Us Today</h2>
                <p class="mb-4">Ready to fix those potholes? Get in touch for a free assessment and quote.</p>
                <div class="row">
                    <div class="col-md-4">
                        <i class="bi bi-telephone display-6 text-primary mb-2"></i>
                        <h5>Call Us</h5>
                        <p>(555) 123-ROAD</p>
                    </div>
                    <div class="col-md-4">
                        <i class="bi bi-envelope display-6 text-primary mb-2"></i>
                        <h5>Email Us</h5>
                        <p>info@roadfix.com</p>
                    </div>
                    <div class="col-md-4">
                        <i class="bi bi-geo-alt display-6 text-primary mb-2"></i>
                        <h5>Visit Us</h5>
                        <p>123 Road Way<br>City, State 12345</p>
                    </div>
                </div>
            </section>
        </div>
    `,

    services: `
        <div class="container py-5">
            <h1 class="mb-4">Order Services</h1>
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Request Pothole Repair</h5>
                            <form id="servicesForm" onsubmit="handleServiceOrder(event)">
                                <div class="form-floating mb-3">
                                    <input type="text" id="serviceLocation" class="form-control" placeholder="Location" required>
                                    <label for="serviceLocation">Pothole Location</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <textarea id="serviceDescription" class="form-control" placeholder="Description" style="height: 100px" required></textarea>
                                    <label for="serviceDescription">Problem Description</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="tel" id="servicePhone" class="form-control" placeholder="Phone" required>
                                    <label for="servicePhone">Phone Number</label>
                                </div>

                                <div id="serviceError" class="alert alert-danger" role="alert" style="display: none;"></div>

                                <button type="submit" class="btn btn-primary w-100">Submit Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    history: `
        <div class="container py-5">
            <h1 class="mb-4">Service History</h1>
            <div id="historyContent">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    `,

    map: `
        <div class="container py-5">
            <h1 class="mb-4">Pothole Map</h1>
            <div id="map" style="height: 500px; width: 100%; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></div>
        </div>
    `
};

// Navigation function
function navigate(page) {
    const appContainer = document.getElementById('app');
    
    // Check authentication for protected pages
    const protectedPages = ['dashboard', 'services', 'history', 'map'];
    if (protectedPages.includes(page) && !isAuthenticated()) {
        navigate('login');
        return;
    }

    if (pages[page]) {
        appContainer.innerHTML = pages[page];
        updateNavigation(page);
        
        // Initialize page-specific functionality
        if (page === 'map') {
            setTimeout(initializeMap, 100);
        } else if (page === 'history') {
            loadServiceHistory();
        }
    } else {
        appContainer.innerHTML = '<div class="container py-5"><h1>Page not found</h1></div>';
    }
    window.scrollTo(0, 0);
}

// Update navigation menu
function updateNavigation(currentPage) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
    });
}

// Load initial page
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    updateAuthNav();
    navigate('home');
});
