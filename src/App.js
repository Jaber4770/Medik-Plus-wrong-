import './App.css';
import AboutUs from './Components/AboutUs/AboutUs/AboutUs';
import AppointmentForm from './Components/Appointment/AppointmentForm';
import ContactUs from './Components/ContactUs/ContactUs/ContactUs';
import EmergencyServices from './Components/EmergencyServices/EmergencyServices/EmergencyServices';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import Login from './Components/Login/Login/Login';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <AppointmentForm></AppointmentForm>
      <ContactUs></ContactUs>
      <EmergencyServices></EmergencyServices>
      <AboutUs></AboutUs>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
