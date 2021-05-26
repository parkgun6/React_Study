import './App.css';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import CountDisplay from './components/CountDisplay';
import CountButtons from './components/CountButtons';
import LoginComponent from './components/LoginComponent';

//상위 컴포넌트에 선언 (최상위는 index.js이다.)
const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div>
        <LoginComponent></LoginComponent>
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
