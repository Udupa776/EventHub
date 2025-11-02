

let prof=document.getElementById("profile");
prof.addEventListener("click",()=>
{
  window.location.href="profile.php";
})

let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    renderEvents();
    showSection('home');
});

var events
// Render events in the grid
async function renderEvents() {
    const grid = document.getElementById('events-grid');
    grid.innerHTML = '';
    let res=await fetch("api.php")
    let  data=await res.text()
     events=await JSON.parse(data)
    console.log(events)
   let length=events[0].id.length
    for(let i=0;i<length;i++)
    { let r={}
    events.forEach(e => {
        // const eventCard = createEventCard(evented);
        // grid.appendChild(eventCard);
        let k=Object.keys(e)[0]
        r[k]=e[k][i]
    });
      const eventCard = createEventCard(r);
        grid.appendChild(eventCard);
}
}

// Create event card element
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card fade-in';

    const attendeePercentage = Math.round((100 / event.capacity) * 100);

    card.innerHTML = `
                <div class="event-image">
                    <div class="event-date">${event.date}</div>
                </div>
                <div class="event-content">
                
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${event.location}
                    </div>
                    <div class="event-price">$${event.price.toFixed(2)}</div>
                    <div class="event-stats">
                        <span><i class="fas fa-users"></i> ${100}/${event.capacity}</span>
                        <span>${attendeePercentage}% full</span>
                    </div>
                    <button class="register-btn" onclick="registerForEvent('${event.title}')">
                        Register Now
                    </button>
                </div>
            `;

    return card;
}

// Filter events
function filterEvents(category) {
    currentFilter = category;

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    currentFilter.target.classList.add('active');

    // let filteredEvents = events;
    // if (category !== 'all') {
    //     filteredEvents = events.filter(e => e.category === category);
    // }

    // renderEvents(filteredEvents);
}

// Search events
function searchEvents() {
    const query = document.getElementById('search-input').value.toLowerCase();
    // const filteredEvents = events.filter(event =>
    //     event.title.toLowerCase().includes(query) ||
    //     event.location.toLowerCase().includes(query) ||
    //     event.category.toLowerCase().includes(query)
    // );

    renderEvents();
}

// Show different sections
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section, .events-section, .dashboard').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // Show selected section
    if (sectionName === 'home') {
        document.getElementById('home').style.display = 'block';
        document.querySelector('.events-section').style.display = 'block';
    } else if (sectionName === 'events') {
        document.querySelector('.events-section').style.display = 'block';
    } else if (sectionName === 'dashboard') {
        document.querySelector('.dashboard').style.display = 'block';
        document.getElementById('dashboard').classList.add('active');
        updateDashboardStats();
    }
}

// Modal functions
function openModal(modalType) {
    const modal = document.getElementById(`${modalType}-modal`);
    modal.classList.add('active');
}

function closeModal(modalType) {
    const modal = document.getElementById(`${modalType}-modal`);
    modal.classList.remove('active');
}

// Register for event
function registerForEvent(titl) {
    if(document.cookie){
        console.log("clicked")
  
    document.getElementById('register-title').textContent = `Register for ${titl}`;
    openModal('register');
    }
    else
    {
        alert("you have not logined yet");  
    }
}

// Update dashboard statistics
function updateDashboardStats() {
    // const totalAttendees = events.reduce((sum, event) => sum + event.attendees, 0);
    // const totalRevenue = events.reduce((sum, event) => sum + (event.attendees * event.price), 0);
    // const upcomingEvents = events.length; // Simplified for demo

    // document.getElementById('total-events').textContent = events.length;
    // document.getElementById('total-attendees').textContent = totalAttendees.toLocaleString();
    // document.getElementById('revenue').textContent = `$${totalRevenue.toLocaleString()}`;
    // document.getElementById('upcoming-events').textContent = upcomingEvents;
    console.log("in updatedashboard")
}

// Form submissions
// document.getElementById('create-event-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const newEvent = {
//         id: events.length + 1,
//         title: document.getElementById('event-title').value,
//         date: new Date(document.getElementById('event-date').value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
//         location: document.getElementById('event-location').value,
//         price: parseFloat(document.getElementById('event-price').value) || 0,
//         category: document.getElementById('event-category').value,
//         attendees: 0,
//         capacity: parseInt(document.getElementById('event-capacity').value),
//         description: document.getElementById('event-description').value
//     };

//     events.push(newEvent);
//     renderEvents();
//     closeModal('create-event');
//     this.reset();

//     // Show success message
//     alert('Event created successfully!');
// });

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate registration process
    closeModal('register');
    this.reset();

    // Show success message
    alert('Registration completed! You will receive a confirmation email shortly.');
});

// Close modals when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Add search on enter key
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchEvents();
    }
});

