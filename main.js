const button1 = document.getElementById("btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");

const apr = document.getElementById("changeapr");
const cost = document.getElementById("changecost");
const amount = document.getElementById("amount");

const arr = [50, 60, 70, 80];
const months = {
  3: 50,
  6: 60,
  12: 70,
  24: 80,
};

button1.onclick = function () {
  calculateApr(3);
  animate();
};
button2.onclick = function () {
  calculateApr(6);
  animate();
};
button3.onclick = function () {
  calculateApr(12);
  animate();
};
button4.onclick = function () {
  calculateApr(24);
  animate();
};
let count = 1;
function animate() {
  mydiv.style.animationName = "example";
  setTimeout(() => {
    mydiv.style.animationName = null;
  }, 2000);
}

function calculateApr(month) {
  const profit = month * ((100 * months[month]) / 12);
  const profit2 = (100 * months[month]) / 12;
  amount.innerHTML = "$ " + (10000 + profit);
  apr.innerHTML = months[month];
  cost.innerHTML = Math.floor(profit2);
}

const mydiv = document.getElementById("MYDIV");
const header = document.getElementById("myDIV");
const btns = header.getElementsByClassName("btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// });

const colors = [
  "#3CC157",
  "#2AA7FF",
  "#1B1B1B",
  "#FCBC0F",
  "#F85F36",
  "#e309ac",
];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});
