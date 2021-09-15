let input = document.getElementById('input');
let button = document.getElementById('button');
const Arr = [
    { name: 'Maks', age: 30 },
    { name: 'Katy', age: 25 },
    { name: 'Dimich', age: 32 },
    { name: 'Yulia', age: 27 }
]

let [t] = Arr

button.addEventListener('click', () => {
    setTimeout( function(){
        if (input.value === 'google') {
            alert('Yandex круче. Но это не точно')
        } else {
            alert(`${input.value} ` + `${t.name}`)
        }
    },3000)
});





function superSum(val1, val2) {
    alert(val1 + val2)
}
superSum(15, 4)





const arrNum = [1, 3, 5, 7, 9, 2, 4, 6, 8]
let max = poiskMax(arrNum)
let min = poiskMin(arrNum)
alert(max)
alert(min)

function poiskMin(arrNum) {
    let a = arrNum[0]
    for (let i = 0; i < arrNum.length; i++) {
        if (a < arrNum[i]) a = arrNum[i]
    }
    return a
}

function poiskMax(arrNum) {
    let a = arrNum[0]
    for (let i = 0; i < arrNum.length; i++) {
        if (a > arrNum[i]) a = arrNum[i]
    }
    return a
}




let a = 14;
let b = 234;

[a, b] = [b, a]

console.log(a,b)




const arr123 = [123123,43534,4,345345,5677888,2342346,457568787]


function findMax(array){
    return Math.max.apply(null, array);
}

console.log(findMax(arr123))