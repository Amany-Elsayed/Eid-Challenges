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
  "ابدأ يومك بتكبيرات العيد من البيت حتى المسجد",
  "سِر لصلاة العيد من طريق وعد من طريق آخر",
  "حضّر نفسك للخطبة واستمع بانتباه للدروس",
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
  "خذ صورة جماعية مع كل من في البيت الآن",
  "شارك تهنئة العيد لـ10 أشخاص على الأقل",
  " اتصل بجدتك/جدك واستمع لذكريات عيدهم القديم",
  "أعطِ عيدية لطفل دون أن يعرف من أنت",
  "نوِّي صيام الست من شوال",
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
  element.classList.add("share-mode"); // ✅ added (same as Ramadan)

  const canvas = await html2canvas(element, {
    scale: 3,
    backgroundColor: null,
  });

  element.classList.remove("share-mode"); // ✅ added (same as Ramadan)
  return canvas;
}

shareImageBtn.onclick = async () => {
  const canvas = await captureHighQuality(quoteBox);
  canvas.toBlob((blob) => {
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

const fwCanvas = document.getElementById("fireworks-bg");
const fwCtx = fwCanvas.getContext("2d");

function resizeFW() {
  fwCanvas.width = window.innerWidth;
  fwCanvas.height = window.innerHeight;
}
resizeFW();
window.addEventListener("resize", resizeFW);

let particles = [];

function createFirework() {
  const x = Math.random() * fwCanvas.width;
  const y = Math.random() * fwCanvas.height * 0.5;

  for (let i = 0; i < 40; i++) {
    particles.push({
      x,
      y,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 3 + 2,
      alpha: 1,
      color: `hsl(${Math.random()*360},100%,60%)`
    });
  }
}

function drawFireworks() {
  fwCtx.clearRect(0,0,fwCanvas.width,fwCanvas.height);

  particles.forEach((p, i) => {
    fwCtx.beginPath();
    fwCtx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    fwCtx.fillStyle = p.color;
    fwCtx.fill();

    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.015;

    if (p.alpha <= 0) particles.splice(i,1);
  });

  requestAnimationFrame(drawFireworks);
}

function hexToRgb(hsl) {
  return "255,200,50";
}

setInterval(createFirework, 2000);
drawFireworks();

// ─── Responsive Lantern Positioning ───────────────────────────────────────────

function positionLanterns() {
  const path = document.getElementById('garland-path');
  const container = document.querySelector('.garland-container');
  const lanterns = document.querySelectorAll('.lantern');

  if (!path || !container || !lanterns.length) return;

  const containerW = container.offsetWidth;
  const containerH = container.offsetHeight;
  const totalLength = path.getTotalLength();
  const positions = [0.05, 0.18, 0.33, 0.50, 0.67, 0.82, 0.95];

  // stringHeight must match the ::after height in CSS (30px)
  // topCapHeight must match the ::before height in CSS (8px)
  const stringHeight = 30;
  const topCapHeight = 8;

  lanterns.forEach((lantern, i) => {
    const point = path.getPointAtLength(positions[i] * totalLength);
    const x = (point.x / 1000) * containerW;
    const y = (point.y / 200) * containerH;
    // wire point = top of string, string goes down stringHeight, then topCap, then lantern body
    lantern.style.left = (x - lantern.offsetWidth / 2) + 'px';
    lantern.style.top  = (y + stringHeight + topCapHeight) + 'px';
  });
}

window.addEventListener('load', positionLanterns);
window.addEventListener('resize', positionLanterns);