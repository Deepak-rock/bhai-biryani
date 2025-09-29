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
const bookATable = document.querySelectorAll('.book-table-btn');
const bookSection = document.querySelector('.book-a-table-container')
const checkoutSection = document.querySelector('.checkout-section');

outletsNav.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    outlets.style.display = 'flex';
    hero.style.display = 'none';
    search.style.display = 'none';
    checkoutSection.style.display = 'none';
    menuSection.style.display = 'none';
    bookSection.style.display = 'none';
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
    menuSection.style.display = 'none';
    checkoutSection.style.display = 'none';
    outlets.style.display = 'none';
    bookSection.style.display = 'none';
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
    outlets.style.display = 'none';
    bookSection.style.display = 'none';
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
    outlets.style.display = 'none';
    checkoutSection.style.display = 'none';
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
    arrow.src = (active === 'fq-active' ? './Image/up-arrow.png' : './Image/down-arrow.png');
  };
});

const addBtns = document.querySelectorAll(".add-btn");
const orderContainer = document.querySelector(".order-container");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".close-btn");

const offersContainer = document.querySelector('.offer-container-main');
const offersCard = document.querySelectorAll(".offers-details-card-white, .offers-details-card-yellow");

const locationBtn =  document.querySelectorAll('.order-now-btn, .direction-btn');

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

const addItem = document.querySelector(".add-item");
const quantity = document.querySelector(".quantity");
const cartListEl = document.getElementById("cart-list");
const subTotalEl = document.getElementById("subTotal");

const cartList = [];

addItem.onclick = () => {
  orderContainer.style.display = "none";
  overlay.style.display = "none";
  checkoutSection.style.display = 'block';
  menuSection.style.display = 'none';
  window.scrollTo({ top: 0, behavior: "smooth" });
  cartList.push({
    dName: orderContainer.querySelector(".product-name").textContent,
    dPrice: orderContainer.querySelector(".product-price").textContent.slice(1),
    dQuantity: parseInt(quantity.textContent),
  });

  let totalAmount = 0;

  cartList.map((eachItem) => {
    totalAmount += parseInt(eachItem.dPrice);
  })

  subTotalEl.textContent = `$${totalAmount}`
  
  cartListEl.innerHTML = cartList
    .map(
      (item) => `
        <div class="cart-item-con">
          <p class="d-name">${item.dName}</p>
          <div class="quantity-cart-con">
            <p class="d-price">${item.dPrice * item.dQuantity}</p>
            <div class="q-incre-decre-con">
              <p class="minus">-</p>
              <p class="quantity">${item.dQuantity}</p>
              <p class="plus">+</p>
            </div>
          </div>
        </div>
        <hr class="hr-cart"/>
      `
    )
    .join("");
};

const backbtn = document.querySelector('.back-btn');

backbtn.onclick = () => {
  checkoutSection.style.display = 'none';
  menuSection.style.display = 'flex';
}

offersCard.forEach(btn => {
  btn.onclick = () => {
    offersContainer.style.display = 'block'
    overlay.style.display = "block";
  }
})

locationBtn.forEach(btn => {
  btn.onclick = () => {
    locationContainer.style.display = 'block';
    overlayOutside.style.display  = 'block';
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


bookATable.forEach(btn => {
  btn.onclick = () =>{
    bookSection.style.display = 'flex'
    outlets.style.display = 'none'
  }
})

const seatDisplay = document.getElementById('seatDisplay');
let selectedSeats = [];

document.querySelectorAll('.seat').forEach(seat => {
  seat.addEventListener('click', () => {
    if (seat.classList.contains('booked')) return;
    const seatName = seat.getAttribute('data-seat');
    const tableName = seat.parentElement.getAttribute('data-table');

    if (!selectedSeats.includes(seatName)) {
      selectedSeats.push(seatName);
      addBookingCard(seatName, tableName);
      seat.style.background = "#90ee90";
    } else {
      selectedSeats = selectedSeats.filter(s => s !== seatName);
      removeBookingCard(seatName);
      seat.style.background = "#9BEEB7";
    }
  });
});

function addBookingCard(seatName, tableName) {
  const card = document.createElement('div');
  card.classList.add('booking-card');
  card.setAttribute('id', seatName);

  card.innerHTML = `
    <div class="add-booking-card">
      <h4>${tableName}</h4>
      <p>ID: ${Math.floor(Math.random()*900000)+100000}</p>
      <p>User Name</p>
      <p>₹200</p>
      <button class="pay-btn">Make a Payment</button>
    </div>
    <div class="booking-logo-con">
      <img src="./Image/logo.png" class="booking-logo">
      <div class="logo-name-container">
        <p class="booking-logo-name">Bhai</p>
        <p class="booking-logo-name">Briyani</p>
      </div>
    <div>
  `;

  seatDisplay.appendChild(card);
}

function removeBookingCard(seatName) {
  const card = document.getElementById(seatName);
  if (card) card.remove();
}

const loginSection = document.getElementById('loginContainer');
const loginForm = document.getElementById('mobileForm');

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mobileNum = document.getElementById('mobileNum').value;
  let firstThreeDigitsNum = mobileNum.slice(0, 3);
  let lastTwoDigitsNum = mobileNum.slice(-2);
  let number = `+91 ${firstThreeDigitsNum}*****${lastTwoDigitsNum}`;

  loginSection.innerHTML = `
    <div id="otpForm" class="otp-container" >
      <h3 class="otp-h">OTP Verification</h3>
      <span class="close-btn-otp">✖</span>
      <p class="otp-s">Please enter the 6-digit verification code sent to</p>
      <h2 class="num-h">${number}</h2>
      <form class="otp-form">
        <div class="otp-box">
          <input maxlength="1" class="otp-input" type="tel" inputmode="numeric" />
          <input maxlength="1" class="otp-input" type="tel" inputmode="numeric" />
          <input maxlength="1" class="otp-input" type="tel" inputmode="numeric" />
          <input maxlength="1" class="otp-input" type="tel" inputmode="numeric" />
          <input maxlength="1" class="otp-input" type="tel" inputmode="numeric" />
          <input maxlength="1" class="otp-input" type="tel" inputmode="numeric" />
        </div>
        <button type="submit" class="verify-btn">Verify and Proceed</button>
      </form>
    </div>
  `;

  const otpInputs = document.querySelectorAll(".otp-input");
  const closeBtnOtp = document.querySelector('.close-btn-otp');

  closeBtnOtp.addEventListener("click", () => {
    loginContainer.style.display = "none"
  });

  otpInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      if (e.target.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });

  document.querySelector(".otp-form").addEventListener("submit", (e) => {
    e.preventDefault();
    loginSection.innerHTML = `
    <div id="basicDetails" class="otp-container" >
      <h3 class="otp-h">Basic Details</h3>
      <form class="basic-form">
        <label class="b-label" for="name">Name</label>
        <input type="text" placeholder="E.g John, Joe" id="name" class="b-input" />
        <label class="b-label" for="email">Email ID</label>
        <input type="text" placeholder="Enter Email ID" id="email" class="b-input" />

        <p class="b-s-para">We will be sending bills to this email</p>
        <button type="submit" class="verify-btn">Verify and Proceed</button>

        <p class="b-para">By clicking on Continue you are agreeing our <span class="b-underline">Terms & Condition</span></p>
      </form>
    </div>
  `;
  });
});