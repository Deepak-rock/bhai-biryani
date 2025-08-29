const menuIconEl = document.querySelector('#menuIcon');
const navbarEl = document.querySelector('.nav-list');

menuIconEl.onclick = () => {
  menuIconEl.classList.toggle("bx-x");
  navbarEl.classList.toggle("active");
}

const heroNav = document.querySelectorAll(".logo-img, .footer-logo-img ");
const menuNav = document.querySelectorAll('.menu-nav');
const menuSection = document.querySelector('#menu');
const hero = document.querySelector('#hero');

menuNav.forEach(menu=> {
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    menuSection.style.display = "flex";
    hero.style.display = "none";
  })
})

heroNav.forEach(logo => {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    menuSection.style.display = "none";
    hero.style.display = "flex";
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

// Add button click logic
const addBtns = document.querySelectorAll(".add-btn");
const orderContainer = document.querySelector(".order-container");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".close-btn");

const offersContainer = document.querySelector('.offer-container-main');
const offersCard = document.querySelectorAll(".offers-details-card-white, .offers-details-card-yellow");

addBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".combo-card");

    // Extract product info
    const img = card.querySelector(".combo-img");
    const name = card.querySelector(".combo");
    const des = card.querySelector(".combo-des");
    const price = card.querySelector(".price");

    const decreQuantity = document.querySelector('.minus');
    const quantity = document.querySelector('.quantity');
    const increQuantity = document.querySelector('.plus');

    const basePrice = parseInt(price.textContent.slice(1));
    
    // Function to update button text
    const updateAddBtnText = () => {
      const qty = parseInt(quantity.textContent);
      orderContainer.querySelector(".add-item").textContent = 
        `Add item ₹${basePrice * qty}`;
    };

    // Reset quantity to 1 when opening popup
    quantity.textContent = "1";

    // Attach listeners (avoid stacking multiple times)
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

    // Fill order container
    if (img) orderContainer.querySelector(".product-image").src = img.src;
    if (name) orderContainer.querySelector(".product-name").textContent = name.textContent;
    if (des) orderContainer.querySelector(".product-des").textContent = des.textContent;
    if (price) orderContainer.querySelector(".product-price").textContent = price.textContent;

    orderContainer.querySelector('.quantity-name').textContent = name.textContent;
    orderContainer.querySelector('.quantity-price').textContent = price.textContent;

    // Initialize button with base price
    updateAddBtnText();

    // Show popup
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

// Close popup
closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
    orderContainer.style.display = "none";
    offersContainer.style.display = 'none'
    overlay.style.display = "none";
    orderContainer.querySelector(".product-des").textContent = '';
  });
})
overlay.addEventListener("click", () => {
  orderContainer.style.display = "none";
  overlay.style.display = "none";
  offersContainer.style.display = 'none'
  orderContainer.querySelector(".product-des").textContent = '';
});


