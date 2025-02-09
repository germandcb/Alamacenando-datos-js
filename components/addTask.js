import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => { // Función que agrega tareas 
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-from-date]'); // Capturamos el elemento con data-atributs
    
    const value = input.value;
    const date = calendar.value; // accedemos al valor del input
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if( value === "" || date === "" ) {
        return
      }
    calendar.value = '';
    input.value = '';

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
      }

      list.innerHTML = '';

    // Convertimos el string, para poder manejarala con js
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);
    // Convertimos la tarea en un string
    localStorage.setItem("tasks", JSON.stringify(taskList)); // Alamacenamos los datos en el alamacenamiento local del navegador 

      displayTasks();
  }
  
  export const createTask = ({ value, dateFormat, complete, id }) => {
    const task = document.createElement('li');
        task.classList.add('card');
    //backticks
    const taskContent = document.createElement('div');

    const check = checkComplete(id);

    if (complete) {
      console.log('completada');
      check.classList.toggle('fas');
      check.classList.toggle('completeIcon');
      check.classList.toggle('far');
    }


    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElement = document.createElement('span'); // creamos el elemento span
        dateElement.innerHTML = dateFormat; // le insertamos el formate de fecha a elmento span   
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
    return task;
  };