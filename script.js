// Firebase Configuration (Replace with your own Firebase details)
const firebaseConfig = {
    apiKey: "AIzaSyAOXdRp9Yq5tvjikcMcST7GP7TZb79dAVE",
    authDomain: "539149267109-a5mmcae1q42orqrphl7iuc7igaga89ml.apps.googleusercontent.com",
    projectId: "ff-unban-100k",
    storageBucket: "gs://ff-unban-100k.appspot.com",
    messagingSenderId: "noreply@ff-unban-100k.firebaseapp.com",
    appId: "1:539149267109:android:dc0591670988cc3b085d4c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Elements
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const closeModal = document.getElementById("closeModal");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const buyBtn = document.querySelector(".buy-btn");

// Show modal
loginBtn.addEventListener("click", () => {
    authModal.style.display = "block";
});

// Close modal
closeModal.addEventListener("click", () => {
    authModal.style.display = "none";
});

// Sign Up
signUpBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Registration Successful!");
            authModal.style.display = "none";
        })
        .catch(error => alert(error.message));
});

// Login
signInBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful!");
            authModal.style.display = "none";
        })
        .catch(error => alert(error.message));
});

// Logout
logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
        alert("Logged Out!");
    });
});

// Authentication State Check
auth.onAuthStateChanged(user => {
    if (user) {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "block";
        buyBtn.disabled = false;
    } else {
        loginBtn.style.display = "block";
        logoutBtn.style.display = "none";
        buyBtn.disabled = true;
    }
});
