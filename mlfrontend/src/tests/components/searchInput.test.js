import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router-dom"
import { SearchInput } from "../../components/SearchInput"



describe('Test <SearchInput />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

   
    const wrapper = mount(
        <MemoryRouter>
            <Router history={historyMock}>
                <SearchInput />
            </Router>
        </MemoryRouter>

    )
    test('should be render', () => {
        expect(wrapper.find('input').exists()).toBe(true);

    })

    test('debe de llamar el logout y el usar history', () => {

        const inputSearch = 'ipod'
        const input = wrapper.find('input')        
        input.simulate('change', { target: { value: inputSearch } });
        wrapper.find('button').prop('onClick')()
        expect( historyMock.push ).toHaveBeenCalledWith(`/items?search=${inputSearch}`);

    })



})


