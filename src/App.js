import Header from './components/header';
import List from './components/list';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div className="h-screen w-screen bg-white shadow-lg dark:bg-black transition-all">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
