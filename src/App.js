import './App.css';
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButton from './SwipeButton'

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* card */}
      <TinderCards />
      {/* swipe button */}
      <SwipeButton />
    </div>
  );
}

export default App;
