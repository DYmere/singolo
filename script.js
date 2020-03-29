const general_menu = document.querySelector("header ul");
const dropdown_menu = document.getElementById("menu-block");
const portfolio_menu = document.querySelector(".portfolio nav");
const button = document.getElementById("submit");
const close_button = document.getElementById("close-button");
const gallery = document.querySelector(".gallery");
const next = document.getElementById("arrow-next");
const prev = document.getElementById("arrow-prev");
const block = document.querySelectorAll(".block");
const burger_menu_hor = document.getElementById("burger-menu-hor");
const burger_menu_ver = document.getElementById("burger-menu-ver");
const ibutton_ver = document.getElementById("ibutton-ver");
const ibutton_hor = document.getElementById("ibutton-hor");

document.querySelectorAll(".block-1").forEach(element => {
  element.style.right="0";
});

document.querySelectorAll(".block-2").forEach(element => {
  element.style.right="0";
});

// header

burger_menu_hor.addEventListener("click", (event) => {
  dropdown_menu.classList.remove("hidden-menu");
});

burger_menu_ver.addEventListener("click", (event) => {
  dropdown_menu.classList.add("hidden-menu"); 
});

window.addEventListener("scroll", () => {
  //scroll: width = 1020px
  if (window.pageYOffset < 545 && document.body.clientWidth == 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(1) a").classList.add("active");
  }
  else if (window.pageYOffset >= 545 && window.pageYOffset < 1050 && document.body.clientWidth == 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(2) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1050 && window.pageYOffset < 1920&& document.body.clientWidth == 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(3) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1920 && window.pageYOffset < 2450 && document.body.clientWidth == 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(4) a").classList.add("active");
  }
  else if (window.pageYOffset >= 2450 && document.body.clientWidth == 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(5) a").classList.add("active");
  }
  // scroll: 768px <= width < 1020px
  else if (window.pageYOffset < 400 && document.body.clientWidth > 767 && document.body.clientWidth < 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(1) a").classList.add("active");
  }
  else if (window.pageYOffset >= 400 && window.pageYOffset < 1050 && document.body.clientWidth > 767 && document.body.clientWidth < 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(2) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1050 && window.pageYOffset < 1920 && document.body.clientWidth > 767 && document.body.clientWidth < 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(3) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1920 && window.pageYOffset < 2450 && document.body.clientWidth > 767 && document.body.clientWidth < 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(4) a").classList.add("active");
  }
  else if (window.pageYOffset >= 2450 && document.body.clientWidth > 767 && document.body.clientWidth < 1020) {
    general_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    general_menu.querySelector("li:nth-child(5) a").classList.add("active");
  }
  // scroll: 375px <= width < 768px
  else if (window.pageYOffset < 221 && document.body.clientWidth < 768) {
    dropdown_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    dropdown_menu.querySelector("li:nth-child(1) a").classList.add("active");
  }
  else if (window.pageYOffset >= 221 && window.pageYOffset < 1050 && document.body.clientWidth < 768) {
    dropdown_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    dropdown_menu.querySelector("li:nth-child(2) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1050 && window.pageYOffset < 1920 && document.body.clientWidth < 768) {
    dropdown_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    dropdown_menu.querySelector("li:nth-child(3) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1920 && window.pageYOffset < 3400 && document.body.clientWidth < 768) {
    dropdown_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    dropdown_menu.querySelector("li:nth-child(4) a").classList.add("active");
  }
  else if (window.pageYOffset >= 3400 && document.body.clientWidth < 768) {
    dropdown_menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    dropdown_menu.querySelector("li:nth-child(5) a").classList.add("active");
  };
});

// slider: slide switch

/*
next.addEventListener("click", () => {
  let block_1 = document.querySelectorAll(".block-1");
  let block_2 = document.querySelectorAll(".block-2");
  block_1.forEach(element => {
    element.style.transform = "translateX(1020px)";
  });

  block_2.forEach(element => {
      element.style.right = "-2040px";
      element.style.transform = "translateX(1020px)";
  });
});

prev.addEventListener("click", () => {
  let block_1 = document.querySelectorAll(".block-1");
  let block_2 = document.querySelectorAll(".block-2");
  block_1.forEach(element => {
    element.style.transform = "translateX(-1020px)";
  });
  block_2.forEach(element => {
    element.style.transform = "translateX(-1020px)";
  });
});
*/

// slider: phone screens activation

window.addEventListener("resize", () => {
  let iphone_ver = document.getElementById("ibutton-ver").querySelector("area");
  let iphone_hor = document.getElementById("ibutton-hor").querySelector("area");
  if (document.body.clientWidth == 1020) {
    iphone_ver.setAttribute("coords", "107, 429, 21");
    iphone_hor.setAttribute("coords", "29, 107, 21");
  }
  else if (document.body.clientWidth > 767 && document.body.clientWidth < 1020) {
    iphone_ver.setAttribute("coords", "82, 323, 15");
    iphone_hor.setAttribute("coords", "23, 81, 15");
  }
  else if (document.body.clientWidth < 768) {
    iphone_ver.setAttribute("coords", "39, 155, 8");
    iphone_hor.setAttribute("coords", "11, 40, 8");
  }
});

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