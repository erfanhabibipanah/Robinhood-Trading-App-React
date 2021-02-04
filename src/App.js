import './App.css';
import Header from './Container/Header/Header';
import Newsfeed from './Container/Newsfeed/Newsfeed';
import Stats from './Container/Stats/Stats';

function App() {
    return (
        <div className="app">
            <div className="app_header">
                <Header />
            </div>
            <div className="app_body">
                <div className="app_body_container">
                    <Newsfeed />
                    <Stats />
                </div>
            </div>
        </div>
    );
}

export default App;
