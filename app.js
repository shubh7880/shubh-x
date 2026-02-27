/* ==========================================================================
   INCREDIBLE INDIA — Tourism SPA
   Router, Data, Views, Map, Booking, Animations
   ========================================================================== */

// ─── Destination Data ────────────────────────────────────────────────────────

const destinations = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    city: 'Agra',
    state: 'Uttar Pradesh',
    region: 'North',
    type: 'Heritage',
    tagline: 'A Monument to Eternal Love',
    description: 'The Taj Mahal stands as the crown jewel of Indian architecture, a luminous white marble mausoleum built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. This UNESCO World Heritage Site draws millions of visitors who come to witness its ethereal beauty at sunrise and sunset, when the marble seems to glow with an otherworldly light.',
    highlights: ['UNESCO World Heritage Site', 'Mughal Architecture Marvel', 'Sunrise & Sunset Views', 'Marble Inlay Artistry', 'Symmetrical Gardens', 'Yamuna River Views'],
    price: { budget: 2500, comfort: 5500, luxury: 12000 },
    rating: 4.9,
    reviewCount: 12847,
    coords: [27.1751, 78.0421],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    city: 'Alleppey',
    state: 'Kerala',
    region: 'South',
    type: 'Nature',
    tagline: "God's Own Country",
    description: 'Drift through a serene network of lagoons, lakes, and canals fringed by lush tropical greenery. The Kerala backwaters offer an unforgettable houseboat experience where you can watch village life unfold along the banks, savor fresh seafood cooked on board, and fall asleep to the gentle lap of water against the hull.',
    highlights: ['Houseboat Cruises', 'Tropical Landscapes', 'Village Life Experience', 'Fresh Seafood Cuisine', 'Ayurvedic Wellness', 'Bird Watching'],
    price: { budget: 5200, comfort: 9800, luxury: 18000 },
    rating: 4.7,
    reviewCount: 8932,
    coords: [9.4981, 76.3388],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    region: 'North',
    type: 'Heritage',
    tagline: 'The Pink City of Kings',
    description: 'Jaipur, the vibrant capital of Rajasthan, is a photographer\'s paradise of rose-tinted buildings, magnificent forts, and ornate palaces. From the hilltop Amber Fort to the intricate Hawa Mahal, every corner reveals the grandeur of Rajput royalty blended with Mughal elegance.',
    highlights: ['Amber Fort & Palace', 'Hawa Mahal (Palace of Winds)', 'City Palace Museum', 'Jantar Mantar Observatory', 'Bazaar Shopping', 'Traditional Cuisine'],
    price: { budget: 4800, comfort: 8500, luxury: 16000 },
    rating: 4.6,
    reviewCount: 10234,
    coords: [26.9124, 75.7873],
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    region: 'North',
    type: 'Spiritual',
    tagline: 'The Spiritual Heart of India',
    description: 'One of the oldest continuously inhabited cities on Earth, Varanasi pulses with spiritual energy along the sacred ghats of the Ganges. Witness the mesmerizing Ganga Aarti ceremony at dusk, explore narrow lanes filled with silk weavers and temple bells, and experience a city where life and death dance in eternal harmony.',
    highlights: ['Ganga Aarti Ceremony', 'Sacred Ghats', 'Silk Weaving Heritage', 'Ancient Temples', 'Boat Rides at Dawn', 'Street Food Culture'],
    price: { budget: 3200, comfort: 6500, luxury: 11000 },
    rating: 4.5,
    reviewCount: 7621,
    coords: [25.3176, 83.0068],
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'goa',
    name: 'Goa',
    city: 'Panaji',
    state: 'Goa',
    region: 'West',
    type: 'Beach',
    tagline: 'Where Sun Meets the Sea',
    description: 'India\'s smallest state packs a mighty punch with its golden beaches, Portuguese colonial architecture, vibrant nightlife, and laid-back charm. From the bustling shores of Baga to the tranquil beauty of Palolem, Goa offers the perfect blend of relaxation, adventure, and cultural discovery.',
    highlights: ['Golden Beaches', 'Portuguese Architecture', 'Water Sports', 'Spice Plantations', 'Nightlife & Music', 'Seafood Paradise'],
    price: { budget: 4500, comfort: 8000, luxury: 15000 },
    rating: 4.4,
    reviewCount: 15432,
    coords: [15.2993, 74.1240],
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    city: 'Leh',
    state: 'Ladakh',
    region: 'North',
    type: 'Mountain',
    tagline: 'The Roof of the World',
    description: 'A high-altitude desert kingdom of stark beauty where ancient Buddhist monasteries cling to rocky hillsides beneath vast cobalt skies. Ladakh offers some of the most dramatic landscapes on Earth — from the surreal blue of Pangong Lake to the dizzying heights of Khardung La, the world\'s highest motorable pass.',
    highlights: ['Pangong Lake', 'Buddhist Monasteries', 'Khardung La Pass', 'Nubra Valley', 'Stargazing Skies', 'Mountain Biking'],
    price: { budget: 12000, comfort: 20000, luxury: 35000 },
    rating: 4.8,
    reviewCount: 6543,
    coords: [34.1526, 77.5771],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hampi',
    name: 'Hampi',
    city: 'Hampi',
    state: 'Karnataka',
    region: 'South',
    type: 'Heritage',
    tagline: 'Ruins of a Forgotten Empire',
    description: 'Scattered across a surreal boulder-strewn landscape, the ruins of Hampi tell the story of the mighty Vijayanagara Empire. This UNESCO World Heritage Site features stunning temple complexes, royal enclosures, and ancient bazaars set against dramatic granite hills and the Tungabhadra River.',
    highlights: ['Virupaksha Temple', 'Stone Chariot', 'Royal Enclosure', 'Matanga Hill Sunrise', 'Coracle Boat Rides', 'Boulder Climbing'],
    price: { budget: 3800, comfort: 7200, luxury: 13000 },
    rating: 4.5,
    reviewCount: 4321,
    coords: [15.3350, 76.4600],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb20be4fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    city: 'Darjeeling',
    state: 'West Bengal',
    region: 'East',
    type: 'Mountain',
    tagline: 'Queen of the Hills',
    description: 'Perched on a ridge in the eastern Himalayas, Darjeeling enchants with its misty tea gardens, the majestic sight of Kanchenjunga at dawn, and the charm of the historic toy train. This hill station blends British colonial heritage with Tibetan Buddhist culture in a uniquely atmospheric setting.',
    highlights: ['Tea Garden Tours', 'Tiger Hill Sunrise', 'Toy Train Heritage Ride', 'Kanchenjunga Views', 'Buddhist Monasteries', 'Cable Car Rides'],
    price: { budget: 5500, comfort: 9500, luxury: 17000 },
    rating: 4.3,
    reviewCount: 5678,
    coords: [27.0360, 88.2627],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rann-of-kutch',
    name: 'Rann of Kutch',
    city: 'Kutch',
    state: 'Gujarat',
    region: 'West',
    type: 'Nature',
    tagline: 'The White Desert Under Stars',
    description: 'The Great Rann of Kutch transforms into an endless expanse of white salt desert stretching to the horizon, creating one of India\'s most otherworldly landscapes. Under a full moon, the salt flats gleam like freshly fallen snow, while the annual Rann Utsav festival brings this remote wonder to life with music, dance, and crafts.',
    highlights: ['White Salt Desert', 'Full Moon Nights', 'Rann Utsav Festival', 'Handicraft Villages', 'Flamingo Sanctuary', 'Sunset Views'],
    price: { budget: 6000, comfort: 10000, luxury: 18000 },
    rating: 4.6,
    reviewCount: 3456,
    coords: [23.7337, 69.8597],
    image: 'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    city: 'Port Blair',
    state: 'Andaman & Nicobar',
    region: 'South',
    type: 'Beach',
    tagline: 'Tropical Paradise Untouched',
    description: 'Emerald islands floating in sapphire seas, the Andamans offer India\'s most pristine beaches and vibrant coral reefs. From the historic Cellular Jail to the bioluminescent waters of Havelock Island, this archipelago is a paradise for divers, snorkelers, and anyone seeking tropical serenity far from the mainland.',
    highlights: ['Radhanagar Beach', 'Scuba Diving & Snorkeling', 'Cellular Jail History', 'Bioluminescence', 'Mangrove Kayaking', 'Indigenous Culture'],
    price: { budget: 8500, comfort: 15000, luxury: 28000 },
    rating: 4.7,
    reviewCount: 4892,
    coords: [11.7401, 92.6586],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    city: 'Rishikesh',
    state: 'Uttarakhand',
    region: 'North',
    type: 'Spiritual',
    tagline: 'Yoga Capital of the World',
    description: 'Nestled in the foothills of the Himalayas where the Ganges rushes through forested valleys, Rishikesh is the global epicenter of yoga and meditation. Beyond its spiritual allure, the town offers thrilling white-water rafting, bungee jumping, and some of the most scenic riverside camping in India.',
    highlights: ['Yoga & Meditation', 'White-Water Rafting', 'Ram Jhula & Laxman Jhula', 'Beatles Ashram', 'Camping by Ganges', 'Bungee Jumping'],
    price: { budget: 3000, comfort: 6000, luxury: 12000 },
    rating: 4.4,
    reviewCount: 8765,
    coords: [30.0869, 78.2676],
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mysore',
    name: 'Mysore Palace',
    city: 'Mysuru',
    state: 'Karnataka',
    region: 'South',
    type: 'Heritage',
    tagline: 'City of Royal Splendor',
    description: 'Mysuru enchants visitors with its regal heritage centered around the magnificent Mysore Palace, a Indo-Saracenic masterpiece that blazes with 97,000 lights on Sunday evenings. The city is also famous for its fragrant sandalwood, silk saris, and the grand Dasara festival celebrations.',
    highlights: ['Mysore Palace Illumination', 'Chamundi Hills', 'Brindavan Gardens', 'Silk & Sandalwood', 'Dasara Festival', 'Local Cuisine'],
    price: { budget: 2800, comfort: 5500, luxury: 10000 },
    rating: 4.5,
    reviewCount: 6234,
    coords: [12.3051, 76.6551],
    image: 'https://images.unsplash.com/photo-1600112356623-38aa0b6bff49?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho',
    city: 'Khajuraho',
    state: 'Madhya Pradesh',
    region: 'Central',
    type: 'Heritage',
    tagline: 'Temples of Love and Devotion',
    description: 'The temples of Khajuraho are among the greatest artistic achievements of medieval India, adorned with exquisitely detailed sculptures that celebrate life, love, and divine beauty. Built by the Chandela dynasty between 950-1050 AD, these UNESCO-listed temples showcase the finest examples of Indian temple architecture.',
    highlights: ['UNESCO Temple Complex', 'Medieval Sculptures', 'Sound & Light Show', 'Western Group Temples', 'Archaeological Museum', 'Rural Village Tours'],
    price: { budget: 3500, comfort: 6800, luxury: 12000 },
    rating: 4.3,
    reviewCount: 3890,
    coords: [24.8318, 79.9199],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sundarbans',
    name: 'Sundarbans',
    city: 'Sundarbans',
    state: 'West Bengal',
    region: 'East',
    type: 'Wildlife',
    tagline: 'Kingdom of the Royal Bengal Tiger',
    description: 'The Sundarbans, the world\'s largest mangrove forest, is a mysterious labyrinth of waterways and dense jungle that shelters the legendary Royal Bengal Tiger. This UNESCO World Heritage Site offers boat safaris through tidal channels where you might spot tigers swimming between islands, saltwater crocodiles, and exotic birdlife.',
    highlights: ['Royal Bengal Tiger', 'Mangrove Forest Cruises', 'Bird Watching Paradise', 'Crocodile Spotting', 'Village Homestays', 'Sunrise Boat Rides'],
    price: { budget: 7000, comfort: 12000, luxury: 22000 },
    rating: 4.2,
    reviewCount: 2345,
    coords: [21.9497, 89.1833],
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'shimla',
    name: 'Shimla',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    region: 'North',
    type: 'Mountain',
    tagline: 'Queen of Hill Stations',
    description: 'The former summer capital of British India, Shimla cascades along a ridge surrounded by pine-clad mountains and apple orchards. Its colonial architecture, bustling Mall Road, and the heritage toy train journey from Kalka make it one of North India\'s most beloved hill retreats.',
    highlights: ['Mall Road Promenade', 'Heritage Toy Train', 'Christ Church', 'Jakhoo Temple', 'Kufri Adventures', 'Apple Orchards'],
    price: { budget: 4200, comfort: 7500, luxury: 14000 },
    rating: 4.1,
    reviewCount: 9876,
    coords: [31.1048, 77.1734],
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150458?auto=format&fit=crop&w=800&q=80',
  },
];

