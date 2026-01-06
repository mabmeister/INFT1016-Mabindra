// Update Date and Time
function updateTime() {
    const now = new Date();
    document.getElementById('date-time').innerText = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Apply Name
function applyName() {
    const input = document.getElementById('name-input').value;
    if (input) {
        document.getElementById('user-name').innerText = input;
    }
}

// Basic Task Functionality
function addTask() {
    const goal = document.getElementById('goal').value;
    if(goal) alert("Task Added: " + goal);
}
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-btn');
    
    // Check if dark mode is currently on
    body.classList.toggle('dark-mode');
    
    // Update button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        btn.innerText = "Switch to Light Mode";
    } else {
        btn.innerText = "Switch to Dark Mode";
    }
}