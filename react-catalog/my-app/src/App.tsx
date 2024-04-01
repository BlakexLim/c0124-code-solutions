import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

// Build paths to each component
// Catalog will be the home page, set path as index
// NotFound will be safety net to route users back to catalog, set path as *

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:productId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
// Make sure /details/:productId matches type of Product productId and productId string interpolation in Catalog.tsx!!!
