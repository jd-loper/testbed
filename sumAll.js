let sumAll = function(x, y) {
    let finalSum = 0;
    let bigNum = Math.max(x, y);
    // Finds biggest value of (x, y)
    let smallNum = Math.min(x, y);
    // Finds smallest value of (x, y)

    if (typeof x === "string" || typeof y === "string") {
        return "ERROR";
        // Error if string
    } else if (typeof x === "object" || typeof y === "object") {
        return "ERROR";
        // Error if object/array
    } else if (bigNum >= 0 && smallNum >= 0) {
        for (let i = smallNum; i <= bigNum; i++) {
            finalSum = finalSum + i;
        // Stores sum of iteration
        // Works if (x > y) or (y > x)
        }
    } else {
        return "ERROR";
        // Error if values are negative
    }
    return finalSum;
}