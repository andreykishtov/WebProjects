import { shallow } from 'enzyme';


describe('<reviews />', () => {
    it('renders without crashing', () => {
        const Review = shallow(<Review />);
        expect(Review)
            .find('div')
            .length.toEqual(1);
    });

    it('should create review', () => {
        const wrapper = 'sds';
    });
});
