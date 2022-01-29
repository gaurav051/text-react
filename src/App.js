
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const toggleGreenMode = () => {
    document.querySelector("#dark-box").checked = false;
    let mode = document.querySelector("#green-box").checked
    if (mode === true) {
      setMode("dark");
      document.body.style.backgroundColor = "green";
      showAlert("Green Dark mode is enabled", "success");
      document.title = "TextUtils - Green Mode";
    } 
     else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  const toggleMode = () => {
    document.querySelector("#green-box").checked = false;
    
    let mode = document.querySelector("#dark-box").checked;
    if (mode === true) {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is enabled", "success");
      document.title = 'TextUtils - Light Mode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleGreenMode={toggleGreenMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter text to analyse"
                mode={mode}
              />
            </Route>
          </Switch>

          {/* <About /> */}
        </div>
      </Router>
    </>
  );
} 

export default App;
