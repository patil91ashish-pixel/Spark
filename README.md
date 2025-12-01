# Spark - New Tab Chrome Extension ✨

A beautiful, minimal Chrome extension that transforms your new tab page into an inspiring productivity dashboard with a mysterious twist. Built with vanilla JavaScript, featuring dynamic backgrounds, time-based greetings, Pomodoro timer, and a hidden "Upside Down" mode inspired by Stranger Things.

## 📸 Screenshots

### Normal Mode
<img width="1161" height="791" alt="normal-mode" src="https://github.com/user-attachments/assets/57cd44c0-a744-4ecb-9254-581f67ab40b1" />


### Pomodoro Timer
![Pomodoro Timer](screenshots/pomodoro-active.png)

### Upside Down Mode 🌀
![Upside Down Mode](screenshots/upside-down-mode.png)

### Celebration Animation 🎉
![Celebration](screenshots/celebration.png)


## 🌟 Features

### Core Productivity
- **⏰ Dynamic Time & Date**: Real-time clock with elegant formatting that updates every second
- **👋 Smart Time-based Greetings**: Personalized greetings with variations throughout the day
  - Late night (12-6 AM): Random playful greetings
  - Morning (6 AM-12 PM): "Good morning"
  - Afternoon (12-6 PM): "Good afternoon"
  - Evening (6-9 PM): "Good evening"
  - Late evening (9 PM-12 AM): Random motivational greetings
- **🎯 Daily Goal Tracking**: Set your main focus for the day with checkbox completion
- **🎉 Celebration Animation**: Beautiful confetti animation when you complete your goal
- **💬 Daily Inspirational Quotes**: Curated collection of 25+ motivational quotes with daily rotation
- **🔄 Quote Refresh**: Manual refresh button to get a new quote anytime

### Pomodoro Focus Timer 🍅
- **Traditional Pomodoro Technique**: 25-minute focus sessions, 5-minute short breaks, 15-minute long breaks
- **Session Tracking**: Visual indicator showing current session (1/4, 2/4, etc.)
- **Smart Persistence**: Timer state saved across sessions, auto-resets daily
- **Session Types**: Automatically cycles between work and break sessions
- **Visual Notifications**: Gentle flash and completion messages (no sound)
- **Clean Interface**: Minimal design with "Focus Timer" heading and elegant controls
- **Hidden in Upside Down Mode**: Disappears when in the mysterious dimension

### Dynamic Backgrounds
- **🖼️ Unsplash API Integration**: High-quality landscape photos that change hourly
- **📸 Photographer Attribution**: Proper credits for Unsplash photographers
- **🔄 Manual Refresh**: Force-load a new background anytime
- **💾 Smart Caching**: Hourly caching reduces API calls (24 unique images per day)
- **🎨 Static Backgrounds**: Fallback collection of 5 curated nature images

### 🌀 Upside Down Mode (Easter Egg)
A hidden Stranger Things-inspired theme that transforms your tab into the eerie Upside Down dimension:
- **180° Page Rotation**: Everything flips upside down
- **Creepy Vecna Backgrounds**: 6 custom Stranger Things images (Vecna, Hive Mind)
- **RGB Glitch Effects**: Heavy chromatic aberration and text corruption
- **Red Eyes**: Menacing Vecna presence watching from above
- **Organic Particles**: 50-100 floating spores with varied colors
- **Dark Atmosphere**: Pulsing vignettes, tendrils, scan lines, and film grain
- **Creepy Messages**: "Complete your goal to escape..."
- **Escape Animation**: Dramatic message when completing your goal
- **Demogorgon Trigger**: 👹 icon in bottom-right corner to manually toggle

### Settings & Customization
- **⚙️ Settings Panel**: Elegant glassmorphic settings overlay
- **🔐 API Key Management**: Secure storage for your Unsplash API key
- **🖼️ Background Mode Toggle**: Switch between Unsplash dynamic and static images
- **💾 Cloud Sync**: All preferences saved via Chrome Storage Sync API

## 📦 Installation

### Method 1: Load as Unpacked Extension (Development)

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/patil91ashish/Spark.git
   cd Spark
   ```

2. **Open Chrome Extensions page**
   - Navigate to `chrome://extensions/`
   - Or Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right

4. **Load the extension**
   - Click "Load unpacked"
   - Select the Spark folder
   - Extension appears in your list

5. **Get Unsplash API Key (Optional but Recommended)**
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Create a free account
   - Register a new application
   - Copy your Access Key
   - Open a new tab → Click Settings ⚙️
   - Paste your API key and save

6. **Test it**
   - Open a new tab (Cmd+T or Ctrl+T)
   - Enjoy your Spark new tab page!

### Method 2: Install Icons (Optional)

Create an `icons` folder with:
- `icon16.png` (16×16 pixels)
- `icon48.png` (48×48 pixels)
- `icon128.png` (128×128 pixels)

