import { Switch } from 'react-router';
import ErrorHandling from './components/ErrorHandling';
import MainRoute from './routing';
// import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <ErrorHandling>
      <Switch>
        <MainRoute />
      </Switch>
    </ErrorHandling>
  );
}

export default App;
