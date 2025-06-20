// حفظ تفضيل الوضع من Local Storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// إنشاء زر تغيير الوضع الليلي/النهاري
const themeToggleBtn = document.createElement("button");
themeToggleBtn.textContent = "تغيير الوضع";
themeToggleBtn.className = "toggle-theme";
document.body.appendChild(themeToggleBtn);

// تبديل الوضع عند الضغط
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // حفظ التفضيل
  const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
});