// ─── Reviews Data ────────────────────────────────────────────────────────────

const reviews = {
  'taj-mahal': [
    { author: 'Sarah Mitchell', country: 'USA', rating: 5, date: 'Jan 2026', text: 'Absolutely breathtaking. Seeing the Taj Mahal at sunrise was a life-changing experience. The way the marble changes color is beyond description.' },
    { author: 'Takeshi Yamamoto', country: 'Japan', rating: 5, date: 'Dec 2025', text: 'The craftsmanship and symmetry are unparalleled. I spent three hours just admiring the pietra dura inlay work on the walls.' },
    { author: 'Elena Rodriguez', country: 'Spain', rating: 4, date: 'Nov 2025', text: 'Magnificent structure. It can get very crowded so I recommend arriving right when it opens. The gardens are equally beautiful.' },
  ],
  'kerala-backwaters': [
    { author: 'James Cooper', country: 'UK', rating: 5, date: 'Feb 2026', text: 'Our houseboat experience was pure magic. Waking up on the water surrounded by coconut palms and the sound of birds — unforgettable.' },
    { author: 'Marie Dubois', country: 'France', rating: 5, date: 'Jan 2026', text: 'The food alone is worth the trip. Fresh fish curry cooked on the houseboat while drifting through canals. Paradise found.' },
    { author: 'Hans Mueller', country: 'Germany', rating: 4, date: 'Dec 2025', text: 'Very peaceful and scenic. The Ayurvedic massage treatments were excellent. Would recommend the overnight houseboat for the full experience.' },
  ],
  'default': [
    { author: 'Alex Thompson', country: 'Australia', rating: 5, date: 'Jan 2026', text: 'An incredible experience that exceeded all expectations. India never fails to amaze with its beauty and warmth.' },
    { author: 'Priya Sharma', country: 'India', rating: 4, date: 'Dec 2025', text: 'Even as a local, I was blown away by the beauty of this place. Highly recommend visiting during the off-season for a more intimate experience.' },
    { author: 'Marco Rossi', country: 'Italy', rating: 5, date: 'Nov 2025', text: 'The colors, the culture, the people — everything about this destination left me speechless. Already planning my return trip.' },
  ],
};

