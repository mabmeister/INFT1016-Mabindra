// Initialize page on load
function initPage() {
    loadTheme();
    loadUsername();
    displayDateTime();
}

// Theme Toggle Function
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
}

// Update greeting with username
function updateGreeting() {
    const username = document.getElementById('username').value;
    
    if (username.trim() !== '') {
        document.getElementById('greeting').textContent = `Hello, ${username}!`;
        localStorage.setItem('username', username);
    }
}

// Load username from localStorage
function loadUsername() {
    const savedUsername = localStorage.getItem('username');
    const greetingElement = document.getElementById('greeting');
    
    if (savedUsername && greetingElement) {
        greetingElement.textContent = `Hello, ${savedUsername}!`;
    }
}

// Display current date and time
function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    
    if (dateTimeElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        dateTimeElement.textContent = `Current Date & Time: ${now.toLocaleDateString('en-AU', options)}`;
    }
}

// Show Kangaroo image
function showKangaroo() {
    document.getElementById('galleryImage').src = 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=600';
    document.getElementById('galleryImage').alt = 'Kangaroo';
    document.getElementById('galleryDescription').innerHTML = 'The kangaroo is a marsupial from Australia known for its powerful hind legs and hopping movement. They are iconic symbols of Australian wildlife.';
    document.getElementById('galleryLink').href = 'https://www.pexels.com/photo/kangaroo-on-green-grass-field-635499/';
}

// Show Koala image
function showKoala() {
    document.getElementById('galleryImage').src = 'https://images.pexels.com/photos/1259447/pexels-photo-1259447.jpeg?auto=compress&cs=tinysrgb&w=600';
    document.getElementById('galleryImage').alt = 'Koala';
    document.getElementById('galleryDescription').innerHTML = 'The koala is an arboreal herbivorous marsupial native to Australia. Known for sleeping up to 22 hours a day, they feed almost exclusively on eucalyptus leaves.';
    document.getElementById('galleryLink').href = 'https://www.pexels.com/photo/close-up-photo-of-koala-bear-1259447/';
}
