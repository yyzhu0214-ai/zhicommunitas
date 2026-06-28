/* ================================
   ZHI Communitas Website Scripts
   文件用途：少量交互逻辑
   目前功能：
   1. 手机端菜单开关
   2. 点击导航后自动关闭菜单
   3. 页面滚动后给顶部导航加阴影
   4. 自动更新页脚年份
================================ */

const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const yearElement = document.querySelector("#year");

function toggleMobileNav() {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "关闭菜单" : "打开菜单");
}

function closeMobileNav() {
  body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "打开菜单");
}

function updateHeaderShadow() {
  if (window.scrollY > 12) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
}

function updateYear() {
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

if (navToggle) {
  navToggle.addEventListener("click", toggleMobileNav);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

window.addEventListener("scroll", updateHeaderShadow);

updateHeaderShadow();
updateYear();
