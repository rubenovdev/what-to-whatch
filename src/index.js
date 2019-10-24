import React from 'react';
import ReactDOM from 'react-dom';

// Components
import MainPage from './components/MainPage/MainPage.jsx';


const init = () => {
  ReactDOM.render(
      <MainPage />,
      document.querySelector(`#root`)
  );
};

init();
