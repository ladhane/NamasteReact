import { fireEvent, render, waitFor } from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { Body } from "../Body"
import { RESTAURANT_DATA } from "../../mocks/data"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RESTAURANT_DATA);
        } 
    })
})

test("shimmer loading before data loads",()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
})

test("restaurant list appears after data load",async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=>{
        expect(body.getByTestId('search-input'))
    });

    const restaurantList = body.getByTestId("restaurant-list");
    expect(restaurantList.children.length).toBe(15);
})

test("search food in search bar",async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("search-input")))

    const searchInput = body.getByTestId("search-input");
    const serachBtn = body.getByTestId("search-btn");
    const restaurantList = body.getByTestId("restaurant-list");

    fireEvent.change(searchInput,{
        target:{
            value: "food"
        }
    });

    fireEvent.click(serachBtn);

    await waitFor(()=> expect(restaurantList.children.length).toBe(1));
    
})