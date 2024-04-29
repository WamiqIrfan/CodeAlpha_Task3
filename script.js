// JAVASCRIPT
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let body = document.body;

radio2.addEventListener("change", function () {
    if(radio2.checked){
        body.classList.remove("dark");
        body.classList.add("light");
    }
});

radio1.addEventListener("change", function () {
    if(radio1.checked){
        body.classList.remove("light");
        body.classList.add("dark");
    }
});