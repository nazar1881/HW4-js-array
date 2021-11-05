console.log('---------Пункт №5');
console.log('Замените код Function Expression стрелочной функцией:');

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    () => {console.log("Вы согласились."); }, // нужно обновить данное место
    () => {console.log("Вы отменили выполнение."); } // нужно обновить данное место
  );

console.log('---------Пункт №6');
console.log('Напишите код который преобразует строку в массив:');

let str = 'my-short-string'.split('-');
console.log(str); 

console.log('---------Пункт №7');
console.log('Напишите код который преобразует массив в строку:');

let arr = ['JavaScript', 2015].join(' ');
console.log(arr);

console.log('---------Пункт №8');
console.log('Отфильтровать всех пользователей которые старше 20 лет.');

let users = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let user = users.filter(function (item) {
    return item.age <= 20;
});
console.log(user);

console.log('---------Пункт №9');
console.log('У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.');

//let users = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let names = users.map((item) => {
    return item.name;
});
console.log(names); // [Vic, Petya, Jon]

console.log('---------Пункт №10');
console.log('Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.');

let arr1 = [5, 3, 8, 1];

function filterRangeInPlace (arr1, a, b) {
    for (let i = 0; i <= arr1.length ; i++) {
        let val = arr1[i];
        
        if (val < a || val >b){
            arr1.splice(i, 1);
            i--;
        }    
    }
}

filterRangeInPlace(arr1, 1, 4);
console.log( arr1 ); // [3, 1]

console.log('---------Пункт №11');
console.log('Написать функцию которая будет преобразовывать строку в массив строк.');

function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
}

let string = 'my-short-string';
let defic = '-';

console.log(splitString(string, defic));

console.log('---------Пункт №12');
console.log('Напишите функцию slArray(arr, startIndex, endIndex), которая принимает массив arr,  и возвращает новый массив, в который должна скопировать значения в рендже с  startIndex, endIndex.');

function slArray(arr2, startIndex, endIndex) {
    return arr2.slice(startIndex, endIndex);
}

let arr2 = [5, 3, 8, 1];
let range = slArray(arr2, 1, 4);
console.log(range); // 3, 8, 1 
console.log(arr2); // 5,3,8,1 (без изменений)

console.log('---------Пункт №13');
console.log('Напишите функцию суммирования sum, которая принимает аргументы с помощью spread operator.');

function sum(...args) {
    let sum = 0;
    for (let arg of args) { sum += arg; }
    return sum;
}

console.log(sum(1,2,3));
console.log(sum(5,5,5));
console.log(sum(5,-5,5));