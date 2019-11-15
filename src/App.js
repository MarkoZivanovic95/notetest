import React from 'react';
import Landing from './components/Notes/Landing/landing'

function App() {
  return (
    <div className='container'>
      <header>
        <h1 className="text-center">Notes</h1>
      </header>
      <section>
        <div>
          <button type="button" className="btn btn-primary">Sort</button>
          <button type="button" className="btn btn-success">Filter</button>
        </div>
        <div>
          Notes here
        </div>
        <Landing />
      </section>
    </div>
  );
}

export default App;
