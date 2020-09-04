// finding the index of char  "r"
let name= "Priya Jain";
console.log(name.indexOf("r"));

//Converting Minutes to seconds
let min=5;
let sec=min *60;
console.log(`${min} minutes are equals to ${sec} seconds`);

// searching for an element in an array of strings
let fruits=["Apple", "Banana", "Grapes", "Mango","Papaya", "Watermelon"];
let pos=fruits.indexOf("Grapes");
console.log(pos);

//display only elements containing 'a' in them from a array
let sub=["English","Hindi","Maths","Biology", "Chemistry", "Physics"];
let brr=[]; 
for(let i=0; i<sub.length; i++){
if(sub[i].indexOf("a") !=-1){
    brr.push(sub[i]);
}
}
console.log(brr);



//Display an array in reverse order.
let arr=["Pen","Mobile", "Laptop", "Chair", "Copy", "Charger","Table"];
console.log(arr.reverse());