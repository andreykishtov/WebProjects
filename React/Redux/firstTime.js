const counter = (state = '', action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;
        case 'STRING':
            return action.state;

        default:
            return state;
    }
};

const { createStore } = Redux;
const store = createStore(counter);

const render = () => (document.getElementsByClassName('text')[0].innerHTML = store.getState());
store.subscribe(render);

document.getElementsByClassName('minus')[0].onclick = () => store.dispatch({ type: 'INCREMENT' });

document.getElementsByClassName('plus')[0].onclick = () => store.dispatch({ type: 'DECREMENT' });

const render2 = () => (document.getElementsByClassName('free')[0].innerHTML = store.getState());
store.subscribe(render2);

document.getElementsByClassName('input')[0].onchange = function() {
    store.dispatch({ type: 'STRING', state: JSON.stringify(this.value) });
};
