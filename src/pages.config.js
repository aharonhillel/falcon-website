import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MedicalConferences from './pages/MedicalConferences';
import CorporateEvents from './pages/CorporateEvents';
import Contact from './pages/Contact';
import Conferences from './pages/Conferences';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Services": Services,
    "MedicalConferences": MedicalConferences,
    "CorporateEvents": CorporateEvents,
    "Contact": Contact,
    "Conferences": Conferences,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};