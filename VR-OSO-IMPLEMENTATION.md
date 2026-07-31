# VR Ocean Site One page — implementation

## Files

- `vr-oso.html` — the project case-study page
- `vr-oso.css` — page-specific styles; it loads after your existing `styles.css`

## 1. Add the files to the repository root

Place both files beside `index.html`, `path-of-anu.html`, and `styles.css`.

```text
JoaquinArredondo.github.io/
├── index.html
├── path-of-anu.html
├── styles.css
├── vr-oso.html
└── vr-oso.css
```

Do not paste `vr-oso.css` into the middle of `styles.css`. The HTML already loads both files in the correct order:

```html
<link rel="stylesheet" href="styles.css" />
<link rel="stylesheet" href="vr-oso.css" />
```

## 2. Link the homepage project card to the new page

In `index.html`, find the VR Ocean Site One featured-project link:

```html
<a class="text-link" href="portfolio.html">
  View project details
  <span aria-hidden="true">→</span>
</a>
```

Replace it with:

```html
<a class="text-link" href="vr-oso.html">
  View project details
  <span aria-hidden="true">→</span>
</a>
```

## 3. Fix the homepage section links

Your current selected-work section uses `id="featured-projects"`, so navigation should point there rather than `#projects`.

Change:

```html
<a href="index.html#projects">Portfolio</a>
```

To:

```html
<a href="index.html#featured-projects">Portfolio</a>
```

Also give the experience section an ID so the navigation link works:

```html
<section class="home-section experience-section" id="experience">
```

## 4. Create the image folder

Create this folder structure:

```text
images/
└── oso/
```

The page labels nine suggested filenames:

```text
images/oso/oso-hero.jpg
images/oso/shark-rig.jpg
images/oso/barracuda-animation.jpg
images/oso/animator-system.jpg
images/oso/oso-gameplay-wide.jpg
images/oso/maya-wireframe.jpg
images/oso/rig-controls.jpg
images/oso/unity-animator.jpg
images/oso/oso-playtest.jpg
```

JPG, JPEG, PNG, WEBP, and GIF all work in an `<img>` tag. The filename and extension in `src` must exactly match the file in the repository, including capitalization.

## 5. Replace an image placeholder

Find a placeholder block such as:

```html
<div class="oso-placeholder oso-placeholder--asset" role="img" aria-label="...">
  ...
</div>
```

Replace the entire block with:

```html
<img
  class="oso-media-image"
  src="images/oso/shark-rig.jpg"
  alt="Maya shark rig showing joints, controls, and deformation setup"
/>
```

For the hero, keep the additional hero class:

```html
<img
  class="oso-media-image oso-media-image--hero"
  src="images/oso/oso-hero.jpg"
  alt="VR Ocean Site One underwater environment with marine life"
/>
```

## 6. Add a gameplay video

Replace the `.oso-video-placeholder` block with:

```html
<div class="oso-video-frame">
  <iframe
    src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID"
    title="VR Ocean Site One gameplay showcase"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
```

For a YouTube URL such as:

```text
https://www.youtube.com/watch?v=abc123XYZ
```

The video ID is `abc123XYZ`.

## 7. Test locally

From the repository folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/vr-oso.html
```

Check desktop and mobile widths, every navigation link, image capitalization, and the browser console for missing-file errors.

## 8. Commit and publish

```bash
git add vr-oso.html vr-oso.css index.html images/oso

git commit -m "Add VR Ocean Site One case study"

git push origin main
```

GitHub Pages commonly needs a brief deployment cycle after the push. Check the repository's **Actions** tab if the new page does not appear after the deployment finishes.

The final URL will be:

```text
https://joaquinarredondo.github.io/vr-oso.html
```
