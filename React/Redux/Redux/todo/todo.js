const { createStore } = Redux;

// ACTION CREATORS
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_TODO = 'EDIT_TODO';

function addTodoAction(id, text) {
    return { type: ADD_TODO, id, text };
}

function removeTodoAction(id) {
    return { type: REMOVE_TODO, id };
}

function toggleTodoAction(id) {
    return { type: TOGGLE_TODO, id };
}

function editTodoAction(id, text) {
    return { type: EDIT_TODO, id, text };
}

const todos = (state, action) => {
    //console.log(action.id);
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo => (action.id != todo.id ? todo : { ...todo, completed: !todo.completed }));

        case REMOVE_TODO:
            return state.filter(todo => (action.id == todo.id ? false : true));

        case EDIT_TODO:
            return state.map(todo => (action.id !== todo.id ? todo : { ...todo, text: action.text }));

        default:
            return state;
    }
};

const store = createStore(todos, []);
let counter = 0;

function renderItem({ id, text, completed }) {
    let toggleButton = `<button class="btnToggle" data-id="${id}">toggle</button>`;
    let deleteButton = `<button class="btnDelete" data-id="${id}">delete</button>`;
    // let deleteButton = `<button class="btnEdit" data-id="${id}">delete</button>`;
    return `${id} ${text} ${completed} ${toggleButton} ${deleteButton} `;
}

const render = () => (document.getElementById('container').innerHTML = store.getState().reduce((sum, value) => sum + renderItem(value) + '<br>', ''));

store.subscribe(render);

document.getElementById('todoAdd').onclick = () => store.dispatch(addTodoAction(counter++, document.getElementById('todoInput').value, false));

document.querySelector('body').onclick = e => {
    if (e.target.className === 'btnDelete') {
        store.dispatch(removeTodoAction(e.target.dataset.id));
    }
    if (e.target.className === 'btnToggle') {
        store.dispatch(toggleTodoAction(e.target.dataset.id));
    }
};
