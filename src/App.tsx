import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from './styles/GlobalStyles';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import styled from 'styled-components';
import ShopItems from './pages/shop/ShopItems';
import AudioInfo from './pages/home/AudioInfo';
import Items from './pages/home/Items';
import Content from './pages/home/Content';
const App: FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 15,
    restDelta: 0.001,
  });
  return (
    <div>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Scroll className="progress-bar" style={{ scaleX }} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<ShopItems />} />
          <Route path="/cart" />
        </Routes>
        <Content />
        <AudioInfo />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

const Scroll = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #bb4c0d;
  transform-origin: 0%;
  z-index: 100;
`;
