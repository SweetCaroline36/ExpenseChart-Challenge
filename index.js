const d = new Date();
let currentDay = d.getDay() - 1;

//const jsonData = JSON.parse("data.json");

if (currentDay === -1) {
  currentDay = 6;
}

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const bars = [];

const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 35.48,
  },
];

const amounts = [];
data.forEach((x) => {
  amounts.push(x.amount);
});

//sort amounts to have highest value as first element
amounts.sort(function (a, b) {
  return b - a;
});

const sum = amounts.reduce((total, num) => {
  return total + num;
});

const sumDisplay = document.getElementById("total-sum");
sumDisplay.textContent = "$" + sum;

for (let i = 0; i < 7; i++) {
  const name = "day-" + (i + 1);
  const bar = document.getElementById(name);
  bars.push(bar);
  bars[i].style.height = (data[i].amount / amounts[0]) * 100 + "%";
  bars[i].children[0].textContent = "$" + data[i].amount;
}

bars[currentDay].children[1].style.backgroundColor = "hsl(186, 34%, 60%)";
