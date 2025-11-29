// Background images URLs (using Unsplash for high-quality images)
const backgrounds = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Mountains
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80', // Forest
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80', // Nature
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80', // Ocean
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80', // Forest path
];

// Fallback quotes (used if Quotable API fails)
const fallbackQuotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
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

// DOM Elements
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const greetingEl = document.getElementById('greeting');
const focusInputEl = document.getElementById('focus-input');
const goalCheckbox = document.getElementById('goal-checkbox');
const escapeMessage = document.getElementById('escape-message');
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

// ============ QUOTE FUNCTIONS (Quotable API) ============

/**
 * Fetch a quote from Quotable API
 * @returns {Promise<Object>} Quote data with text and author
 */
async function fetchQuoteFromAPI() {
  try {
    // Add timeout to fetch request (5 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(
      'https://api.quotable.io/random?tags=inspirational,motivational,success&maxLength=150',
      { signal: controller.signal }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    return {
      text: data.content,
      author: data.author
    };
  } catch (error) {
    console.error('Error fetching quote from Quotable API:', error);
    // Return a random fallback quote
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
  }
}

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

  try {
    const result = await chrome.storage.local.get(['quoteDate', 'quoteData']);

    // Check if we have a cached quote from today and not forcing refresh
    if (!forceRefresh && result.quoteDate === today && result.quoteData) {
      displayQuote(result.quoteData);
      return;
    }

    // Fetch new quote from API
    const quoteData = await fetchQuoteFromAPI();

    // Cache the quote data
    await chrome.storage.local.set({
      quoteDate: today,
      quoteData: quoteData
    });

    displayQuote(quoteData);

  } catch (error) {
    console.error('Error loading daily quote:', error);
    // Display a fallback quote
    displayQuote(fallbackQuotes[0]);
  }
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
  });
}

/**
 * Save the current goal to storage
 */
function saveGoal() {
  const goal = focusInputEl.textContent.trim();
  chrome.storage.sync.set({ mainGoal: goal });
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

  if (isCompleted) {
    // Goal completed - escape the Upside Down if active
    escapeUpsideDown();
  }
}

/**
 * Check if Upside Down mode should be active
 */
function checkUpsideDownMode() {
  const isUpsideDownActive = localStorage.getItem('upsideDownActive') === 'true';
  const isCompleted = localStorage.getItem('goalCompleted') === 'true';

  if (isUpsideDownActive && !isCompleted) {
    activateUpsideDown();
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
 * Activate Upside Down mode
 */
function activateUpsideDown() {
  document.body.classList.add('upside-down');
  localStorage.setItem('upsideDownActive', 'true');

  // Reload quote to show ominous quote
  loadDailyQuote(true);
}

/**
 * Escape from Upside Down mode
 */
function escapeUpsideDown() {
  const wasUpsideDown = document.body.classList.contains('upside-down');

  if (!wasUpsideDown) {
    return;
  }

  // Show escape message
  escapeMessage.classList.add('show');

  setTimeout(() => {
    // Remove Upside Down mode
    document.body.classList.remove('upside-down');
    localStorage.removeItem('upsideDownActive');

    // Hide escape message
    setTimeout(() => {
      escapeMessage.classList.remove('show');
    }, 2000);

    // Reload quote to show normal inspirational quote
    loadDailyQuote(true);
  }, 100);
}

/**
 * Handle goal checkbox change
 */
function handleGoalCheckboxChange() {
  const isCompleted = goalCheckbox.checked;
  saveGoalCompletion(isCompleted);
}

// ============ UNSPLASH API FUNCTIONS ============

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
}
