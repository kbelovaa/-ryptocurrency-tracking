import './App.scss';
import CurrencyAddingModal from './modals/CurrencyAddingModal';
import Header from './header/Header';
import Main from './main/Main';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <CurrencyAddingModal />
    </div>
  );
}

export default App;
