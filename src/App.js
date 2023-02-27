import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "wouter";
import Body from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" component={Body} />
        <Route path="/Contact" component={Contact} />
        <Route component={ PageNotFound} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;