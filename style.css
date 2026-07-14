/* ROOT VARIABLES: ROYAL BLUE & CLEAN WHITE COMBINATION */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --primary-blue: #2563eb;       /* Royal Blue */
    --hover-blue: #1d4ed8;
    --light-bg: #f8fafc;           /* Milk/Slate White */
    --card-white: #ffffff;
    --text-dark: #0f172a;          /* Rich Charcoal */
    --text-muted: #64748b;         /* Slate Gray */
    --border-color: #e2e8f0;
    --glow-color: rgba(37, 99, 235, 0.4);
}

/* Dark Mode Alternate Option */
.dark-theme {
    --light-bg: #0b0f19;
    --card-white: #131a26;
    --text-dark: #f8fafc;
    --text-muted: #94a3b8;
    --border-color: #1e293b;
}

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--light-bg);
    color: var(--text-dark);
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.hidden {
    display: none !important;
}

/* NAVBAR */
.navbar {
    background-color: rgba(var(--card-white), 0.85);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 1.5rem;
}

/* Glowing Logo & Pulse Effect */
.brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.brand-icon {
    background: var(--primary-blue);
    color: #ffffff;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.3rem;
    box-shadow: 0 0 20px var(--glow-color);
    animation: pulseGlow 2.5s infinite alternate;
}

@keyframes pulseGlow {
    0% { box-shadow: 0 0 10px var(--glow-color); }
    100% { box-shadow: 0 0 25px var(--glow-color); }
}

.brand-name {
    font-weight: 800;
    font-size: 1.5rem;
    letter-spacing: -0.5px;
}

.brand-name span {
    color: var(--primary-blue);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Light / Dark Mode Icon Button */
.theme-btn {
    background: var(--card-white);
    border: 1px solid var(--border-color);
    color: var(--text-dark);
    font-size: 1.1rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}

.theme-btn:hover {
    border-color: var(--primary-blue);
    color: var(--primary-blue);
}

.loc-btn {
    text-decoration: none;
    background-color: var(--primary-blue);
    color: #ffffff;
    padding: 0.6rem 1.3rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: 0.3s;
}

.loc-btn:hover {
    background-color: var(--hover-blue);
    transform: translateY(-1px);
}

/* HERO SECTION */
.hero {
    text-align: center;
    margin: 5rem auto;
    max-width: 750px;
}

.badge {
    background: rgba(37, 99, 235, 0.1);
    color: var(--primary-blue);
    border: 1px solid rgba(37, 99, 235, 0.2);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 0.4rem 1.2rem;
    border-radius: 50px;
}

.hero h1 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 1.8rem 0 1.2rem;
    letter-spacing: -1px;
}

.serif-text {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: var(--primary-blue);
}

.hero p {
    color: var(--text-muted);
    font-size: 1.15rem;
}

/* PRODUCT CARDS GRID */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-bottom: 5rem;
}

.product-card {
    background-color: var(--card-white);
    border: 1px solid var(--border-color);
    border-radius: 1.25rem;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary-blue);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.08);
}

.img-wrapper {
    height: 250px;
    overflow: hidden;
}

.img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.product-card:hover .img-wrapper img {
    transform: scale(1.08);
}

.card-details {
    padding: 1.8rem;
}

.tag {
    color: var(--primary-blue);
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
}

.card-details h3 {
    font-size: 1.45rem;
    margin: 0.6rem 0;
}

.card-details p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* WHATSAPP CTA */
.cta-section {
    background: var(--card-white);
    border: 1px solid var(--border-color);
    border-radius: 2rem;
    padding: 4.5rem 2.5rem;
    text-align: center;
    margin-bottom: 6rem;
}

.cta-card h2 {
    font-size: 2.2rem;
    margin-bottom: 0.75rem;
    letter-spacing: -0.5px;
}

.cta-card p {
    color: var(--text-muted);
    margin-bottom: 2.5rem;
    font-size: 1.05rem;
}

.wa-btn {
    text-decoration: none;
    background: linear-gradient(135deg, #10b981, #059669);
    color: #ffffff;
    font-weight: 700;
    padding: 1.1rem 2.5rem;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
    transition: 0.3s;
}

.wa-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(16, 185, 129, 0.5);
}

/* FOOTER */
.footer {
    border-top: 1px solid var(--border-color);
    padding: 2.5rem 1.5rem;
    text-align: center;
    background-color: var(--card-white);
}

.footer p {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* ==============================================
   SCREEN 1: SECURITY GATEWAY DESIGN
   ============================================== */
.admin-body {
    background-color: #f1f5f9;
}

.gate-overlay {
    position: fixed;
    inset: 0;
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
}

.gate-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 1.5rem;
    padding: 3.5rem 2.5rem;
    text-align: center;
    width: 100%;
    max-width: 430px;
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
}

