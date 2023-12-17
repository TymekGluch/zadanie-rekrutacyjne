import './App.scss';
import './globalStyle.scss';
import { MainNavigation } from './components/MainNavigation';
import { MainFooter } from './components/MainFooter';

function App() {
  return (
    <article className="main_article">
      <MainNavigation />

      <MainFooter />
    </article>
  );
}

export default App;
