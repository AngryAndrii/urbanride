import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Catalog from './pages/Catalog/Catalog';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route, NavLink } from 'react-router-dom';
import StyledApp from './App.styled';

function App() {
  return (
    <StyledApp>
      <nav className="container">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
