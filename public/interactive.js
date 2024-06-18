// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');

    if (name.value.trim() === '') {
        valid = false;
        alert('Name is required');
    }

    if (email.value.trim() === '') {
        valid = false;
        alert('Email is required');
    } else if (!validateEmail(email.value.trim())) {
        valid = false;
        alert('Email is not valid');
    }

    if (message.value.trim() === '') {
        valid = false;
        alert('Message is required');
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Here you can add the logic to send form data to server
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
