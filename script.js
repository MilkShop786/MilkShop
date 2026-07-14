// ====== GOOGLE FIREBASE CONFIGURATION (Abdul's Milkshop Project) ======
const firebaseConfig = {
  apiKey: "AIzaSyDXYIRG4LGC69AjZz4V3zPRowPTacBYifk",
  authDomain: "milkshop-879d6.firebaseapp.com",
  projectId: "milkshop-879d6",
  storageBucket: "milkshop-879d6.firebasestorage.app",
  messagingSenderId: "30971680215",
  appId: "1:30971680215:web:8e9ab68fa2f1dc3d69a792",
  measurementId: "G-ZF1T9VZGSY"
};

// Firebase SDK Imports (Modern v10 Modular Web)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Initialize Firebase App, Database & Storage
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Core Document Reference for Abdul's Storefront Configurations
const webConfigDocRef = doc(db, "milkshop_config", "storefront");

// Default Fallback Configurations (If database is empty initially)
let currentConfig = {
    adminPass: "milkshopadmin",
    storePhone: "923019215448",
    storeMapLink: "https://maps.app.goo.gl/Mc3MHHQwrt6v5DzV9",
    logoText: "Milk<span>Gallery</span>",
    logoGlow: "rgba(37, 99, 235, 0.5)",
    img1: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800",
    img2: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&q=80&w=800",
    img3: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800"
};

/* ==============================================
   LOAD DATA FROM FIREBASE (Real-time Device Sync)
   ============================================== */
window.addEventListener('DOMContentLoaded', async () => {
    // 1. Load Local Light/Dark Theme Preference
    const savedMainTheme = localStorage.getItem('mainTheme');
    if (savedMainTheme === 'dark') {
        document.getElementById('mainBody')?.classList.remove('light-theme');
        document.getElementById('mainBody')?.classList.add('dark-theme');
        const themeIcon = document.querySelector('#mainThemeBtn i');
        if (themeIcon) themeIcon.className = "fa-solid fa-sun";
    }

    // 2. Fetch Live Data from Cloud Firestore Database
    try {
        const docSnap = await getDoc(webConfigDocRef);
        if (docSnap.exists()) {
            currentConfig = { ...currentConfig, ...docSnap.data() };
        } else {
            // First run on a new database: Push default settings to the cloud
            await setDoc(webConfigDocRef, currentConfig);
        }
        applyConfigToUI();
    } catch (error) {
        console.error("Firebase Cloud connection error:", error);
        applyConfigToUI(); // Fallback to safe defaults if network issues occur
    }
});

// Update standard website elements dynamically
function applyConfigToUI() {
    // Logo & Branding
    const logoTxtEl = document.getElementById('dynamicLogoText');
    if (logoTxtEl) logoTxtEl.innerHTML = currentConfig.logoText;
    document.documentElement.style.setProperty('--glow-color', currentConfig.logoGlow);

    // Call Actions (WhatsApp & Location Map)
    const waBtn = document.getElementById('dynamicWaBtn');
    if (waBtn) {
        waBtn.href = `https://wa.me/${currentConfig.storePhone}?text=Assalam-o-Alaikum!%20Mujhe%20order%20karwana%20hai.`;
    }
    const locBtn = document.getElementById('dynamicLocBtn');
    if (locBtn) locBtn.href = currentConfig.storeMapLink;

    // Render Images (Synced across all screens!)
    if (document.getElementById('shopImg1')) document.getElementById('shopImg1').src = currentConfig.img1;
    if (document.getElementById('shopImg2')) document.getElementById('shopImg2').src = currentConfig.img2;
    if (document.getElementById('shopImg3')) document.getElementById('shopImg3').src = currentConfig.img3;
}

/* ==============================================
   THEME SWITCHER
   ============================================== */
window.toggleMainTheme = function() {
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
   ADMIN GATE PASS SYSTEM
   ============================================== */
window.verifyGatePassword = function() {
    const inputPass = document.getElementById('gatePassword').value;

    if (inputPass === currentConfig.adminPass) {
        document.getElementById('loginGate').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        
        // Auto-populate control panel with actual values from cloud
        document.getElementById('adminPhone').value = currentConfig.storePhone;
        document.getElementById('adminMapLink').value = currentConfig.storeMapLink;
        document.getElementById('adminLogoText').value = currentConfig.logoText;
    } else {
        alert("Ghalat Master Key! Access Denied.");
    }
}

window.lockDashboard = function() {
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('loginGate').classList.remove('hidden');
    document.getElementById('gatePassword').value = '';
}

/* ==============================================
   DATABASE MANAGEMENT & WRITING
   ============================================== */
async function updateFirestore(updatedFields) {
    try {
        currentConfig = { ...currentConfig, ...updatedFields };
        await setDoc(webConfigDocRef, currentConfig, { merge: true });
        alert("Cloud settings synced on all devices!");
    } catch (e) {
        alert("Syncing failed: " + e.message);
    }
}

window.saveContactAndSecurity = function() {
    const newPass = document.getElementById('adminNewPass').value;
    const newPhone = document.getElementById('adminPhone').value;
    const newMapLink = document.getElementById('adminMapLink').value;
    
    let updates = {};
    if (newPass.trim() !== "") updates.adminPass = newPass.trim();
    if (newPhone.trim() !== "") updates.storePhone = newPhone.trim();
    if (newMapLink.trim() !== "") updates.storeMapLink = newMapLink.trim();

    if (Object.keys(updates).length > 0) {
        updateFirestore(updates);
        document.getElementById('adminNewPass').value = '';
    } else {
        alert("Nothing to update.");
    }
}

window.saveBranding = function() {
    const textVal = document.getElementById('adminLogoText').value;
    const glowVal = document.getElementById('adminLogoGlow').value;

    if (textVal.trim() !== "") {
        updateFirestore({ logoText: textVal, logoGlow: glowVal });
    }
}

/* ==============================================
   CLOUD STORAGE - SECURE MULTI-IMAGE UPLOADER
   ============================================== */
window.publishImages = async function() {
    const f1 = document.getElementById('fileUpload1').files[0];
    const f2 = document.getElementById('fileUpload2').files[0];
    const f3 = document.getElementById('fileUpload3').files[0];

    if (!f1 && !f2 && !f3) {
        alert("Please select at least one picture to publish!");
        return;
    }

    const uploadBtn = document.querySelector('.btn-widget-success');
    uploadBtn.innerText = "Publishing to Cloud... Please wait";
    uploadBtn.disabled = true;

    let updates = {};

    try {
        if (f1) {
            const sRef1 = ref(storage, 'storefront/img1.jpg');
            await uploadBytes(sRef1, f1);
            updates.img1 = await getDownloadURL(sRef1);
        }
        if (f2) {
            const sRef2 = ref(storage, 'storefront/img2.jpg');
            await uploadBytes(sRef2, f2);
            updates.img2 = await getDownloadURL(sRef2);
        }
        if (f3) {
            const sRef3 = ref(storage, 'storefront/img3.jpg');
            await uploadBytes(sRef3, f3);
            updates.img3 = await getDownloadURL(sRef3);
        }

        await updateFirestore(updates);
        applyConfigToUI();
    } catch (e) {
        alert("Image upload failed: " + e.message);
    } finally {
        uploadBtn.innerText = "Publish Live Updates";
        uploadBtn.disabled = false;
        
        // Clear file inputs
        document.getElementById('fileUpload1').value = '';
        document.getElementById('fileUpload2').value = '';
        document.getElementById('fileUpload3').value = '';
    }
}
