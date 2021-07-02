import './App.css';
import HomeContainer from './routes/home/Home.container';
import HeaderContainer from './components/header/Header.container';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';

function App() {
  return (

    <Router>
    <HeaderContainer/>
    <HomeContainer/>
    <Switch>
      <Route path="/" exact Component = {HomeContainer}/>
      {/* <Route path="/bookList" Component = {BookListContainer}/> */}
     </Switch>
   </Router>
   
  );
}

export default App;
