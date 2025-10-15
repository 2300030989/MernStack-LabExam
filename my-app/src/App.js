import React, { useState } from 'react';
import CounterApp from './CounterApp';
import StudentForm from './StudentForm';

function App() {
  const [activeComponent, setActiveComponent] = useState('counter');

  return (
    <div>
      {/* Simple Navbar */}
      <nav style={styles.navbar}>
        <button
          style={activeComponent === 'counter' ? styles.activeButton : styles.button}
          onClick={() => setActiveComponent('counter')}
        >
          Counter App
        </button>
        <button
          style={activeComponent === 'form' ? styles.activeButton : styles.button}
          onClick={() => setActiveComponent('form')}
        >
          Student Form
        </button>
      </nav>

      <div style={styles.content}>
        {activeComponent === 'counter' && <CounterApp />}
        {activeComponent === 'form' && <StudentForm />}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    backgroundColor: '#333',
    padding: '10px',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: '#444',
    border: 'none',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  activeButton: {
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  content: {
    padding: '20px',
  },
};

export default App;
