const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach(item => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

/* '...args' is a rest parameter. The syntax allows a function to
accept an indefinite number of arguments as an array. */