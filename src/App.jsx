import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
