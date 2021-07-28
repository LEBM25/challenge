import { shallow } from "enzyme"
import { HomeScreen } from "../../components/HomeScreen"


describe('Test <SearchInput />', () => {
    const wrapper = shallow( < HomeScreen /> )
    test('must be render', () => {
        expect(wrapper.find('.container').exists()).toBe(true);
    })
})