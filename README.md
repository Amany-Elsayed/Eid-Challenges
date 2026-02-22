# Daily Challenges Web App (Eid Version)

This project is the Eid version of the Daily Challenges app, designed as a continuation of the original Ramadan interactive challenge project.  
It provides 30 daily challenges and motivational quotes to celebrate Eid and encourage small acts of kindness and worship during the Eid period.

## Features
- **30 Daily Challenges:** Each day unlocks a new challenge automatically.  
- **Daily Quotes:** Inspirational and religious quotes in Arabic.  
- **Interactive Calendar:** Tracks completed challenges.  
- **Congratulations Modal:** Appears when all challenges are completed, with animated fireworks and confetti.  
- **Share Options:** Users can share the daily quote or the congratulations card as an image.  
- **Responsive Design:** Works on desktop and mobile devices.  
- **Eid Theme:** Garlands, pastel colors, and festive animations.  

## Usage
1. Open `index.html` in a browser.  
2. Click a day to see the daily challenge.  
3. Complete the challenge and click **"تم الإنجاز"**.  
4. Track progress with the progress bar.  
5. When all 30 days are completed, the congratulations modal appears with fireworks and confetti.  

## Technical Details
- Built with **HTML, CSS, and JavaScript**.  
- Uses `localStorage` to track completed challenges.  
- Includes animated **fireworks and confetti** using `<canvas>`.  
- Fully supports **Arabic Right-to-Left (RTL) layout**.  
- Inspired by and extended from the **original Ramadan Challenges project**.  

## File Structure

/eid-challenges
│
├─ index.html # Main HTML file
├─ style.css # Styles for the app
├─ script.js # Main JavaScript logic
├─ assets/
│ └─ congrats.png # Congratulations image

## Notes
- This project is intended as a festive continuation of the Ramadan project.  
- Make sure to test using a browser, as the application relies on `localStorage`.  
- Sharing features depend on browser support (`navigator.share`).  

## License
This project is for educational and personal use. No commercial rights are granted.