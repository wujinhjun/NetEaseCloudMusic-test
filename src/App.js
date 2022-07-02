import Header from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            < Header ></ Header>
            <div style={{ height: '1000px' }}></div>
        </BrowserRouter>
    );
}

export default App;
