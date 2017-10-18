
// console.log(deleteTwice(ar1));

function deleteTwice(arr) {
    let current;
    return flattened = arr.reduce(item => {
        if (current != item) {
            current = item;
        }
        return item;
    }, []);
}



// function deleteTwice(array) {
//     return array.forEach(function(element) {
//         let current;
//         if (current !== element) {
//             return element;
//         }
//         current = element;
//     });
// }

let arr = [1, 1, 2,2, 55,2, 3,3,3,3];

console.log(arr.filter((item,i)=>item !== arr[i+1]));

// function deleteTwice(array) {
//     let current;
//     let arr=[];
//     array.forEach(function(element) {
//         if (current == element) {
//             return;
//         }
//         current = element;
//         arr.push(element);
//     });
//     return arr;
// }

//console.log(deleteTwice(ar1));
