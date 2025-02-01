let icon = document.querySelector(".fa-list");
let list = document.querySelector(".social-mob");

let flag = true;

icon.addEventListener("click", () => {
  if (flag) {
    list.style.display = "block";
    flag = false;
  } else {
    list.style.display = "none";
    flag = true;
  }
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// دالة لتحديث عرض الصورة
function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0; // العودة إلى أول صورة إذا كانت الصورة الأخيرة
    } else if (index < 0) {
        slideIndex = totalSlides - 1; // العودة إلى آخر صورة إذا كنا في بداية السلايدر
    } else {
        slideIndex = index;
    }
    document.querySelector(".slides").style.transform = `translateX(${-slideIndex * 50}vw)`; // التبديل بين الصور
}

// التنقل بين الصور يدويًا
prevButton.addEventListener("click", () => showSlide(slideIndex - 1));
nextButton.addEventListener("click", () => showSlide(slideIndex + 1));

// تغيير الصورة تلقائيًا كل 3 ثوانٍ
setInterval(() => {
    showSlide(slideIndex + 1);
}, 3000);


