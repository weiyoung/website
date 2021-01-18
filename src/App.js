import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light" style={{ marginBottom: "40px" }}>
        <Navbar.Brand>
          wei2young
        </Navbar.Brand>
      </Navbar>

      <Switch>
        <Route path="">
          
        </Route>
      </Switch>
    </Router>
  );
}