// ─── Experiences Data ────────────────────────────────────────────────────────

const experiences = [
  { icon: '🧘', title: 'Yoga & Meditation', text: 'Find inner peace in the birthplace of yoga', image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=600&q=80' },
  { icon: '🍛', title: 'Culinary Journeys', text: 'Savor the spices and flavors of regional cuisines', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80' },
  { icon: '🐅', title: 'Wildlife Safaris', text: 'Track tigers and elephants in lush national parks', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80' },
  { icon: '🏛️', title: 'Heritage Walks', text: 'Walk through centuries of history and architecture', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80' },
  { icon: '🎉', title: 'Festival Celebrations', text: 'Experience the vibrant colors of Indian festivals', image: 'https://images.unsplash.com/photo-1574265365352-0396774a0da4?auto=format&fit=crop&w=600&q=80' },
  { icon: '🌿', title: 'Ayurveda Retreats', text: 'Rejuvenate with ancient healing traditions', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80' },
];

// ─── Testimonials Data ───────────────────────────────────────────────────────

const testimonials = [
  { author: 'Emily Watson', location: 'London, UK', initials: 'EW', rating: 5, text: 'India completely transformed my perspective on travel. From the chaos of Delhi to the serenity of Kerala, every moment was a revelation. This is not just a trip — it\'s a spiritual journey.' },
  { author: 'Carlos Mendez', location: 'Buenos Aires, Argentina', initials: 'CM', rating: 5, text: 'I\'ve traveled to 40 countries and India remains the most unforgettable. The warmth of the people, the depth of culture, and the sheer beauty of the landscapes make it truly incredible.' },
  { author: 'Yuki Tanaka', location: 'Tokyo, Japan', initials: 'YT', rating: 5, text: 'The Taj Mahal at sunrise, the ghats of Varanasi at dusk, the backwaters of Kerala under the stars — India is a feast for the senses that I will carry in my heart forever.' },
];

// ─── Helper Functions ────────────────────────────────────────────────────────

function starsSVG(count = 5, size = 14) {
  return Array.from({ length: 5 }, (_, i) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${i < count ? 'var(--marigold)' : '#ddd'}"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  ).join('');
}

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function formatPriceUSD(price) {
  return '$' + Math.round(price / 83).toLocaleString();
}

// ─── Router ──────────────────────────────────────────────────────────────────

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    window.addEventListener('hashchange', () => this.navigate());
    window.addEventListener('load', () => this.navigate());
  }

  on(pattern, handler) {
    this.routes[pattern] = handler;
    return this;
  }

  navigate() {
    const hash = window.location.hash.slice(1) || '/';
    const app = document.getElementById('app');

    // Match route
    for (const [pattern, handler] of Object.entries(this.routes)) {
      const regex = new RegExp('^' + pattern.replace(/:(\w+)/g, '([\\w-]+)') + '$');
      const match = hash.match(regex);
      if (match) {
        const params = match.slice(1);

        // Page transition
        app.style.animation = 'none';
        app.offsetHeight; // force reflow
        app.style.animation = 'page-enter 0.5s var(--ease-out-expo)';

        handler(...params);
        this.currentRoute = pattern;
        this.updateNav(hash);
        window.scrollTo({ top: 0, behavior: 'instant' });
        this.updateNavStyle(hash);

        // Init animations after render
        setTimeout(() => initScrollAnimations(), 100);
        return;
      }
    }

    // Fallback to home
    window.location.hash = '#/';
  }

  updateNav(hash) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + hash) {
        link.classList.add('active');
      }
    });
  }

  updateNavStyle(hash) {
    const navbar = document.getElementById('navbar');
    if (hash === '/' || hash === '') {
      navbar.classList.add('dark-mode');
    } else {
      navbar.classList.remove('dark-mode');
    }
  }
}

