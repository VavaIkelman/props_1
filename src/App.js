/* eslint-disable react/jsx-no-undef */
import logo from './logo.svg';
import './App.css';
import Stars from './components/Stars';

function App() {
    return (
      <div>
        <Stars count={1} />,
        <Stars count={2} />,
        <Stars count={4} />,
        <Stars count={5} />,
        <Stars count={7} />,
      </div> 
    );
}

export default App;
