'use strict'

const dayjs = require('dayjs'); 
const sqlite = require('sqlite3');

function Film(id, title, favorites = false, date = undefined, rating = undefined) {
    this.id = id;
    this.title = title;
    this.favorites = favorites;
    this.date = date;
    this.rating = rating;

    this.toString = () => `${this.id} ${this.title} ${this.favorites} ${this.date} ${this.rating} `;
};

function FilmLibrary(){
    const db = new sqlite.Database('films.db', (err) => {if(err) throw err;});

    this.array = [];
    
    // addNewFilm
    this.addNewFilm = (film) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO films(id, title, favorite, watchdate, rating) VALUES(?, ?, ?, DATE(?), ?)';
            db.run(sql, [film.id, film.title, film.favorites, film.date, film.rating], function (err) {
                if(err) reject(err);
                else resolve(this.lastID);
            });
        });
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
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM films WHERE id = ?';
            db.run(sql, [code], function (err) {
                if(err) reject(err);
                else resolve(this.lastID);
            });
        });
    };

    this.resetWatchedFilms = () => {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE films SET watchdate = ?';
            const data = ['NULL'];
            db.run(sql, [data], function (err) {
                if(err) reject(err);
                else resolve(this.changes);
            });
        });
    };

    this.getRated = () => {
        return this.array.filter(a => a.rating !== undefined)
                    .sort((a, b) => a - b);
    };

    // getAll
    this.getAll = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films';
            db.all(sql, [], (err, rows) => {
                if(err) reject(err);
                else {
                    const films = rows.map(row => new Film(row.id, row.title, row.favorites, row.date, row.rating));
                    resolve(films);
            } 
        });
    });
  };
    // getAllFavorite
    this.getAllFavorite = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE favorite == 1';
            db.all(sql, [], (err, rows) => {
                if(err) reject(err);
                else {
                    const films = rows.map(row => new Film(row.id, row.title, row.favorites, row.date, row.rating));
                    resolve(films);
            } 
        });
    });
 };

    // getAllWatchedToday
    this.getAllWatchedToday = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE watchdate = ("2022-03-16")';
            db.all(sql, [], (err, rows) => {
                if(err) reject(err);
                else {
                    const films = rows.map(row => new Film(row.id, row.title, row.favorites, row.date, row.rating));
                    resolve(films);
            } 
        });
    });
 };

    // getAllWatchedBeforeDate
    this.getAllWatchedBeforeDate = (date) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE watchdate < DATETIME(?)';
            db.all(sql, [date], (err, rows) => {
                if(err) reject(err);
                else {
                    const films = rows.map(row => new Film(row.id, row.title, row.favorites, row.date, row.rating));
                    resolve(films);
            } 
        });
    });
 };

    // getAllWatchedRating
    this.getAllWatchedRating = (rating) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE rating >= ?';
            db.all(sql, [rating], (err, rows) => {
                if(err) reject(err);
                else {
                    const films = rows.map(row => new Film(row.id, row.title, row.favorites, row.date, row.rating));
                    resolve(films);
                } 
            });
        });
    };

    // getAllWatchedRating
    this.getAllWatchedFilms = (name) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM films WHERE title = ?';
            db.all(sql, [name], (err, rows) => {
                if(err) reject(err);
                else {
                    const films = rows.map(row => new Film(row.id, row.title, row.favorites, row.date, row.rating));
                    resolve(films);
                } 
            });
        });
    };

};

async function main(){
    //const newFilm = new Film('7', 'Fast&Furious', '0', '2022-03-17', '4');
    const filmDb = new FilmLibrary();
    
    //const newFilmIn = await filmDb.addNewFilm(newFilm);
    //const delFilm = await filmDb.resetWatchedFilms();
    const myFilms = await filmDb.getAll();
        console.log(myFilms.toString());

}

main();
