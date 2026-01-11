// ===== Variables =====
const usernameInput = document.getElementById("username");
const applyNameBtn = document.getElementById("apply-name");
const welcomeHeading = document.getElementById("welcome-heading");
const currentDateTime = document.getElementById("current-datetime");

const toggleThemeBtn = document.getElementById("toggle-theme");

const kangarooBtn = document.getElementById("kangaroo-btn");
const koalaBtn = document.getElementById("koala-btn");
const wildlifeImage = document.getElementById("wildlife-image");
const wildlifeText = document.getElementById("wildlife-text");
const wildlifeLink = document.getElementById("wildlife-link");

const kangarooData = {
  src: "https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=600",
  alt: "Kangaroo",
  text: "The kangaroo is a marsupial from the family Macropodidae. They are indigenous to Australia and are known for their powerful hind legs and distinctive hopping movement.",
  link: "https://www.pexels.com/photo/brown-kangaroo-802112/"
};

const koalaData = {
  src: "https://images.pexels.com/photos/1259478/pexels-photo-1259478.jpeg?auto=compress&cs=tinysrgb&w=600",
  alt: "Koala",
  text: "The koala is an arboreal herbivorous marsupial native to Australia. They are known for their round, fluffy ears and spoon-shaped nose, spending most of their time in eucalyptus trees.",
  link: "https://www.pexels.com/photo/close-up-photo-of-koala-bear-1259478/"
};

// ===== Initialize =====
function init() {
  // Load theme and username from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  const savedName = localStorage.getItem("username") || "";
  
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButton(savedTheme);

  if (savedName) {
    welcomeHeading.textContent = `Hello, ${savedName}!`;
    usernameInput.value = savedName;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
}

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  currentDateTime.textContent = now.toLocaleDateString('en-AU', options);
}

// ===== Event Listeners =====
applyNameBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (name) {
    welcomeHeading.textContent = `Hello, ${name}!`;
    localStorage.setItem("username", name);
  }
});

toggleThemeBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
  toggleThemeBtn.textContent = `Toggle Theme (${theme === "light" ? "🌙 Dark" : "☀️ Light"})`;
}

// Wildlife Gallery
kangarooBtn.addEventListener("click", () => setWildlife(kangarooData));
koalaBtn.addEventListener("click", () => setWildlife(koalaData));

function setWildlife(data) {
  wildlifeImage.src = data.src;
  wildlifeImage.alt = data.alt;
  wildlifeText.textContent = data.text;
  wildlifeLink.href = data.link;
}

// Initialize on load
init();
