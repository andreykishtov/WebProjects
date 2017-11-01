export default class GridView {
  constructor($div) {
    this.$div = $div;
  }

  render(movies, handleOnClick, handelClear) {
    let directors = this.findDirectors(movies);
    let actors = this.findActors(movies);
    this.renderDiv(directors, 'Directors', handleOnClick);
    this.renderDiv(actors, 'Actors', handleOnClick);
    this.renderClearDiv(handelClear);
  }

  renderClearDiv(handelClear) {
    let element = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.onclick = () => handelClear();
    h2.appendChild(document.createTextNode(`Clear Search`));
    element.appendChild(h2);
    this.$div.appendChild(element);
  }

  findDirectors(movies) {
    return movies.reduce((acc, curr) => {
      acc[curr.director] ? acc[curr.director]++ : (acc[curr.director] = 1);
      return acc;
    }, {});
  }
  findActors(movies) {
    return movies.reduce((accumulator, currentValue) => {
      return { ...accumulator, ...this.findHowMany(currentValue.cast) };
    }, {});
  }

  findHowMany(movies) {
    return movies.reduce((accumulator, currentValue) => {
      accumulator[currentValue.cast] ? accumulator[currentValue]++ : (accumulator[currentValue] = 1);
      return accumulator;
    }, {});
  }

  renderDiv(data, h2Name, handleOnClick) {
    let element = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(h2Name));
    element.appendChild(h2);
    Object.keys(data).map(item => {
      let p = document.createElement('p');
      p.onclick = () => handleOnClick(item, h2Name === 'Directors' ? 'director' : 'cast');
      p.appendChild(document.createTextNode(`${item} (${data[item]})`));
      element.appendChild(p);
    });
    this.$div.appendChild(element);
  }

  createImage(url) {
    let myImage = new Image(100, 200);
    myImage.src = url;
    return myImage;
  }
}
