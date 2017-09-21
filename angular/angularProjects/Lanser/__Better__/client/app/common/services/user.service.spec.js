describe('user service', () => {
    var userService;

    beforeEach(module('ui.router'));
    beforeEach(module('lanser'));

    beforeEach(
        inject(_userService_ => {
            userService = _userService_;            
        })
    );
    describe('should return object with user', () => {
        it(
            'should return false if not found user',
            inject($http => {
                spyOn($http, 'get').and.returnValue({
                    then: function() {
                        return { id: 'x' };
                        // console.log("sadsadasd:" + userService);                
                    }
                });
                // var result = userService.FindUserById(123);
                expect(result).toEqual({ id: 'x' });
            })
        );
    });
});
