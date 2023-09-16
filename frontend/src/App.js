import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routers/public";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRouter.map((route) =>{
            const Page = route.element
            const Layout = route.layout
            return (
             <Route key={route.path} path={route.path} element={
                <Layout>
                    <Page />
                </Layout>
                }/>
              )
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
