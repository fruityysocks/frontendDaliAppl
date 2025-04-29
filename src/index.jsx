import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import Counter from './store/components/counter';
import Controls from './store/components/controls';

function App() {
  return (
    <div className="test">
      <Counter />
      <Controls />
      All the REACT are belong to us!
    </div>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
