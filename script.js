// Background images URLs (using Unsplash for high-quality images)
const backgrounds = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Mountains
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80', // Forest
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80', // Nature
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80', // Ocean
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80', // Forest path
];

// Curated inspirational quotes from specific personalities
const inspirationalQuotes = [
  // Steve Jobs (12 quotes)
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "The people who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs" },
  { text: "Don't let the noise of others' opinions drown out your own inner voice.", author: "Steve Jobs" },
  { text: "Sometimes life hits you in the head with a brick. Don't lose faith.", author: "Steve Jobs" },
  { text: "Quality is more important than quantity. One home run is much better than two doubles.", author: "Steve Jobs" },
  { text: "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple.", author: "Steve Jobs" },
  { text: "I'm convinced that about half of what separates successful entrepreneurs from non-successful ones is pure perseverance.", author: "Steve Jobs" },
  { text: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.", author: "Steve Jobs" },

  // Winston Churchill (12 quotes)
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "We make a living by what we get, but we make a life by what we give.", author: "Winston Churchill" },
  { text: "Attitude is a little thing that makes a big difference.", author: "Winston Churchill" },
  { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
  { text: "To improve is to change; to be perfect is to change often.", author: "Winston Churchill" },
  { text: "Success consists of going from failure to failure without loss of enthusiasm.", author: "Winston Churchill" },
  { text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", author: "Winston Churchill" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
  { text: "The price of greatness is responsibility.", author: "Winston Churchill" },
  { text: "We are masters of the unsaid words, but slaves of those we let slip out.", author: "Winston Churchill" },
  { text: "Continuous effort - not strength or intelligence - is the key to unlocking our potential.", author: "Winston Churchill" },
  { text: "Never, never, never give up.", author: "Winston Churchill" },

  // Naval Ravikant (12 quotes)
  { text: "A calm mind, a fit body, a house full of love. These things cannot be bought — they must be earned.", author: "Naval Ravikant" },
  { text: "All the returns in life come from compound interest over many turns of the game.", author: "Naval Ravikant" },
  { text: "The genuine love for reading itself, when cultivated, is a superpower.", author: "Naval Ravikant" },
  { text: "Seek wealth, not money or status. Wealth is having assets that earn while you sleep.", author: "Naval Ravikant" },
  { text: "Play long-term games with long-term people.", author: "Naval Ravikant" },
  { text: "The most important skill for getting rich is becoming a perpetual learner.", author: "Naval Ravikant" },
  { text: "Happiness is a choice you make and a skill you develop.", author: "Naval Ravikant" },
  { text: "Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now.", author: "Naval Ravikant" },
  { text: "Clear thinker, better speaker. Unclear thinker, worse speaker.", author: "Naval Ravikant" },
  { text: "Reading is faster than listening. Doing is faster than watching.", author: "Naval Ravikant" },
  { text: "The three big ones in life are wealth, health, and happiness. We pursue them in that order, but their importance is reverse.", author: "Naval Ravikant" },
  { text: "If you can't see yourself working with someone for life, don't work with them for a day.", author: "Naval Ravikant" },

  // Bruce Lee (12 quotes)
  { text: "Be water, my friend.", author: "Bruce Lee" },
  { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
  { text: "Knowing is not enough, we must apply. Willing is not enough, we must do.", author: "Bruce Lee" },
  { text: "Absorb what is useful, discard what is not, add what is uniquely your own.", author: "Bruce Lee" },
  { text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.", author: "Bruce Lee" },
  { text: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.", author: "Bruce Lee" },
  { text: "The key to immortality is first living a life worth remembering.", author: "Bruce Lee" },
  { text: "Mistakes are always forgivable, if one has the courage to admit them.", author: "Bruce Lee" },
  { text: "If you spend too much time thinking about a thing, you'll never get it done.", author: "Bruce Lee" },
  { text: "Real living is living for others.", author: "Bruce Lee" },
  { text: "Do not pray for an easy life, pray for the strength to endure a difficult one.", author: "Bruce Lee" },
  { text: "The more we value things, the less we value ourselves.", author: "Bruce Lee" },

  // Marcus Aurelius (12 quotes)
  { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
  { text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
  { text: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius" },
  { text: "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.", author: "Marcus Aurelius" },
  { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { text: "If it is not right, do not do it. If it is not true, do not say it.", author: "Marcus Aurelius" },
  { text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius" },
  { text: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius" },
  { text: "You could leave life right now. Let that determine what you do and say and think.", author: "Marcus Aurelius" },
  { text: "The universe is change; our life is what our thoughts make it.", author: "Marcus Aurelius" },
  { text: "Confine yourself to the present.", author: "Marcus Aurelius" }
];

// Upside Down ominous quotes (shown when in Upside Down mode)
const upsideDownQuotes = [
  { text: "Your time is running out...", author: "The Upside Down" },
  { text: "The clock strikes for those who fail...", author: "Vecna" },
  { text: "Tick tock... incomplete...", author: "The Darkness" },
  { text: "Every unfinished task has consequences...", author: "The Shadow" },
  { text: "You cannot hide from what you left undone...", author: "The Void" },
  { text: "The darkness claims the unfulfilled...", author: "The Abyss" },
  { text: "Time bends for no one...", author: "Eternity" },
  { text: "Your goal remains... waiting...", author: "The Forgotten" }
];

// Success messages for goal completion celebration
const successMessages = [
  '🎉 Goal crushed!',
  '🔥 You did it!',
  '✨ Amazing work!',
  '💪 Goal completed!',
  '⭐ Crushing it!'
];

// DOM Elements
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const greetingEl = document.getElementById('greeting');
const focusInputEl = document.getElementById('focus-input');
const goalCheckbox = document.getElementById('goal-checkbox');
const escapeMessage = document.getElementById('escape-message');
const successMessage = document.getElementById('success-message');
const celebrationContainer = document.getElementById('celebration-container');
const quoteEl = document.getElementById('quote');
const quoteAuthorEl = document.getElementById('quote-author');
const refreshQuoteBtn = document.getElementById('refresh-quote-btn');
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
const closeSettingsBtn = document.getElementById('close-settings');
const bgSelect = document.getElementById('bg-select');
const bgModeSelect = document.getElementById('bg-mode');
const apiKeyInput = document.getElementById('api-key-input');
const saveApiKeyBtn = document.getElementById('save-api-key-btn');
const apiKeyStatus = document.getElementById('api-key-status');
const unsplashSettings = document.getElementById('unsplash-settings');
const staticSettings = document.getElementById('static-settings');
const refreshBgBtn = document.getElementById('refresh-bg-btn');
const photoAttribution = document.getElementById('photo-attribution');
const photographerLink = document.getElementById('photographer-link');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  updateDate();
  updateGreeting();
  checkDailyReset();
  loadGoalCompletion();
  createParticles(); // Create particles for Upside Down mode
  checkUpsideDownMode();
  loadDailyQuote();
  loadGoal();
  loadBackgroundMode();
  setupEventListeners();

  // Update time every second
  setInterval(updateTime, 1000);

  // Update greeting every minute
  setInterval(updateGreeting, 60000);

  // Check for Upside Down trigger every minute
  setInterval(checkUpsideDownTrigger, 60000);
});

// Time and Date Functions
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeEl.textContent = `${hours}:${minutes}`;
}

function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString('en-US', options);
}

// Greeting Function
function updateGreeting() {
  chrome.storage.sync.get(['userName'], (result) => {
    const name = result.userName || '';
    const hour = new Date().getHours();
    let greetingText = '';

    if (hour >= 0 && hour < 6) {
      // Late night greetings (12:00 AM - 5:59 AM)
      // Pick one randomly and keep it for the session
      const lateNightGreetings = [
        'Burning the midnight oil?',
        'Working late?',
        'Early bird or night owl?'
      ];

      // Check if we already have a greeting for this session
      let sessionGreeting = sessionStorage.getItem('lateNightGreeting');
      if (!sessionGreeting) {
        // Pick a random greeting and store it for this session
        const randomIndex = Math.floor(Math.random() * lateNightGreetings.length);
        sessionGreeting = lateNightGreetings[randomIndex];
        sessionStorage.setItem('lateNightGreeting', sessionGreeting);
      }
      greetingText = sessionGreeting;
    } else if (hour >= 6 && hour < 12) {
      greetingText = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
      greetingText = 'Good afternoon';
    } else {
      greetingText = 'Good evening';
    }

    greetingEl.textContent = name ? `${greetingText}, ${name}` : greetingText;
  });
}

// ============ QUOTE FUNCTIONS (LOCAL CURATED COLLECTION) ============

/**
 * Load daily quote with caching
 * @param {boolean} forceRefresh - Force fetch new quote regardless of cache
 */
async function loadDailyQuote(forceRefresh = false) {
  // Check if we're in Upside Down mode
  const isUpsideDown = document.body.classList.contains('upside-down');

  if (isUpsideDown) {
    // Show ominous quote in Upside Down mode
    const randomIndex = Math.floor(Math.random() * upsideDownQuotes.length);
    displayQuote(upsideDownQuotes[randomIndex]);
    return;
  }

  const today = new Date().toDateString();
  const result = await chrome.storage.local.get(['quoteDate', 'quoteData']);

  // Check if we have a cached quote from today and not forcing refresh
  if (!forceRefresh && result.quoteDate === today && result.quoteData) {
    displayQuote(result.quoteData);
    return;
  }

  // Pick a new random quote from our curated collection
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  const quoteData = inspirationalQuotes[randomIndex];

  // Cache the quote data for the day
  await chrome.storage.local.set({
    quoteDate: today,
    quoteData: quoteData
  });

  displayQuote(quoteData);
}

/**
 * Display quote on the page
 * @param {Object} quoteData - Quote data with text and author
 */
function displayQuote(quoteData) {
  quoteEl.textContent = `"${quoteData.text}"`;
  quoteAuthorEl.textContent = `— ${quoteData.author}`;
}

/**
 * Manually refresh the quote
 */
async function refreshQuote() {
  // Add rotation animation
  if (refreshQuoteBtn) {
    refreshQuoteBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      refreshQuoteBtn.style.transform = '';
    }, 300);
  }

  await loadDailyQuote(true);
}

// ============ GOAL FUNCTIONS ============

/**
 * Load and display the saved goal
 */
function loadGoal() {
  chrome.storage.sync.get(['mainGoal'], (result) => {
    if (result.mainGoal) {
      focusInputEl.textContent = result.mainGoal;
    }
    updateCheckboxVisibility();
  });
}

/**
 * Save the current goal to storage
 */
function saveGoal() {
  const goal = focusInputEl.textContent.trim();
  chrome.storage.sync.set({ mainGoal: goal });
  updateCheckboxVisibility();
}

/**
 * Update checkbox visibility based on whether goal exists
 */
function updateCheckboxVisibility() {
  const hasGoal = focusInputEl.textContent.trim().length > 0;
  if (hasGoal) {
    goalCheckbox.classList.add('visible');
  } else {
    goalCheckbox.classList.remove('visible');
  }
}

// ============ UPSIDE DOWN MODE FUNCTIONS ============

/**
 * Check and reset goal completion status daily at midnight
 */
function checkDailyReset() {
  const today = new Date().toDateString();
  const stored = localStorage.getItem('goalDate');

  if (stored !== today) {
    // New day - reset goal completion
    localStorage.setItem('goalDate', today);
    localStorage.setItem('goalCompleted', 'false');
    localStorage.removeItem('upsideDownActive');
  }
}

/**
 * Load goal completion status from localStorage
 */
function loadGoalCompletion() {
  const isCompleted = localStorage.getItem('goalCompleted') === 'true';
  if (goalCheckbox) {
    goalCheckbox.checked = isCompleted;
  }
}

/**
 * Save goal completion status
 */
function saveGoalCompletion(isCompleted) {
  localStorage.setItem('goalCompleted', isCompleted.toString());

  // Note: Upside Down escape is now handled by the celebration animation
  // See triggerCelebration() function
}

/**
 * Check if Upside Down mode should be active
 * DEFAULT: Normal mode (beautiful design)
 * Only activate Upside Down if explicitly set AND goal not complete
 */
async function checkUpsideDownMode() {
  const isUpsideDownActive = localStorage.getItem('upsideDownActive') === 'true';
  const isCompleted = localStorage.getItem('goalCompleted') === 'true';

  // Only activate if explicitly flagged AND goal is incomplete
  if (isUpsideDownActive && !isCompleted) {
    await activateUpsideDown();
  } else {
    // Default to normal mode - remove any residual upside-down class
    document.body.classList.remove('upside-down');
  }
}

/**
 * Check if it's time to trigger Upside Down mode (11:59 PM)
 */
function checkUpsideDownTrigger() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const isCompleted = localStorage.getItem('goalCompleted') === 'true';
  const isUpsideDownActive = localStorage.getItem('upsideDownActive') === 'true';

  // Trigger at 11:59 PM if goal is not complete
  if (hour === 23 && minute === 59 && !isCompleted && !isUpsideDownActive) {
    activateUpsideDown();
  }
}

/**
 * Update Vecna message with ominous quote
 */
function updateVecnaMessage() {
  const vecnaMessageEl = document.getElementById('vecna-message');
  if (!vecnaMessageEl) return;

  // Rotate between ominous quotes from upsideDownQuotes
  const randomIndex = Math.floor(Math.random() * upsideDownQuotes.length);
  vecnaMessageEl.textContent = upsideDownQuotes[randomIndex].text;
}

/**
 * Activate Upside Down mode
 */
async function activateUpsideDown() {
  document.body.classList.add('upside-down');
  localStorage.setItem('upsideDownActive', 'true');

  // Load creepy Upside Down background image
  await loadUpsideDownBackground();

  // Update Vecna message
  updateVecnaMessage();

  // Reload quote to show ominous quote (for bottom quote section if visible)
  loadDailyQuote(true);
}

/**
 * Escape from Upside Down mode
 */
async function escapeUpsideDown() {
  const wasUpsideDown = document.body.classList.contains('upside-down');

  if (!wasUpsideDown) {
    return;
  }

  // Show escape message
  escapeMessage.classList.add('show');

  // Wait 2.5 seconds for user to see the message
  setTimeout(async () => {
    // Remove Upside Down mode
    document.body.classList.remove('upside-down');
    localStorage.removeItem('upsideDownActive');

    // Clear the Upside Down background element
    const upsideDownBg = document.getElementById('upside-down-background');
    if (upsideDownBg) {
      upsideDownBg.style.backgroundImage = '';
    }

    // Restore normal background
    const result = await chrome.storage.sync.get(['backgroundMode']);
    const mode = result.backgroundMode || 'unsplash';
    if (mode === 'unsplash') {
      await loadUnsplashBackground();
    } else {
      const bgResult = await chrome.storage.sync.get(['backgroundIndex']);
      const bgIndex = bgResult.backgroundIndex !== undefined ? bgResult.backgroundIndex : 0;
      setStaticBackground(bgIndex);
    }

    // Hide escape message after transition
    setTimeout(() => {
      escapeMessage.classList.remove('show');
    }, 500);

    // Reload quote to show normal inspirational quote
    loadDailyQuote(true);
  }, 2500);
}

/**
 * Handle goal checkbox change
 */
function handleGoalCheckboxChange() {
  const isCompleted = goalCheckbox.checked;

  // Only trigger celebration when CHECKING (completing) the goal, not unchecking
  if (isCompleted) {
    const isUpsideDown = document.body.classList.contains('upside-down');

    // Trigger celebration (with special handling for Upside Down mode)
    triggerCelebration(isUpsideDown);
  }

  saveGoalCompletion(isCompleted);
}

/**
 * Toggle Upside Down mode (for testing purposes)
 */
function toggleUpsideDownTest() {
  const isCurrentlyUpsideDown = document.body.classList.contains('upside-down');

  if (isCurrentlyUpsideDown) {
    // Turn off Upside Down mode
    document.body.classList.remove('upside-down');
    localStorage.removeItem('upsideDownActive');
    // Reload quote to show normal quote
    loadDailyQuote(true);
  } else {
    // Turn on Upside Down mode - use the proper activation function
    activateUpsideDown();
  }
}

/**
 * Create organic floating particles for Upside Down mode (50-100 particles)
 */
function createParticles() {
  const particlesContainer = document.getElementById('upside-down-particles');
  if (!particlesContainer) return;

  // Create 50-100 organic particles for creepy effect
  const particleCount = Math.floor(Math.random() * 51) + 50; // 50-100 particles

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Varying sizes between 3-8px for organic feel
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random horizontal position
    particle.style.left = `${Math.random() * 100}%`;

    // Random animation delay for staggered effect
    particle.style.animationDelay = `${Math.random() * 20}s`;

    // Random animation duration between 15-25 seconds (slower, eerier)
    particle.style.animationDuration = `${Math.random() * 10 + 15}s`;

    // Varying opacity for depth
    particle.style.opacity = Math.random() * 0.4 + 0.3;

    particlesContainer.appendChild(particle);
  }
}

// ============ CELEBRATION FUNCTIONS ============

/**
 * Create confetti particles for celebration
 */
function createConfetti() {
  if (!celebrationContainer) return;

  const colors = ['#FFD700', '#4169E1', '#FF4444', '#32CD32', '#9370DB', '#FF69B4'];
  const shapes = ['circle', 'square', 'triangle'];
  const particleCount = Math.floor(Math.random() * 51) + 50; // 50-100 particles

  for (let i = 0; i < particleCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = `confetti ${shapes[Math.floor(Math.random() * shapes.length)]}`;

    // Random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = color;
    confetti.style.color = color;

    // Random size between 8-15px
    const size = Math.random() * 7 + 8;
    if (!confetti.classList.contains('triangle')) {
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
    }

    // Start from center-ish area
    const startX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
    confetti.style.left = `${startX}px`;
    confetti.style.top = `${window.innerHeight / 2}px`;

    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 400;
    confetti.style.setProperty('--drift', `${drift}px`);

    // Random animation delay for staggered effect
    confetti.style.animationDelay = `${Math.random() * 0.3}s`;

    // Random animation duration between 2.5-3.5 seconds
    confetti.style.animationDuration = `${Math.random() + 2.5}s`;

    celebrationContainer.appendChild(confetti);
  }

  // Clean up confetti after animation completes
  setTimeout(() => {
    celebrationContainer.innerHTML = '';
  }, 4000);
}

/**
 * Show success message with random quote
 */
function showSuccessMessage() {
  if (!successMessage) return;

  // Pick random success message
  const randomIndex = Math.floor(Math.random() * successMessages.length);
  successMessage.textContent = successMessages[randomIndex];

  // Show message
  successMessage.classList.add('show');

  // Hide message after 2 seconds
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 2000);
}

/**
 * Trigger celebration animation
 * @param {boolean} isFromUpsideDown - Whether celebration is triggered from Upside Down mode
 */
function triggerCelebration(isFromUpsideDown = false) {
  // Create confetti
  createConfetti();

  // Show success message
  showSuccessMessage();

  // If in Upside Down mode, escape after celebration
  if (isFromUpsideDown) {
    setTimeout(() => {
      escapeUpsideDown();
    }, 2500); // Wait for celebration to finish before showing escape message
  }
}

// ============ UNSPLASH API FUNCTIONS ============

// ============ UPSIDE DOWN BACKGROUND IMAGES ============
/**
 * Local Stranger Things / Hive Mind / Vecna background images
 *
 * These images are stored locally in the extension folder for:
 * - Faster loading (no network delay)
 * - Reliable performance (no API dependency)
 * - Authentic Stranger Things imagery
 *
 * Location: images/upside-down/
 * To add more images: Download high-res images and add paths to array below
 */
const upsideDownImages = [
  'images/upside-down/Vecna-1.jpg',
  'images/upside-down/Vecna-2.jpg',
  'images/upside-down/Vecna-3.jpg',
  'images/upside-down/hive-mind-1.jpg',
  'images/upside-down/hive-mind-2.jpg',
  'images/upside-down/hive-mind-3.png'
];

/**
 * Load and apply Upside Down background image
 * Randomly selects from local image array
 */
async function loadUpsideDownBackground() {
  try {
    // Randomly pick one image from the array
    const randomIndex = Math.floor(Math.random() * upsideDownImages.length);
    const imagePath = upsideDownImages[randomIndex];

    // Convert relative path to absolute chrome-extension:// URL
    const imageUrl = chrome.runtime.getURL(imagePath);

    // Get the Upside Down background element
    const upsideDownBg = document.getElementById('upside-down-background');

    if (upsideDownBg) {
      // Set background-image directly on the element
      upsideDownBg.style.backgroundImage = `url('${imageUrl}')`;
      console.log(`Loaded Upside Down background: ${imagePath} -> ${imageUrl} (${randomIndex + 1}/${upsideDownImages.length})`);
    } else {
      console.error('upside-down-background element not found');
    }
  } catch (error) {
    console.error('Error loading Upside Down background:', error);
    // Fallback to CSS gradient (already in place)
  }
}

/**
 * Fetch a random image from Unsplash API
 * @param {string} apiKey - Unsplash API key
 * @returns {Promise<Object>} Image data including URL and photographer info
 */
async function fetchUnsplashImage(apiKey) {
  try {
    // Add timeout to fetch request (10 seconds for images)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature', {
      headers: {
        'Authorization': `Client-ID ${apiKey}`
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    // Trigger download tracking as required by Unsplash API guidelines
    if (data.links && data.links.download_location) {
      fetch(data.links.download_location, {
        headers: {
          'Authorization': `Client-ID ${apiKey}`
        }
      });
    }

    return {
      url: data.urls.full + '&w=1920&q=80',
      photographer: data.user.name,
      photographerUrl: data.user.links.html + '?utm_source=spark_extension&utm_medium=referral',
      downloadLocation: data.links.download_location
    };
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    throw error;
  }
}

/**
 * Load background image from Unsplash with daily caching
 * @param {boolean} forceRefresh - Force fetch new image regardless of cache
 */
async function loadUnsplashBackground(forceRefresh = false) {
  try {
    const result = await chrome.storage.sync.get(['unsplashApiKey']);
    const apiKey = result.unsplashApiKey;

    if (!apiKey) {
      console.log('No Unsplash API key found');
      showAttribution(null);
      // Fallback to first static image
      setStaticBackground(0);
      return;
    }

    const today = new Date().toDateString();
    const cachedData = await chrome.storage.local.get(['unsplashImageDate', 'unsplashImageData']);

    // Check if we have a cached image from today and not forcing refresh
    if (!forceRefresh && cachedData.unsplashImageDate === today && cachedData.unsplashImageData) {
      const imageData = cachedData.unsplashImageData;
      setBackgroundImage(imageData.url);
      showAttribution(imageData);
      return;
    }

    // Fetch new image from Unsplash
    const imageData = await fetchUnsplashImage(apiKey);

    // Cache the image data
    await chrome.storage.local.set({
      unsplashImageDate: today,
      unsplashImageData: imageData
    });

    setBackgroundImage(imageData.url);
    showAttribution(imageData);

  } catch (error) {
    console.error('Error loading Unsplash background:', error);

    // Fallback: Try to use cached image if available
    const cachedData = await chrome.storage.local.get(['unsplashImageData']);
    if (cachedData.unsplashImageData) {
      setBackgroundImage(cachedData.unsplashImageData.url);
      showAttribution(cachedData.unsplashImageData);
    } else {
      // Ultimate fallback: use static image
      setStaticBackground(0);
      showAttribution(null);
    }
  }
}

/**
 * Set background image URL
 * @param {string} url - Image URL
 */
function setBackgroundImage(url) {
  document.body.style.backgroundImage = `url('${url}')`;
}

/**
 * Show photo attribution
 * @param {Object|null} imageData - Image data with photographer info
 */
function showAttribution(imageData) {
  if (imageData && imageData.photographer) {
    photographerLink.textContent = imageData.photographer;
    photographerLink.href = imageData.photographerUrl;
    photoAttribution.style.display = 'block';
  } else {
    photoAttribution.style.display = 'none';
  }
}

/**
 * Refresh background image manually
 */
async function refreshBackground() {
  const result = await chrome.storage.sync.get(['backgroundMode']);
  const mode = result.backgroundMode || 'unsplash';

  if (mode === 'unsplash') {
    // Add rotation animation
    refreshBgBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      refreshBgBtn.style.transform = '';
    }, 300);

    await loadUnsplashBackground(true);
  }
}

