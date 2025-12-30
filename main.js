document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // যদি ডাউনলোড লিঙ্ক হয়, তাহলে preventDefault() বন্ধ করে ডাউনলোড শুরু করুন
    if (this.getAttribute("href").endsWith(".pdf")) {
      return; // ডাউনলোড লিঙ্কে preventDefault() হবে না, ডাউনলোড হবে
    }

    // অন্য লিঙ্কের জন্য স্ক্রোলিং
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// toggle button
const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");

hamburgerButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  mobileMenu.classList.toggle("hidden");

  // Toggle icon between bars and cross
  if (mobileMenu.classList.contains("hidden")) {
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
  } else {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-times");
  }
});

// Animate Text

let a = ["Full-Stack Developer (MERN)", "Wordpress Developer", "Frontend Web Developer"];
let ref = document.getElementById("text");
let ind = 0, cInd = 0;
let remove = false;


function typing() {
  if (ind < a.length) {
    let currentText = a[ind];
    if (!remove && cInd < currentText.length) {
      ref.textContent += currentText.charAt(cInd);
      cInd++;
      setTimeout(typing, 100);
    } else if (remove && cInd >= 0) {
      ref.textContent = currentText.substring(0, cInd);
      cInd--;
      setTimeout(typing, 100);
    } else {
      remove = !remove;
      if (!remove) {
        ind = (ind + 1) % a.length;
      }
      setTimeout(typing, 1000);
    }
  }
}

typing();