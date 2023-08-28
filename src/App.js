import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';
import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import ServiceList from './components/ServiceList';
import ServiceAdd from './components/ServiceAdd';
import ServiceEdit from './components/ServiceEdit';
import PriceList from './components/PriceList';
import PromotionPriceList from './components/PromotionPriceList';
import PromotionPriceEdit from './components/PromotionPriceEdit';
import Order from './components/Order';
import UserList from './components/UserList';
import UserAdd from './components/UserAdd';
import UserEdit from './components/UserEdit';

function App() {
  return (
    <GlobalStyle>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='service-list' element={<ServiceList />}></Route>
            <Route path='add-service' element={<ServiceAdd />}></Route>
            <Route path='edit-service' element={<ServiceEdit />}></Route>
            <Route path='price-list' element={<PriceList />}></Route>
            <Route path='promotion-price-list' element={<PromotionPriceList />}></Route>
            <Route path='edit-promotion-price' element={<PromotionPriceEdit />}></Route>
            <Route path='order' element={<Order />}></Route>
            <Route path='user-list' element={<UserList />}></Route>
            <Route path='add-user' element={<UserAdd />}></Route>
            <Route path='edit-user' element={<UserEdit />}></Route>
          </Route>
        </Routes>
      </Router>
    </GlobalStyle>
  );
}

export default App;
