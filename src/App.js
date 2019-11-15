import React from 'react';
import Notes from './components/Notes/ListNotes/ListNotes'

function App() {
  return (
    <div>
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
        <Notes />
      </section>
    </div>
  );
}

export default App;
