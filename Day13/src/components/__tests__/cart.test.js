import { StaticRouter } from "react-router-dom/server";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { RESTAURANT_MENU } from "../../mocks/data";
import { Header } from "../Header";
import { Cart } from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU);
    },
  });
});

test("check if items are added to cart", async() => {
  const restaurantMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header/>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(restaurantMenu.getByTestId("restaurant-menu")));

  const addItemBtn = restaurantMenu.getAllByTestId("add-item-btn");
  
  

  fireEvent.click(addItemBtn[0]);
  fireEvent.click(addItemBtn[1]);
  fireEvent.click(addItemBtn[2]);
  await waitFor(() => expect(restaurantMenu.getByTestId("cart")));
  const cart = restaurantMenu.getByTestId("cart");
  
  expect(cart.innerHTML).toBe(" Cart - 3 ");
});

test("clearing the cart",async()=>{
    const cart = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaurantMenu />
                <Cart/>
            </Provider>
        </StaticRouter>
    );

    const removeItemBtn = cart.getAllByTestId("remove-item-btn");
    fireEvent.click(removeItemBtn[0]);
    await waitFor(() => expect(cart.getByTestId("cart")));

    const cartdata = cart.getByTestId("cart");
  
  expect(cartdata.innerHTML).toBe(" Cart - 2 ");

});

test("clearing the cart",()=>{
    const cart = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <Cart/>
            </Provider>
        </StaticRouter>
    );

    const clearCartBtn = cart.getByTestId("clear-cart-btn");
    fireEvent.click(clearCartBtn);

    const cartdata = cart.getByTestId("cart");
  
  expect(cartdata.innerHTML).toBe(" Cart - 0 ");

});
