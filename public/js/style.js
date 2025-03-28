document.addEventListener("DOMContentLoaded", function () {
    // Ensure SweetAlert2 is loaded
    if (typeof Swal === 'undefined') {
        console.error('SweetAlert2 is not loaded!');
        return;
    }

    // 🔥 Fungsi untuk Menampilkan Notifikasi "Akses Gagal!"
    function showNotification(message) {
        Swal.fire({
            icon: "error",
            title: "Akses Gagal!",
            text: message,
            showConfirmButton: false,
            timer: 2000, // Notifikasi hilang setelah 2 detik
            background: "#222",
            color: "#fff",
            customClass: {
                popup: 'swal-popup-above-aos' // Add custom class for z-index
            }
        });
    }

    // 🔒 Blokir Klik Kanan
    // document.addEventListener("contextmenu", function (event) {
    //     event.preventDefault();
    //     showNotification("Klik kanan tidak diizinkan!");
    // });

    // 🔒 Blokir Semua Shortcut Berbahaya
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "F12" ||  // F12
            (event.ctrlKey && ["u", "p", "s", "h", "j", "i"].includes(event.key.toLowerCase())) || // Ctrl+U, Ctrl+P, Ctrl+S, Ctrl+H, Ctrl+J, Ctrl+I
            (event.ctrlKey && event.shiftKey && ["i", "c", "j", "u", "s"].includes(event.key.toLowerCase())) // Ctrl+Shift+I/C/J/U/S
        ) {
            event.preventDefault();
            showNotification("Akses tidak diizinkan!");
            return false;
        }
    });

    // 🔥 Blokir "View Source" di Tab Baru (Ctrl + U)
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key.toLowerCase() === "u") { // Ctrl+U
            event.preventDefault();
            document.body.innerHTML = ""; // Kosongkan halaman
            setTimeout(() => location.reload(), 1000); // Reload setelah 1 detik
            showNotification("Akses ke source code ditolak!");
            return false;
        }
    });

    // 🔥 Blokir Print (Ctrl + P)
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key.toLowerCase() === "p") { // Ctrl+P
            event.preventDefault();
            showNotification("Mencetak halaman ini tidak diizinkan!");
            return false;
        }
    });

    // 🔥 Blokir Save (Ctrl + S)
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key.toLowerCase() === "s") { // Ctrl+S
            event.preventDefault();
            showNotification("Menyimpan halaman ini tidak diizinkan!");
            return false;
        }
    });

    // 🔒 Blokir Screenshot (PrintScreen)
    document.addEventListener("keyup", function (event) {
        if (event.key === "PrintScreen") {
            event.preventDefault();
            showNotification("Screenshot tidak diizinkan!");
            return false;
        }
    });

    // 🔥 Blokir Developer Console (Jika Dibuka, Auto Redirect ke Halaman Home)
    // setInterval(function () {
    //     if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
    //         showNotification("Developer Console terdeteksi!");
    //         window.location.href = "#home"; // Auto redirect ke Home jika Inspect dibuka
    //     }
    // }, 500);

    // Profile Image Animation
    const profileContainer = document.querySelector('.profile-image');
    const colorImage = document.querySelector('.profile-color');

    profileContainer.addEventListener('mousemove', (e) => {
        const rect = profileContainer.getBoundingClientRect();
        // Calculate relative position based on the colored image's position
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        // Update clip-path with percentage values for better responsiveness
        colorImage.style.clipPath = `circle(80px at ${x}% ${y}%)`;
        colorImage.style.opacity = '1';
    });

    profileContainer.addEventListener('mouseleave', () => {
        colorImage.style.clipPath = 'circle(0% at 50% 50%)';
        colorImage.style.opacity = '0';
    });

    // Initialize certificate
    updateCertificate();

    // Load saved comments when page loads
    loadComments();
});

// About image animation
document.addEventListener('DOMContentLoaded', function() {
    const aboutImage = document.querySelector('.about-image img');
    const aboutSection = document.querySelector('.about-section');

    // Maximum rotation angle (in degrees)
    const maxRotation = 15;

    aboutSection.addEventListener('mousemove', (e) => {
        if (!aboutImage) return;

        const rect = aboutSection.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center (in percentage)
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * maxRotation;
        const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * maxRotation;

        // Apply the rotation transformation
        aboutImage.style.transform = `
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
            scale3d(1.05, 1.05, 1.05)
        `;
    });

    // Reset image position when mouse leaves the section
    aboutSection.addEventListener('mouseleave', () => {
        if (!aboutImage) return;
        
        aboutImage.style.transform = `
            rotateX(0deg) 
            rotateY(0deg)
            scale3d(1, 1, 1)
        `;
    });
});

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-btn");
const certificateImg = document.getElementById("certificate-img");