// ─── View Renderers ──────────────────────────────────────────────────────────

function renderHome() {
  const featured = destinations.slice(0, 6);
  const app = document.getElementById('app');

  app.innerHTML = `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1920&q=80')"></div>
      <svg class="hero-mandala-float" viewBox="0 0 200 200" style="top:10%;right:-5%;width:400px">
        <g opacity="0.6">
          <circle cx="100" cy="100" r="6" fill="white"/>
          ${Array.from({length:12}, (_,i) => `<ellipse cx="100" cy="65" rx="6" ry="20" fill="none" stroke="white" stroke-width="0.8" transform="rotate(${i*30} 100 100)"/>`).join('')}
          <circle cx="100" cy="100" r="50" fill="none" stroke="white" stroke-width="0.5" stroke-dasharray="4 4"/>
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" stroke-width="0.3"/>
        </g>
      </svg>
      <svg class="hero-mandala-float" viewBox="0 0 200 200" style="bottom:10%;left:-8%;width:500px">
        <g opacity="0.4">
          ${Array.from({length:8}, (_,i) => `<ellipse cx="100" cy="55" rx="8" ry="30" fill="none" stroke="white" stroke-width="0.6" transform="rotate(${i*45} 100 100)"/>`).join('')}
          <circle cx="100" cy="100" r="60" fill="none" stroke="white" stroke-width="0.3" stroke-dasharray="3 5"/>
          <circle cx="100" cy="100" r="90" fill="none" stroke="white" stroke-width="0.2"/>
        </g>
      </svg>
      <div class="hero-content">
        <p class="hero-eyebrow">Welcome to</p>
        <h1 class="hero-title"><span>Incredible India</span></h1>
        <p class="hero-subtitle">Where ancient wisdom meets timeless beauty, and every journey becomes a story worth telling</p>
        <div class="hero-cta-group">
          <a href="#/destinations" class="btn btn-primary">Explore Destinations
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#/booking" class="btn btn-outline">Plan Your Journey</a>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item reveal"><div class="stat-number" data-count="40">0</div><div class="stat-label">UNESCO Heritage Sites</div></div>
          <div class="stat-item reveal reveal-delay-1"><div class="stat-number" data-count="29">0</div><div class="stat-label">States to Explore</div></div>
          <div class="stat-item reveal reveal-delay-2"><div class="stat-number" data-count="22">0</div><div class="stat-label">Official Languages</div></div>
          <div class="stat-item reveal reveal-delay-3"><div class="stat-number" data-count="5000">0</div><div class="stat-label">Years of History</div></div>
        </div>
      </div>
    </section>

    <!-- Featured Destinations -->
    <section class="destinations-section">
      <div class="container">
        <div class="section-header reveal">
          <p class="section-eyebrow">Top Destinations</p>
          <h2 class="section-title">Places That Take Your Breath Away</h2>
          <p class="section-subtitle">From snow-capped peaks to tropical shores, discover the destinations that make India truly incredible</p>
        </div>
        <div class="dest-grid">
          ${featured.map((d, i) => renderDestCard(d, i)).join('')}
        </div>
        <div style="text-align:center; margin-top:48px" class="reveal">
          <a href="#/destinations" class="btn btn-primary">View All Destinations</a>
        </div>
      </div>
    </section>

    <!-- Experiences -->
    <section class="experiences-section">
      <div class="container">
        <div class="section-header reveal">
          <p class="section-eyebrow">Unique Experiences</p>
          <h2 class="section-title">Immerse Yourself in India</h2>
          <p class="section-subtitle">Beyond sightseeing — experiences that touch your soul</p>
        </div>
        <div class="exp-grid">
          ${experiences.map((e, i) => `
            <div class="exp-card reveal reveal-delay-${i % 3 + 1}">
              <div class="exp-card-bg" style="background-image:url('${e.image}')"></div>
              <div class="exp-card-overlay">
                <div class="exp-card-icon">${e.icon}</div>
                <h3 class="exp-card-title">${e.title}</h3>
                <p class="exp-card-text">${e.text}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Culture -->
    <section class="culture-section">
      <div class="container">
        <div class="culture-grid">
          <div class="culture-text reveal">
            <p class="section-eyebrow" style="color:var(--gold-light)">Rich Heritage</p>
            <h2>A Civilization That Has Inspired the World</h2>
            <p>India's cultural tapestry is woven from thousands of years of art, music, philosophy, and tradition. From the classical ragas that map human emotion to the intricate temple carvings that tell epic stories, every facet of Indian culture invites deep exploration.</p>
            <div class="culture-features">
              <div class="culture-feature">
                <div class="culture-feature-icon">🎵</div>
                <div class="culture-feature-text"><h4>Music & Dance</h4><p>Classical ragas and folk rhythms</p></div>
              </div>
              <div class="culture-feature">
                <div class="culture-feature-icon">🏛️</div>
                <div class="culture-feature-text"><h4>Architecture</h4><p>Temples, forts, and palaces</p></div>
              </div>
              <div class="culture-feature">
                <div class="culture-feature-icon">🎨</div>
                <div class="culture-feature-text"><h4>Art & Crafts</h4><p>Textiles, paintings, pottery</p></div>
              </div>
              <div class="culture-feature">
                <div class="culture-feature-icon">🍽️</div>
                <div class="culture-feature-text"><h4>Cuisine</h4><p>A world of flavors and spices</p></div>
              </div>
            </div>
          </div>
          <div class="culture-image-mosaic reveal reveal-delay-2">
            <div class="culture-img" style="background-image:url('https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80')"></div>
            <div class="culture-img" style="background-image:url('https://images.unsplash.com/photo-1574265365352-0396774a0da4?auto=format&fit=crop&w=400&q=80')"></div>
            <div class="culture-img" style="background-image:url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80')"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header reveal">
          <p class="section-eyebrow">Traveler Stories</p>
          <h2 class="section-title">What Our Travelers Say</h2>
        </div>
        <div class="testimonials-grid">
          ${testimonials.map((t, i) => `
            <div class="testimonial-card reveal reveal-delay-${i + 1}">
              <div class="testimonial-stars">${starsSVG(t.rating, 16)}</div>
              <p class="testimonial-text">${t.text}</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar">${t.initials}</div>
                <div class="testimonial-author-info">
                  <h5>${t.author}</h5>
                  <p>${t.location}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content reveal">
          <h2>Ready to Explore India?</h2>
          <p>Your extraordinary journey begins with a single step</p>
          <a href="#/booking" class="btn btn-primary" style="font-size:14px">
            Start Planning
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;

  // Show footer
  document.getElementById('footer').style.display = 'block';
}

function renderDestCard(d, i) {
  return `
    <div class="dest-card reveal reveal-delay-${(i % 3) + 1}" onclick="window.location.hash='#/place/${d.id}'">
      <div class="dest-card-img" style="background-image:url('${d.image}')">
        <span class="dest-card-badge">${d.type}</span>
        <span class="dest-card-rating">
          <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${d.rating}
        </span>
      </div>
      <div class="dest-card-body">
        <h3 class="dest-card-name">${d.name}</h3>
        <p class="dest-card-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${d.city}, ${d.state}
        </p>
        <p class="dest-card-desc">${d.tagline}. ${d.description.slice(0, 100)}...</p>
        <div class="dest-card-footer">
          <div class="dest-card-price">${formatPrice(d.price.budget)} <small>/ person</small></div>
          <span class="dest-card-action">
            Explore
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </div>
      </div>
    </div>
  `;
}

function renderDestinations() {
  const app = document.getElementById('app');
  const regions = ['All', ...new Set(destinations.map(d => d.region))];

  app.innerHTML = `
    <section class="destinations-page">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">All Destinations</p>
          <h2 class="section-title">Discover India's Wonders</h2>
          <p class="section-subtitle">15 handpicked destinations across the subcontinent</p>
        </div>
        <div class="dest-filters" id="destFilters">
          ${regions.map(r => `<button class="dest-filter-btn ${r === 'All' ? 'active' : ''}" data-region="${r}">${r}</button>`).join('')}
        </div>
        <div class="dest-view-toggle">
          <button class="view-toggle-btn active" data-view="grid">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            Grid
          </button>
          <button class="view-toggle-btn" data-view="map">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
            Map
          </button>
        </div>
        <div id="destContent">
          <div class="dest-grid" id="destGrid">
            ${destinations.map((d, i) => renderDestCard(d, i)).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById('footer').style.display = 'block';

  // Filter logic
  document.getElementById('destFilters').addEventListener('click', (e) => {
    if (!e.target.classList.contains('dest-filter-btn')) return;
    document.querySelectorAll('.dest-filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const region = e.target.dataset.region;
    const filtered = region === 'All' ? destinations : destinations.filter(d => d.region === region);
    document.getElementById('destGrid').innerHTML = filtered.map((d, i) => renderDestCard(d, i)).join('');
    setTimeout(() => initScrollAnimations(), 50);
  });

  // View toggle
  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      const content = document.getElementById('destContent');

      if (view === 'map') {
        content.innerHTML = '<div class="map-container" id="destMap"></div>';
        initDestinationsMap();
      } else {
        const activeRegion = document.querySelector('.dest-filter-btn.active').dataset.region;
        const filtered = activeRegion === 'All' ? destinations : destinations.filter(d => d.region === activeRegion);
        content.innerHTML = `<div class="dest-grid" id="destGrid">${filtered.map((d, i) => renderDestCard(d, i)).join('')}</div>`;
        setTimeout(() => initScrollAnimations(), 50);
      }
    });
  });
}