// ============ BACKGROUND MODE FUNCTIONS ============

/**
 * Load and initialize background based on saved mode
 */
async function loadBackgroundMode() {
  const result = await chrome.storage.sync.get(['backgroundMode', 'backgroundIndex']);
  const mode = result.backgroundMode || 'unsplash';
  const bgIndex = result.backgroundIndex !== undefined ? result.backgroundIndex : 0;

  bgModeSelect.value = mode;
  bgSelect.value = bgIndex;

  if (mode === 'unsplash') {
    showUnsplashSettings();
    await loadUnsplashBackground();
  } else {
    showStaticSettings();
    setStaticBackground(bgIndex);
    showAttribution(null);
  }

  // Load API key if exists
  const apiKeyData = await chrome.storage.sync.get(['unsplashApiKey']);
  if (apiKeyData.unsplashApiKey) {
    apiKeyInput.value = '••••••••••••••••';
  }
}

/**
 * Set static background image
 * @param {number} index - Background index
 */
function setStaticBackground(index) {
  setBackgroundImage(backgrounds[index]);
  chrome.storage.sync.set({ backgroundIndex: index });
}

/**
 * Show Unsplash settings in panel
 */
function showUnsplashSettings() {
  unsplashSettings.style.display = 'block';
  staticSettings.style.display = 'none';
  refreshBgBtn.style.display = 'block';
}

