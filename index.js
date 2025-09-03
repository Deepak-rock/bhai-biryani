const menuIconEl = document.querySelector('#menuIcon');
const navbarEl = document.querySelector('.nav-list');
const heroNav = document.querySelectorAll(".logo-img, .footer-logo-img ");
const menuNav = document.querySelectorAll('.menu-nav');
const menuSection = document.querySelector('#menu');
const hero = document.querySelector('#hero');
const search = document.querySelector('.search-container');
const searchNav = document.querySelectorAll('.search-nav');
const outlets = document.querySelector("#outlets");
const outletsNav = document.querySelectorAll(".outlets-nav");

outletsNav.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    outlets.style.display = 'flex';
    hero.style.display = 'none';
    search.style.display = 'none';
    menuSection.style.display = 'none'
    navbarEl.classList.toggle("active");
    menuIconEl.classList.toggle("bx-x");
    outlets.classList.remove("active-search");
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
})

searchNav.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    search.style.display = 'flex';
    hero.style.display = 'none';
    menuSection.style.display = 'none'
    outlets.style.display = 'none';
    navbarEl.classList.toggle("active");
    menuIconEl.classList.toggle("bx-x");
    search.classList.remove("active-search");
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
})

menuIconEl.onclick = () => {
  menuIconEl.classList.toggle("bx-x");
  navbarEl.classList.toggle("active");
  hero.classList.toggle("menu-active");
  menuSection.classList.toggle("menu-active");
  search.classList.toggle("active-search");
  outlets.classList.toggle("active-search");
}

menuNav.forEach(menu=> {
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    search.style.display = 'none';
    menuSection.style.display = "flex";
    hero.style.display = "none";
    navbarEl.classList.toggle("active");
    menuIconEl.classList.toggle("bx-x");
    hero.classList.remove("menu-active");
    menuSection.classList.remove("menu-active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
})

heroNav.forEach(logo => {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    search.style.display = 'none';
    menuSection.style.display = "none";
    hero.style.display = "flex";
    navbarEl.classList.remove("active");
    menuIconEl.classList.remove("bx-x");
    hero.classList.remove("menu-active");
    menuSection.classList.remove("menu-active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const tabs = document.querySelectorAll('.tab-container');
const imgContainer = document.querySelector('.img-container');
let currentIndex = 0;

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    imgContainer.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  });
});

const signatureTabs = document.querySelectorAll('.signature-tab');

signatureTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    signatureTabs.forEach(t => t.classList.remove('s-active'));
    tab.classList.add('s-active');
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".s-right-track");
  const slides = document.querySelectorAll(".right-slider");
  const leftBtns = document.querySelectorAll(".left-arrow-btn");
  const rightBtns = document.querySelectorAll(".right-arrow-btn");

  let currentIndex = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === currentIndex) {
        slide.classList.add("active");
      }
    });
  }

  rightBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide();
    });
  });

  leftBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide();
    });
  });

  updateSlide();
});

function reviewCardSlider() {
  const reviewCon = document.querySelector('.customers-review-con');
  const reviewCard = document.querySelectorAll('.review-card');
  let currentIndex = 0;

  const cardWidth = reviewCard[0].offsetWidth + 20;

  function slideCards() {
    currentIndex++;
    
    if (currentIndex < reviewCard.length) {
      reviewCon.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else {
      reviewCon.style.transition = "none";
      reviewCon.style.transform = `translateX(0px)`;
      currentIndex = 0;
    }
    setTimeout(() => {
      reviewCon.style.transition = "transform 0.6s ease";
    }, 60);
  }
  setInterval(slideCards, 3000);
}

reviewCardSlider();

const faqContainers = document.querySelectorAll('.faqs-con');

faqContainers.forEach(faq => {
  const qus = faq.querySelector('.faqs-qus');
  const ans = faq.querySelector('.faqs-ans');
  const arrow = faq.querySelector('.up-down-arrow');
  qus.onclick = () => {
    qus.classList.toggle("fq-active");
    const active = qus.classList[1];
    ans.classList.toggle("f-active");
    arrow.src = (active === 'fq-active' ? './image/up-arrow.png' : './Image/down-arrow.png');
  };
});

const addBtns = document.querySelectorAll(".add-btn");
const orderContainer = document.querySelector(".order-container");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".close-btn");

const offersContainer = document.querySelector('.offer-container-main');
const offersCard = document.querySelectorAll(".offers-details-card-white, .offers-details-card-yellow");

const locationBtn =  document.querySelectorAll('.order-now-btn');
const locationContainer = document.querySelector('.location-container-main');
const overlayOutside = document.querySelector('.overlay-o');

const loginContainer =  document.querySelector('.login-container-main');
const loginBtn =  document.querySelector('.login-btn');

loginBtn.onclick = () =>{
  loginContainer.style.display = 'block'
}

addBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".combo-card");

    const img = card.querySelector(".combo-img");
    const name = card.querySelector(".combo");
    const des = card.querySelector(".combo-des");
    const price = card.querySelector(".price");

    const decreQuantity = document.querySelector('.minus');
    const quantity = document.querySelector('.quantity');
    const increQuantity = document.querySelector('.plus');

    const basePrice = parseInt(price.textContent.slice(1));

    const updateAddBtnText = () => {
      const qty = parseInt(quantity.textContent);
      orderContainer.querySelector(".add-item").textContent = 
        `Add item ₹${basePrice * qty}`;
    };

    quantity.textContent = "1";

    decreQuantity.onclick = () => {
      if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
        updateAddBtnText();
      }
    };
    increQuantity.onclick = () => {
      quantity.textContent = parseInt(quantity.textContent) + 1;
      updateAddBtnText();
    };

    if (img) orderContainer.querySelector(".product-image").src = img.src;
    if (name) orderContainer.querySelector(".product-name").textContent = name.textContent;
    if (des) orderContainer.querySelector(".product-des").textContent = des.textContent;
    if (price) orderContainer.querySelector(".product-price").textContent = price.textContent;

    orderContainer.querySelector('.quantity-name').textContent = name.textContent;
    orderContainer.querySelector('.quantity-price').textContent = price.textContent;

    updateAddBtnText();

    orderContainer.style.display = "block";
    overlay.style.display = "block";
  });
});

offersCard.forEach(btn => {
  btn.onclick = () => {
    offersContainer.style.display = 'block'
    overlay.style.display = "block";
  }
})

locationBtn.forEach(btn => {
  btn.onclick = () => {
    locationContainer.style.display = 'block';
    overlayOutside.style.display  = 'block'
  }
})

// Close popup
closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
    orderContainer.style.display = "none";
    offersContainer.style.display = 'none'
    overlay.style.display = "none";
    orderContainer.querySelector(".product-des").textContent = '';
    overlayOutside.style.display = "none";
    locationContainer.style.display = "none";
    loginContainer.style.display = "none"
  });
})
overlay.addEventListener("click", () => {
  orderContainer.style.display = "none";
  overlay.style.display = "none";
  offersContainer.style.display = 'none'
  orderContainer.querySelector(".product-des").textContent = '';
});
overlayOutside.addEventListener("click", () => {
  locationContainer.style.display = "none";
  overlayOutside.style.display  = 'none'
});

const tabEls = document.querySelectorAll('.tab');

tabEls.forEach(btn => {
  btn.addEventListener("click", () => {
    tabEls.forEach(tab => tab.classList.remove("active-l"));
    btn.classList.add("active-l");
  });
});
