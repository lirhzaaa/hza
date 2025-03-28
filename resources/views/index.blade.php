<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;700&family=Almarai:wght@400;700&family=Inter:wght@400;500&family=Baskervville:ital@0;1&display=swap" rel="stylesheet">
    <!-- AOS CSS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
<header>
  <nav class="navbar">
    <div class="logo">
      <a href="/">Lirhza</a>
    </div>
    <button class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#certificate">Certificate</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="cv">
      <a href="#" class="cv-btn">Download CV</a>
    </div>
  </nav>
</header>

<main>
<section id="home" class="home-section">
    <p class="greeting-text" data-aos="fade-down" data-aos-delay="100">👋, my name Azhril and I am</p>
    <h1 class="highlight" data-aos="fade-up" data-aos-delay="200">Front-End Developer</h1>
    <h1 class="outline-text" data-aos="fade-up" data-aos-delay="300">& UI/UX Designer</h1>
    <div class="profile-container" data-aos="zoom-in" data-aos-delay="400">
        <div class="profile-image">
            <div class="image-overlay"></div>
            <img src="{{ asset('image/profile.png') }}" alt="Profile" class="profile-bw" id="profile-img">
            <img src="{{ asset('image/profile_color.png') }}" alt="Profile Color" class="profile-color">
        </div>
    </div>
