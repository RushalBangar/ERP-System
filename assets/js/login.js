import { supabase } from '../../config/db-config.js';

// --- 1. DARK MODE TOGGLE ---
const themeBtn = document.getElementById('theme-btn');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    document.body.classList.add('dark-mode');
    themeBtn.innerHTML = "☀️";
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.innerHTML = isDark ? "☀️" : "🌙";
    localStorage.setItem('darkMode', isDark);
});

// --- 2. PASSWORD EYE TOGGLE ---
const eyeBtn = document.getElementById('eye-btn');
const passInput = document.getElementById('prn');
if (eyeBtn && passInput) {
    eyeBtn.addEventListener('click', () => {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            eyeBtn.innerHTML = "🔒";
        } else {
            passInput.type = 'password';
            eyeBtn.innerHTML = "👁️";
        }
    });
}

// --- 3. TAB SWITCHING LOGIC ---
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginFormEl = document.getElementById('login-form');
const registerFormEl = document.getElementById('register-form');

if (tabLogin && tabRegister) {
    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        loginFormEl.classList.remove('hidden');
        registerFormEl.classList.add('hidden');
    });

    tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        registerFormEl.classList.remove('hidden');
        loginFormEl.classList.add('hidden');
    });
}

// --- 4. REGISTER PASSWORD EYE TOGGLE ---
const regEyeBtn = document.getElementById('reg-eye-btn');
const regPassInput = document.getElementById('reg-prn');
if (regEyeBtn && regPassInput) {
    regEyeBtn.addEventListener('click', () => {
        if (regPassInput.type === 'password') {
            regPassInput.type = 'text';
            regEyeBtn.innerHTML = "🔒";
        } else {
            regPassInput.type = 'password';
            regEyeBtn.innerHTML = "👁️";
        }
    });
}

// --- 5. LOGIN LOGIC ---
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const card = document.getElementById('login-card');
const overlay = document.getElementById('bg-overlay');
const bgImage = document.getElementById('bg-image');
const navbar = document.getElementById('navbar');

if (loginForm) {
    // Clear previous sessions
    localStorage.removeItem('user_data');
    supabase.auth.signOut();

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailVal = document.getElementById("email").value.trim();
        const prnVal = document.getElementById("prn").value.trim().toUpperCase();

        const originalText = loginBtn.innerText;
        loginBtn.innerText = "Verifying...";
        loginBtn.style.opacity = "0.7";

        try {
            const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                email: emailVal,
                password: prnVal,
            });

            if (authError) {
                alert("Invalid Email or Password (PRN)!");
                throw authError;
            }

            const { data: studentData, error: studentError } = await supabase
                .from('students')
                .select('*')
                .eq('email', emailVal)
                .single();

            if (studentError || !studentData) {
                alert("Account found, but profile data is missing in the database.");
                throw new Error("Profile data not found");
            }

            localStorage.setItem("user_data", JSON.stringify(studentData));

            overlay.classList.add("clear-view");
            navbar.style.opacity = "0";
            
            setTimeout(() => {
                card.classList.add("entering-college");
                bgImage.classList.add("zoom-in");
            }, 200);

            setTimeout(() => {
                window.location.href = "pages/dashboard.html"; // Path updated!
            }, 1400);

        } catch (err) {
            console.error("Login failed:", err.message);
            loginBtn.innerText = originalText;
            loginBtn.style.opacity = "1";
        }
    });
}

// --- 6. REGISTRATION LOGIC ---
const registerForm = document.getElementById('register-form');
const registerBtn = document.getElementById('register-btn');

if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nameVal = document.getElementById("reg-name").value.trim();
        const branchVal = document.getElementById("reg-branch").value;
        const yearVal = document.getElementById("reg-year").value;
        const emailVal = document.getElementById("reg-email").value.trim();
        const prnVal = document.getElementById("reg-prn").value.trim().toUpperCase();

        const originalText = registerBtn.innerText;
        registerBtn.innerText = "Creating Account...";
        registerBtn.style.opacity = "0.7";

        try {
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email: emailVal,
                password: prnVal,
            });

            if (authError) {
                alert("Sign Up Failed: " + authError.message);
                throw authError;
            }

            const newStudent = {
                email: emailVal,
                prn_number: prnVal,
                full_name: nameVal,
                branch: branchVal,
                year: yearVal,
                attendance_percent: 0,
                fees_pending: 0,
                cgpa: 0
            };

            const { error: insertError } = await supabase
                .from('students')
                .insert([newStudent]);

            if (insertError) {
                alert("Profile Creation Error: " + insertError.message);
                throw insertError;
            }

            localStorage.setItem("user_data", JSON.stringify(newStudent));

            overlay.classList.add("clear-view");
            navbar.style.opacity = "0";
            
            setTimeout(() => {
                card.classList.add("entering-college");
                bgImage.classList.add("zoom-in");
            }, 200);

            setTimeout(() => {
                window.location.href = "pages/dashboard.html"; // Path updated!
            }, 1400);

        } catch (err) {
            console.error("Registration failed:", err.message);
            registerBtn.innerText = originalText;
            registerBtn.style.opacity = "1";
        }
    });
}
