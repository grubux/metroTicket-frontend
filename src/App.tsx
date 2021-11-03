import './reset.css';
import './App.css';

// @ts-nocheck
import Header from './components/Header';
import Form from './components/Form';

function App(): JSX.Element {
  return (
    <div className="container">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Header />
      <div className="body-container">
        <Form />
      </div>
    </div>
  );
}

export default App;
