import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { animated, useTransition } from 'react-spring';
import Home from "./routes/Home";
import SearchByPlate from "./routes/Home/SearchByPlate";
import SearchByFilter from "./routes/Home/SearchByFilter";
import SearchByCode from "./routes/Home/SearchByCode";
import MyCart from "./routes/Cart/MyCart";
import OrderConfirmed from "./routes/Cart/MyCart/OrderConfirmed";
import Login from "./routes/Home/Login";
import Registration from "./routes/Home/Registration";
<<<<<<< HEAD
import SearchCatalog from "./routes/Home/SearchCatalog";
=======
import ClientPage from "./routes/Home/ClientPage";
>>>>>>> 3910ca6ee00063c85b87c13b8e6deceec5545572

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    initial: { opacity: 1, transform: 'translateX(0%)' },
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    keys: location.pathname
  });

  return transitions((style, item) => (
    <animated.div style={{ ...style, position: 'absolute', width: '100%' }}>
      <Routes location={item}>
        <Route path="/" element={<Home />} />
        <Route path="/searchbyplate" element={<SearchByPlate />} />
        <Route path="/searchbyfilter" element={<SearchByFilter />} />
        <Route path="/searchbycode" element={<SearchByCode />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/orderconfirmed" element={<OrderConfirmed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
<<<<<<< HEAD
        <Route path="/searchcatalog" element={<SearchCatalog />} />
=======
        <Route path="/clientpage" element={<ClientPage />} />
>>>>>>> 3910ca6ee00063c85b87c13b8e6deceec5545572
      </Routes>
    </animated.div>
  ));
}
