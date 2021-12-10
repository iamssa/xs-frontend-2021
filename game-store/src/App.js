import Head from './components/head/Head';
import HomeScreen from './pages/home/Home';
import CatalogScreen from './pages/catalog/Catalog';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: fit-content;
  width: 100%;
  font-family: Avenir, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
`;

function App() {
  return (
    <AppWrapper>
      <Head/>
      <Routes>
        <Route path="/"  element={<HomeScreen/>} />
        <Route path="catalog" element={<CatalogScreen/>} />
      </Routes>      
    </AppWrapper>
  );
}

export default App;
