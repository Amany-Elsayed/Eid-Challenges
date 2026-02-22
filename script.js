const quotes = [
  "تقبل الله منا ومنكم صالح الأعمال",
  "عيدكم مبارك وكل عام وأنتم بخير",
  "اللهم اجعل هذا العيد فرحًا وطاعة",
  "جعل الله أيامكم كلها أعيادًا"
];

const challenges = [
  "زر أحد أقاربك اليوم","تصدق بشيء بسيط","أدخل السرور على شخص","صل ركعتين شكرًا لله",
  "اذكر الله 100 مرة","سامح شخصًا","أرسل تهنئة العيد","ادعُ لشخص تحبه",
  "اقرأ سورة قصيرة","قل الحمد لله 100 مرة","تجنب الغضب","شارك آية قرآنية",
  "تصدق بكلمة طيبة","صل صلاة الضحى","اقرأ سورة الملك","اشكر الله على نعمة",
  "أكرم ضيفًا","تجنب الهاتف ساعة","استغفر الله 100 مرة","صل ركعتين قيام",
  "أرسل دعاء","ساعد أحد أفراد أسرتك","اقرأ الإخلاص والمعوذتين","صل على النبي 100 مرة",
  "اكتب نية خير","اشكر والديك","ادعُ الله طويلًا","افعل خيرًا في الخفاء",
  "اختم يومك بالحمد","تدبر آية اليوم"
];

const dailyQuote = document.getElementById("dailyQuote");
const shareTextBtn = document.getElementById("shareTextBtn");
const shareImageBtn = document.getElementById("shareImageBtn");
const quoteBox = document.getElementById("quoteBox");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const congratsModal = document.getElementById("congratsModal");
const downloadCongrats = document.getElementById("downloadCongrats");
const shareCongrats = document.getElementById("shareCongrats");

dailyQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

shareTextBtn.onclick = () => {
  if (navigator.share) navigator.share({ text: dailyQuote.textContent });
};

async function captureHighQuality(element) {
  const canvas = await html2canvas(element, { scale: 3, backgroundColor: null });
  return canvas;
}

shareImageBtn.onclick = async () => {
  const canvas = await captureHighQuality(quoteBox);
  canvas.toBlob(blob => {
    const file = new File([blob], "quote.png", { type: "image/png" });
    if (navigator.share) navigator.share({ files: [file] });
  });
};

downloadCongrats.onclick = () => {
  const link = document.createElement("a");
  link.href = "assets/congrats.png";
  link.download = "congrats.png";
  link.click();
};

shareCongrats.onclick = async () => {
  const res = await fetch("assets/congrats.png");
  const blob = await res.blob();
  const file = new File([blob], "congrats.png", { type: "image/png" });
  if (navigator.share) navigator.share({ files: [file] });
};

const completedTodayKey = "eid_last_completed_time";
const TWO_MONTHS = 60 * 24 * 60 * 60 * 1000;

if (!localStorage.getItem("eid_start_time")) {
  localStorage.setItem("eid_start_time", Date.now());
}

if (Date.now() - localStorage.getItem("eid_start_time") > TWO_MONTHS) {
  localStorage.clear();
}

let nextDayToUnlock = parseInt(localStorage.getItem("eid_next_day") || "1");

const calendar = document.getElementById("calendar");
const modal = document.getElementById("modal");
const challengeText = document.getElementById("challengeText");
const completeBtn = document.getElementById("completeBtn");

let selectedDay = null;

for (let i = 1; i <= 30; i++) {
  const day = document.createElement("div");
  day.className = "day";
  day.textContent = "اليوم " + i;

  if (localStorage.getItem("eid_day" + i)) {
    day.classList.add("completed");
  }

  day.onclick = () => openChallenge(i);
  calendar.appendChild(day);
}

