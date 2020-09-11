let arr=[{name:"Pragya", country:"Brazil", age:40, hobbies: ["dancing","singing"]},
        {name:"Abhishek", country:"INDIA", age:42, hobbies: ["playing guitar","singing"] },
        {name:"Preeta", country:"CHINA", age:21, hobbies: ["reading","singing"] },
        {name:"shrishti", country:"Belgium", age:29, hobbies: ["dancing","talking"] }
];   

console.log("People having age less then 30");
function age(){
    for (let j=0; j<4; j++){
        if (arr[j].age < 30){
            console.log(arr[j]);
        }
    }
}

age();

console.log("People who are from INDIA");
function count(){
    for (let k=0; k<4; k++){
        if (arr[k].country == "INDIA"){
            console.log(arr[k]);
        }
    }
}

count();
