import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { Footer } from "../Footer";
import { render } from "@testing-library/react";
import { USER } from "../../mocks/data";
test("footer should be present on page load", () => {
  const footer = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );
   const data = footer.getByTestId("footer");
//   console.log(data);
  expect(data.innerHTML).toBe(` This site is developd by ${USER.user.name}. You can contact the team via email ${USER.user.email}`);
});
