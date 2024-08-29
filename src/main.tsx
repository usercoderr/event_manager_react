import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {setUpStore} from "./redux/store";
import App from './App.tsx'
import './index.css'


const store = setUpStore()


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>,
)
