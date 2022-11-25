export const uniquDates = (tasks) => {
    console.log(tasks);
    const unique = []

    tasks.forEach(tasks => {
        console.log(tasks.dateFormat);
        if (!unique.includes(tasks.dateFormat)) unique.push(tasks.dateFormat);
    });
    return unique;
};

export const orderDates = (dates) => {
    return dates.sort( (a,b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate - secondDate;
    }); // Ordena los elementos en un arreglo
}