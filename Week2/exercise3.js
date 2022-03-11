'use strict'

const dayjs = require('dayjs'); // import dayjs' library

function Exam(code, name, credits, date, score, laude = false) {
    this.code = code;
    this.name = name;
    this.credits = credits;
    this.date = date;
    this.score = score;
    this.laude = laude;
}

function ExamList() {
    this.list = [];
    // add
    this.add = (exam) => {
        this.list.push(exam);
    };
    // find
    this.find = (code) => {
        return this.list.filter(course => course.code === code)[0];
      /*  for(const c of this.list){
            if(c.code === code){
                return c;
            }
        }
        return undefined;*/
   };
    // afterDate
    this.afterDate = (date) => {
        return this.list.filter(course => course.date.isAfter(date));
    };

    // listByDate
    this.listByDate = () => {
        return [...this.list].sort((a, b) => (a.date.isAfter(b.date)
        ? 1 : -1));
    };
    // listByScore
    this.listByScore = () => {
        return [...this.list].sort((a, b) => b.score - a.score)
    };

    // average
    this.average = () => {
        return this.list.reduce((sum, course) => sum + course.score, 0)/this.list.length;
    }

}


const wa1 = new Exam('01ABC', 'Web Application 1', 6, dayjs('2022-06-07'), 30, true);

const softeng = new Exam('01xxx', 'Software Engineering I', 6, dayjs('2022-07-02'), 28);

const exams = new ExamList();
exams.add(wa1);
exams.add(softeng);

//console.log(exams.find('01ABC'));

//console.log(exams.listByDate());

//console.log(exams.listByScore());

//console.log(exams.afterDate('2022-06-08'));

console.log(exams.average);