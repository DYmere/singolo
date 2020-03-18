const menu = document.querySelector("header ul");
const button = document.getElementById("submit");
const close_button = document.getElementById("close-button");

menu.addEventListener("click", (event) => {
  menu.querySelectorAll("a").forEach(element => element.classList.remove("active"));
  event.target.classList.add("active");
});

button.addEventListener("click", () => {
  const input_subject = document.getElementById("input-subject").value.toString();
  const input_description = document.getElementById("input-description").value.toString();
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
});

close_button.addEventListener("click", () => {
  document.getElementById("subject").innerText = "";
  document.getElementById("description").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
});