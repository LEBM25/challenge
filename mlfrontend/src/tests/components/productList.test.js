import { act } from "@testing-library/react";
import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { ProductList } from "../../components/ProductList"

describe('Test component <Productlist />', () => {

    const waitForComponentToPaint = async (wrapper) => {
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 4000));
            wrapper.update();
        });
    };

   

    const inputSearch = 'ipod'
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }


    const wrapper = mount(
        <MemoryRouter initialEntries={[`/items?search=${inputSearch}`]} >
            <Route
                path="/items"
                component={() => <ProductList history={historyMock} />}
            />
        </MemoryRouter>
    )

    test('should span.breadcrumb exist', async () => {
        await waitForComponentToPaint(wrapper)
        const span = wrapper.find('.breadcrumb').exists()
        expect(span).toBe(true)
    })

    test('should show list of product', async () => {
        const card = wrapper.find('div.card').exists()
        expect(card).toBe(true)
    })

    test('should call getProductList function', () => {
        const id = 'MLA919970533'
        wrapper.find(".card").first().prop('onClick')()
        expect(historyMock.push).toHaveBeenCalledWith(`/items/${id}`);
    })


})