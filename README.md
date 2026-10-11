# CourseEarn — Course Affiliate Website

A responsive, static website starter for an India-focused online course affiliate directory.

## Files
- `index.html` — page structure, SEO basics, navigation, and affiliate disclosure
- `styles.css` — responsive layout and visual design
- `courses.js` — editable course catalogue and affiliate URL configuration
- `app.js` — course cards, category filtering, search, and safe handling of missing links

## Run locally
1. Download and unzip the project.
2. Open `index.html` in a modern browser. For best results, use a local static server or the preview in your code editor.

## Add real courses and affiliate links
Open `courses.js`. Each course has fields including:
- `title`, `category`, `level`, `provider`, `description`
- `priceLabel` — use `Check price` unless you verify a current price
- `affiliateUrl` — starts empty on purpose

Before publishing:
1. Join the relevant affiliate program and get approved.
2. Copy the exact affiliate tracking URL from the program dashboard.
3. Replace the matching `affiliateUrl` with that URL.
4. Verify the course title, provider, price, language, syllabus, and terms directly on the provider's site.
5. Keep the disclosure visible and comply with the program's terms and India's applicable advertising/disclosure requirements.

The website does not invent affiliate URLs. Until a valid URL is added, the card displays a disabled button instead of sending visitors to a fake destination. Links that are added open in a new tab and include `rel="sponsored nofollow"`.

## Publish for free with GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new public repository, e.g. `courseearn`.
3. Upload `index.html`, `styles.css`, `courses.js`, `app.js`, and this README to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment source, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. Its URL will be shown in the Pages settings.
7. Open the published URL on mobile and desktop and test search, filters, and every affiliate link.

GitHub's labels can change slightly over time. You can also use another static hosting provider such as Netlify or Cloudflare Pages.

## Before going live
- Replace every sample course with verified course details.
- Add only affiliate links you are approved to use.
- Check current prices and avoid unsupported claims about outcomes or earnings.
- Consider adding a privacy policy and contact page if you use analytics, forms, cookies, or collect personal data.
- Affiliate income is not guaranteed.
