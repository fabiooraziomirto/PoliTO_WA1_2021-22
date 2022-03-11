'use strict'

const dayjs = require('dayjs'); 

function Film(id, title, favorites = false, date = undefined, rating = undefined) {
    this.id = id;
    this.title = title;
    this.favorites = favorites;
    this.date = date;
    this.rating = rating;
};

function FilmLibrary(){
    this.array = [];
    // add new film in the array
    this.addNewFilm = (film) => {
        this.array.push(film);
    };

    // sortByDate
    this.sortByDate = () => {
        let sortArray = [];
        sortArray = this.array.sort((a, b) => 
            dayjs(a).isAfter(dayjs(b)) ? -1 : 1
        );
        let un = []; 
        un = sortArray.filter(a => a.date === undefined);
        sortArray = sortArray.filter(a => a.date !== undefined);
        sortArray.push(un);
        return sortArray;
    };

    this.deleteFilm = (code) => {
        this.array = this.array.filter(a => a.id !== code);
        return this.array;
    };

    this.resetWatchedFilms = () => {
        this.array.forEach(a => {
            if(a.date !== undefined){
                a.date = undefined;
            }
        });
    };

    this.getRated = () => {
        return this.array.filter(a => a.rating !== undefined)
                    .sort((a, b) => a - b);
    };
};

const pulpFiction = new Film(1, 'Pulp Fiction', true, dayjs('2022-03-10'), 5);
const grams = new Film(3, '21 Grams', true, dayjs('2022-03-17'), 4);
const starWars = new Film(2, 'Star Wars', false);
const matrix = new Film(4, 'Matrix', false);
const shrek = new Film(5, 'Shrek', false, dayjs('2022-03-21'), 3);

const films = new FilmLibrary();

films.addNewFilm(pulpFiction);
films.addNewFilm(grams);
films.addNewFilm(starWars);
films.addNewFilm(matrix);
films.addNewFilm(shrek);
/*console.log("Full Array");
console.log(films);*/

console.log("Array sorted my date");
console.log(films.sortByDate());

/*console.log("Deleting film with id = 2");
console.log(films.deleteFilm(2));
console.log(films);

console.log("Reset data of vision of the film");
console.log(films.resetWatchedFilms());

console.log("Getting list of all film ranked");
console.log(films.getRated());*/
