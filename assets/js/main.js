console.log('Accounting Training System Ready');




const  searchInput  = document.getElementById("searchInput");
const lessons = document.querySelectorAll(".lesson");

searchInput.addEventListener("input" , function(){
    const value = searchInput.value.trim().toLowerCase();

    lessons.forEach(lesson =>{
        const title = lesson.querySelector(".titl").textContent.toLowerCase();

        if(title.includes(value)){
            lesson.style.display = "block";

        }else{
            lesson.style.display = "none";
        }
    });
});



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
