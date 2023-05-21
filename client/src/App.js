import "./App.css";
import Home from "./component/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginbage from "./component/login/Loginbage";
import Account from "./component/account/Account";
import Item from "./component/item/item";
import Buy from "./component/LinkNav/buy/Buy";
import Rent from "./component/LinkNav/Rent/Rent";
import Commercial from "./component/LinkNav/commercial/commercial";
import Ourclint from "./component/LinkNav/Ourclint/Ourclint";
import Terms from "./component/USEFUL_LINKS/Terms&Conditions/Terms";
import About from "./component/USEFUL_LINKS/About_us/About";
import PrivacyPolicy from "./component/USEFUL_LINKS/PrivacyPolicy/PrivacyPolicy";
import Cookies from "./component/USEFUL_LINKS/CookiesPolicy.js/Cookies";
import Contacted from "./component/account/Contacted/Contacted";
import Notes from "./component/account/Note/Notes";
import Terms2 from "./component/USEFUL_LINKS/Terms&Conditions/Terms2";
import Broker from "./component/LinkNav/Ourclint/broker/Broker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Loginbage />} path="/log" />
        <Route element={<Account />} path="/account" />
        <Route element={<Item />} path="/item" />
        <Route element={<Buy />} path="/buy" />
        <Route element={<Rent />} path="/rent" />
        <Route element={<Commercial />} path="/commercial" />
        <Route element={<Ourclint />} path="/ourclint" />
        <Route element={<Terms />} path="/Terms" />
        <Route element={<About />} path="/Aboutus" />
        <Route element={<PrivacyPolicy />} path="/Privacy" />
        <Route element={<Cookies />} path="/Cookies" />
        <Route element={<Contacted />} path="/Contacted" />
        <Route element={<Notes />} path="/mynotes" />
        <Route element={<Terms2 />} path="/forAgent" />
        <Route element={<Broker />} path="/ourclint/broker" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
