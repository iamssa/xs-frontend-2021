import './App.css';
import Head from './components/head/Head';
import HomeScreen from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import CatalogScreen from './pages/catalog/Catalog';

function App() {
  return (
    <div className="App">
      <Head />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/catalog" element={<CatalogScreen />} />
      </Routes>
    </div>
  );
}

export default App;
