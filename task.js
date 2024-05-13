let a = document.getElementById("primary-button")
let c = document.getElementById("Cancle")
let b = document.getElementById("mod")
a.addEventListener("click", function() {
    b.style.display = "flex"
});

c.addEventListener("click", function() {
    b.style.display = "none"
});
