import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import HomePage from "./pages/home.page";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
