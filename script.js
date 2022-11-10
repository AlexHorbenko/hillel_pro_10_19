// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// removeElement(array, 5);
// Результат: [1, 2, 3, 4, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];

// ==========================================Splice========================================
const index = array.indexOf(5)
const arrayNew = array.splice(index, 1)
console.log(array);

// =========================================For + Splice===================================
for( let i = 0; i < array.length; i++){ 
    
    if ( array[i] === 5) { 

        array.splice(i, 1); 
    }
};
console.log(array);

// ==========================================Filter========================================
const newArray = array.filter(function(number) {
    return number !== 5;
});
console.log(newArray);