</section>

    <section id="about" class="about-section">
        <p class="section-title" data-aos="fade-down">About Me</p>
        <p class="section-subtitle" data-aos="fade-up">Here is my about page</p>
        <div class="about-content">
            <div class="about-text" data-aos="fade-right">
                <p class="title">Hello</p>
                <p class="title">I'm Azhril</p>
                <p>My full name is Muhammad Azhril Nurmaulidan, but people usually call me Azhril or Lirhza with the name Azhril in reverse. I am currently studying at SMK Wikrama Bogor, majoring in Software and Game Development (PPLG). I am currently a Front-End Developer and UI/UX Designer and am focusing on learning to be a Mobile Developer.</p>
            </div>
            <div class="about-image" data-aos="fade-left">
                <img src="{{ asset('image/about.jpg') }}" alt="About Me">
            </div>
        </div>
    </section>

    <section id="skills" class="skills-section">
        <p class="section-title" data-aos="fade-down">My Skills</p>
        <div class="skills-container">
            <div class="skills-row-container">
                <div class="wrapper">
                    <div class="skills-row marquee-left">
                        <div class="skill"><img src="{{ asset('image/html.png') }}" alt="HTML">HTML</div>
                        <div class="skill"><img src="{{ asset('image/css.png') }}" alt="CSS">CSS</div>
                        <div class="skill"><img src="{{ asset('image/javascript.png') }}" alt="JavaScript">JavaScript</div>
                        <div class="skill"><img src="{{ asset('image/php.png') }}" alt="PHP">PHP</div>
                        <div class="skill"><img src="{{ asset('image/react.png') }}" alt="React">React</div>
                        <div class="skill"><img src="{{ asset('image/vue.png') }}" alt="Vue.js">Vue.js</div>
                        <div class="skill"><img src="{{ asset('image/nextjs.png') }}" alt="Next.js">Next.js</div>
                        <div class="skill"><img src="{{ asset('image/nuxtjs.png') }}" alt="Nuxt.js">Nuxt.js</div>
                    </div>
                    <div class="skills-row marquee-left" aria-hidden="true">
                        <div class="skill"><img src="{{ asset('image/html.png') }}" alt="HTML">HTML</div>
                        <div class="skill"><img src="{{ asset('image/css.png') }}" alt="CSS">CSS</div>
                        <div class="skill"><img src="{{ asset('image/javascript.png') }}" alt="JavaScript">JavaScript</div>
                        <div class="skill"><img src="{{ asset('image/php.png') }}" alt="PHP">PHP</div>
                        <div class="skill"><img src="{{ asset('image/react.png') }}" alt="React">React</div>
                        <div class="skill"><img src="{{ asset('image/vue.png') }}" alt="Vue.js">Vue.js</div>
                        <div class="skill"><img src="{{ asset('image/nextjs.png') }}" alt="Next.js">Next.js</div>
                        <div class="skill"><img src="{{ asset('image/nuxtjs.png') }}" alt="Nuxt.js">Nuxt.js</div>
                    </div>
                </div>
            </div>
            <div class="skills-row-container">
                <div class="wrapper">
                    <div class="skills-row marquee-right">
                        <div class="skill"><img src="{{ asset('image/python.png') }}" alt="Python">Python</div>
                        <div class="skill"><img src="{{ asset('image/firebase.png') }}" alt="Firebase">Firebase</div>
                        <div class="skill"><img src="{{ asset('image/graphql.png') }}" alt="GraphQL">GraphQL</div>
                        <div class="skill"><img src="{{ asset('image/vite.png') }}" alt="Vite">Vite</div>
                        <div class="skill"><img src="{{ asset('image/express.png') }}" alt="Express">Express</div>
                    </div>
                    <div class="skills-row marquee-right" aria-hidden="true">
                        <div class="skill"><img src="{{ asset('image/python.png') }}" alt="Python">Python</div>
                        <div class="skill"><img src="{{ asset('image/firebase.png') }}" alt="Firebase">Firebase</div>
                        <div class="skill"><img src="{{ asset('image/graphql.png') }}" alt="GraphQL">GraphQL</div>
                        <div class="skill"><img src="{{ asset('image/vite.png') }}" alt="Vite">Vite</div>
                        <div class="skill"><img src="{{ asset('image/express.png') }}" alt="Express">Express</div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section id="certificate" class="certificate-section">
        <p class="section-title" data-aos="fade-down">Certificate</p>
        <p class="section-subtitle" data-aos="fade-up">Here are the certificates I have</p>
        <div class="certificate-container">
            <button class="nav-btn prev" onclick="prevCertificate()" data-aos="fade-right">
                <i class="fas fa-angle-left"></i>
            </button>
            <div class="certificate-frame" data-aos="zoom-in">
                <img id="certificate-img" src="{{ asset('image/sertifikat/sertifikat_1.png') }}" alt="Certificate">
            </div>
            <button class="nav-btn next" onclick="nextCertificate()" data-aos="fade-left">
                <i class="fas fa-angle-right"></i>
            </button>
        </div>
    </section>

    <section id="project" class="project-section">
        <p class="section-title" data-aos="fade-down">Project</p>
        <div class="construction-container" data-aos="zoom-in">
            <div class="construction-animation">
                <div class="gear-box">
                    <div class="gear gear-1"></div>
                    <div class="gear gear-2"></div>
                    <div class="gear gear-3"></div>
                </div>
            </div>
            <h2 class="construction-text">Halaman Project Sedang Dalam Perbaikan</h2>
            <p>Mohon maaf atas ketidaknyamannya, mohon bersabar😽</p>
        </div>
    </section>

    <section id="contact" class="contact-section">
        <p class="section-title" data-aos="fade-down">Contact</p>
        <div class="construction-container" data-aos="zoom-in">
            <div class="contact-container">
                <form id="contactForm" onsubmit="sendEmail(event)">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <section class="comment-section">
        <p class="section-title" data-aos="fade-down">Comments</p>
        <div class="comment-container" data-aos="fade-up">
            <form id="commentForm" class="comment-form" onsubmit="addComment(event)">
                <div class="form-group">
                    <input type="text" id="commentName" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <div class="image-upload">
                        <label for="profileImage">
                            <i class="fas fa-user-circle"></i>
                            <span>Add Profile Image</span>
                        </label>
                        <input type="file" id="profileImage" accept="image/*">
                        <div id="imagePreview"></div>
                    </div>
                </div>
                <div class="form-group">
                    <textarea id="commentText" placeholder="Your Comment" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Post Comment</button>
            </form>
            <div id="comments-list" class="comments-list">
                <!-- Comments will be added here dynamically -->
            </div>
            <div class="comments-footer" style="display: none;">
                <button id="loadMoreBtn" class="load-more-btn">Load More Comments</button>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">
                <h2>Lirhza</h2>
                <p>Front-End Developer & UI/UX Designer</p>
            </div>
            <div class="footer-links">
                <h3>Quick Links</h3>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#certificate">Certificate</a>
                <a href="#project">Project</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="footer-social">
                <h3>Follow Me</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Lirhza. All rights reserved.</p>
        </div>
    </footer>

<!-- Image Modal -->
<div id="imageModal" class="modal">
    <span class="close-btn">&times;</span>
    <img id="modalImage" class="modal-content">
</div>

</main>
<!-- SweetAlert2 -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<!-- AOS JS -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    function sendEmail(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate email sending
        Swal.fire({
            icon: 'success',
            title: 'Email Sent',
            text: `Thank you, ${name}. Your message has been sent.`
        });

        document.getElementById('contactForm').reset();
    }

    function addComment(event) {
        event.preventDefault();
        const name = document.getElementById('commentName').value;
        const commentText = document.getElementById('commentText').value;

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}</strong>: ${commentText} <button onclick="deleteComment(this)">Delete</button>`;

        document.getElementById('comments-list').appendChild(commentElement);
        document.getElementById('commentForm').reset();
    }

    function deleteComment(button) {
        const comment = button.parentElement;
        comment.remove();
    }
</script>
<script src="js/style.js"></script>
</body>
</html>
