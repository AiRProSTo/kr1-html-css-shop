"use strict";

const totalTasks = 9;
const completedTasks = 90;
const dailylimit = 3;

if (
    typeof totalTasks !== "number" ||
    typeof completedTasks !== "number" ||
    !Number.isInteger(totalTasks) ||
    !Number.isInteger(completedTasks)
) {
    console.log("Ошибка: количество задач должно быть целым.");
} else if (
    totalTasks < 0 ||
    completedTasks < 0 ||
    totalTasks > 1000 ||
    completedTasks > totalTasks
) {
    console.log("Ошибка: некорректное число задач.");
} else if (
    typeof dailylimit !== "number" ||
    !Number.isInteger(dailylimit) ||
    dailylimit < 1 ||
    dailylimit > 1000
) {
    console.log("Ошибка: дневной лимит должен быть целым числом от 1 до 1000.");
} else {
    let remainingTasks =totalTasks - completedTasks;
    let day = 0;
    if(remainingTasks === 0) {
        console.log("Все задачи выполнены.");
        console.log("Потребуется дней: 0");
    } else {

        while(remainingTasks > 0) {
            day++;
            const taskForToday = Math.min(remainingTasks, dailylimit);
            console.log("День " + day + ": Выполнено задач: " + taskForToday);
            remainingTasks -= taskForToday;
        }

        console.log("Потребуется дней: " + day);
    }

}