// Smooth scrolling for navigation
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add loading animation for events
function showLoadingSpinner() {
    const grid = document.getElementById('events-grid');
    grid.innerHTML = '<div style="text-align: center; padding: 3rem; color: #667eea;"><i class="fas fa-spinner fa-spin fa-3x"></i><p style="margin-top: 1rem;">Loading amazing events...</p></div>';
}

// Simulate real-time updates
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Randomly update attendee counts
        // events.forEach(event => {
        //     if (Math.random() > 0.7 && event.attendees < event.capacity) {
        //         event.attendees += Math.floor(Math.random() * 3) + 1;
        //         if (event.attendees > event.capacity) {
        //             event.attendees = event.capacity;
        //         }
        //     }
        // });
console.log("in simulateReltimeUpdate")
        // Re-render if we're on the events section
        // if (document.querySelector('.events-section').style.display !== 'none') {
        //     renderEvents(currentFilter === 'all' ? events : events.filter(e => e.category === currentFilter));
        // }

        // Update dashboard if active
        if (document.getElementById('dashboard').classList.contains('active')) {
            updateDashboardStats();
        }
    }, 10000); // Update every 10 seconds
}

// Start real-time updates
simulateRealTimeUpdates();

// Add pulse animation to CTA buttons periodically
setInterval(() => {
    document.querySelectorAll('.cta-btn, .register-btn').forEach(btn => {
        btn.classList.add('pulse');
        setTimeout(() => btn.classList.remove('pulse'), 2000);
    });
}, 15000);

// Dynamic greeting based on time
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Discover Amazing Events";

    if (hour < 10) {
        greeting = "Good Morning! Find Today's Events";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Explore Events";
    } else {
        greeting = "Good Evening! Tonight's Events";
    }

    document.querySelector('.hero h1').textContent = greeting;
}

// Update greeting on load
updateGreeting();

// Add event card hover effects with JavaScript
document.addEventListener('mouseover', function (e) {
    if (e.target.closest('.event-card')) {
        const card = e.target.closest('.event-card');
        card.style.transform = 'translateY(-8px) scale(1.02)';
    }
});

document.addEventListener('mouseout', function (e) {
    if (e.target.closest('.event-card')) {
        const card = e.target.closest('.event-card');
        card.style.transform = 'translateY(0) scale(1)';
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // Close any open modals
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Add notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? 'linear-gradient(45deg, #4CAF50, #45a049)' : 'linear-gradient(45deg, #f44336, #da190b)'};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                z-index: 3000;
                animation: slideInRight 0.3s ease-out;
                max-width: 300px;
            `;
    notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
                    <span>${message}</span>
                </div>
            `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
document.head.appendChild(style);

// Enhanced form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#f44336';
            isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            input.style.borderColor = '#f44336';
            showNotification('Please enter a valid email address', 'error');
            isValid = false;
        } else {
            input.style.borderColor = '#e1e5e9';
            isValid=true;
        }
    });

    return isValid;
}

// Update form submission handlers with validation
// document.getElementById('create-event-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     if (!validateForm('create-event-form')) {
//         showNotification('Please fill in all required fields correctly', 'error');
//         return;
//     }

//     const newEvent = {
//         id: events.length + 1,
//         title: document.getElementById('event-title').value,
//         date: new Date(document.getElementById('event-date').value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
//         location: document.getElementById('event-location').value,
//         price: parseFloat(document.getElementById('event-price').value) || 0,
//         category: document.getElementById('event-category').value,
//         attendees: 0,
//         capacity: parseInt(document.getElementById('event-capacity').value),
//         description: document.getElementById('event-description').value
//     };

//     events.push(newEvent);
//     renderEvents();
//     closeModal('create-event');
//     this.reset();

//     showNotification('Event created successfully! 🎉');
// });

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm('registration-form')) {
        showNotification('Please fill in all required fields correctly', 'error');
        return;
    }

    // Simulate registration process with loading
    const submitBtn = this.querySelector('.register-btn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        closeModal('register');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        showNotification('Registration completed! Check your email for confirmation 📧');
    }, 2000);
});

// Add advanced search with debouncing
let searchTimeout;
document.getElementById('search-input').addEventListener('input', function (e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchEvents();
    }, 300);
});

// Add mobile menu toggle (for smaller screens)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Add analytics tracking simulation
function trackEvent(eventName, data = {}) {
    console.log(`Analytics: ${eventName}`, data);
    // In a real application, this would send data to your analytics service
}

// Track user interactions
document.addEventListener('click', function (e) {
    if (e.target.matches('.register-btn')) {
        trackEvent('register_button_click', { button: 'register' });
    } else if (e.target.matches('.cta-btn')) {
        trackEvent('cta_button_click', { button: 'create_event' });
    } else if (e.target.matches('.filter-btn')) {
        trackEvent('filter_click', { filter: e.target.textContent });
    }
});