function renderPlaceDetail(id) {
  const dest = destinations.find(d => d.id === id);
  if (!dest) { window.location.hash = '#/destinations'; return; }

  const destReviews = reviews[id] || reviews['default'];
  const app = document.getElementById('app');

  app.innerHTML = `
    <section class="detail-hero" style="background-image:url('${dest.image}')">
      <div class="detail-hero-content">
        <a href="#/destinations" class="detail-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Destinations
        </a>
        <h1 class="detail-title">${dest.name}</h1>
        <div class="detail-meta">
          <span class="detail-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${dest.city}, ${dest.state}
          </span>
          <span class="detail-meta-item">
            <span class="detail-rating-stars">${starsSVG(Math.round(dest.rating), 16)}</span>
            ${dest.rating} (${dest.reviewCount.toLocaleString()} reviews)
          </span>
          <span class="detail-meta-item" style="background:rgba(255,255,255,0.1);padding:4px 12px;border-radius:20px;">${dest.type}</span>
        </div>
      </div>
    </section>

    <section class="detail-body" style="background:var(--warm-white)">
      <div class="detail-layout">
        <div class="detail-main">
          <h3>About ${dest.name}</h3>
          <p>${dest.description}</p>

          <h3>Highlights</h3>
          <div class="detail-highlights">
            ${dest.highlights.map(h => `
              <div class="detail-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--saffron)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ${h}
              </div>
            `).join('')}
          </div>

          <h3>Location</h3>
          <div class="detail-map" id="detailMap"></div>

          <h3>Traveler Reviews</h3>
          <div class="reviews-list">
            ${destReviews.map(r => `
              <div class="review-card">
                <div class="review-header">
                  <div class="review-author">
                    <div class="review-avatar">${r.author.split(' ').map(n=>n[0]).join('')}</div>
                    <div class="review-author-info">
                      <h5>${r.author}</h5>
                      <p>${r.country} · ${r.date}</p>
                    </div>
                  </div>
                  <div class="review-stars">${starsSVG(r.rating, 14)}</div>
                </div>
                <p class="review-text">${r.text}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="booking-sidebar">
          <div class="booking-widget">
            <div class="booking-widget-header">
              <div class="booking-price">${formatPrice(dest.price.budget)} <small>/ person</small></div>
              <span style="font-size:12px;color:var(--warm-gray)">${formatPriceUSD(dest.price.budget)} USD</span>
            </div>

            <div class="booking-form-group">
              <label class="booking-label">Check-in Date</label>
              <input type="date" class="booking-input" id="bookingCheckin">
            </div>
            <div class="booking-form-group">
              <label class="booking-label">Check-out Date</label>
              <input type="date" class="booking-input" id="bookingCheckout">
            </div>
            <div class="booking-row">
              <div class="booking-form-group">
                <label class="booking-label">Adults</label>
                <select class="booking-input" id="bookingAdults">
                  <option value="1">1</option><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>
                </select>
              </div>
              <div class="booking-form-group">
                <label class="booking-label">Children</label>
                <select class="booking-input" id="bookingChildren">
                  <option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>
                </select>
              </div>
            </div>

            <div class="booking-form-group">
              <label class="booking-label">Package</label>
              <div class="booking-package-options">
                <button class="booking-package-btn active" data-pkg="budget" data-price="${dest.price.budget}">Budget<br><small>${formatPrice(dest.price.budget)}</small></button>
                <button class="booking-package-btn" data-pkg="comfort" data-price="${dest.price.comfort}">Comfort<br><small>${formatPrice(dest.price.comfort)}</small></button>
                <button class="booking-package-btn" data-pkg="luxury" data-price="${dest.price.luxury}">Luxury<br><small>${formatPrice(dest.price.luxury)}</small></button>
              </div>
            </div>

            <div class="booking-summary" id="bookingSummary">
              <div class="booking-summary-row"><span>Package (per person)</span><span id="summaryPkg">${formatPrice(dest.price.budget)}</span></div>
              <div class="booking-summary-row"><span>Travelers</span><span id="summaryTravelers">2 adults</span></div>
              <div class="booking-summary-row"><span>Service fee</span><span id="summaryFee">${formatPrice(500)}</span></div>
              <div class="booking-summary-total"><span>Total</span><span id="summaryTotal">${formatPrice(dest.price.budget * 2 + 500)}</span></div>
            </div>

            <button class="booking-submit" onclick="alert('Booking request submitted! We\\'ll contact you soon to confirm your ${dest.name} trip.')">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById('footer').style.display = 'block';

  // Init detail map
  setTimeout(async () => {
    if (document.getElementById('detailMap')) {
      const map = L.map('detailMap').setView(dest.coords, 10);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
      }).addTo(map);

      // Add India boundary on detail map too
      const boundary = await loadIndiaBoundary();
      addIndiaBoundary(map, boundary);

      const icon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="width:24px;height:24px;background:var(--saffron);border-radius:50%;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });
      L.marker(dest.coords, { icon }).addTo(map);
    }
  }, 200);

  // Booking calculator
  initBookingCalculator(dest);
}

