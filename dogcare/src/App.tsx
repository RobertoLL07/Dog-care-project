import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./layout/component";
import { userTokenSelector } from "./redux/user/selectors";
import Error404 from "./views/error404/component";
import Home from "./views/home/component";
import Locations from "./views/locations/component";
import Login from "./views/login/component";
import Urdog from "./views/urdog/component";
import Medical from "./views/urdog/component";
import Tips from "./views/tips/component";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tokenUser = useSelector(userTokenSelector);

  useEffect(() => {
    if (
      tokenUser &&
      tokenUser !== "" &&
      (location.pathname === "/Login" || location.pathname === "/Login/")
    ) {
      navigate("/", { replace: true });
    }
  }, [tokenUser, location, navigate]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Urdog" element={<Urdog />} />
          <Route path="/Medical" element={<Medical />} />
          <Route path="/Tips" element={<Tips />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
