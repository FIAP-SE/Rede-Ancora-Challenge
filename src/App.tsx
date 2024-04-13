import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SearchByPlate from "./routes/Home/SearchByPlate";
import SearchByFilter from "./routes/Home/SearchByFilter";
import SearchByCode from "./routes/Home/SearchByCode";
import MyCart from "./routes/cart/MyCart"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchbyplate" element={<SearchByPlate />} />
        <Route path="/searchbyfilter" element={<SearchByFilter />} />
        <Route path="/searchbycode" element={<SearchByCode />} />
        <Route path="/mycart" element={<MyCart/>} />
      </Routes>
    </BrowserRouter>
  );
}