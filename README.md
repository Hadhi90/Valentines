# 💖 Valentine Experience Portal

A beautiful, interactive Valentine's Day web experience created with love. This single-page website features flip animations, confetti effects, heart cursor, and multiple romantic sections.

## ✨ Features

- **Heart Cursor** - Custom heart-shaped cursor throughout the site
- **Confetti Animation** - Celebratory confetti on welcome and special interactions
- **Flip Card Animations** - Interactive gift cards and photo cards that flip on click
- **7 Romantic Sections**:
  1. Welcome/Celebration with confetti
  2. Interactive gift selection with flip cards
  3. Date options (long-distance friendly)
  4. Fun Q&A with emotional responses
  5. Song section with Spotify integration and play button
  6. Photo gallery with flip-to-reveal captions
  7. Sweet ending with kiss button

## 📁 Project Structure

```
valentine-experience/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS with animations and heart cursor
├── script.js           # JavaScript for interactivity and confetti
├── images/            # Folder for your photos and song cover
│   ├── README.md      # Instructions for adding images
│   ├── photo1.jpg     # Your photos (6 total needed)
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   ├── photo6.jpg
│   └── song-cover.jpg # Album art from Spotify
│
└── README.md          # This file
```

## 🚀 Quick Start

### 1. Download the Project
Save all files maintaining the folder structure above.

### 2. Add Your Photos
1. Navigate to the `images/` folder
2. Add 6 photos named:
   - `photo1.jpg` through `photo6.jpg`
3. Add your song's album art as `song-cover.jpg`

### 3. Customize the Content

#### Update Her Name and Date
Open `index.html` and find:
```html
<p class="her-name">For My Love</p>
<p class="date">February 14, 2026</p>
```
Replace with her actual name and your special date.

#### Add Your Spotify Song
1. Go to Spotify and find your song
2. Click "Share" → "Copy Song Link"
3. Extract the track ID from the URL:
   - Example: `https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp`
   - Track ID: `3n3Ppam7vgaVa1iaRUc9Lp`

4. Open `index.html` and find the song section (around line 215)
5. Update these fields:
   ```html
   <h3 class="song-title">Your Song Title</h3>
   <p class="song-artist">Artist Name</p>
   ```

6. Update the Spotify embed (around line 224):
   ```html
   <iframe src="https://open.spotify.com/embed/track/YOUR_TRACK_ID?utm_source=generator"
   ```
   Replace `YOUR_TRACK_ID` with your actual track ID.

7. Update the Spotify link:
   ```html
   <a href="YOUR_SPOTIFY_LINK_HERE" target="_blank" class="spotify-link">
   ```

#### Customize Messages
Feel free to edit any text in `index.html`:
- Gift descriptions
- Date options
- Question responses
- Photo captions
- Ending message

## 🌐 Publishing to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create an account)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository settings:
   - **Name**: `valentine-experience` (or any name you like)
   - **Description**: "A Valentine's Day experience for my love"
   - **Public** or **Private** (your choice)
   - **Don't** initialize with README (we have our own files)
4. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop all your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - The entire `images/` folder with your photos
3. Add a commit message like "Initial Valentine Experience"
4. Click **"Commit changes"**

**Option B: Using Git Command Line**

```bash
# Navigate to your project folder
cd path/to/valentine-experience

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial Valentine Experience"

# Add your GitHub repository as remote
# Replace USERNAME and REPO_NAME with yours
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** (top menu)
2. Scroll down to **"Pages"** (left sidebar under "Code and automation")
3. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **"Save"**
5. Wait 1-2 minutes for GitHub to build your site
6. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/REPO_NAME/
   ```

### Step 4: Get Your Link

After a few minutes, refresh the GitHub Pages settings page. You'll see:
```
✅ Your site is live at https://YOUR_USERNAME.github.io/REPO_NAME/
```

**This is the link you'll share with her!** 💖

## 🎨 Customization Tips

