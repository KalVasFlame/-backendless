import { Link } from "react-router-dom"

const NavBar = () => (
   <ul>
        <li>
          <Link to="tabs/dummyTable.js">Dummy Table</Link>
        </li>
        <li>
          <Link to="tabs/dummyChart.js">Dummy Chart</Link>
        </li>
        <li>
          <Link to="tabs/dummyList.js">Dummy List</Link>
        </li>
      </ul>
)

export default NavBar
