import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { changeWeatherTheme } from './store/themeSlice'

import './App.css';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/header/Header.jsx';

function App() {
  const [searchContent, setSearchContent] = useState("")
  const dispatch = useDispatch()

  function handleInput(event) {
    setSearchContent(event.target.value)
  }


  const changeTheme = () => {
    const date_time = new Date()
    if (date_time.getHours() >= 19) {
      dispatch(changeWeatherTheme(true))
    }
  }
  changeTheme()


  return (
    <>
      <div className="App">
        <Header handleInput={handleInput} />
        <Body searchContent={searchContent} />
        <Footer />
      </div>
    </>
  );
}

export default App;
