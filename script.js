// Default Password
const DEFAULT_ACCESS_PASS = "milkshopadmin";

window.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Password
    if (!localStorage.getItem('adminGatePass')) {
        localStorage.setItem('adminGatePass', DEFAULT_ACCESS_PASS);
    }

    // 2. Load Local Theme Settings for Main Website
    const savedMainTheme = localStorage.getItem('mainTheme');
    if (savedMainTheme === 'dark') {
        document.getElementById('mainBody')?.classList.remove('light-theme');
        document.getElementById('mainBody')?.classList.add('dark-theme');
        const themeIcon = document.querySelector('#mainThemeBtn i');
        if (themeIcon) themeIcon.className = "fa-solid fa-sun";
    }

    // 3. Load Branding (Logo, Glow & Inputs)
    const savedLogo = localStorage.getItem('logoText');
    const savedGlow = localStorage.getItem('logoGlowColor');
    if (savedLogo) {
        const logoTxtEl = document.getElementById('dynamicLogoText');
        if (logoTxtEl) logoTxtEl.innerHTML = savedLogo;
    }
    if (savedGlow) {
        document.documentElement.style.setProperty('--glow-color', savedGlow);
    }

    // 4. Load Contacts
    const savedPhone = localStorage.getItem('storePhone');
    const savedMap = localStorage.getItem('storeMapLink');
    if (savedPhone) {
        const waBtn = document.getElementById('dynamicWaBtn');
        if (waBtn) waBtn.href = `https://wa.me/${savedPhone}?text=Assalam-o-Alaikum!%20Mujhe%20order%20karwana%20hai.`;
    }
    if (savedMap) {
        const locBtn = document.getElementById('dynamicLocBtn');
        if (locBtn) locBtn.href = savedMap;
    }

    // 5. Load Images
    const img1 = localStorage.getItem('storedImg1');
    const img2 = localStorage.getItem('storedImg2');
    const img3 = localStorage.getItem('storedImg3');

    if (img1 && document.getElementById('shopImg1')) document.getElementById('shopImg1').src = img1;
    if (img2 && document.getElementById('shopImg2')) document.getElementById('shopImg2').src = img2;
    if (img3 && document.getElementById('shopImg3')) document.getElementById('shopImg3').src = img3;
});

/* ==============================================
   MAIN WEBSITE THEME SWITCHER
   ============================================== */
function toggleMainTheme() {
    const mainBody = document.getElementById('mainBody');
    const themeIcon = document.querySelector('#mainThemeBtn i');

    if (mainBody.classList.contains('light-theme')) {
        mainBody.classList.remove('light-theme');
        mainBody.classList.add('dark-theme');
        themeIcon.className = "fa-solid fa-sun";
        localStorage.setItem('mainTheme', 'dark');
    } else {
        mainBody.classList.remove('dark-theme');
        mainBody.classList.add('light-theme');
        themeIcon.className = "fa-solid fa-moon";
        localStorage.setItem('mainTheme', 'light');
    }
}

/* ==============================================
   ADMIN GATE PASS CODE (Screen 1 Logic)
   ============================================== */
function verifyGatePassword() {
    const inputPass = document.getElementById('gatePassword').value;
    const actualPass = localStorage.getItem('adminGatePass');

    if (inputPass === actualPass) {
        document.getElementById('loginGate').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        
        // Populate inputs
        document.getElementById('adminPhone').value = localStorage.getItem('storePhone') || "923019215448";
        document.getElementById('adminMapLink').value = localStorage.getItem('storeMapLink') || "https://maps.app.goo.gl/Mc3MHHQwrt6v5DzV9";
        document.getElementById('adminLogoText').value = localStorage.getItem('logoText') || "Milk<span>Gallery</span>";
    } else {
        alert("Ghalat Master Key! Access Denied.");
    }
}

function lockDashboard() {
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('loginGate').classList.remove('hidden');
    document.getElementById('gatePassword').value = '';
}

/* ==============================================
   ADMIN UPDATE OPERATIONS (Screen 2 Logic)
   ============================================== */

function saveContactAndSecurity() {
    const newPass = document.getElementById('adminNewPass').value;
    const newPhone = document.getElementById('adminPhone').value;
    const newMapLink = document.getElementById('adminMapLink').value;

    if (newPass.trim() !== "") {
        localStorage.setItem('adminGatePass', newPass);
    }
    if (newPhone.trim() !== "") {
        localStorage.setItem('storePhone', newPhone.trim());
    }
    if (newMapLink.trim() !== "") {
        localStorage.setItem('storeMapLink', newMapLink.trim());
    }

    alert("Settings saved successfully!");
    document.getElementById('adminNewPass').value = '';
}

function saveBranding() {
    const textVal = document.getElementById('adminLogoText').value;
    const glowVal = document.getElementById('adminLogoGlow').value;

    if (textVal.trim() !== "") {
        localStorage.setItem('logoText', textVal);
    }
    localStorage.setItem('logoGlowColor', glowVal);

    alert("Branding Customization updated successfully!");
}

function publishImages() {
    const f1 = document.getElementById('fileUpload1').files[0];
    const f2 = document.getElementById('fileUpload2').files[0];
    const f3 = document.getElementById('fileUpload3').files[0];

    let p1 = new Promise((res) => {
        if (f1) {
            const r = new FileReader(); r.onload = (e) => { localStorage.setItem('storedImg1', e.target.result); res(); }; r.readAsDataURL(f1);
        } else res();
    });

    let p2 = new Promise((res) => {
        if (f2) {
            const r = new FileReader(); r.onload = (e) => { localStorage.setItem('storedImg2', e.target.result); res(); }; r.readAsDataURL(f2);
        } else res();
    });

    let p3 = new Promise((res) => {
        if (f3) {
            const r = new FileReader(); r.onload = (e) => { localStorage.setItem('storedImg3', e.target.result); res(); }; r.readAsDataURL(f3);
        } else res();
    });

    Promise.all([p1, p2, p3]).then(() => {
        alert("Live pictures published successfully!");
    });
}
