import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "~/routes";
import DefaultComponent from "~/components/DefaultComponent/DefaultComponent";
import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
