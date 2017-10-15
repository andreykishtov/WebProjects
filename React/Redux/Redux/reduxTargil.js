function testRemoveAssignee() {
    const todoBefore = {
      id:0,
      text:'learn redux',
      assigned:["yossi"],
      completed:false
    }

    const todoAfter = {
      id:0,
      text:'learn redux',
      assigned:[],
      completed:false
    }

    deepFreeze(todoBefore)
    expect(removeAssignee(todoBefore, 0)).toEqual(todoAfter)
  }
