import React from 'react';
import Landing from './components/Notes/Landing/landing'

function App() {
  return (
    <div className='container'>
      <header>
        <h1 className="text-center">Notes</h1>
      </header>
      <section>
        <Landing />
      </section>
    </div>
  );
}

export default App;
