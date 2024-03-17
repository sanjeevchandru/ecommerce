// import logo from './logo.svg';
// import './App.css';
import {Provider} from 'react-redux'
import { Routing } from './Routing';
import { Store } from './redux/store/store';
function App() {
  return (
    <div className="App">
        <Provider store={Store}>
            <Routing/>
        </Provider>
    </div>
  );
}

export default App;
