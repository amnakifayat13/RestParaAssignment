function restParameters() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
}
restParameters("hello", "Amna Aftab Kifayat");
restParameters([1, 2, 3, "Apple", true]);
restParameters({
    name: "Honda",
    color: "white",
    model: 2023
});
