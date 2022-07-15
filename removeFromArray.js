function removeFromArray(...args) {
    const arr = args[0];
    return arr.filter((elem) => {
        return !args.includes(elem);
    })
}