import gridView from './GridView.js';

export default class Movie {
  constructor($div, backToMoviesRender) {
    this.$div = $div;
    this.backToMoviesRender = backToMoviesRender;
  }

  render(movie) {
    this.$div.innerHTML = '';
    let element = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(movie.title));
    element.appendChild(h2);
    element.appendChild(new Image()).src = movie.imageUrl;
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('back to movie'));
    button.onclick = this.backToMoviesRender;
    element.appendChild(button);
    this.$div.appendChild(element);
  }
}


// "title": "Kill Bill Vol. 1",
// "year": 2003,
// "director": "Quentin Tarantino",
// "cast": ["Uma Thurman"],
// "imageUrl":
//   "https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
// "imdbUrl": "http://www.imdb.com/title/tt0266697/"