/**
 * Show static background settings in panel
 */
function showStaticSettings() {
  unsplashSettings.style.display = 'none';
  staticSettings.style.display = 'block';
  refreshBgBtn.style.display = 'none';
}

/**
 * Handle background mode change
 */
async function handleBackgroundModeChange(mode) {
  await chrome.storage.sync.set({ backgroundMode: mode });

  if (mode === 'unsplash') {
    showUnsplashSettings();
    await loadUnsplashBackground();
  } else {
    showStaticSettings();
    const result = await chrome.storage.sync.get(['backgroundIndex']);
    const bgIndex = result.backgroundIndex !== undefined ? result.backgroundIndex : 0;
    setStaticBackground(bgIndex);
    showAttribution(null);
  }
}

/**
 * Save Unsplash API key
 */
async function saveApiKey() {
  const apiKey = apiKeyInput.value.trim();

  if (!apiKey) {
    showApiKeyStatus('Please enter an API key', 'error');
    return;
  }

  // Don't save if it's the masked value
  if (apiKey === '••••••••••••••••') {
    showApiKeyStatus('API key already saved', 'success');
    return;
  }

  try {
    // Test the API key by making a request
    showApiKeyStatus('Testing API key...', '');

    // Add timeout to API key test (10 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch('https://api.unsplash.com/photos/random', {
      headers: {
        'Authorization': `Client-ID ${apiKey}`
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error('Invalid API key');
    }

    // Save the API key
    await chrome.storage.sync.set({ unsplashApiKey: apiKey });

    showApiKeyStatus('API key saved successfully!', 'success');
    apiKeyInput.value = '••••••••••••••••';

    // Load a new background image
    setTimeout(async () => {
      await loadUnsplashBackground(true);
    }, 1000);

  } catch (error) {
    console.error('Error saving API key:', error);
    showApiKeyStatus('Invalid API key. Please check and try again.', 'error');
  }
}

