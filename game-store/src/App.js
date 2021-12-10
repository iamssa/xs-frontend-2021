import './App.css';
import Head from './components/head/Head';
import HomeScreen from './pages/home/Home';
import CatalogScreen from './pages/catalog/Catalog'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Head/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/catalog" element={<CatalogScreen />} />
    </Routes>
    </div>
  );
}

export default App;
