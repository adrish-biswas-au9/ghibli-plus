import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'; 
import Footer from './components/Footer';
import Login from './pages/Login';
import Header from './components/Header';
const Routing = () => { 
    return (
        <BrowserRouter>
            <Header />
            {/* <Route exact path = '/' component={Login} />  */}
            {/* <Route path = '/list/:id' component={Listing} />
            <Route path = '/details/:id' component={Details} />
            <Route path = '/booking/:id' component={PlaceBooking} />
            <Route path = '/viewbooking' component={ViewBooking} />
            <Route path="/register" component={RegisterComponent}/>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/bookinglist" component={BookingList}/> */}
            <Footer  />
        </BrowserRouter>
    )
}
export default Routing;