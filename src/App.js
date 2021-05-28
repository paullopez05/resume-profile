import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import About from './components/About'
import Home from './components/Home'
import Resume from './components/Resume'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <div className="App">
        
        <Router>
          <Header name="Header Nav" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:id" component={About} props='test prop' />
            <Route path="/resume" component={Resume} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>


    </div>
  );
}


