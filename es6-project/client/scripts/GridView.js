import Movie from './movie.js';

export default class GridView {
  constructor($div) {
    this.$div = $div;
    this.backToMoviesRender = this.backToMoviesRender.bind(this);
    this.movieDIv = new Movie($div, this.backToMoviesRender);
  }

  render(movies) {
    this.movies = movies;
    this.$div.innerHTML = '';
    return movies.map(movie => {
      let element = document.createElement('div');
      let h2 = document.createElement('h2');
      h2.appendChild(document.createTextNode(movie.title));
      element.appendChild(h2);
      element.appendChild(new Image()).src = movie.imageUrl;
      element.onclick = () => {
        this.movieDIv.render(movie);
      };
      return this.$div.appendChild(element);
    });
  }

  backToMoviesRender() {
    this.render(this.movies);
  }
}
