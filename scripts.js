document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section'); // Select all sections
    const navLinks = document.querySelectorAll('.nav-list a'); // Select all navigation links

    // Function to check which section is in the viewport
    function setActiveLink() {
        let currentSection = '';

        // Loop through each section to check if it's in the viewport
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
                currentSection = section.getAttribute('id'); // Get the id of the current section
            }
        });

        // Loop through the nav links to add/remove the 'active' class
        navLinks.forEach((link) => {
            const href = link.getAttribute('href').substring(1); // Get the section id from the link href
            if (href === currentSection) {
                link.classList.add('active'); // Add active class
            } else {
                link.classList.remove('active'); // Remove active class
            }
        });
    }

    // Run the function on scroll
    window.addEventListener('scroll', setActiveLink);

    // Initial check to ensure the correct link is active when the page loads
    setActiveLink();
});
