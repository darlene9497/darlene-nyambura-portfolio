// theme toggle button
const themeToggle = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    // change the icon of the theme toggle based on the saved theme
    themeToggle.textContent = currentTheme === "light" ? "🌞" : "🌙";
}
// event listener to toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    // update button icon
    themeToggle.textContent = newTheme === "light" ? "🌙" : "🌞";
    localStorage.setItem("theme", newTheme);
});
// if no theme is saved in the localStorage, check the system's color scheme preference
if (!currentTheme) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", defaultTheme);
    localStorage.setItem("theme", defaultTheme);
}

// scroll to the top of the page when the logo is clicked
document.getElementById('logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// select all a tags with the nav-link class
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // scroll to the section with the id specified in the href
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// opens the CV in a new browser when the "Download CV" button is clicked
function openCV() {
    window.open('/assets/files/Darlene Nyambura Nandabi CV 2025.pdf', '_blank');
}

// function to handle the contact form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    // submit the form data
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Message sent successfully 🎉");
            form.reset(); // clears the form inputs if the submission is successful
        } else {
            alert("Oops😭 There was a problem submitting your form. Please email me directly at nyamburanandabi@gmail.com.");
        }
        // catch any errors or issues
    }).catch(() => alert("An error occurred while submitting the form. Please email me directly at nyamburanandabi@gmail.com."));
    
    return false;
}