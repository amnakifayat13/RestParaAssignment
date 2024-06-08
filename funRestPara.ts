function restParameters(...data:any){
    console.log(...data);
    
}
restParameters("hello", "Amna Aftab Kifayat");
restParameters([1,2,3, "Apple", true]);
restParameters({
    name: "Honda",
    color: "white",
    model: 2023
})