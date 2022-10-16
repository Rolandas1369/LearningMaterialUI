import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Button variant="contained" onClick={() => console.log('click event')}>First ui comp</Button>
    </div>
  );
}

export default App;
