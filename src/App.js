import { useState } from 'react';
import './App.css';
import Collection from './components/Collection';
import Cards from './components/Cards';

function App() {
  const [mode, setMode] = useState('light');
  const backgroundColor = mode=== 'light' ? 'bg-offWhite' : 'bg-bgDark';

  const handleDarkMode=()=>{
    if(mode==='light')
      setMode('dark');
    else
      setMode('light')
  }
  return (
    <div className={`App  ${backgroundColor}`}>
      <Cards mode={mode} handleDarkMode={handleDarkMode} />
      <Collection mode={mode}/>
    </div>
  );
}

export default App;


