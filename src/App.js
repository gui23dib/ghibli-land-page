import React from 'react';
import Header from './components/menu/Menu';
import Mononoke from './components/Mononoke';
import Chihiro from './components/Chihiro';
import Studio from './components/Studio';
import Totoro from './components/Totoro';
import MovingCastle from './components/Movingcastle';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GlobalStyle from './main/global';

function App() {
  return (  /* <></> fragment, serve como uma capsula para o funcionamento do html porem sem o comprometimento de uma div que nao seria usada */
    <> 
    <GlobalStyle/>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Studio/>} />
          <Route exact path='/spiritedaway' element={<Chihiro/>} />
          <Route exact path='/myfriendtotoro' element={<Totoro/>} />
          <Route exact path='/howlsmovingcastle' element={<MovingCastle/>} />
          <Route exact path='/princessmononoke' element={<Mononoke/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
