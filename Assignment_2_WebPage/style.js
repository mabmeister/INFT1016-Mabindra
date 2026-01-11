// Change the Welcome Name
function applyName() {
    const input = document.getElementById("name-input").value;
    document.getElementById("user-name").innerText = input || "Guest";
}

// Show Image and Description
function showImage() {
    const img = document.getElementById("artImage");
    // Change this to just "buddha.jpg" if the file is in your project folder
    img.src = "buddha.jpg"; 
    img.style.display = "block";
    
    document.getElementById("artDescription").innerText = "This is my first semester artwork of Buddha.";
}

// Toggle between Black and White Theme
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("theme-btn");

    // Check if dark-mode class is already there
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        btn.innerText = "Switch to Dark Mode";
    } else {
        body.classList.add("dark-mode");
        btn.innerText = "Switch to Light Mode";
    }
}