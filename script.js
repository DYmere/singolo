const menu = document.querySelector("header ul");
const portfolio_menu = document.querySelector(".portfolio nav");
const button = document.getElementById("submit");
const close_button = document.getElementById("close-button");
const gallery = document.querySelector(".gallery");

menu.addEventListener("click", (event) => {
  menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
  event.target.classList.add("active");
});

gallery.addEventListener("click", (event) => {
  gallery.querySelectorAll("img").forEach(element => element.classList.remove("active-img"));
  event.target.classList.add("active-img");
});

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

window.addEventListener('scroll', () => {
  if (window.pageYOffset < 695) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(1) a").classList.add("active");
  }
  else if (window.pageYOffset >= 695 && window.pageYOffset < 1195) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(2) a").classList.add("active");
  }
  else if (window.pageYOffset >= 1195 && window.pageYOffset < 2064) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(3) a").classList.add("active");
  }
  else if (window.pageYOffset >= 2064 && window.pageYOffset < 2798) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(4) a").classList.add("active");
  }
  else if (window.pageYOffset >= 2798) {
    menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
    menu.querySelector("li:nth-child(5) a").classList.add("active");
  };
});

button.addEventListener("click", (event) => {
  
  const input_subject = document.getElementById("input-subject").value.toString();
  const input_description = document.getElementById("input-description").value.toString();
  const input_name = document.getElementById("input-name").value.toString();
  const input_email = document.getElementById("input-email").value.toString();
  if (input_name && input_email) {
    if (input_subject) {
      document.getElementById("subject").innerText = "Subject: "+input_subject;
    }
    else {
      document.getElementById("subject").innerText = "without subject";
    };
    if (input_description) {
      document.getElementById("description").innerText = "Description: "+input_description;
    }
    else {
      document.getElementById("description").innerText = "without description";
    };
    document.getElementById("message-block").classList.remove("hidden");
    event.preventDefault();
  };
});

close_button.addEventListener("click", () => {
  document.getElementById("subject").innerText = "";
  document.getElementById("description").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
});