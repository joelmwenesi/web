document.addEventListener("DOMContentLoaded", function() {
    // Display greeting based on time of day
    const greeting = document.createElement('p');
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = "Good morning!";
    } else if (hours < 18) {
        greeting.textContent = "Good afternoon!";
    } else {
        greeting.textContent = "Good evening!";
    }
    document.body.prepend(greeting);

    // Read more button functionality
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreBio = document.getElementById('moreBio');
    readMoreBtn.addEventListener('click', function() {
        moreBio.style.display = moreBio.style.display === 'none' ? 'block' : 'none';
        readMoreBtn.textContent = moreBio.style.display === 'none' ? 'Read More' : 'Read Less';
    });

    // Form validation
    const newsletterForm = document.getElementById('newsletterForm');
    const errorMessage = document.getElementById('errorMessage');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name === '' || email === '' || !validateEmail(email)) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert('Thank you for subscribing, ' + name + '!');
            newsletterForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
