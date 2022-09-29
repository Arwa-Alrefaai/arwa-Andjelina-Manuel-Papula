 let sand = JSON.parse(sandwiches);
console.log(sand);

let sand1 = JSON.parse(fries);
console.log(sand1);


 for (let sandw1 of fries) {
    console.log(sand1.fries_size)
   
};

for (let sandw of sandwiches  ){
    console.log(sand.sandwich)
    document.getElementById("contain").innerHTML = (" My favorite sandwich is a  " + sand.sandwich + "which has approximately  " + sand.calories + " calories," + " along with it I enjoy eating " + sand1.fries_size + "which have about  " + sand1.calories + " calories.")
};



 


 

