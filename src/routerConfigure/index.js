import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Table from "../table/table";
import Main from "../main/Main";

const RouterConfigure = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/app" element={<App />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouterConfigure;
