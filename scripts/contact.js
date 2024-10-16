// navbar
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}


let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
}
let js_Arrow = document.querySelector(".js_arrow");
js_Arrow.onclick = function () {
    navLinks.classList.toggle("show4");
}

// navbar ended

// Form

const form = document.getElementById('contactForm');
let img = document.getElementById('logo-img')
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the page from reloading
  img.style.display = "none";
  // Collect form data
  const userName = form.querySelector('input[type="text"]').value;
  const userEmail = form.querySelector('input[type="email"]').value;
  const userMessage = form.querySelector('textarea').value;

  // Send the email using EmailJS
  emailjs.send("service_owm191h", "template_ta1i2e1", {
    name: userName,
    email: userEmail,
    message: userMessage
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    document.body.classList.add("sent");
  }, function(error) {
    console.log('FAILED...', error);
  });

  form.reset();
});
