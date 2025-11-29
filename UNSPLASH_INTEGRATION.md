# Unsplash API Integration Guide

The Spark Chrome Extension now supports dynamic background images from Unsplash! This guide will help you set it up.

## Features

✨ **Daily Fresh Images** - New beautiful background every day
🔄 **Manual Refresh** - Change backgrounds anytime with one click
📦 **Smart Caching** - Reduces API calls (stays within 50 requests/hour limit)
📸 **Photo Attribution** - Proper credit to photographers (Unsplash requirement)
🔒 **Secure Storage** - API key stored safely in Chrome storage
⚡ **Fallback System** - Graceful error handling with static image backup

## Getting Your Unsplash API Key

### Step 1: Create an Unsplash Developer Account

1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Click "Register as a developer" or "Join"
3. Sign up or log in with your Unsplash account

### Step 2: Create a New Application

1. Once logged in, go to [Your Apps](https://unsplash.com/oauth/applications)
2. Click "New Application"
3. Accept the API Guidelines (check all boxes)
4. Fill in the application details:
   - **Application name**: Spark Chrome Extension (or any name you like)
   - **Description**: Personal new tab page extension
5. Click "Create Application"

### Step 3: Get Your Access Key

1. On your application page, you'll see:
   - **Application ID**
   - **Access Key** ← This is what you need!
   - **Secret Key** (you don't need this)
2. Copy the **Access Key** (starts with something like `abc123...`)

## Setting Up in Spark Extension

### Step 1: Open Extension Settings

1. Open a new tab (your Spark page will load)
2. Click the **⚙️ Settings** button in the top-right corner

### Step 2: Configure Unsplash

1. In the settings panel, find **"Background Source"**
2. Make sure **"Unsplash API (Dynamic)"** is selected
3. Paste your Access Key into the **"Unsplash API Key"** field
4. Click **"Save Key"**

### Step 3: Verification

- The extension will test your API key
- If successful, you'll see: ✅ **"API key saved successfully!"**
- A new background image will load automatically
- You'll see photo attribution at the bottom-left

## Using the Extension

### Daily Backgrounds

- A new random nature image loads automatically each day
- Images are cached to minimize API calls
- The same image shows all day long

### Manual Refresh

- Click the **🔄 Refresh** button (top-right, next to settings)
- The button will spin as it loads a new image
- Photo attribution updates automatically

### Photo Attribution

- Required by Unsplash API guidelines
- Appears in bottom-left corner
- Shows photographer name with link to their profile
- Click to support the photographer!

### Switching Back to Static Images

1. Open Settings (⚙️)
2. Change **"Background Source"** to **"Static Images"**
3. Select from 5 pre-loaded nature images
4. Attribution will be hidden

## API Limits & Best Practices

### Unsplash Rate Limits

- **Free tier**: 50 requests per hour
- Our extension's daily caching keeps you well within limits
- Manual refreshes count toward this limit

### How We Stay Within Limits

✅ **Daily Caching**: Only 1 API call per day automatically
✅ **Smart Fallback**: Uses cached images if API fails
✅ **Download Tracking**: Properly tracks image downloads (Unsplash requirement)
✅ **Error Handling**: Falls back to static images if problems occur

### Estimated Usage

- **Normal use** (daily auto-refresh): ~30 calls/month
- **Heavy use** (5 manual refreshes/day): ~150 calls/month
- Still well within free tier limits!

## Troubleshooting

### "Invalid API key" Error

- Double-check you copied the **Access Key** (not Secret Key)
- Make sure there are no extra spaces
- Verify your Unsplash application is still active

### Images Not Loading

1. Check your internet connection
2. Verify API key is saved correctly
3. Open browser console (F12) for error messages
4. Extension will fallback to cached or static images

### Attribution Not Showing

- This is normal for static images mode
- Only Unsplash images show attribution
- If using Unsplash mode and no attribution appears, check console for errors

### Hit Rate Limit

- Wait an hour for the limit to reset
- Extension will use cached images in the meantime
- Consider reducing manual refreshes

## Privacy & Data

- Your API key is stored locally in Chrome's secure storage
- No data is sent to any servers except Unsplash API
- Image URLs and photographer info cached locally
- No tracking or analytics

## Advanced Configuration

### Customizing Image Queries

You can modify the image search query in `script.js`:

```javascript
// Line 253 - Change 'nature' to other keywords
const response = await fetch(
  'https://api.unsplash.com/photos/random?orientation=landscape&query=nature',
  ...
);
```

Try: `landscape`, `mountain`, `ocean`, `forest`, `sunrise`, etc.

### Adjusting Cache Duration

Currently set to daily refresh. To change cache duration, modify the date check in `loadUnsplashBackground()` function.

## Unsplash API Guidelines Compliance

This extension complies with Unsplash API guidelines:

✅ Properly attributes photographers with hotlinks
✅ Includes "on Unsplash" link
✅ Uses UTM parameters for tracking
✅ Triggers download endpoint when images are used
✅ Displays images at appropriate quality

## Support

### Need Help?

- Check browser console (F12) for error messages
- Verify your API key at [Unsplash Dashboard](https://unsplash.com/oauth/applications)
- Try switching to static images mode temporarily

### Report Issues

Open an issue on GitHub with:
- Description of the problem
- Browser console errors (if any)
- Steps to reproduce

## Credits

- Images from [Unsplash](https://unsplash.com)
- Photographers credited on each image
- Unsplash API documentation: [unsplash.com/documentation](https://unsplash.com/documentation)

---

**Enjoy beautiful daily backgrounds! 📸✨**
