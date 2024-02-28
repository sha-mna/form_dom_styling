// Do an example for event handling using html event attribute and eventListener

function changeTextColor() {
    let elem = document.querySelector("#pOne");
    elem.style.color = "yellow";
    elem.style.backgroundColor = "red";
    elem.style.paddingTop = "10px";
    elem.style.paddingBottom = "10px";
    elem.style.paddingLeft = "10px";
}

function hideElement() {
    let elem = document.getElementById("hOne");
    elem.style.visibility = "hidden";
}

function showElement() {
    let elem = document.getElementById("hOne");
    elem.style.visibility = "visible";  
}

function elementHide() {
    let elem = document.getElementById("hTwo");
    elem.style.visibility = "hidden";
}

function elementShow() {
    let elem = document.getElementById("hTwo");
    elem.style.visibility = "visible";
}

document.getElementById("hideTwo").addEventListener('click', elementHide);
document.getElementById("showTwo").addEventListener('click', elementShow);

function getFullName() {
    let fullName = document.getElementById("fullNameFormField").value
    console.log(fullName);
}


