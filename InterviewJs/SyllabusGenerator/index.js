class SyllabusGenerator {
  constructor(div) {
    this.input = document.getElementById('fileInput');
    this.button = document.getElementById('button');
    this.div = div;
    this.squareIcon = 'fa fa-plus-square';
    this.circleIcon = 'fa fa-check-circle';
    this.hideClassName = 'hide';
  }

  parseJson() {
    let file = this.input.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = file => this.RenderJson(JSON.parse(file.target.result));
  }

  createListeners() {
    this.input.onchange = () => this.parseJson();
  }

  RenderJson(json) {
    this.RenderArr(json, this.div);
  }

  RenderArr(arr, element) {
    let ul = document.createElement('ul');
    element.appendChild(ul);
    arr.map(item => this.createLeaf(item, ul));
    return ul;
  }

  createLeaf(item, ul) {
    let li = document.createElement('li');
    let span = document.createElement('span');

    if (item.description) {
      span.setAttribute('data-description', item.description);
    }

    if (item.sub) {
      this.createIcon(span, this.squareIcon);
    }

    this.createIcon(span, this.circleIcon);
    let text = document.createTextNode(item.name);
    span.appendChild(text);
    li.appendChild(span);
    ul.appendChild(li);
    if (item.sub) {
      let child = this.RenderArr(item.sub, li);
      span.children[0].addEventListener('click', () => this.ShowNested(child));
    }
  }

  createIcon(span, nameClass) {
    let i = document.createElement('i');
    i.setAttribute('class', nameClass);
    i.addEventListener('click', event => this.onClickToggle(event, nameClass));
    span.appendChild(i);
  }

  onClickToggle(event, nameClass) {
    event.target.getElementsByClassName(nameClass).length
      ? event.target.setAttribute('class', `${nameClass}-o`)
      : event.target.setAttribute('class', nameClass);
  }

  checkAll(event, name) {
    // let listToCheck = event.target.parentNode.parentNode.getElementsByClassName(`fa-${name}`);
    // let NotChecked = event.target.parentNode.parentNode.getElementsByClassName(`fa-${name}-o`);
    // for (var index = 0; index < listToCheck.length; index++) {
    //   var element = listToCheck[index];
    //   this.onClickToggle(element, 'check-circle', null, false);
    // }
    // for (var index = 0; index < NotChecked.length; index++) {
    //   var element = NotChecked[index];
    //   this.onClickToggle(element, 'check-circle', null, false);
    // }
  }

  ShowNested(li) {
    li.classList.toggle(this.hideClassName);
  }
}

let syllabusGenerator = new SyllabusGenerator(document.getElementById('data'));
syllabusGenerator.createListeners();
