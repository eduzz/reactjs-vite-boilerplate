import { Switch, Route, Link } from 'react-router-dom';

import Button from '@eduzz/houston-ui/Button';

import Welcome from '@/components/Welcome';

export default function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Link to='/about'>
          <Button variant='text'>About</Button>
        </Link>
        <Welcome to='App name' />
      </Route>
      <Route path='/about'>
        <Link to='/'>
          <Button variant='text'>Home</Button>
        </Link>
        <Welcome to='About' />
      </Route>
    </Switch>
  );
}
