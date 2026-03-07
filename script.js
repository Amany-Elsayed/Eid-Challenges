const quotes = [
  "تقبل الله منا ومنكم صالح الأعمال",
  "عيدكم مبارك وكل عام وأنتم بخير",
  "اللهم اجعل هذا العيد فرحًا وطاعة",
  "جعل الله أيامكم كلها أعيادًا",
  "جعل الله أيامكم كلها أعياداً، وأوقاتكم كلها مسرات، وجعل رزقكم مليئاً بالخيرات، كل عام وأنتم بخير.",
  "كل عام وأنتم بصحة وهناء بمناسبة قدوم عيد الفطر المبارك، وتقبل الله صيامكم وقيامكم.",
  "كل عام وقلوبكم بيضاء كما هي، كل عام وأنتم بخير، كل عام وأنتم سعداء.",
  "أقدم لكم جميعاً أجمل التهاني بمناسبة حلول عيد الفطر المبارك... تقبل الله منا ومنكم الطاعات.",
  "أسعد الله أيامكم وتقبل الله طاعاتكم، وجمعنا وإياكم على خير، عيد فطر سعيد.",
  "أدام الله فرحتكم بالعيد دهوراً وألبسكم من تقواه نوراً، عيد فطر سعيد وكل عام وأنتم بخير.",
  "أتمنى لكم عيداً مليئاً بالحب والخير والسعادة، كل عام وأنتم إلى الله أقرب.",
  "بمناسبة قدوم عيد الفطر المبارك، أدعو الله أن يعيده أعواماً عديدة ونحن بأفضل حال، وكل عام وأنتم بخير.",
  "اللهم اجعل عيدنا محبة ورضا وسلاماً، وأدم علينا نعمة الإيمان والتقوى.",
  "أرسل لكم أطيب الأمنيات، وأسأل الله أن يتقبل طاعاتكم ويحقق لكم أمانيكم، عيد فطر سعيد.",
  "أتمنى لك ولعائلتك عيداً سعيداً تقبل الله منكم الصيام والقيام، وضاعف لكم حسناتكم وغمركم بفضله وبركاته.",
  "بمناسبة حلول عيد الفطر المبارك، أسأل الله أن يجعلنا من عتقائه من النار وأن يعيد علينا رمضان أعواماً عديدة ونحن بصحة... عيد فطر مبارك.",
  "عيد فطر سعيد، الله يعيده علينا وعليكم بالخير والعافية، وكل عام وأنتم بخير.",
  "بأجمل الكلمات وأرق التحيات نهنئكم بعيد الفطر السعيد، عساكم من عواده.",
  "بكل الحب أرسل لك تلك المعايدة النابعة من القلب الصادق... كل عام وأنت بخير.",
  "أجمل الأماني، وأعذب التهاني أقدمها لكم بمناسبة عيد الفطر.",
  "هنأت بالقبول، وأسكنك الله الجنة مع الرسول ورزقك بالعيد بهجةً لا تزول.",
  "عيدكم سعيد ويومكم مجيد وصلاتكم مقبولة وأيامكم معمورة.",
  "عيد فطر مبارك عليكم أحبابي وعلى كل المسلمين في كل الدنيا أعاده الله عليكم بالخيرات والبركات والسعادة والتوفيق.",
  "تقبل الله منا ومنكم شهر رمضان، وأسعدكم بعيده فرحاً وسروراً ورضا.",
  "أتمنى أن يكون عيد الفطر المبارك بمثابة سعادة وبهجة لنا جميعاً... كل عام وأنتم بخير.",
];

const challenges = [
  "استيقظ قبل شروق الشمس لصلاة الفجر في المسجد",
  "اغتسل بكامل السنة قبل الخروج للصلاة",
  "ارتدِ أحسن ثيابك وأنظفها كما علّم النبي ﷺ",
  "تناول تمرات قبل الخروج للمصلى (وتراً: 1, 3, 5...)",
  "خذ صورة جماعية مع كل من في البيت الآن",
  "ابدأ يومك بتكبيرات العيد من البيت حتى المسجد",
  "سِر لصلاة العيد من طريق وعد من طريق آخر",
  "حضّر نفسك للخطبة واستمع بانتباه للدروس",
  "انوِّي صيام الست من شوال",
  "سلّم على شخص غريب في المصلى وتهادوا",
  "زُر أقرب قريب فوراً بعد الصلاة",
  " أعطِ عيدية لطفل دون أن يعرف من أنت",
  "كتب 5 نعم حصلت عليها في رمضان الماضي",
  "تناول العشاء مع جميع أفراد الأسرة على مائدة واحدة",
  "جهّز ملابس العيد للغد",
  " زُر مريضاً في المستشفى أو في بيته",
  "قدّم عصيراً بارداً لعامل نظافة في حيك",
  "نظّف مقاعد المسجد بعد صلاة العيد",
  "ابتسم لـ10 غرباء في الشارع اليوم",
  " أعطِ مالاً في صدقة قبل غروب الشمس",
  "تناول كعك العيد أو معمول مع القهوة العربية",
  "استخدم بخور العيد التقليدي (عود/مبخر) في كل غرفة بالبيت",
  " انزل مع أطفال العائلة للعب في الحديقة ساعة",
  "قدّم وردة أو شوكولاتة لجارك",
  "اتصل بشخص كنت على خلاف معه وصالحه",
  "زُر قبراً لأحد أقاربك وادعُ له",
  "اطعم والديك بيدك في غداء العيد",
  "شارك تهنئة العيد لـ10 أشخاص على الأقل",
  "اتصل بجدتك/جدك واستمع لذكريات عيدهم القديم",
  "أعطِ عيدية لطفل دون أن يعرف من أنت",
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
  if (navigator.share) {
    navigator.share({ text: dailyQuote.textContent });
  }
};

