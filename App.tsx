import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SolutionsPage from './components/SolutionsPage';
import ToolsPage from './components/ToolsPage';
import ResourcesPage from './components/ResourcesPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'tools':
        return <ToolsPage />;
      case 'resources':
        return <ResourcesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-panda-text">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;