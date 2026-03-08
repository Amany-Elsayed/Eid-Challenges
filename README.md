# Daily Challenges — Eid Version

A festive, Arabic-first web app offering **30 daily challenges** and motivational quotes to celebrate Eid and encourage small acts of kindness and worship throughout the Eid period. Built as a continuation of the original Ramadan Challenges project.

---

## Features

- **30 Daily Challenges** — One challenge unlocks per day, keeping the experience fresh and intentional.
- **Daily Quotes** — Inspirational and religious Eid greetings in Arabic, shown at random each visit.
- **Interactive Calendar** — Visual day-by-day tracker showing completed and upcoming challenges.
- **Progress Bar** — A live completion percentage so users always know where they stand.
- **Congratulations Modal** — Appears when all 30 challenges are completed, with animated fireworks.
- **Share Options** — Share the daily quote as plain text or as a captured image.
- **Eid Theme** — Swaying garlands, pastel sky gradients, a silhouetted mosque skyline, and festive background animations.
- **Responsive Design** — Works smoothly on both desktop and mobile browsers.

---

## Usage

1. Open `index.html` in any modern browser.
2. Click a day on the calendar to view its challenge.
3. Complete the challenge, then tap **"تم الإنجاز"** to mark it done.
4. Watch your progress grow on the progress bar.
5. Finish all 30 days to unlock the congratulations card — shareable and downloadable.

---

## Technical Details

- Built with vanilla **HTML, CSS, and JavaScript** — no frameworks or build tools required.
- Uses `localStorage` to persist challenge progress across sessions, with an automatic reset after two months.
- Animated **fireworks** rendered via `<canvas>` on both the background and the congratulations modal.
- Background uses a fixed `::before` pseudo-element to prevent the pattern from shifting on mobile when the browser chrome slides in/out.
- Garland flags are dynamically drawn and animated with SVG and CSS keyframes.
- Fully supports **Arabic Right-to-Left (RTL)** layout with the `Tajawal` font family.
- Sharing uses the native **Web Share API** (`navigator.share`) with a fallback to direct download.

---

## File Structure

```
/eid-challenges
│
├── index.html        # Main HTML file
├── style.css         # Styles and animations
├── script.js         # App logic, challenge data, and canvas animations
└── assets/
    ├── bg.png        # Repeating background pattern
    └── congrats.png  # Congratulations card image
```

---

## Notes

- Progress is saved automatically in the browser's `localStorage` — no backend needed.
- Sharing features depend on browser support for `navigator.share`; unsupported browsers fall back to a direct file download.
- This project is intended as a festive continuation of the original Ramadan Challenges project.

---

## License

This project is for educational and personal use. No commercial rights are granted.