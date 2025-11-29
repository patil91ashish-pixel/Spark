// Background images URLs (using Unsplash for high-quality images)
const backgrounds = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Mountains
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80', // Forest
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80', // Nature
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80', // Ocean
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80', // Forest path
];

// Inspirational quotes collection
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
  { text: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
  { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" }
];

// DOM Elements
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const greetingEl = document.getElementById('greeting');
const focusQuestionEl = document.getElementById('focus-question');
const focusInputEl = document.getElementById('focus-input');
const focusDisplayEl = document.getElementById('focus-display');
const focusTextEl = document.getElementById('focus-text');
const editFocusBtn = document.getElementById('edit-focus');
const quoteEl = document.getElementById('quote');
const quoteAuthorEl = document.getElementById('quote-author');
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');
const toggleTodoBtn = document.getElementById('toggle-todo');
const todoPanel = document.getElementById('todo-panel');
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
const closeSettingsBtn = document.getElementById('close-settings');
const bgSelect = document.getElementById('bg-select');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  updateDate();
  updateGreeting();
  loadDailyQuote();
  loadFocus();
  loadTodos();
  loadBackground();
  setupEventListeners();

  // Update time every second
  setInterval(updateTime, 1000);

  // Update greeting every minute
  setInterval(updateGreeting, 60000);
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

    if (hour < 12) {
      greetingText = 'Good morning';
    } else if (hour < 18) {
      greetingText = 'Good afternoon';
    } else {
      greetingText = 'Good evening';
    }

    greetingEl.textContent = name ? `${greetingText}, ${name}` : greetingText;
  });
}

// Quote Functions
function loadDailyQuote() {
  const today = new Date().toDateString();

  chrome.storage.local.get(['quoteDate', 'quoteIndex'], (result) => {
    let quoteIndex;

    if (result.quoteDate === today && result.quoteIndex !== undefined) {
      quoteIndex = result.quoteIndex;
    } else {
      quoteIndex = Math.floor(Math.random() * quotes.length);
      chrome.storage.local.set({ quoteDate: today, quoteIndex: quoteIndex });
    }

    const quote = quotes[quoteIndex];
    quoteEl.textContent = `"${quote.text}"`;
    quoteAuthorEl.textContent = `— ${quote.author}`;
  });
}

// Focus Functions
function loadFocus() {
  chrome.storage.sync.get(['mainFocus'], (result) => {
    if (result.mainFocus) {
      showFocusDisplay(result.mainFocus);
    } else {
      showFocusInput();
    }
  });
}

function showFocusInput() {
  focusQuestionEl.style.display = 'block';
  focusInputEl.style.display = 'block';
  focusDisplayEl.style.display = 'none';
  focusInputEl.focus();
}

function showFocusDisplay(focus) {
  focusQuestionEl.style.display = 'none';
  focusInputEl.style.display = 'none';
  focusDisplayEl.style.display = 'flex';
  focusTextEl.textContent = focus;
}

function saveFocus() {
  const focus = focusInputEl.value.trim();
  if (focus) {
    chrome.storage.sync.set({ mainFocus: focus }, () => {
      showFocusDisplay(focus);
      focusInputEl.value = '';
    });
  }
}

// Todo Functions
function loadTodos() {
  chrome.storage.sync.get(['todos'], (result) => {
    const todos = result.todos || [];
    renderTodos(todos);
  });
}

function renderTodos(todos) {
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodo(index));

    const text = document.createElement('span');
    text.className = 'todo-text';
    text.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-todo';
    deleteBtn.textContent = '✕';
    deleteBtn.addEventListener('click', () => deleteTodo(index));

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;

  chrome.storage.sync.get(['todos'], (result) => {
    const todos = result.todos || [];
    todos.push({ text, completed: false });

    chrome.storage.sync.set({ todos }, () => {
      renderTodos(todos);
      todoInput.value = '';
    });
  });
}

function toggleTodo(index) {
  chrome.storage.sync.get(['todos'], (result) => {
    const todos = result.todos || [];
    todos[index].completed = !todos[index].completed;

    chrome.storage.sync.set({ todos }, () => {
      renderTodos(todos);
    });
  });
}

function deleteTodo(index) {
  chrome.storage.sync.get(['todos'], (result) => {
    const todos = result.todos || [];
    todos.splice(index, 1);

    chrome.storage.sync.set({ todos }, () => {
      renderTodos(todos);
    });
  });
}

// Background Functions
function loadBackground() {
  chrome.storage.sync.get(['backgroundIndex'], (result) => {
    const bgIndex = result.backgroundIndex !== undefined ? result.backgroundIndex : 0;
    setBackground(bgIndex);
    bgSelect.value = bgIndex;
  });
}

function setBackground(index) {
  document.body.style.backgroundImage = `url('${backgrounds[index]}')`;
  chrome.storage.sync.set({ backgroundIndex: index });
}

// Event Listeners
function setupEventListeners() {
  // Focus input
  focusInputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveFocus();
    }
  });

  focusInputEl.addEventListener('blur', () => {
    if (focusInputEl.value.trim()) {
      saveFocus();
    }
  });

  editFocusBtn.addEventListener('click', () => {
    chrome.storage.sync.remove('mainFocus', () => {
      showFocusInput();
    });
  });

  // Todo
  addTodoBtn.addEventListener('click', addTodo);

  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });

  toggleTodoBtn.addEventListener('click', () => {
    todoPanel.classList.toggle('hidden');
  });

  // Settings
  settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.add('active');
  });

  closeSettingsBtn.addEventListener('click', () => {
    settingsPanel.classList.remove('active');
  });

  bgSelect.addEventListener('change', (e) => {
    setBackground(parseInt(e.target.value));
  });

  // Close settings when clicking outside
  settingsPanel.addEventListener('click', (e) => {
    if (e.target === settingsPanel) {
      settingsPanel.classList.remove('active');
    }
  });
}
