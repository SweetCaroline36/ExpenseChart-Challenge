const d = new Date();
let currentDay = d.getDay() - 1;

if (currentDay === -1) {
  currentDay = 6;
}

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
    amount: 25.48,
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

//sum all amounts
const sum = amounts.reduce((total, num) => {
  return total + num;
});

//display sum
const sumDisplay = document.getElementById("total-sum");
sumDisplay.textContent = "$" + sum;

//generate bars
const bars = [];
for (let i = 0; i < 7; i++) {
  const name = "day-" + (i + 1);
  const bar = document.getElementById(name);
  bars.push(bar);
  bars[i].style.height = (data[i].amount / amounts[0]) * 100 + "%";
  bars[i].children[0].textContent = "$" + data[i].amount;
}

//turn today's bar blue
bars[currentDay].children[1].style.backgroundColor = "hsl(186, 34%, 60%)";
