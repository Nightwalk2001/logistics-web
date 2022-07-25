import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Arrears, History, Shipper} from "@/pages"
import {TopMenu} from "@/widgets"
import {ToastContainer} from "react-toastify"

const App = () => <div>
  <Router>
    <TopMenu/>

    <div>
      <Routes>
        <Route path={"/"} element={<Shipper/>}/>
        <Route path={"/arrears"} element={<Arrears/>}/>
        <Route path={"/history"} element={<History/>}/>
      </Routes>
    </div>
  </Router>

  <ToastContainer autoClose={900} draggable position={"top-right"}/>
</div>

export default App
