document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
);

document.addEventListener(
    "keydown",
    function (e) {
        if (e.ctrlKey && e.shiftKey && e.code === "KeyI" ||
        e.ctrlKey && e.shiftKey && e.code === "KeyJ" || 
        e.ctrlKey && e.code === "KeyU" ||
        e.code === "Insert" ||
        e.ctrlKey && e.code === "KeyC" ||
        e.code === "KeyS" && (navigator.userAgent.includes("Macintosh") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
    },
    false
);

function disabledEvent(e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
    e.preventDefault();
    return false;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));