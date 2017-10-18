const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Test Redux'
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Test Redux',
            completed: false
        }
    ];

    Object.freeze(stateBefore);
    Object.freeze(action);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Test Redux',
            completed: false
        },
        {
            id: 1,
            text: 'finish project',
            completed: false
        }
    ];

    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Test Redux',
            completed: false
        },
        {
            id: 1,
            text: 'finish project',
            completed: true
        }
    ];
    Object.freeze(stateBefore);
    Object.freeze(stateAfter);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testEditTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Test Redux',
            completed: false
        },
        {
            id: 1,
            text: 'finish project',
            completed: false
        }
    ];

    const action = {
        type: 'EDIT_TODO',
        id: 1,
        text: 'I change It'
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Test Redux',
            completed: false
        },
        {
            id: 1,
            text: 'I change It',
            completed: false
        }
    ];
    Object.freeze(stateBefore);
    Object.freeze(stateAfter);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testRemoveTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Test Redux',
            completed: false
        },
        {
            id: 1,
            text: 'finish project',
            completed: false
        }
    ];

    const action = {
        type: 'REMOVE_TODO',
        id: 1
    };

    const stateAfter = [
        {
            id: 0,
            text: 'Test Redux',
            completed: false
        }
    ];
    Object.freeze(stateBefore);
    Object.freeze(stateAfter);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testEditTodo();

testRemoveTodo();

testToggleTodo();

testAddTodo();

console.log('All test Passed');
