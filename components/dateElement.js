export default (date) => {
    const dateElement = document.createElement("li"); // creamos el elemento li que va a estar almacenado en la dateElement
    dateElement.classList.add("date"); // Añadimos una clase al elemento li 
    dateElement.innerHTML = date; // Insertamos contenido html a dateElement = li
    return dateElement; // retorna el dateElement = li
}