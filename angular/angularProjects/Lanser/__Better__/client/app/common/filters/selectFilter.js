(function() {
    'use strict';

    angular.module('lanser').filter('selectFilter', Filter);

    function Filter() {
        return FilterFilter;

        ////////////////

        function FilterFilter(items, skillsArr) {
            return items && skillsArr.length > 0 ? makeArray(items, skillsArr) : items;
        }

        function makeArray(items, skillsArr) {
            let returnArr;
            skillsArr.map((skill, index) => {
                return index ? (returnArr = sortItems(returnArr, skill)) : (returnArr = sortItems(items, skill));
            });
            return returnArr;
        }

        function sortItems(items, skill) {
            return items.filter(item => {
                for (let skillOriginal of item._skills) {
                    if (skillOriginal === skill) {
                        return item;
                    }
                }
            });
        }
    }
})();

// return item._skills.filter(skillOriginal => {
//     return skillOriginal === skill;
// });
