import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routers/public";
import { Provider } from "react-redux";
import { customerStore } from "./redux/customerStore";
import { privateRouter } from "./routers/private";
import { dashboardStore } from "./redux/dashboardStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRouter.map((route) => {
          const Page = route.element;
          const Layout = route.layout;
          return (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={
                <Provider store={customerStore}>
                  <Layout>
                    <Page />
                  </Layout>
                </Provider>
              }
            />
          );
        })}

        {privateRouter.map((route) => {
          const Page = route.element;
          const Layout = route.layout
          return (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={
                <Provider store={dashboardStore}>
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
