<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EventHub - Modern Event Management</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    
    <link rel="stylesheet" href="front-page1.css">


</head>

<body>

    <header>
        <nav class="container">
            <div class="logo">EventHub</div>
            <div class="nav-links">
                <a href="" onclick="showSection('home')">Home</a>
                <a href="" onclick="showSection('events')">Events</a>
                <a href="" onclick="showSection('dashboard')">Dashboard</a>
                <button  class="cta-btn" id="createeve" onclick="openModal('create-event')">Create Event</button>
                <button   class="signup" onclick="window.location.href='signup.html'">Sign Up</button>
                <button   class="signup" onclick="window.location.href='login.html'">Login</button>
                <button class="cta-btn" id="logout" onclick="logout()">Logout</button>
             
                <div id="profile">
                <img src="profile.png" height="50px" id="profimg">
                </div>
               
                <?php if(!isset($_COOKIE["name"])){?>
                <script >
                 let btns=document.getElementsByClassName("signup");
                 for(let i=0;i<btns.length;i++)
                 {
                   btns[i].style.display="block";
                 }
                 document.getElementById("createeve").style.display="none";
                 document.getElementById("logout").style.display="none";
                 document.getElementById("profimg").style.display="none";
                </script>
                <?php } else{ ?>
                <script >
                    let btns1=document.getElementsByClassName("signup");
                    for(let i=0;i<btns1.length;i++)
                 {
                   btns1[i].style.display="none";;
                 } 
                 document.getElementById("createeve").style.display="block";
                  document.getElementById("logout").style.display="block";
                  document.getElementById("profimg").style.display="block";

                 function logout()
                 {
                 document.cookie = "name =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                location.reload();
                 }
                 localStorage.setItem("name","value");
                </script>
                <?php }?>
            </div>
            
        </nav>

    </header>

    <main class="container">
        <section id="home" class="section">
            <div class="hero fade-in">
                <h1>Discover Amazing Events</h1>
                <p>Join thousands of attendees at the most exciting events in your city. From concerts to conferences,
                    we've got you covered.</p>

                <div class="search-bar">
                    <input type="text" id="search-input" placeholder="Search events, locations, or categories...">
                    <button class="search-btn" onclick="searchEvents()">
                        <i class="fas fa-search"></i>
                    </button>
                </div>

                <div class="filters">
                    <button class="filter-btn active" onclick="filterEvents('all')">All Events</button>
                    <button class="filter-btn" onclick="filterEvents('music')">Music</button>
                    <button class="filter-btn" onclick="filterEvents('business')">Business</button>
                    <button class="filter-btn" onclick="filterEvents('sports')">Sports</button>
                    <button class="filter-btn" onclick="filterEvents('food')">Food & Drink</button>
                    <button class="filter-btn" onclick="filterEvents('tech')">Technology</button>
                </div>
            </div>
        </section>

        <section id="events" class="events-section fade-in">
            <h2 class="section-title">Featured Events</h2>
            <div class="events-grid" id="events-grid">
                <!-- Events will be dynamically populated -->
            </div>
        </section>

        <section id="dashboard" class="dashboard">
            <h2 class="section-title">Event Dashboard</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number" id="total-events">12</div>
                    <div class="stat-label">Total Events</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="total-attendees">1,247</div>
                    <div class="stat-label">Total Attendees</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="revenue">$24,350</div>
                    <div class="stat-label">Revenue</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="upcoming-events">8</div>
                    <div class="stat-label">Upcoming Events</div>
                </div>
            </div>

            <div class="events-grid" id="my-events-grid">
                <!-- My events will be populated here -->
            </div>
        </section>
    </main>

    <!-- Create Event Modal -->
    <div class="modal" id="create-event-modal" active >
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal('create-event')">&times;</button>
            <h2 style="margin-bottom: 2rem; text-align: center; color: #333;">Create New Event</h2>

            <form id="create-event-form" action="create_event.php" method="post">
                <div class="form-group">
                    <label for="event-title">Event Title</label>
                    <input type="text" id="event-title" placeholder="Enter event title" required name="title">
                </div>

                <div class="form-group">
                    <label for="event-date">Event Date</label>
                    <input type="date" id="event-date" required name="date">
                </div>

                <div class="form-group">
                    <label for="event-location">Location</label>
                    <input type="text" id="event-location" placeholder="Event location" required name="loct">
                </div>

                <div class="form-group">
                    <label for="event-category">Category</label>
                    <select id="event-category" required name="catg">
                        <option value="">Select category</option>
                        <option value="music">Music</option>
                        <option value="business">Business</option>
                        <option value="sports">Sports</option>
                        <option value="food">Food & Drink</option>
                        <option value="tech">Technology</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="event-price">Ticket Price ($)</label>
                    <input type="number" id="event-price" placeholder="0.00" min="0" step="0.01" requried name="price">
                </div>

                <div class="form-group">
                    <label for="event-capacity">Max Capacity</label>
                    <input type="number" id="event-capacity" placeholder="100" min="1" required name="capc">
                </div>

                <div class="form-group">
                    <label for="event-description">Description</label>
                    <textarea id="event-description" rows="4" placeholder="Describe your event..." name="dec"></textarea>
                </div>

                <button type="submit" class="register-btn">Create Event</button>
            </form>
        </div>
    </div>

    <!-- Registration Modal -->
    <div class="modal" id="register-modal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal('register')">&times;</button>
            <h2 style="margin-bottom: 2rem; text-align: center; color: #333;" id="register-title">Register for Event
            </h2>

            <form id="registration-form">
                <div class="form-group">
                    <label for="attendee-name">Full Name</label>
                    <input type="text" id="attendee-name" placeholder="Your full name" required>
                </div>

                <div class="form-group">
                    <label for="attendee-email">Email</label>
                    <input type="email" id="attendee-email" placeholder="your@email.com" required>
                </div>

                <div class="form-group">
                    <label for="attendee-phone">Phone Number</label>
                    <input type="tel" id="attendee-phone" placeholder="+1 (555) 123-4567">
                </div>

                <div class="form-group">
                    <label for="ticket-quantity">Number of Tickets</label>
                    <input type="number" id="ticket-quantity" value="1" min="1" max="10" required>
                </div>

                <button type="submit" class="register-btn">Complete Registration</button>
            </form>
        </div>
    </div>
    <script src="front-page.js"></script>
        
</body>

</html>