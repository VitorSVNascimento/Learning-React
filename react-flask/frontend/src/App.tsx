import { useState } from 'react'
import { useEffect } from 'react';
import HelpPage from './helpPage'

import './App.css'

function App() {
  const [redirectToHelp, setRedirectToHelp] = useState(false)

  //Função para redirecionar para a página de ajuda
  const redirectToHelpPage = () => {
    setRedirectToHelp(true);
  }

  if(redirectToHelp) {
    return <HelpPage />
  }
  
  useEffect(() => {
    const pageTitle = document.querySelector('#page-title');
    if (pageTitle) {
      pageTitle.textContent = 'Main - Page';
    }
  }, []);


  return (
    
    <div className="App">
      <h1 className='text-blue-200'>This is a main page</h1>
      <p>Click on the button below to go to the help page</p>
      <button onClick={redirectToHelpPage}>Help</button>
    </div>
  )
}

export default App
