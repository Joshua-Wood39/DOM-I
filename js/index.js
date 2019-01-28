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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NavBar
let navItems = document.getElementsByTagName('a');
console.log(navItems);
for (let i = 1; i < navItems.length + 1; i++) {
    navItems[i - 1].textContent = siteContent.nav[`nav-item-${i}`];
}

//Title and Button and Image
let ctaTitle = document.querySelector('h1');
console.log(ctaTitle);
ctaTitle.innerHTML = "DOM</br>Is</br>Awesome";
let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];
let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);


//Main content: titles and content, and image
let tContentH = document.querySelectorAll('.main-content h4');
console.log(tContentH);
let tContentP = document.querySelectorAll('.main-content p');
console.log(tContentP);

tContentH[0].textContent = siteContent['main-content']['features-h4'];
tContentH[1].textContent = siteContent['main-content']['about-h4'];
tContentH[2].textContent = siteContent['main-content']['services-h4'];
tContentH[3].textContent = siteContent['main-content']['product-h4'];
tContentH[4].textContent = siteContent['main-content']['vision-h4'];

tContentP[0].textContent = siteContent['main-content']['features-content'];
tContentP[1].textContent = siteContent['main-content']['about-content'];
tContentP[2].textContent = siteContent['main-content']['services-content'];
tContentP[3].textContent = siteContent['main-content']['product-content'];
tContentP[4].textContent = siteContent['main-content']['vision-content'];

let tContentImg = document.getElementById('middle-img');
tContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//Contact section
let contactContentH = document.querySelector('.contact h4');
let contactContentP = document.querySelectorAll('.contact p');

contactContentH.textContent = siteContent.contact['contact-h4'];
contactContentP[0].innerHTML = "123 Way 456 Street</br>Somewhere, USA"
contactContentP[1].textContent = siteContent.contact['phone'];
contactContentP[2].textContent = siteContent.contact['email'];

//Footer
let foot = document.querySelector('footer p');
foot.textContent = siteContent.footer['copyright'];