// DOM references
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll(".img-container img");
const imageContainerEl = document.querySelector(".img-container");
const dotsEl = document.querySelector(".dots");
const counterEl = document.querySelector(".counter");
const progressBar = document.querySelector(".progress-bar");
const TOTAL = imgsEl.length;
const INTERVAL = 3000;
let currentImg = 1;
let timeOut;
let progressStart;
let rafId;

// Build dots dynamically
imgsEl.forEach((_, i) => {
  const d = document.createElement("span");
  d.className = "dot";
  d.addEventListener("click", () => {
    currentImg = i + 1;
    resetAndUpdate();
  });
  dotsEl.appendChild(d);
});
const dots = document.querySelectorAll(".dot");
nextEl.addEventListener("click", () => { currentImg++; resetAndUpdate(); });
prevEl.addEventListener("click", () => { currentImg--; resetAndUpdate(); });
function resetAndUpdate() {
  clearTimeout(timeOut);
  cancelAnimationFrame(rafId);
  updateImg();
}
function updateImg() {
  if (currentImg > TOTAL) currentImg = 1;
  else if (currentImg < 1) currentImg = TOTAL;
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 100}%)`;
  // Update dots + counter
  dots.forEach((d, i) => d.classList.toggle("active", i === currentImg - 1));
  counterEl.textContent = `${currentImg} / ${TOTAL}`;
  // Progress bar animation
  progressStart = performance.now();
  const tick = (now) => {
    const pct = Math.min(((now - progressStart) / INTERVAL) * 100, 100);
    progressBar.style.width = pct + "%";
    if (pct < 100) rafId = requestAnimationFrame(tick);
  };
  rafId = requestAnimationFrame(tick);
  // Auto-advance
  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, INTERVAL);
}
updateImg();