import './App.css';
import { createStore } from 'redux';
import countReducer from './reducers/countReducer';
import { Provider } from 'react-redux';
import CountDisplay from './components/CountDisplay';
import CountButtons from './components/CountButtons';

//최상위 컴포넌트에 선언
const store = createStore(countReducer)

function App() {
  return (
    <Provider store={store}>
      <div>
        <CountDisplay></CountDisplay>
        <CountDisplay></CountDisplay>
        <CountDisplay></CountDisplay>
        <CountButtons></CountButtons>
        <CountButtons></CountButtons>
      </div>
    </Provider>
  );
}

export default App;