function renderBookingPage() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <section class="booking-page">
      <div class="booking-page-layout">
        <div class="section-header" style="margin-bottom:40px">
          <p class="section-eyebrow">Plan Your Trip</p>
          <h2 class="section-title">Book Your Indian Adventure</h2>
          <p class="section-subtitle">Choose your destination and let us craft the perfect itinerary</p>
        </div>

        <div class="booking-page-card">
          <div class="booking-form-group">
            <label class="booking-label">Choose Destination</label>
            <div class="booking-dest-select" id="bookingDestSelect">
              ${destinations.map(d => `
                <button class="booking-dest-option" data-id="${d.id}">
                  <div style="font-size:24px">${d.type === 'Beach' ? '🏖️' : d.type === 'Mountain' ? '🏔️' : d.type === 'Heritage' ? '🏛️' : d.type === 'Spiritual' ? '🙏' : d.type === 'Wildlife' ? '🐅' : '🌿'}</div>
                  <h5>${d.name}</h5>
                  <p>From ${formatPrice(d.price.budget)}</p>
                </button>
              `).join('')}
            </div>
          </div>

          <div id="bookingFormSection" style="display:none; margin-top:32px;">
            <div class="booking-row" style="margin-bottom:16px">
              <div class="booking-form-group">
                <label class="booking-label">Check-in</label>
                <input type="date" class="booking-input" id="pgBookCheckin">
              </div>
              <div class="booking-form-group">
                <label class="booking-label">Check-out</label>
                <input type="date" class="booking-input" id="pgBookCheckout">
              </div>
            </div>
            <div class="booking-row" style="margin-bottom:16px">
              <div class="booking-form-group">
                <label class="booking-label">Adults</label>
                <select class="booking-input" id="pgBookAdults">
                  <option value="1">1</option><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
                </select>
              </div>
              <div class="booking-form-group">
                <label class="booking-label">Children</label>
                <select class="booking-input" id="pgBookChildren">
                  <option value="0" selected>0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>
                </select>
              </div>
            </div>
            <div class="booking-form-group" style="margin-bottom:16px">
              <label class="booking-label">Package Tier</label>
              <div class="booking-package-options" id="pgBookPackages"></div>
            </div>
            <div class="booking-form-group">
              <label class="booking-label">Full Name</label>
              <input type="text" class="booking-input" placeholder="Enter your full name">
            </div>
            <div class="booking-row" style="margin-top:16px">
              <div class="booking-form-group">
                <label class="booking-label">Email</label>
                <input type="email" class="booking-input" placeholder="your@email.com">
              </div>
              <div class="booking-form-group">
                <label class="booking-label">Phone</label>
                <input type="tel" class="booking-input" placeholder="+91 XXXXX XXXXX">
              </div>
            </div>

            <div class="booking-summary" id="pgBookSummary" style="margin-top:24px">
              <div class="booking-summary-row"><span>Destination</span><span id="pgSummaryDest">-</span></div>
              <div class="booking-summary-row"><span>Package</span><span id="pgSummaryPkg">-</span></div>
              <div class="booking-summary-row"><span>Travelers</span><span id="pgSummaryTravelers">2</span></div>
              <div class="booking-summary-row"><span>Service fee</span><span>₹500</span></div>
              <div class="booking-summary-total"><span>Total</span><span id="pgSummaryTotal">-</span></div>
            </div>

            <button class="booking-submit" style="margin-top:24px" onclick="alert('Booking submitted! Our team will reach out within 24 hours to finalize your itinerary.')">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById('footer').style.display = 'block';

  // Destination selection
  let selectedDest = null;
  let selectedPkg = 'budget';

  document.getElementById('bookingDestSelect').addEventListener('click', (e) => {
    const option = e.target.closest('.booking-dest-option');
    if (!option) return;

    document.querySelectorAll('.booking-dest-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');

    selectedDest = destinations.find(d => d.id === option.dataset.id);
    document.getElementById('bookingFormSection').style.display = 'block';

    // Render package options
    document.getElementById('pgBookPackages').innerHTML = `
      <button class="booking-package-btn active" data-pkg="budget">Budget<br><small>${formatPrice(selectedDest.price.budget)}</small></button>
      <button class="booking-package-btn" data-pkg="comfort">Comfort<br><small>${formatPrice(selectedDest.price.comfort)}</small></button>
      <button class="booking-package-btn" data-pkg="luxury">Luxury<br><small>${formatPrice(selectedDest.price.luxury)}</small></button>
    `;

    selectedPkg = 'budget';
    updatePageBookingSummary();

    // Package click
    document.getElementById('pgBookPackages').addEventListener('click', (e2) => {
      const btn = e2.target.closest('.booking-package-btn');
      if (!btn) return;
      document.querySelectorAll('#pgBookPackages .booking-package-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPkg = btn.dataset.pkg;
      updatePageBookingSummary();
    });
  });

  function updatePageBookingSummary() {
    if (!selectedDest) return;
    const adults = parseInt(document.getElementById('pgBookAdults')?.value || 2);
    const children = parseInt(document.getElementById('pgBookChildren')?.value || 0);
    const total = selectedDest.price[selectedPkg] * (adults + Math.ceil(children * 0.5)) + 500;

    document.getElementById('pgSummaryDest').textContent = selectedDest.name;
    document.getElementById('pgSummaryPkg').textContent = selectedPkg.charAt(0).toUpperCase() + selectedPkg.slice(1) + ' — ' + formatPrice(selectedDest.price[selectedPkg]);
    document.getElementById('pgSummaryTravelers').textContent = `${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}`;
    document.getElementById('pgSummaryTotal').textContent = formatPrice(total);
  }

  // Listen for changes
  ['pgBookAdults', 'pgBookChildren'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updatePageBookingSummary);
  });
}

