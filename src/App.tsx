import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
const App: FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart'/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
