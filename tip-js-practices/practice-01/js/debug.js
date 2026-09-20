"use strict";

const plannedText = "8";
const completedText = "3";
const additionalText = "2";

const completedTotal = Number(completedText) + Number(additionalText);
const remainingTasks = plannedText - completedTotal;

console.log("Выполнено:", completedTotal);
console.log("Осталось:", remainingTasks);

let controlSum = 0;