// ─── Map Functions ───────────────────────────────────────────────────────────

let destMap = null;
let indiaBoundaryCache = null;

async function loadIndiaBoundary() {
  if (indiaBoundaryCache) return indiaBoundaryCache;
  try {
    const resp = await fetch('india-boundary.geojson');
    indiaBoundaryCache = await resp.json();
    return indiaBoundaryCache;
  } catch (e) {
    console.warn('Could not load India boundary:', e);
    return null;
  }
}

function addIndiaBoundary(map, geojson) {
  if (!geojson) return;

  // Style for India boundary — saffron outline, light fill
  const indiaStyle = {
    color: '#D4600E',
    weight: 2.5,
    opacity: 0.9,
    fillColor: '#FEF7EC',
    fillOpacity: 0.15,
    dashArray: null,
  };

  // Style for island territories
  const islandStyle = {
    color: '#D4600E',
    weight: 1.5,
    opacity: 0.7,
    fillColor: '#FEF7EC',
    fillOpacity: 0.12,
  };

  L.geoJSON(geojson, {
    style: function(feature) {
      return feature.properties.type === 'island' ? islandStyle : indiaStyle;
    }
  }).addTo(map);
}

async function initDestinationsMap() {
  if (destMap) { destMap.remove(); destMap = null; }

  destMap = L.map('destMap', {
    minZoom: 4,
    maxZoom: 18,
  }).setView([22.5, 78.9], 5);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19,
  }).addTo(destMap);

  // Add India label overlay on top
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    pane: 'shadowPane',
  }).addTo(destMap);

  // Load and display official India boundary
  const boundary = await loadIndiaBoundary();
  addIndiaBoundary(destMap, boundary);

  destinations.forEach(d => {
    const icon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="width:28px;height:28px;background:#D4600E;border-radius:50%;border:3px solid white;box-shadow:0 2px 10px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    const marker = L.marker(d.coords, { icon }).addTo(destMap);
    marker.bindPopup(`
      <div class="map-popup">
        <h4>${d.name}</h4>
        <p>${d.city}, ${d.state}</p>
        <p style="color:var(--saffron);font-weight:600">${formatPrice(d.price.budget)} / person</p>
        <a href="#/place/${d.id}" class="map-popup-btn">View Details</a>
      </div>
    `);
  });
}

