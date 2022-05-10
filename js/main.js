window.onload = function(){
    var navFloatClick = document.getElementById("navFloat");
    var navDesign = document.getElementById("navDesign");
    var quitte = document.getElementById("quitte");

    navFloatClick.addEventListener("click", function () {
        navDesign.style.display = "block";
        navDesign.style.position = "absolute";
        navDesign.style.top = "0px";
        navDesign.style.left = "0px";
        navDesign.style.width = "100%";
        navDesign.style.height = "10vh";
        navDesign.style.backgroundColor = "rgb(26, 25, 25)";
    }, false);
    quitte.addEventListener("click", function () {
        navDesign.style.position = "absolute";
        navDesign.style.top = "0px";
        navDesign.style.left = "0px";
        navDesign.style.width = "0px";
        navDesign.style.height = "0px";
    }, false);
}