## 🎮 Usage Guide

### Setting Your Daily Goal
1. Type your main focus in the center input field
2. Press Enter or click away to save
3. Checkbox appears next to your goal
4. Check it off when complete → Celebration animation!
5. In Upside Down mode: Completing the goal lets you escape

### Using the Pomodoro Timer
1. **Start a Focus Session**: Click "Start" button
2. **Work**: Focus for 25 minutes
3. **Take a Break**: Timer automatically switches to 5-minute break
4. **Long Break**: After 4 sessions, get a 15-minute break
5. **Reset**: Click "Reset" to restart current session
6. **Persistence**: Timer continues even if you close the tab (state saved)

### Exploring Upside Down Mode
1. Click the 👹 Demogorgon icon (bottom-right corner)
2. Experience the eerie transformation
3. Complete your goal to trigger escape sequence
4. Wait for "You've escaped the Upside Down" message
5. Normal mode restores after 2.5 seconds

### Changing Backgrounds
1. Click ⚙️ Settings button
2. Choose between Unsplash API or Static backgrounds
3. If using Unsplash, enter your API key
4. Click 🔄 refresh button (top-right) for new image
5. New image loads every hour automatically

### Daily Quotes
- Quote changes daily at midnight
- Click 🔄 button next to author for instant refresh
- 25+ curated motivational quotes

## 📁 File Structure