.gate-header-art {
    width: 80px;
    height: 80px;
    background-color: rgba(37, 99, 235, 0.1);
    color: var(--primary-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    font-size: 2.5rem;
}

.gate-card h2 {
    font-size: 1.75rem;
    color: #0f172a;
    margin-bottom: 0.5rem;
    font-weight: 800;
}

.gate-card p {
    color: #64748b;
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
    line-height: 1.5;
}

.input-container {
    position: relative;
    margin-bottom: 1.5rem;
}

.input-container i {
    position: absolute;
    left: 1.1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
}

.input-container input {
    width: 100%;
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 0.75rem;
    padding: 0.9rem 1rem 0.9rem 2.8rem;
    color: #0f172a;
    font-size: 1rem;
    font-family: inherit;
    transition: 0.3s;
}

.input-container input:focus {
    outline: none;
    border-color: var(--primary-blue);
    background-color: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.btn-gate {
    width: 100%;
    background-color: var(--primary-blue);
    color: #ffffff;
    font-weight: 700;
    padding: 0.95rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
}

.btn-gate:hover {
    background-color: var(--hover-blue);
    transform: translateY(-1px);
}

.back-to-store {
    display: inline-block;
    margin-top: 1.5rem;
    color: #64748b;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.3s;
}

.back-to-store:hover {
    color: var(--primary-blue);
}

/* ==============================================
   SCREEN 2: MODERN DASHBOARD DESIGN
   ============================================== */
.admin-dashboard-container {
    display: grid;
    grid-template-columns: 280px 1fr;
    min-height: 100vh;
    background-color: #f1f5f9;
    color: #1e293b;
}

.admin-sidebar {
    background-color: #ffffff;
    border-right: 1px solid #e2e8f0;
    padding: 2.5rem 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sidebar-brand {
    font-size: 1.4rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: #0f172a;
}

.sidebar-brand i {
    color: var(--primary-blue);
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 3.5rem;
}

.sidebar-nav a {
    text-decoration: none;
    color: #475569;
    font-weight: 700;
    padding: 0.85rem 1.2rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.sidebar-nav a.active {
    background-color: #eff6ff;
    color: var(--primary-blue);
}

.logout-btn {
    background-color: #ef4444;
    color: white;
    border: none;
    border-radius: 0.75rem;
    padding: 0.85rem;
    cursor: pointer;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.admin-main {
    padding: 3.5rem;
}

.admin-topbar {
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 1.5rem;
    margin-bottom: 3rem;
}

.admin-topbar h2 {
    font-weight: 800;
    color: #0f172a;
    font-size: 1.8rem;
}

.topbar-sub {
    color: #64748b;
    font-size: 0.95rem;
    margin-top: 0.25rem;
}

/* WIDGETS layout */
.admin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2.5rem;
}

.admin-widget {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 1.25rem;
    padding: 2.2rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
}

.full-width-widget {
    grid-column: 1 / -1;
}

.widget-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.widget-icon {
    font-size: 1.4rem;
    color: var(--primary-blue);
}

.widget-header h3 {
    font-size: 1.25rem;
    color: #0f172a;
}

.input-field {
    margin-bottom: 1.5rem;
}

.input-field label {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    color: #334155;
}

.input-field input, .input-field select {
    width: 100%;
    padding: 0.85rem;
    border: 1px solid #cbd5e1;
    background-color: #f8fafc;
    border-radius: 0.6rem;
    color: #0f172a;
    font-family: inherit;
    font-size: 0.95rem;
}

.input-field input:focus {
    outline: none;
    border-color: var(--primary-blue);
}

.upload-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
}

.btn-widget-primary, .btn-widget-success {
    width: 100%;
    color: white;
    border: none;
    border-radius: 0.6rem;
    padding: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.95rem;
    transition: 0.2s;
}

.btn-widget-primary { background-color: var(--primary-blue); }
.btn-widget-primary:hover { background-color: var(--hover-blue); }
.btn-widget-success { background-color: #10b981; }
.btn-widget-success:hover { background-color: #059669; }

/* Responsive Adjustments */
@media (max-width: 900px) {
    .admin-dashboard-container { grid-template-columns: 1fr; }
    .admin-sidebar { border-right: none; border-bottom: 1px solid #cbd5e1; padding: 1.5rem; }
    .sidebar-nav { margin-top: 1rem; flex-direction: row; overflow-x: auto; }
    .admin-main { padding: 1.5rem; }
}
@media (max-width: 600px) {
    .hero h1 { font-size: 2.3rem; }
}
