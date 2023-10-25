import { Link } from "react-router-dom"
import s from './NavBar.module.scss'
const NavBar = () => (
   <ul className={s.nav}>
        <li className={s.nav_item}>
          <Link to="tabs/dummyTable.js">Dummy Table</Link>
        </li>
        <li className={s.nav_item}>
          <Link to="tabs/dummyChart.js">Dummy Chart</Link>
        </li>
        <li className={s.nav_item}>
          <Link to="tabs/dummyList.js">Dummy List</Link>
        </li>
      </ul>
)

export default NavBar
