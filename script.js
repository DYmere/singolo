const menu = document.querySelector("header ul");
const portfolio_menu = document.querySelector(".portfolio nav");
const button = document.getElementById("submit");
const close_button = document.getElementById("close-button");
const gallery = document.querySelector(".gallery");
const ibutton_ver = document.getElementById("ibutton-ver");
const ibutton_hor = document.getElementById("ibutton-hor");
const next = document.getElementById("arrow-next");
const prev = document.getElementById("arrow-prev");
const block = document.querySelectorAll(".block");
var block_arr = [];

block.forEach(element => block_arr.push(element));

// header

/*
menu.addEventListener("click", (event) => {
  menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
  event.target.classList.add("active");
});
*/

window.addEventListener("scroll", () => {
  if (window.pageYOffset < 545) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(1) a").classList.add("active");
  }
  else if (window.pageYOffset >= 545 && window.pageYOffset < 1050) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(2) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1050 && window.pageYOffset < 1920) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(3) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1920 && window.pageYOffset < 2450) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(4) a").classList.add("active");
  }
  else if (window.pageYOffset >= 2450) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(5) a").classList.add("active");
  };
});

// slider: slide switch

next.addEventListener("click", () => { 
  block_arr[2].style.position = "relative";
  block_arr[2].style.left = "-2040px";
  block_arr.forEach(element => {
    element.style.display = "grid";
    element.style.transform = "translateX(1020px)";
  });
});

prev.addEventListener("click", () => {
  block_arr.forEach(element => {
    element.style.display = "grid";
    element.style.transform = "translateX(-1020px)";
  });
});

// slider: phone screens activation

ibutton_ver.addEventListener("click", () => {
  let iphone = document.querySelector(".iphone-vertical img");
  if (iphone.getAttribute("src") == "assets/images/iphone-vertical.png") {
    iphone.setAttribute("src", "assets/images/black-screen-vertical.png");
  }
  else {
    iphone.setAttribute("src", "assets/images/iphone-vertical.png");
  };
});

ibutton_hor.addEventListener("click", () => {
  let iphone = document.querySelector(".iphone-horizontal img");
  if (iphone.getAttribute("src") == "assets/images/iphone-horizontal.png") {
    iphone.setAttribute("src", "assets/images/black-screen-horizontal.png");
  }
  else {
    iphone.setAttribute("src", "assets/images/iphone-horizontal.png");
  };
});

// portfolio: image interaction

gallery.addEventListener("click", (event) => {
  if (event.target.getAttribute("class") == "active-img") {
    gallery.querySelector("img.active-img").classList.remove("active-img");
    return true;
  };
  gallery.querySelectorAll("img").forEach(element => element.classList.remove("active-img"));
  event.target.classList.add("active-img");
});

// portfolio: tab switching

portfolio_menu.addEventListener("click", (event) => {
  let arr_gallery = [];
  gallery.querySelectorAll("img").forEach(element => element.classList.remove("active-img"));
  portfolio_menu.querySelectorAll("a").forEach(element => element.classList.remove("active-nav"));
  event.target.classList.add("active-nav");
  gallery.querySelectorAll("img").forEach(element => arr_gallery.push(element));
  let mixed_arr_gallery = arr_gallery.sort(() => {
    return Math.random() - 0.5;
  });
  document.querySelector(".gallery").innerText = "";
  mixed_arr_gallery.forEach(element => document.querySelector(".gallery").appendChild(element));
  event.preventDefault();
});

// get a quote

button.addEventListener("click", (event) => {
  let input_subject = document.getElementById("input-subject").value.toString();
  let input_description = document.getElementById("input-description").value.toString();
  let input_name = document.getElementById("input-name");
  let input_email = document.getElementById("input-email");
  if (input_name.validity.valid && input_email.validity.valid) {
    if (input_subject) {
      document.getElementById("subject").innerText = "Subject: " + input_subject;
    }
    else {
      document.getElementById("subject").innerText = "without subject";
    };
    if (input_description) {
      document.getElementById("description").innerText = "Description: " + input_description;
    }
    else {
      document.getElementById("description").innerText = "without description";
    };
    document.getElementById("message-block").classList.remove("hidden");
    event.preventDefault();
  };
});

close_button.addEventListener("click", () => {
  document.getElementById("input-name").value="";
  document.getElementById("input-email").value = "";
  document.getElementById("input-subject").value = "";
  document.getElementById("input-description").value = "";
  document.getElementById("message-block").classList.add("hidden");
});