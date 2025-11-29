# Spark - New Tab Chrome Extension

A beautiful, minimal Chrome extension that transforms your new tab page into an inspiring productivity dashboard, similar to Momentum.

## Features

- **Dynamic Time & Date**: Always-current time display with elegant formatting
- **Time-based Greetings**: Personalized greetings that change throughout the day (morning, afternoon, evening)
- **Daily Inspirational Quotes**: Fresh motivational quotes that change every day
- **Beautiful Backgrounds**: Collection of stunning nature images with customizable selection
- **Main Focus Goal**: Set and display your primary objective for the day
- **Todo List**: Simple, elegant task manager to track your daily tasks
- **Local Storage**: All your data is saved locally using Chrome's storage API
- **Minimal Design**: Clean, modern interface with smooth animations and blur effects

## Installation

### Method 1: Load as Unpacked Extension (Development)

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/patil91ashish/Spark.git
   cd Spark
   ```

2. **Open Chrome Extensions page**
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - Or click the three dots menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the extension**
   - Click "Load unpacked" button
   - Navigate to the Spark folder and select it
   - The extension should now appear in your extensions list

5. **Test it**
   - Open a new tab (Cmd+T or Ctrl+T)
   - You should see your new Spark new tab page!

### Method 2: Create Icons First (Optional)

If you want proper icons before loading:

1. Create an `icons` folder in the Spark directory
2. Add PNG images named:
   - `icon16.png` (16x16 pixels)
   - `icon48.png` (48x48 pixels)
   - `icon128.png` (128x128 pixels)

Alternatively, the extension will work without icons, though Chrome may show a default icon.

## Usage Guide

### Setting Your Main Focus

1. When you first open a new tab, you'll see "What is your main focus for today?"
2. Type your main goal or objective for the day
3. Press Enter or click outside the input to save
4. Your focus will be displayed prominently in the center
5. Click the edit button (✏️) to change it anytime

### Managing Todos

1. Click the 📝 button in the bottom right to open the todo panel
2. Type a task in the input field and press Enter or click the + button
3. Check off tasks as you complete them
4. Click the ✕ button to delete a task
5. Your todos are automatically saved

### Changing Backgrounds

1. Click the settings button (⚙️) in the top right corner
2. Select a different background from the dropdown menu
3. Your preference is saved automatically
4. Choose from 5 beautiful nature scenes

### Daily Quotes

- A new inspirational quote appears each day
- Quotes are selected from a curated collection of 20+ inspirational messages
- The quote changes automatically at midnight

## File Structure

```
Spark/
├── manifest.json          # Extension configuration
├── newtab.html           # Main HTML structure
├── styles.css            # All styling and animations
├── script.js             # Core functionality
├── README.md             # This file
└── icons/                # Extension icons (optional)
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Technology Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations, blur effects, and responsive design
- **Vanilla JavaScript**: No frameworks, pure JS for performance
- **Chrome Storage API**: Persistent data storage
- **Unsplash**: High-quality background images

## Features in Detail

### Time-based Greeting
- **Morning** (12 AM - 11:59 AM): "Good morning"
- **Afternoon** (12 PM - 5:59 PM): "Good afternoon"
- **Evening** (6 PM - 11:59 PM): "Good evening"

### Storage
All data is stored using Chrome's `chrome.storage.sync` API:
- Main focus/goal
- Todo list items
- Background preference
- Daily quote (local storage)

### Responsive Design
The extension adapts to different screen sizes with breakpoints at 768px.

## Customization

### Adding More Quotes

Edit `script.js` and add entries to the `quotes` array:

```javascript
const quotes = [
  { text: "Your quote here", author: "Author Name" },
  // ... add more
];
```

### Adding More Backgrounds

Edit `script.js` and add URLs to the `backgrounds` array:

```javascript
const backgrounds = [
  'https://your-image-url.com/image.jpg',
  // ... add more
];
```

Then update the select options in `newtab.html`.

### Changing Colors

Edit `styles.css` and modify the RGBA values for backgrounds, overlays, and UI elements.

## Troubleshooting

### Extension doesn't load
- Make sure Developer Mode is enabled
- Check that you selected the correct folder (should contain manifest.json)
- Look for errors in the Extensions page

### New tab doesn't change
- Refresh the extension by clicking the refresh icon on the Extensions page
- Close all existing tabs and open a new one
- Check Chrome's console for errors (F12)

### Data not saving
- Ensure the extension has storage permissions (check manifest.json)
- Check Chrome's storage quota isn't exceeded
- Try removing and re-adding the extension

### Images not loading
- Check your internet connection (backgrounds load from Unsplash)
- Verify URLs in script.js are valid
- Check browser console for CORS or network errors

## Privacy

- All data is stored locally in your browser
- No data is sent to external servers
- Background images are loaded from Unsplash CDN
- No analytics or tracking

## Future Enhancements

Potential features for future versions:
- Custom user name input
- Weather widget
- Pomodoro timer
- Customizable quotes
- Upload custom backgrounds
- Keyboard shortcuts
- Export/import settings
- Dark/light theme toggle

## Contributing

Feel free to fork this repository and submit pull requests for improvements!

## License

MIT License - feel free to use and modify as you wish.

## Credits

- Background images from [Unsplash](https://unsplash.com)
- Inspired by [Momentum](https://momentumdash.com)

## Support

If you encounter any issues or have questions:
1. Check the Troubleshooting section above
2. Open an issue on GitHub
3. Review Chrome's extension documentation

---

**Enjoy your new productive tab! 🚀**
