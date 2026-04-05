// حماية الصفحات
if (localStorage.getItem("auth") !== "true") {
  window.location.href = "login.html";
}

console.log("Accounting Training System Ready");

// بحث في الدروس
const searchInput = document.getElementById("searchInput");
const lessons = document.querySelectorAll(".lesson");

searchInput.addEventListener("input", function () {
  const value = searchInput.value.trim().toLowerCase();

  lessons.forEach((lesson) => {
    const title = lesson.querySelector(".titl").textContent.toLowerCase();

    if (title.includes(value)) {
      lesson.style.display = "block";
    } else {
      lesson.style.display = "none";
    }
  });
});

// تسجيل الخروج
function logout() {
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}

// حماية الصفحات (ما تشمل صفحة تسجيل الدخول)
if (
  localStorage.getItem("auth") !== "true" &&
  !window.location.pathname.includes("login.html")
) {
  window.location.href = "login.html";
}

// الوضع الليلي
// const darkBtn = document.getElementById("darkToggle");

// if (darkBtn) {
//     darkBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark");

//     if (document.body.classList.contains("dark")) {
//         localStorage.setItem("darkMode", "on");
//     } else {
//         localStorage.setItem("darkMode", "off");
//     }
//     });

//     if (localStorage.getItem("darkMode") === "on") {
//     document.body.classList.add("dark");
//     }
// }
