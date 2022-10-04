import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import Title from './components/Title';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Title />
      <Router />
    </BrowserRouter>
  );
};

export default App;