function openChallenge(dayNumber) {
  const lastTime = localStorage.getItem(completedTodayKey);
  let alreadyDoneToday = false;

  if (lastTime) {
    const lastDate = new Date(parseInt(lastTime));
    const now = new Date();
    alreadyDoneToday =
      lastDate.getFullYear() === now.getFullYear() &&
      lastDate.getMonth() === now.getMonth() &&
      lastDate.getDate() === now.getDate();
  }

  if (dayNumber < nextDayToUnlock) {
    challengeText.textContent = "لقد أكملت هذا اليوم بالفعل";
    completeBtn.style.display = "none";
  } else if (dayNumber > nextDayToUnlock) {
    challengeText.textContent = "يجب إكمال اليوم السابق أولاً";
    completeBtn.style.display = "none";
  } else if (alreadyDoneToday) {
    challengeText.textContent = "لقد أكملت تحدي اليوم بالفعل\nغدًا يوم جديد إن شاء الله";
    completeBtn.style.display = "none";
  } else {
    selectedDay = dayNumber;
    challengeText.textContent = challenges[dayNumber - 1];
    completeBtn.style.display = "block";
  }

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

completeBtn.onclick = () => {
  localStorage.setItem("eid_day" + selectedDay, "done");
  localStorage.setItem(completedTodayKey, Date.now());

  nextDayToUnlock = selectedDay + 1;
  localStorage.setItem("eid_next_day", nextDayToUnlock.toString());

  document.querySelectorAll(".day")[selectedDay - 1].classList.add("completed");
  updateProgress();
  closeModal();
};

function updateProgress() {
  let completed = 0;
  for (let i = 1; i <= 30; i++) {
    if (localStorage.getItem("eid_day" + i)) completed++;
  }

  const percent = Math.round((completed / 30) * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = `نسبة الإنجاز: ${percent}%`;

  if (percent === 100) {
    congratsModal.style.display = "flex";
  }
}

updateProgress();

function closeCongrats() {
  congratsModal.style.display = "none";
}

/* ===== CONFETTI (soft pastel, calm) ===== */
const confettiCanvas = document.getElementById("confetti");
const ctxC = confettiCanvas.getContext("2d");

function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeConfetti);
resizeConfetti();

const confettiColors = ["#fde68a", "#bbf7d0", "#bae6fd", "#ddd6fe", "#fbcfe8"];

const confettiParticles = Array.from({ length: 120 }, () => ({
  x: Math.random() * confettiCanvas.width,
  y: Math.random() * confettiCanvas.height,
  size: Math.random() * 3 + 1,
  speed: Math.random() * 0.6 + 0.2,
  drift: Math.random() * 0.5 - 0.25,
  color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
}));

function animateConfetti() {
  ctxC.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiParticles.forEach(p => {
    ctxC.beginPath();
    ctxC.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctxC.fillStyle = p.color;
    ctxC.fill();

    p.y += p.speed;
    p.x += p.drift;

    if (p.y > confettiCanvas.height) {
      p.y = -10;
      p.x = Math.random() * confettiCanvas.width;
    }

    if (p.x > confettiCanvas.width) p.x = 0;
    if (p.x < 0) p.x = confettiCanvas.width;
  });

  requestAnimationFrame(animateConfetti);
}

animateConfetti();

/* ===== FIREWORKS (detailed & transparent) ===== */
const fireworksCanvas = document.getElementById("fireworks");
const fctx = fireworksCanvas.getContext("2d");

function resizeFireworks() {
  fireworksCanvas.width = window.innerWidth;
  fireworksCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeFireworks);
resizeFireworks();

let fireworks = [];

function createFirework() {
  const x = Math.random() * fireworksCanvas.width;
  const y = Math.random() * fireworksCanvas.height * 0.5;

  const colors = ["#facc15", "#22c55e", "#60a5fa", "#f472b6", "#a78bfa"];

  for (let i = 0; i < 40; i++) {
    fireworks.push({
      x,
      y,
      radius: 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 3 + 1,
      life: 60
    });
  }
}

function animateFireworks() {
  if (document.getElementById("congratsModal").style.display !== "flex") {
    fctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    requestAnimationFrame(animateFireworks);
    return;
  }

  fctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

  fireworks.forEach((p, index) => {
    const vx = Math.cos(p.angle) * p.speed;
    const vy = Math.sin(p.angle) * p.speed;

    p.x += vx;
    p.y += vy;
    p.life--;

    fctx.beginPath();
    fctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    fctx.fillStyle = p.color;
    fctx.fill();

    if (p.life <= 0) {
      fireworks.splice(index, 1);
    }
  });

  requestAnimationFrame(animateFireworks);
}

setInterval(() => {
  if (document.getElementById("congratsModal").style.display === "flex") {
    createFirework();
  }
}, 800);

animateFireworks();