### Change Colors
Open `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #d4526e;      /* Main pink/red */
    --secondary-color: #c94b63;     /* Darker pink */
    --accent-color: #f9a8d4;        /* Light pink */
    /* ... more colors ... */
}
```

### Change Fonts
The project uses:
- **Cormorant Garamond** - For headers
- **Crimson Text** - For body text

To use different fonts:
1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the `<link>` tag
4. Replace the font link in `index.html` (around line 9)
5. Update font-family in `styles.css`

### Add More Photos
1. Add more photo card HTML blocks in the photos section
2. Add corresponding images to the `images/` folder
3. The grid will automatically adjust

### Modify Sections
You can:
- Remove sections you don't want
- Reorder sections
- Add new sections following the same pattern

## 🛠️ Troubleshooting

### Images Not Showing
- Ensure images are in the `images/` folder
- Check that filenames match exactly (case-sensitive)
- Verify image format is JPG or PNG
- Clear browser cache and refresh

### Spotify Embed Not Working
- Make sure you're using the correct track ID
- The song must be available in Spotify
- Check that the URL is properly formatted

### Site Not Loading on GitHub Pages
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root directory
- Verify all files are committed and pushed
- Check GitHub Pages settings are correct

### Flip Cards Not Working
- Ensure JavaScript is enabled in browser
- Check browser console for errors (F12)
- Verify `script.js` is in the same folder as `index.html`

## 📱 Mobile Responsive

The site is fully responsive and works beautifully on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

## 🔒 Privacy

If you want to keep this private:
1. Make your GitHub repository **Private** when creating it
2. Share the GitHub Pages link only with her
3. Note: Even private repos have public GitHub Pages by default
4. For truly private hosting, consider alternatives like Netlify with password protection

## 💡 Pro Tips

1. **Test Locally First**: Open `index.html` in your browser before publishing
2. **Use High-Quality Photos**: Larger images look better (800x800px+)
3. **Add Alt Text**: Update image `alt` attributes for accessibility
4. **Personalize Everything**: The more personal, the better!
5. **Send at the Right Time**: Share the link at a special moment

## 🎁 Optional Enhancements

### Add Background Music
Add an audio element to `index.html`:
```html
<audio id="bg-music" loop>
    <source src="music/background.mp3" type="audio/mpeg">
</audio>
```

Then add a music toggle button.

### Add More Animations
The `script.js` includes commented code for floating hearts:
```javascript
// Uncomment to enable
setInterval(createFloatingHearts, 3000);
```

### Create a Custom Domain
1. Buy a domain (like `ourvalentine.com`)
2. Configure it with GitHub Pages
3. Follow [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 📄 File Breakdown

### index.html
- Complete structure with all 7 sections
- Semantic HTML5
- Includes meta tags for mobile
- Linked to Google Fonts

### styles.css
- Custom heart cursor throughout
- Flip card animations for gifts and photos
- Confetti canvas styling
- Responsive design for all screen sizes
- Smooth transitions and hover effects
- 500+ lines of polished CSS

### script.js
- Confetti particle system
- Section navigation
- Flip card interactions
- Gift/date/question selection logic
- Spotify play button toggle
- Kiss button interaction
- Easter egg in console

## ❤️ Credits

Created with love for someone special.

**Technologies Used:**
- Pure HTML5
- CSS3 with animations
- Vanilla JavaScript
- Google Fonts
- Spotify Embed API

## 📞 Need Help?

If you run into issues:
1. Check the Troubleshooting section above
2. Review your browser's console (F12) for errors
3. Ensure all files are in the correct folders
4. Verify your Spotify track ID is correct

## 🎉 Final Steps

1. ✅ Add your photos
2. ✅ Update Spotify song details
3. ✅ Customize all text with personal messages
4. ✅ Test locally in browser
5. ✅ Upload to GitHub
6. ✅ Enable GitHub Pages
7. ✅ Share the link with her! 💖

---

**Made with 💖 for the most special person**

*This is just one Valentine. Here's to a lifetime of choosing each other.*