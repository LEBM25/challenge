import { act } from "@testing-library/react";
import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router-dom"
import { ProductDetails } from "../../components/ProductDetails";

describe('Test component <ProductDetails />', () => {

    const waitForComponentToPaint = async(wrapper) => {
        await act(async() => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            wrapper.update();
        });
    };

    const productId = 'MLA919970533'

    const wrapper = mount( 
        <MemoryRouter initialEntries = {[`/items/${productId}`] } >
        <Route path = "/items/:id" component = { ProductDetails }/>
        </MemoryRouter>
    )

    test('must div.productDetails exist', async() => {
        await waitForComponentToPaint(wrapper)
        const span = wrapper.find('.productDetails').exists()
        expect(span).toBe(true)
    })

    test('must div.title = iPod Touch 32gb - Silver', async() => {
        expect(wrapper.find('.title').text().trim()).toBe('iPod Touch 32gb - Silver');
    })

    test('must button exist', async() => {
        const button = wrapper.find('button').exists()
        expect(button).toBe(true);
    })


})