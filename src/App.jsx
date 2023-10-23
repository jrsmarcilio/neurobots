import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import FormProvider from './context';

import Forms from './pages/Forms';
import Home from './pages/Home';
import Painel from './pages/Painel';

function App() {
  return (
    <div className="wrapper">
      <FormProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/painel' element={<Painel />} />
            <Route exact path='/forms' element={<Forms />} />
          </Routes>
        </Router>
      </FormProvider>
    </div>
  );
}

export default App;
