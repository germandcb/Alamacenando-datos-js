export const uniquDates = (tasks) => {
    console.log(tasks);
    const unique = []

    tasks.forEach(tasks => {
        console.log(tasks.dateFormat);
        if (!unique.includes(tasks.dateFormat)) unique.push(tasks.dateFormat);
    });
    return unique;
};