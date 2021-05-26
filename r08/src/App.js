import logo from './logo.svg';
import './App.css';
import CountDisplay from './Counter/CountDisplay';
import CountButtons from './Counter/CountButtons';

function App() {
  return (
    <div>
      <CountDisplay></CountDisplay>
      <CountDisplay></CountDisplay>
      <CountDisplay></CountDisplay>
      <CountButtons></CountButtons>
    </div>
  );
}

export default App;
