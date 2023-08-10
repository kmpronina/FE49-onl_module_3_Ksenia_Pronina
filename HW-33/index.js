"use strict";

// С ниже приведенным объектом решить следующие задачи:

//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количнство студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

// task 1
const itemNames = Object.getOwnPropertyNames(subjects);
console.log(`Task 1 ${itemNames.toString()}`);

// task 2
let sumOfStudentsAndTeachers = 0;
for (const key in subjects) {
  let obj = subjects[key];
  sumOfStudentsAndTeachers = sumOfStudentsAndTeachers + obj["students"] + obj["teachers"];
}
console.log(`Task 2 ${sumOfStudentsAndTeachers}`);

// task 3
let sumOfSudents = 0;
for (const key in subjects) {
  let obj = subjects[key];
  sumOfSudents = sumOfSudents + obj["students"];
}
const averageValueOfStudents = sumOfSudents / Object.keys(subjects).length;
console.log(`Task 3 ${averageValueOfStudents}`);

// task 4
const arrFromSubjects = Object.values(subjects);
console.log(Object.values(subjects));

// task 5
arrFromSubjects.sort((x, y) => y.teachers - x.teachers);
console.log(arrFromSubjects);
