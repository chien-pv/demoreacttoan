import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar/>
        <Content/>
      </div>
     
    </div>
  );
}

export default App;
