import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Detail from './pages/Detail';
import Favorite from './pages/Favorite';
import { Provider } from 'react-redux';
import { store as reduxStore } from './store/store';
import About from './pages/About';
import Error from './pages/Error';
import RentalCondition from './pages/RentalCondition';
import Confirmation from './pages/Confirmation';
import AdminHome from './AdminPanel/AdminHome';
import AdminLogin from './AdminPanel/AdminLogin';
import AdminHeader from "./components/AdminHeader";
import AdminCarUpdate from './AdminPanel/AdminCarUpdate';
import AdminUsers from './AdminPanel/AdminUsers';
import AdminSettings from './AdminPanel/AdminSettings';
import AdminDashboard from './AdminPanel/AdminDashboard';
import AdminCarRemove from './AdminPanel/AdminCarRemove';
import AdminCarAdd from './AdminPanel/AdminCarAdd';


const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {location.pathname === "/adminlogin" ? (
        <main>{children}</main>
      ) : (
        <>
          {isAdminPage && (
            <>
              <AdminHeader />
              <AdminHome />
            </>
          )}
          {!isAdminPage && <Header />}
          <main>{children}</main>
          {!isAdminPage && <Footer />}
        </>
      )}
    </>
  )
}


function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:name" element={<Detail />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/about" element={<About />} />
            <Route path="/rentalcondition" element={<RentalCondition />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/admincaradd" element={<AdminCarAdd />} />
            <Route path="/admincarremove" element={<AdminCarRemove />} />
            <Route path="/admincarupdate" element={<AdminCarUpdate />} />
            <Route path="/adminusers" element={<AdminUsers />} />
            <Route path="/adminsettings" element={<AdminSettings />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
