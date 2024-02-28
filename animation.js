// Do an example for animation using JS

let animateEle = document.getElementById("animateDiv");

let rotate = 0;
let mLeft = 0;
let mRight = 0;

function animateDiv() {
    rotate++;
    mLeft++;
    mRight++;
    
    animateEle.style.rotate = `${rotate}deg`;
    animateEle.style.marginLeft = `${mLeft}px`;
    animateEle.style.marginRight = `${mRight}px`;

    requestAnimationFrame(animateDiv);
}

animateDiv();

function colorChange() {
    document.getElementById("animateDiv").style.backgroundColor = "yellow";

}