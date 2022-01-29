import './App.css';
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles>
        <Home />
      </GlobalStyles>
    </div>
  );
}

export default App;
