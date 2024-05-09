import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { animated, useTransition } from 'react-spring';
import Home from "./routes/Home";
import Login from "./routes/Home/Login";
import Registration from "./routes/Home/Registration";
import SearchCatalog from "./routes/Home/SearchCatalog";
import ClientPage from "./routes/Home/ClientPage";
import MyCart from "./routes/cart/MyCart";
import OrderConfirmed from "./components/ConfirmationCard";
import ProductDetails from "./routes/Home/ProductDetails";
import SearchPiece from "./routes/Home/SearchPiece";
import Project from "./routes/Home/AboutProject";
import Pitch from './routes/Home/Pitch/index';

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
        <Route path="/searchpiece" element={<SearchPiece />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/orderconfirmed" element={<OrderConfirmed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/searchcatalog" element={<SearchCatalog />} />
        <Route path="/productdetail/:id" element={<ProductDetails />} />
        <Route path="/clientpage" element={<ClientPage />} />
        <Route path="/aboutproject" element={<Project/>} />
        <Route path="/pitch" element={<Pitch/>} />
      </Routes>
    </animated.div>
  ));
}