// Open modal
certificateImg.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modal.classList.add('fade-in');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close modal functions
function closeModal() {
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove('fade-out', 'fade-in');
        document.body.style.overflow = ''; // Restore scrolling
    }, 300);
}

// Close with button
closeBtn.addEventListener("click", closeModal);

// Close with Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});

// Close when clicking outside the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Certificate section
const certificates = [
    'image/sertifikat/sertifikat_1.png',
    'image/sertifikat/sertifikat_2.jpg',
    'image/sertifikat/sertifikat_3.png',
    'image/sertifikat/sertifikat_4.png',
    'image/sertifikat/sertifikat_5.png'
];
let currentIndex = 0;

function updateCertificate() {
    const img = document.getElementById("certificate-img");
    img.style.opacity = '0';
    
    setTimeout(() => {
        img.src = certificates[currentIndex];
        img.style.opacity = '1';
    }, 300);
}

function prevCertificate() {
    currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    updateCertificate();
}

function nextCertificate() {
    currentIndex = (currentIndex + 1) % certificates.length;
    updateCertificate();
}

// Email handling
function sendEmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'service_qxhgbfv', // Replace with your EmailJS service ID
            template_id: 'template_f0uy5za', // Replace with your EmailJS template ID
            user_id: 'Qmq9XcpAHvFMhNsYX', // Replace with your EmailJS user ID
            template_params: {
                from_name: name,
                from_email: email,
                to_email: 'mhmdazhrilnmldn@gmail.com',
                message: message
            }
        })
    })
    .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
            timer: 2000,
            showConfirmButton: false
        });
        document.getElementById('contactForm').reset();
    })
    .catch(() => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later.'
        });
    });
}

// Comment handling with localStorage
let commentsPage = 1;
const commentsPerPage = 10;

function loadComments(page = 1) {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    const commentsList = document.getElementById('comments-list');
    const commentsFooter = document.querySelector('.comments-footer');
    
    if (page === 1) {
        commentsList.innerHTML = '';
    }
    
    const start = (page - 1) * commentsPerPage;
    const end = start + commentsPerPage;
    const commentsToShow = savedComments.slice(start, end);
    
    commentsToShow.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.prepend(commentElement);
        
        const timeLeft = comment.expiryTime - Date.now();
        if (timeLeft > 0) {
            setTimeout(() => deleteComment(comment.id), timeLeft);
        } else {
            deleteComment(comment.id);
        }
    });
    
    // Show/hide load more button
    commentsFooter.style.display = savedComments.length > page * commentsPerPage ? 'block' : 'none';
}

function createCommentElement(comment) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.dataset.id = comment.id;
    commentElement.innerHTML = `
        <div class="comment-avatar">
            <img src="${comment.profileImage || 'image/default-avatar.png'}" alt="Profile">
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <span class="comment-author">${comment.name}</span>
                <span class="comment-date">${new Date(comment.date).toLocaleString()}</span>
            </div>
            <div class="comment-text">${comment.text}</div>
        </div>
    `;
    return commentElement;
}

function addComment(event) {
    event.preventDefault();
    
    const name = document.getElementById('commentName').value;
    const text = document.getElementById('commentText').value;
    const imageInput = document.getElementById('profileImage');
    const date = Date.now();
    const id = 'comment-' + date;
    const expiryTime = date + 60000;
    
    let profileImage = 'image/default-avatar.png';
    
    // Handle image upload
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage = e.target.result;
            saveComment();
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        saveComment();
    }
    
    function saveComment() {
        const comment = { id, name, text, date, expiryTime, profileImage };
        
        const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
        savedComments.push(comment);
        localStorage.setItem('comments', JSON.stringify(savedComments));
        
        // Reset form and reload comments
        document.getElementById('commentForm').reset();
        document.getElementById('imagePreview').style.display = 'none';
        commentsPage = 1;
        loadComments();
        
        setTimeout(() => deleteComment(id), 60000);
    }
}

// Add image preview functionality
document.getElementById('profileImage').addEventListener('change', function(e) {
    const preview = document.getElementById('imagePreview');
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(this.files[0]);
    }
});

// Load more comments button handler
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    commentsPage++;
    loadComments(commentsPage);
});

function deleteComment(id) {
    // Remove from localStorage
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    const filteredComments = savedComments.filter(comment => comment.id !== id);
    localStorage.setItem('comments', JSON.stringify(filteredComments));
    
    // Remove from DOM with animation
    const commentElement = document.querySelector(`.comment[data-id="${id}"]`);
    if (commentElement) {
        commentElement.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => commentElement.remove(), 500);
    }
}

// Add fade out animation for comments
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger?.contains(e.target) && !navLinks?.contains(e.target)) {
            navLinks?.classList.remove('active');
            hamburger?.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});