function drawGarlandFlags() {
  const group = document.getElementById("garland-flags");
  group.innerHTML = "";

  const NUM_FLAGS = 5;
  const STRING_LEN = 10;
  const FLAG_W = 18;
  const FLAG_H = 76;

  const FLAG_COLORS = [
    "#f87171",
    "#facc15",
    "#4ade80",
    "#60a5fa",
    "#c084fc",
  ];

  const P0 = { x: 20, y: 2 };
  const P1 = { x: 500, y: 200 };
  const P2 = { x: 980, y: 2 };

  function bezier(t) {
    return {
      x: (1 - t) ** 2 * P0.x + 2 * (1 - t) * t * P1.x + t ** 2 * P2.x,
      y: (1 - t) ** 2 * P0.y + 2 * (1 - t) * t * P1.y + t ** 2 * P2.y,
    };
  }

  for (let i = 0; i < NUM_FLAGS; i++) {
    const t = (i + 1) / (NUM_FLAGS + 1);
    const anchor = bezier(t);

    const flagGroup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g",
    );
    flagGroup.setAttribute("transform", `translate(${anchor.x}, ${anchor.y})`);

    const swayGroup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g",
    );
    swayGroup.setAttribute("id", `flag-${i}`);

    const string = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line",
    );
    string.setAttribute("class", "garland-string");
    string.setAttribute("x1", 0);
    string.setAttribute("y1", 0);
    string.setAttribute("x2", 0);
    string.setAttribute("y2", STRING_LEN);

    const poly = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon",
    );
    poly.setAttribute("class", "garland-flag");
    const notchDepth = FLAG_H * 0.35;
    poly.setAttribute(
      "points",
      `
  ${-FLAG_W},${STRING_LEN}
  ${FLAG_W},${STRING_LEN}
  ${FLAG_W},${STRING_LEN + FLAG_H}
  0,${STRING_LEN + FLAG_H - notchDepth}
  ${-FLAG_W},${STRING_LEN + FLAG_H}
`,
    );
    poly.setAttribute("fill", FLAG_COLORS[i % FLAG_COLORS.length]);
    poly.setAttribute("stroke", "#888");

    swayGroup.appendChild(string);
    swayGroup.appendChild(poly);
    flagGroup.appendChild(swayGroup);
    group.appendChild(flagGroup);
  }
}

drawGarlandFlags();
window.addEventListener("resize", drawGarlandFlags);

async function captureHighQuality(element) {
  element.classList.add("share-mode");
  const canvas = await html2canvas(element, {
    scale: 3,
    useCORS: true,
    backgroundColor: null,
  });
  element.classList.remove("share-mode");
  return canvas;
}

shareImageBtn.onclick = async () => {
  const canvas = await captureHighQuality(quoteBox);
  canvas.toBlob((blob) => {
    const file = new File([blob], "quote.png", { type: "image/png" });
    if (navigator.share) {
      navigator.share({ files: [file] });
    } else {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "quote.png";
      link.click();
    }
  });
};

downloadCongrats.onclick = () => {
  const link = document.createElement("a");
  link.href = "assets/congrats.png";
  link.download = "congrats.png";
  link.click();
};

shareCongrats.onclick = async () => {
  const response = await fetch("assets/congrats.png");
  const blob = await response.blob();
  const file = new File([blob], "congrats.png", { type: "image/png" });
  if (navigator.share) {
    navigator.share({ files: [file] });
  }
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
    challengeText.textContent =
      "لقد أكملت تحدي اليوم بالفعل\nغدًا يوم جديد إن شاء الله";
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
  const colors = ["#22c55e", "#facc15", "#60a5fa", "#f472b6", "#a78bfa"];
  for (let i = 0; i < 40; i++) {
    fireworks.push({
      x,
      y,
      radius: 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 3 + 1,
      life: 60,
    });
  }
}

function animateFireworks() {
  if (congratsModal.style.display !== "flex") {
    fctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    requestAnimationFrame(animateFireworks);
    return;
  }
  fctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
  fireworks.forEach((p, index) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;
    fctx.beginPath();
    fctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    fctx.fillStyle = p.color;
    fctx.fill();
    if (p.life <= 0) fireworks.splice(index, 1);
  });
  requestAnimationFrame(animateFireworks);
}

setInterval(() => {
  if (congratsModal.style.display === "flex") createFirework();
}, 800);

animateFireworks();

const bgCanvas = document.getElementById("bg-fireworks");
const bgCtx = bgCanvas.getContext("2d");

function resizeBG() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeBG);
resizeBG();

let bgParticles = [];
const bgColors = ["#22c55e", "#facc15", "#60a5fa", "#f472b6", "#a78bfa"];
let bgColorIndex = 0;

function createBGFirework() {
  const x = Math.random() * bgCanvas.width;
  const y = Math.random() * bgCanvas.height * 0.5;
  const color = bgColors[bgColorIndex % bgColors.length];
  bgColorIndex++;
  for (let i = 0; i < 30; i++) {
    bgParticles.push({
      x,
      y,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 2 + 1,
      life: 50,
      color,
    });
  }
}

function animateBGFireworks() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  bgParticles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    bgCtx.fillStyle = p.color;
    bgCtx.fill();
    if (p.life <= 0) bgParticles.splice(i, 1);
  });
  requestAnimationFrame(animateBGFireworks);
}

setInterval(createBGFirework, 1500);
animateBGFireworks();