/**
 * Show API key status message
 * @param {string} message - Status message
 * @param {string} type - Message type (success, error, or empty)
 */
function showApiKeyStatus(message, type) {
  apiKeyStatus.textContent = message;
  apiKeyStatus.className = 'api-key-status';

  if (type === 'success') {
    apiKeyStatus.classList.add('success');
  } else if (type === 'error') {
    apiKeyStatus.classList.add('error');
  }

  if (message) {
    setTimeout(() => {
      if (type !== 'success') {
        apiKeyStatus.textContent = '';
        apiKeyStatus.className = 'api-key-status';
      }
    }, 5000);
  }
}

// ============ EVENT LISTENERS ============

function setupEventListeners() {
  // Goal input (contenteditable)
  focusInputEl.addEventListener('blur', () => {
    saveGoal();
  });

  focusInputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      focusInputEl.blur();
    }
  });

  focusInputEl.addEventListener('input', () => {
    saveGoal();
  });

  // Goal checkbox (Upside Down mode)
  if (goalCheckbox) {
    goalCheckbox.addEventListener('change', handleGoalCheckboxChange);
  }

  // Settings
  settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.add('active');
  });

  closeSettingsBtn.addEventListener('click', () => {
    settingsPanel.classList.remove('active');
  });

  // Background mode change
  bgModeSelect.addEventListener('change', (e) => {
    handleBackgroundModeChange(e.target.value);
  });

  // Static background selection
  bgSelect.addEventListener('change', (e) => {
    setStaticBackground(parseInt(e.target.value));
  });

  // API Key management
  saveApiKeyBtn.addEventListener('click', saveApiKey);

  apiKeyInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveApiKey();
    }
  });

  // Clear masked value when user starts typing
  apiKeyInput.addEventListener('focus', () => {
    if (apiKeyInput.value === '••••••••••••••••') {
      apiKeyInput.value = '';
    }
  });

  // Refresh background
  refreshBgBtn.addEventListener('click', refreshBackground);

  // Refresh quote
  if (refreshQuoteBtn) {
    refreshQuoteBtn.addEventListener('click', refreshQuote);
  }

  // Close settings when clicking outside
  settingsPanel.addEventListener('click', (e) => {
    if (e.target === settingsPanel) {
      settingsPanel.classList.remove('active');
    }
  });

  // Demogorgon Trigger: Click to toggle Upside Down mode
  const demogorgonTrigger = document.getElementById('demogorgon-trigger');
  if (demogorgonTrigger) {
    demogorgonTrigger.addEventListener('click', () => {
      toggleUpsideDownTest();
    });
  }
}
