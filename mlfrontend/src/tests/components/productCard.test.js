import { shallow } from "enzyme"
import { ProductCard } from "../../components/ProductCard"


describe('Test <SearchInput />', () => {

            const handleProductDetail = jest.fn()
            const item = {
                condition: "new",
                free_shipping: true,
                id: "MLA919970533",
                picture: "http://http2.mlstatic.com/D_955930-MLA45878166410_052021-I.jpg",
                pictureDetail: [],
                price: { currency: "ARS", amount: 30999, decimals: 0 },
                sold_quantity: 5,
                state_name: "Capital Federal",
                title: "iPod Touch 32gb - Silver",
            }


            const wrapper = shallow( <ProductCard 
                                        item = { item } 
                                        handleProductDetail = { handleProductDetail } 
                                     />)
                                     
                test('must be render', () => {
                    expect(wrapper.find('.card').exists()).toBe(true);
                    expect(wrapper.find('.imgProduct').prop("src")).toBe(item.picture);
                    expect(wrapper.find('.title').text().trim()).toBe(item.title);
                    expect(wrapper.find('.stateName').text().trim()).toBe(item.state_name);
                })
            })