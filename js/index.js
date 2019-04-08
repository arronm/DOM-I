const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// NOTE: This HTML structure could be improved. Could modify HTML and JSON slightly then just loop
// over the siteContent to recursively populate the site...

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation Links
let navLinks = document.querySelectorAll('header nav a');
navLinks.forEach((link, index) => {
  link.innerHTML = siteContent['nav'][`nav-item-${index + 1}`];
});

// CTA Section
let cta = document.querySelector('.cta');
cta.querySelector('h1').innerText = siteContent['cta']['h1'];
cta.querySelector('button').innerText = siteContent['cta']['button'];
cta.querySelector('#cta-img').setAttribute('src', siteContent['cta']['img-src']);

// Main Content Section
let mainContent = document.querySelector('.main-content');

let headers = mainContent.querySelectorAll('h4');
headers[0].innerText = siteContent['main-content']['features-h4'];
headers[1].innerText = siteContent['main-content']['about-h4'];
headers[2].innerText = siteContent['main-content']['services-h4'];
headers[3].innerText = siteContent['main-content']['product-h4'];
headers[4].innerText = siteContent['main-content']['vision-h4'];

let paragraphs = mainContent.querySelectorAll('p');
paragraphs[0].innerText = siteContent['main-content']['features-content'];
paragraphs[1].innerText = siteContent['main-content']['about-content'];
paragraphs[2].innerText = siteContent['main-content']['services-content'];
paragraphs[3].innerText = siteContent['main-content']['product-content'];
paragraphs[4].innerText = siteContent['main-content']['vision-content'];

mainContent.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// Contact Section
let contact = document.querySelector('.contact');
contact.querySelector('h4').innerText = siteContent['contact']['contact-h4'];
contact.querySelectorAll('p').forEach((p, index) => {
  p.innerText = Object.values(siteContent['contact'])[index + 1];
});

// Footer
document.querySelector('footer p').innerText = siteContent['footer']['copyright'];

// Green Header
document.querySelector('.container header').style.backgroundColor = 'green';

// Append/Prepend Items to Navigation
let endLink = document.createElement('a');
endLink.href = '#';
endLink.innerText = 'End';
document.querySelector('.container header nav').appendChild(endLink);

let startLink = document.createElement('a');
startLink.href = '#';
startLink.innerText = 'Start';
document.querySelector('.container header nav').prepend(startLink);
