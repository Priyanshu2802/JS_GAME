setTimeout(neww(), 10);
var win = [
  "You Are Right!",
  "You're Pretty Good In This !",
  "You Are Going Great!",
];
var lose = ["Better Luck Next Time", "Make A Right Guess !", "You're Wrong!"];

function checker(changee) {
  var anss = document.getElementById("color").innerText;
  var selected = document.getElementById(changee).style.background;

  if (selected == anss) {
    document.getElementById("message").innerText =
      win[Math.round(Math.random() * 3) % 3];
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").innerText =
      lose[Math.round(Math.random() * 3) % 3];
    document.getElementById("message").style.color = "red";
  }

  document.getElementById("message").style.display = "flex";
  document.getElementById("colors").style.display = "none";

  setTimeout(() => {
    document.getElementById("message").style.display = "none";
    document.getElementById("colors").style.display = "flex";
  }, 1000);

  setTimeout(neww(), 1000);
}
function neww() {
  var arr = new Array();
  for (let i = 1; i <= 4; i++) {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    arr.push(`rgb(${r}, ${g}, ${b})`);
  }
  document.getElementById("a").style.background = arr[0];
  document.getElementById("b").style.background = arr[1];
  document.getElementById("c").style.background = arr[2];
  document.getElementById("d").style.background = arr[3];
  document.getElementById("color").innerText =
    arr[Math.round(Math.random() * 4) % 4];
}
