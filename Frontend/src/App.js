import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css';
import AboutPage from './Composants/A propos/AboutPage';
import Header from './Composants/Header/Header';
import CardList from './Composants/CardList/CardList';
import Footer from './Composants/Footer/Footer';
import NotFoundPage from './Composants/404/NotFoundPage';
import CardID from './Composants/CardDetails/CardID';
import PropertyDetails from './Composants/CardIdWrong/CardidWrong';


function App() {
  
    return (
    <Router>
      <div>
       <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />       
          <Route path="/cards" element={<CardList />} />
          <Route path="/details/:id" element={<CardID />} /> {/* Route pour le composant CardID */}
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="*" element={<NotFoundPage />} />  {/* Route pour la page 404 */}
       </Routes>     
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <Header />
      <CardList />    
      <Footer />
    </div>
  );
}
export default App;
