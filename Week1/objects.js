'use strict';

const movie = {
    title: 'Avatar',
    genre: 'Sci-Fi',
    duration: '300000000'
};

let title = 'title';

console.log(movie.title);
console.log(movie['title']); // in this case title is a key
console.log(movie[title]); // in this case title is a variable

movie.director = 'Cameron';
movie['director'] = 'Cameron';

delete movie.director;

for (const prop in movie){
    console.log(`${prop} is ${movie[prop]}`); // ` we can do it with ALT+96 
}

const sameMovie = Object.assign({}, movie);
console.log(sameMovie);

const detailMovie = Object.assign(movie, {budget: '10k'});
console.log(detailMovie);

const avatarAgain = {... movie};
console.log(avatarAgain);