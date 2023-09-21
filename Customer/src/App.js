import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { routes } from "./routers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Page = route.element;
          const Layout = route.layout;
          return (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={
                <Provider store={store}>
                  <Layout>
                    <Page />
                  </Layout>
                </Provider>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
