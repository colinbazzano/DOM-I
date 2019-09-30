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


// for (let i = 0; i < links.length; i++) {
//   links[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
// }
let links = document.querySelectorAll('a');

let i = 0;

while(i < links.length){
  links[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  i++;
}

links.forEach( element => {
  element.style.color = 'green';
});

// NEW NAV ITEM NUMERO UNO
const newLink = document.createElement('a');
const newNav = document.querySelector('nav');
newLink.textContent = 'Home';
newLink.href = '#';
newNav.prepend(newLink);
newLink.style.color = 'green';

// NEW NAV ITEM NUMERO DUO 
const newLinkTwo = document.createElement('a');
newLinkTwo.textContent = 'Blog';
newLinkTwo.href = '#';
newLinkTwo.style.color = 'green';
newNav.appendChild(newLinkTwo);

// links.append(newLink);

const header = document.querySelector('h1');
header.textContent = siteContent['cta']['h1'];

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta'] ['img-src'];

const headerBtn = document.querySelector('button');
headerBtn.textContent = siteContent['cta']['button'];


let mainText = document.querySelectorAll('.text-content')

// mainText[0].textContent = siteContent['main-content'] ['features-h4'];

// mainText[0].textContent = siteContent['main-content'] ['features-content'];

//main content below

mainText[0].querySelector('h4').textContent = siteContent['main-content'] ['features-h4'];
mainText[0].querySelector('p').textContent = siteContent['main-content'] ['features-content'];

mainText[1].querySelector('h4').textContent = siteContent['main-content'] ['about-h4'];
mainText[1].querySelector('p').textContent = siteContent['main-content'] ['about-content'];

//middle image below 
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

//main content continued below

mainText[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
mainText[2].querySelector('p').textContent = siteContent['main-content']['services-content'];

mainText[3].querySelector('h4').textContent = siteContent['main-content'] ['product-h4'];
mainText[3].querySelector('p').textContent = siteContent['main-content']['product-content'];

mainText[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
mainText[4].querySelector('p').textContent = siteContent['main-content']['vision-content'];

let mainHead = document.querySelectorAll('.text-content h4')

mainHead.forEach( element => {
  element.style.color = 'olive';
});
console.log(mainHead);

//contact begins below 

let contact = document.querySelector('.contact');

contact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];

contact.getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];
contact.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];
contact.getElementsByTagName('p')[2].textContent = siteContent['contact'] ['email'];

// footer begins below

let footer = document.querySelector('footer');

footer.querySelector('p').textContent = siteContent['footer'] ['copyright'];