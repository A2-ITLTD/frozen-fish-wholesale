import { Outlet } from 'react-router-dom';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const Root = () => {
    return (
        <div className="w-full">  
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           <ToastContainer position="top-center" />
        </div>
    );
};

export default Root;