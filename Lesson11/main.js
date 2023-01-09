const arr = ["An", "Duc", "Tung", "Cuong", "Nam", "Hoang", "Thai", "Anh", "Dung"]

var longestString = (arr) => {
    let maxLength = Math.max(...arr.map(elem => elem.length));
    return arr.filter(elem => elem.length ===maxLength)
}
console.log(longestString(arr));

// .........................................................

const input = [23,45,7,8,9,19,16]
var totalEven = input.reduce((acc, elem) =>{
    if(elem % 2 === 0){
        acc += elem
    }
    return acc
},0)
var totalOld = input.reduce((acc, elem) =>{
    if(elem % 2 === 1){
        acc += elem
    }
    return acc
},0)
console.log([totalEven, totalOld]);

// ................................................................

function printAB (){
const inputOne = parseInt(document.querySelector("#one").value)
const inputTwo = parseInt(document.querySelector("#two").value)
    if(inputOne<inputTwo){
        for(let i = inputOne; i <= inputTwo;++i){
            console.log(i)
        }
    }else{
        for(let i = inputTwo; i <= inputOne;++i){
            console.log(i)
        }
    }
}

// ......................................................