```
Spark/
├── manifest.json                    # Extension config & permissions
├── newtab.html                      # Main HTML structure
├── styles.css                       # All styling (38KB+ with Upside Down effects)
├── script.js                        # Core logic (43KB+ with Pomodoro & Upside Down)
├── README.md                        # This file
├── images/
│   └── upside-down/                # Stranger Things background images
│       ├── Vecna-1.jpg
│       ├── Vecna-2.jpg
│       ├── Vecna-3.jpg
│       ├── hive-mind-1.jpg
│       ├── hive-mind-2.jpg
│       └── hive-mind-3.png
└── icons/                          # Extension icons (optional)
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## 🛠️ Technology Stack

- **HTML5**: Semantic structure with contenteditable for goal input
- **CSS3**:
  - Glassmorphic blur effects with `backdrop-filter`
  - Complex animations (confetti, particles, glitch effects)
  - Keyframe animations for Upside Down atmosphere
  - Responsive design with mobile breakpoints
- **Vanilla JavaScript**: Zero dependencies, pure performance
  - Async/await for API calls
  - Chrome Storage API (sync + local)
  - SessionStorage for greeting persistence
  - LocalStorage for daily resets and timer state
- **Chrome Extension APIs**:
  - `chrome.storage.sync` for settings
  - `chrome.storage.local` for hourly cache
  - `chrome.runtime.getURL()` for local images
- **Unsplash API**: High-quality landscape photography

## 🎨 Features in Detail

### Time-based Greetings (Enhanced)
- **12 AM - 5:59 AM** (Late Night):
  - "Burning the midnight oil?"
  - "Working late?"
  - "Early bird or night owl?"
- **6 AM - 11:59 AM**: "Good morning"
- **12 PM - 5:59 PM**: "Good afternoon"
- **6 PM - 8:59 PM**: "Good evening"
- **9 PM - 11:59 PM** (Late Evening):
  - "Working late?"
  - "Still going strong?"
  - "Burning the midnight oil?"

Random greetings persist for the entire browser session (using `sessionStorage`).

### Pomodoro Timer Details
- **Work Session**: 25 minutes (1500 seconds)
- **Short Break**: 5 minutes (300 seconds)
- **Long Break**: 15 minutes (900 seconds) - after completing 4 work sessions
- **State Persistence**: Timer, session type, and count saved in localStorage
- **Daily Reset**: Automatically resets at midnight
- **Visual Feedback**:
  - Timer pulses when complete
  - Green flash effect
  - "Session complete!" message overlay
- **Auto-transition**: Automatically switches between work and break modes

### Storage Architecture
**Chrome Sync Storage** (syncs across devices):
- `userName`: User's name (optional)
- `backgroundMode`: 'unsplash' or 'static'
- `backgroundIndex`: Selected static background (0-4)
- `unsplashApiKey`: Encrypted API key
- `goalText`: Current daily goal
- `goalCompleted`: Completion status

**Chrome Local Storage** (device-specific):
- `unsplashImageHour`: Cache key (e.g., "Mon Dec 01 2025-19")
- `unsplashImageData`: Cached image URL and photographer info

**Browser localStorage**:
- `upsideDownActive`: Boolean for Upside Down mode
- `dailyQuote`: Cached quote with date
- `goalCompletionDate`: Date of last goal completion
- `pomodoroState`: Timer state object
- `pomodoroDate`: Date string for daily reset

**Browser sessionStorage**:
- `lateNightGreeting`: Selected greeting for session
- `lateEveningGreeting`: Selected greeting for session

## ⚙️ Customization

### Adding More Upside Down Images
1. Download Stranger Things / creepy images
2. Save to `images/upside-down/` folder
3. Edit `script.js`, add to `upsideDownImages` array:
```javascript
const upsideDownImages = [
  'images/upside-down/your-image.jpg',
  // ... existing images
];
```
4. Update `manifest.json` if needed for `web_accessible_resources`

### Adding More Quotes
Edit `script.js` and expand the `quotes` array:
```javascript
const quotes = [
  { text: "Your new quote here.", author: "Author Name" },
  // ... add more
];
```

### Changing Pomodoro Durations
Edit `script.js` to modify work/break lengths:
```javascript
const POMODORO_DURATIONS = {
  WORK: 25 * 60,        // Change 25 to your desired minutes
  SHORT_BREAK: 5 * 60,  // Change 5 to your desired minutes
  LONG_BREAK: 15 * 60   // Change 15 to your desired minutes
};
```

### Customizing Colors & Effects
Edit `styles.css`:
- **Normal mode colors**: Search for `rgba(255, 255, 255, ...)`
- **Upside Down colors**: Search for `body.upside-down` section
- **Glassmorphic blur**: Modify `backdrop-filter: blur(10px)`
- **Animations**: Edit `@keyframes` blocks

## 🐛 Troubleshooting

### Extension doesn't load
- Ensure Developer Mode is enabled
- Check correct folder selected (must contain `manifest.json`)
- Look for errors in chrome://extensions page

### Upside Down images not showing
- Verify images exist in `images/upside-down/` folder
- Check `manifest.json` has `web_accessible_resources` configured
- Open DevTools (F12) → Console for error messages

### Pomodoro timer not persisting
- Check browser's localStorage quota isn't exceeded
- Verify localStorage is enabled (not in Incognito mode)
- Try resetting: Open DevTools → Application → Local Storage → Clear

### Unsplash images not loading
- Verify you've entered a valid API key in Settings
- Check your API key hasn't exceeded rate limits (50 requests/hour for free tier)
- Ensure stable internet connection
- Check DevTools Network tab for API errors

### Escape message not showing
- Complete your goal while in Upside Down mode (check the checkbox)
- Or click the 👹 Demogorgon icon to manually exit
- Message displays for 2.5 seconds before transitioning

### Greeting not changing
- Greetings update automatically every minute
- Late night/evening greetings stay the same during browser session (by design)
- Close and reopen browser to get a new random greeting

## 🔒 Privacy

- ✅ All data stored locally in your browser
- ✅ No analytics or tracking
- ✅ No data sent to external servers (except Unsplash API for images)
- ✅ Unsplash API only fetches images, doesn't send personal data
- ✅ API key encrypted by Chrome Storage
- ✅ Open source - audit the code yourself

## 📝 Changelog

### Recent Updates
- ✨ Added Pomodoro Focus Timer with persistence
- 🎨 Added "Focus Timer" heading for better clarity
- 🐛 Fixed Start button centering when Reset button hidden
- 🐛 Fixed overlapping greeting and date text
- 🐛 Fixed escape message not showing on manual Upside Down exit
- 🕐 Split evening greetings (6-9 PM vs 9 PM-12 AM)
- 🖼️ Changed background refresh from daily to hourly (24 images/day)
- 🎨 Increased Upside Down image brightness for better visibility
- 🎯 Fixed checkbox positioning (immediately next to goal)
- 👹 Added Demogorgon trigger icon for manual Upside Down toggle
- ⏰ Improved escape message timing and styling

### Previous Features
- 🌀 Complete Upside Down mode with Stranger Things theme
- 🎉 Celebration animation on goal completion
- 💬 Local curated quote collection (replaced Quotable API)
- 🖼️ Unsplash API integration with hourly caching
- 👋 Time-based greeting variations
- ⚙️ Elegant settings panel
- 📱 Responsive design

## 🤝 Contributing

Contributions welcome! Feel free to:
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use, modify, and distribute.

## 🙏 Credits

- **Background images**: [Unsplash](https://unsplash.com)
- **Stranger Things theme inspiration**: Netflix's Stranger Things
- **Original concept inspired by**: [Momentum](https://momentumdash.com)
- **Built with love by**: [@patil91ashish](https://github.com/patil91ashish)

## 🆘 Support

Encountered an issue?
1. Check the Troubleshooting section
2. Open DevTools (F12) → Console for error messages
3. [Open an issue on GitHub](https://github.com/patil91ashish/Spark/issues)
4. Review [Chrome Extension documentation](https://developer.chrome.com/docs/extensions/)

---

**Enjoy your productive (and occasionally creepy) new tab! 🚀🌀**

*"The universe is change; our life is what our thoughts make it." — Marcus Aurelius*
