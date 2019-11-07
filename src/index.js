import React from 'react';
import ReactDOM from 'react-dom';

// Components
import MainPage from './components/MainPage/MainPage.jsx';


const init = () => {
  const filmNames = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];

  ReactDOM.render(
      <MainPage
        filmNames={filmNames}
      />,
      document.querySelector(`#root`)
  );
};

init();
