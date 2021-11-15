import './App.css';
import Register from "./components/registerForm/register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Register/>
        <Login/>
    </div>
  );
}

export default App;
