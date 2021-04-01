import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './store';
let store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App name="krishna"/></Provider>,document.querySelector("#root"));