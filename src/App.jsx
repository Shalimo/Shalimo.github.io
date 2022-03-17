import Content from "./components/content/content";
import Params from "./components/params/params";
import "./App.css"

const App = () => {
  return (
    <div>
      <h1>Exchange money</h1>
        <div className="wrapper">
          <Content/>
          <Content/>
        </div>
          <Params/>
    </div>
  )
};

export default App;