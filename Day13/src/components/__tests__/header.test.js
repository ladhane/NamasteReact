import { render } from "@testing-library/react";
import { Header } from "../Header";
import store from "../../utils/store";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server"

test("Logo is present when page loads", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe('http://localhost/dummy.png');
  expect(logo[0].alt).toBe("logo");
});

test("Cart Items are 0 on page load",()=>{
   const header = render(
      <StaticRouter>
         <Provider store={store}>
            <Header/>
         </Provider>
      </StaticRouter>
   );

   const cart = header.getByTestId("cart");
   expect(cart.innerHTML).toBe(" Cart - 0 ") ;
})

test("User sees login on page load",()=>{
   const header = render(
      <StaticRouter>
         <Provider store={store}>
            <Header/>
         </Provider>
      </StaticRouter>
   );

   const login = header.getByTestId("login");
   expect(login.innerHTML).toBe("Login");
});

test("Logo is present when page loads", () => {
   const header = render(
     <StaticRouter>
       <Provider store={store}>
         <Header />
       </Provider>
     </StaticRouter>
   );
   const home = header.getByTestId("home");
   expect(home.innerHTML).toBe(' Home ');
   const about = header.getByTestId("about");
   expect(about.innerHTML).toBe('About ');
   const contact = header.getByTestId("contact");
   expect(contact.innerHTML).toBe('Contact ');
   const instamart = header.getByTestId("instamart");
   expect(instamart.innerHTML).toBe('Instamart');
 });

