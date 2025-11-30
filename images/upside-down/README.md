# Upside Down Background Images

This folder contains the creepy background images used in **Upside Down mode**.

## Current Images

The extension expects these 6 images:

1. `Vecna-1.jpg` - Vecna imagery from Stranger Things
2. `Vecna-2.jpg` - Vecna imagery from Stranger Things
3. `Vecna-3.jpg` - Vecna imagery from Stranger Things
4. `hive-mind-1.jpg` - Hive mind / organic vein patterns
5. `hive-mind-2.jpg` - Hive mind / organic vein patterns
6. `hive-mind-3.png` - Hive mind / organic vein patterns

## How to Add Your Own Images

1. **Download** high-quality Stranger Things images (1920x1080 or higher)
   - Search for: "Stranger Things hive mind", "Vecna", "Upside Down vines"
   - Good sources:
     - https://wallpapercave.com/stranger-things-vecna-wallpapers
     - https://wallpaperaccess.com/stranger-things-vecna
     - https://wallpapersden.com/vecna-stranger-things-wallpaper/1920x1080/

2. **Save** them in this folder (`images/upside-down/`)

3. **Name** them to match the filenames above, OR

4. **Update** the array in `script.js`:
   ```javascript
   const upsideDownImages = [
     'images/upside-down/your-image-1.jpg',
     'images/upside-down/your-image-2.png',
     // ... add as many as you want!
   ];
   ```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Resolution**: 1920x1080 or higher recommended
- **Style**: Dark, atmospheric, creepy Stranger Things aesthetic
- **Color palette**: Red/dark tones preferred (filter will enhance them)

## How It Works

When you enter Upside Down mode (press 'U'), the extension:
1. Randomly picks one image from this folder
2. Applies dark red filter: `brightness(0.3) saturate(1.5) hue-rotate(330deg) contrast(1.3)`
3. Uses it as the creepy background behind the upside-down interface

Enjoy the nightmare! 😈
