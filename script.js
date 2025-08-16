document.addEventListener('DOMContentLoaded', function() {
    
    const registrationFormContainer = document.querySelector('.registration-container');
    const closeButton = document.querySelector('.close-btn');

    // Close বাটনের কার্যকারিতা
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            registrationFormContainer.style.display = 'none';
        });
    }

    // Form সাবমিট হলে পেজ যেন রিলোড না হয় তার জন্য
    const form = document.querySelector('.registration-form');
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // পেজ রিলোড হওয়া আটকাবে
            alert('Registration Successful! (This is a demo)');
        });
    }
});