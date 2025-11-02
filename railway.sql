-- CREATE TABLE events
-- (
--  id INT AUTO_INCREMENT PRIMARY KEY,
--  title VARCHAR(100),
--  eventdate DATE,
--  eventlocation VARCHAR(100),
--  price int(10),
--  category VARCHAR(200),
--  attendees int(10),
--  capacity int(10),
--  descripton TEXT
-- );

-- INSERT INTO events 
-- (title, eventdate, eventlocation, price, category, attendees, capacity, descripton)
-- VALUES
-- ('Summer Music Festival', '2025-07-10', 'Central Park, NY', 89.99, 'music', 1200, 100, 'The biggest summer music festival featuring top artists.');

-- INSERT INTO events
-- (title, eventdate, eventlocation, price, category, attendees, capacity, descripton)
-- VALUES
-- ('Tech Conference 2024', '2024-08-22', 'Convention Center, SF', 299.99, 'tech', 850, 1000, 'Learn about the latest trends in technology and innovation.'),
-- ('Food & Wine Expo', '2024-09-05', 'Downtown Plaza, LA', 45.00, 'food', 650, 800, 'Taste the finest cuisines and wines from around the world.'),
-- ('Business Networking Summit', '2024-09-18', 'Business District, Chicago', 149.99, 'business', 420, 500, 'Connect with industry leaders and expand your network.'),
-- ('Marathon Championship', '2024-10-10', 'City Stadium, Boston', 25.00, 'sports', 2800, 3000, 'Watch the city''s best runners compete in this thrilling marathon.'),
-- ('Jazz Night Live', '2024-11-02', 'Blue Note Club, NYC', 65.00, 'music', 180, 200, 'An intimate evening with world-class jazz musicians.');

ALTER TABLE events 
DROP COLUMN attendees