// ─── Booking Calculator ──────────────────────────────────────────────────────

function initBookingCalculator(dest) {
  let currentPkg = 'budget';

  const pkgBtns = document.querySelectorAll('.booking-package-btn');
  pkgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pkgBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPkg = btn.dataset.pkg;
      updateSummary();
    });
  });

  const updateSummary = () => {
    const adults = parseInt(document.getElementById('bookingAdults')?.value || 2);
    const children = parseInt(document.getElementById('bookingChildren')?.value || 0);
    const pricePerPerson = dest.price[currentPkg];
    const travelers = adults + Math.ceil(children * 0.5);
    const fee = 500;
    const total = pricePerPerson * travelers + fee;

    const summaryPkg = document.getElementById('summaryPkg');
    const summaryTravelers = document.getElementById('summaryTravelers');
    const summaryFee = document.getElementById('summaryFee');
    const summaryTotal = document.getElementById('summaryTotal');

    if (summaryPkg) summaryPkg.textContent = formatPrice(pricePerPerson);
    if (summaryTravelers) summaryTravelers.textContent = `${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}`;
    if (summaryFee) summaryFee.textContent = formatPrice(fee);
    if (summaryTotal) summaryTotal.textContent = formatPrice(total);

    // Update header price
    const headerPrice = document.querySelector('.booking-price');
    if (headerPrice) headerPrice.innerHTML = `${formatPrice(pricePerPerson)} <small>/ person</small>`;
  };

  ['bookingAdults', 'bookingChildren'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updateSummary);
  });
}

// ─── Scroll Animations ───────────────────────────────────────────────────────

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Counter animation for stats
        if (entry.target.querySelector('.stat-number')) {
          const numEl = entry.target.querySelector('.stat-number');
          const target = parseInt(numEl.dataset.count);
          animateCounter(numEl, target);
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

function animateCounter(el, target) {
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(eased * target);

    el.textContent = target >= 1000 ? current.toLocaleString() + '+' : current + '+';

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll handler
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ─── Preloader ───────────────────────────────────────────────────────────────

function hidePreloader() {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
    setTimeout(() => preloader.remove(), 600);
  }, 1200);
}

// ─── Initialize App ──────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  hidePreloader();
  initNavigation();

  const router = new Router();

  router
    .on('/', renderHome)
    .on('/destinations', renderDestinations)
    .on('/place/:id', renderPlaceDetail)
    .on('/booking', renderBookingPage)
    .on('/experiences', renderDestinations); // reuse destinations for now

  // Set default dates for booking inputs
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  const formatDate = (d) => d.toISOString().split('T')[0];

  // Apply default dates after render
  const origNavigate = router.navigate.bind(router);
  const patchedNavigate = function() {
    origNavigate();
    setTimeout(() => {
      const checkin = document.getElementById('bookingCheckin') || document.getElementById('pgBookCheckin');
      const checkout = document.getElementById('bookingCheckout') || document.getElementById('pgBookCheckout');
      if (checkin && !checkin.value) checkin.value = formatDate(today);
      if (checkout && !checkout.value) checkout.value = formatDate(nextWeek);
    }, 100);
  };
  window.removeEventListener('hashchange', origNavigate);
  window.addEventListener('hashchange', patchedNavigate);
});
