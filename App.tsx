import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Impact from './pages/Impact';
import Newsletter from './pages/Newsletter';
import Announcements from './pages/Announcements';
import Outreach from './pages/Outreach';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/outreach" element={<Outreach />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;