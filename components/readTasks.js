import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniquDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]")
    // JSON.parse - convertimos los valores a objetos js 
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniquDates(taskList);

    dates.forEach( (date) => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));
        taskList.forEach(task => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            if ( diff === 0 ){
                list.appendChild(createTask(task));
            }
        });
    })

}