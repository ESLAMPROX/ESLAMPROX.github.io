
// تأثير دخول العناصر بسلاسة
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "1.3s";
        document.body.style.opacity = "1";
    }, 100);
});
