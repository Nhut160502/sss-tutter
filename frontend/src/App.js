import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routers/public";
import { Provider } from "react-redux";
import { customerStore } from "./redux/customerStore";
import { WavyContainer } from "react-wavy-transitions";

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
                    <WavyContainer>
                      <Page />
                    </WavyContainer>
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
