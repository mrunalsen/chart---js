import { useEffect, useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/core/Sidebar';
import Header from './components/core/Header';
// import Style from './style.scss';

function App() {
  const storedDarkMode = localStorage.getItem('DARK_MODE');
  const [mode, setMode] = useState(storedDarkMode);

  useEffect(() => {
    localStorage.setItem('DARK_MODE', mode);
  }, [mode]);


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <div className='d-flex h-100'>
      <Sidebar mode={mode} toggle={toggleMode} />
      <div className='d-flex flex-column overflow-hidden w-100'>
        <Header mode={mode} brand={'Govalle Construction'} />
        <Dashboard mode={mode} />
      </div>
    </div>
  );
}

export default App;
