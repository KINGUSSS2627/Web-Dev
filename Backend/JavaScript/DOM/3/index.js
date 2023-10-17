var n1 = Math.floor(Math.random() * 6) + 1;
var n2 = Math.floor(Math.random() * 6) + 1;
while (n1 === n2) {
    n1 = Math.floor(Math.random() * 6) + 1;
    n2 = Math.floor(Math.random() * 6) + 1;
}
var s1 = "dice";
s1 = s1 + n1;
var s2 = "dice";
s2 = s2 + n2;

document.querySelector("#d1 img").setAttribute("src", "image/" + s1 + ".png");
document.querySelector("#d2 img").setAttribute("src", "image/" + s2 + ".png");

if (n1 > n2) {
    document.querySelector("#win").textContent = "The Winner is Player 1";
}
else {
    document.querySelector("#win").textContent = "The Winner is Player 2";
}

