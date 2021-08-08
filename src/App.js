import './App.scss';
import { Route, Switch } from 'react-router-dom';
import EnvConfig from './pages/envConfig/envConfig';
import Navbar from './components/navbar/navbar';
import { Content } from 'carbon-components-react';
import Home from './pages/home/home';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Content>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/envconfig" component={EnvConfig} />
        </Switch>
      </Content>
    </>
    
  )
}


export default App;
