import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <div>
      <Header />
      <div className="bg-ai-gray py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-ai-blue mb-4">AI Gallery</h2>
          <p className="text-gray-700 text-lg">Welcome to the AI Gallery, a collection of AI-generated art.</p>
        </div>
      </div>
      <Gallery />
      <ProjectDetail />
      <Footer />
    </div>
  );
}

export default App;
