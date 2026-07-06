# Your Portfolio Site

A minimal, static website for showing off mechanical, electrical, software,
and art projects — with photo and video galleries per project.

Open `index.html` in your browser right now to see it running with sample
placeholder content.

## File overview

```
index.html      → page structure (edit hero text, name, links here)
styles.css      → all visual styling
projects.js     → YOUR PROJECT DATA — this is the file you'll edit most
script.js       → makes filtering + the photo/video modal work (no need to touch)
media/images/   → put your photos here
media/videos/   → put your videos here
```

## Adding your own projects

1. Open `projects.js`.
2. Copy one of the existing project blocks (the `{ ... }` chunks inside the
   `PROJECTS = [ ... ]` list).
3. Paste it in, and edit:
   - `category` — must be `"mechanical"`, `"electrical"`, `"software"`, or `"art"`
   - `title`, `summary`, `description`
   - `specs` — any labeled facts you want (materials, tools, stack, year...)
   - `media` — list of photos/videos for that project (see below)
4. Save and refresh the page in your browser.

Delete the four sample projects once you've replaced them with real ones.

## Adding your own photos & videos

1. Drop image files into `media/images/` and video files into `media/videos/`.
   JPG/PNG work well for photos; MP4 is the safest video format for browsers.
2. In `projects.js`, reference them like this:

```js
media: [
  { type: "image", src: "media/images/my-photo.jpg" },
  { type: "video", src: "media/videos/my-clip.mp4" }
]
```

3. The **first item** in a project's `media` list becomes its thumbnail on
   the grid. Videos get a small "VIDEO" badge and a silent preview loop on
   hover.
4. Clicking a project opens a full gallery — visitors can step through every
   photo/video with the arrows, dots, or keyboard (← →), and close with Esc
   or the ✕.

Tips:
- Keep photos under ~2–3 MB each (resize/export at ~1600px wide) so the site
  loads quickly.
- Keep videos short and compressed — a 15–30 second clip is usually plenty
  for a portfolio.

## Editing the hero section / bio / contact links

Open `index.html` and edit the text inside the `<section class="hero">` block
near the top, and the footer links near the bottom (`mailto:`, GitHub,
LinkedIn, etc).

## Putting it online (free options)

**Option A — GitHub Pages (recommended, free, your own github.io URL)**
1. Create a new repository on GitHub.
2. Upload all these files (keeping the folder structure).
3. Go to the repo's Settings → Pages → set source to the `main` branch, root folder.
4. Your site will be live at `https://yourusername.github.io/repo-name/`.

**Option B — Netlify (drag-and-drop, free)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio` folder onto the page.
3. Netlify gives you a live URL immediately. You can add a custom domain later
   for free.

**Option C — Any other static host** (Vercel, Cloudflare Pages, your own
server) works the same way — this is a fully static site, no build step or
server required.

## Notes

- This site is 100% static — there's no upload button in the browser for
  visitors, and no database. You add media by placing files in the `media`
  folders and listing them in `projects.js`, then re-deploy. That's normal
  for a portfolio site and keeps hosting free and simple.
- If you'd eventually like visitors (or just you, from any device) to upload
  media through a web form instead of editing files by hand, that needs a
  small backend — happy to help set that up later if you want it.
