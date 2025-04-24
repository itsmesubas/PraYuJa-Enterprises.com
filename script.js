
 //Testimonial slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.slider-dot');

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
});
// Add this to existing smooth scrolling code if adding navigation link
document.querySelectorAll('a[href="#about-product"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
   });
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Rating modal
const ratingModal = document.getElementById('ratingModal');
const rateBtns = document.querySelectorAll('.rate-btn');
const closeBtn = document.querySelector('.close-btn');
const stars = document.querySelectorAll('.rating-input i');
const ratingValue = document.getElementById('ratingValue');

rateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        ratingModal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    ratingModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === ratingModal) {
        ratingModal.style.display = 'none';
    }
});

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        ratingValue.value = rating;
        
        stars.forEach((s, i) => {
            if (i < rating) {
                s.classList.remove('far');
                s.classList.add('fas');
            } else {
                s.classList.remove('fas');
                s.classList.add('far');
            }
        });
    });
});
// Video testimonial interaction
const videoWrappers = document.querySelectorAll('.video-wrapper');
videoWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
        // You can add additional interaction here if needed
        // For example, expanding the video on click
    });
});
// Order button functionality
const orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', () => {
    if (confirm('Call PraYuJa at +977 9805159241 to place your order?')) {
        window.location.href = 'tel:+977 9805159241';
    }
});

// New Add to Cart functionality
// Update or add this code for add-to-cart buttons
const addToCartBtns = document.querySelectorAll('.add-to-cart');

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (confirm('Would you like to call now to place your order?')) {
            window.location.href = 'tel:+977 9805159241';
        }
    });
});
//Form submission
//const contactForm = document.getElementById('contactForm');
//const ratingForm = document.getElementById('ratingForm');

//contactForm.addEventListener('submit', (e) => {
  //  e.preventDefault();
    //alert('Thank you for your message! We will contact you soon.');
    //contactForm.reset();
//});
// Formspree Form Submission
const contactForm = document.getElementById('contactForm');

// Set reply-to email dynamically
document.getElementById('email').addEventListener('change', function() {
    document.getElementById('reply-to').value = this.value;
});

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    // Change button text to indicate processing
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Submit to Formspree
    fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success message
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        alert('This feature is currently unavailable. Please try again later.');
        console.error('Error:', error);
    })
    .finally(() => {
        // Reset button state
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    });
});
const ratingForm = document.getElementById('ratingForm');

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your review!');
    ratingForm.reset();
    stars.forEach(star => {
        star.classList.remove('fas');
        star.classList.add('far');
    });
    ratingModal.style.display = 'none';
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

