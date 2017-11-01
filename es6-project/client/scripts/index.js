import GridView from './GridView.js';
import AsideView from './AsideView.js';
import Api from './Api.js';

export default class Main {
  constructor(mainDiv, asideDiv) {
    this.gridView = new GridView(mainDiv);
    this.asideView = new AsideView(asideDiv);
    this.handelOnChange = this.handelOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handelClear = this.handelClear.bind(this);
    document.querySelector('.search').onchange = this.handelOnChange;
  }

  async render() {
    try {
      this.movies = await Api();
      this.gridView.render(this.movies);
      this.asideView.render(this.movies, this.handleOnClick, this.handelClear);
    } catch (error) {
      console.log(error);
    }
  }

  handelOnChange(event) {
    this.gridView.render(this.movies.filter(item => item.title.includes(event.target.value)));
  }

  handelClear() {
    this.gridView.render(this.movies);
  }

  handleOnClick(name, rowName) {
    rowName === 'director'
      ? this.gridView.render(this.movies.filter(item => item[rowName].includes(name)))
      : this.gridView.render(
          this.movies.filter(item => item[rowName].filter(movie => movie.includes(name)).length)
        );
  }
}

const main = new Main(document.querySelector('.main'), document.querySelector('.aside'));
main.render();
