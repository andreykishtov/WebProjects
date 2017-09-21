describe('JobService', () => {
    var jobService;

    beforeEach(module('ui.router'));
    beforeEach(module('lanser'));

    beforeEach(
        inject(_jobService_ => {
            jobService = _jobService_;
        })
    );

    describe('findJob', () => {
        it('should return false if not found ', () => {
            jobService.original = [{ id: 123 }];
            var _id_ = 12;

            var result = jobService.findJob(_id_);

            expect(result).toBeFalsy();
        });

        it('should return job if id is matching ', () => {
            jobService.original = [{ _id: 123 }];
            var id = 123;

            expect(jobService.findJob(id)).toEqual({ _id: id });
        });
    });

    describe('Name of the group', () => {
        it(
            'hit',
            inject($http => {
                spyOn($http, 'get').and.returnValue({
                    then: function() {
                        return { id: 123 };
                    }
                });

                var result = jobService.findJobFromServer(123);

                expect(result).toEqual({ id: 123 });
            })
        );
    });
});
