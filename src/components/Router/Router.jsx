import { Routes, Route, useLocation, Navigate} from "react-router-dom"
import tableData from "../../data/tabs.json"
import paths from "../../data/paths.json"
import DummyTable from "../DummyTable/DummyTable"
const Router = () => {
  const location = useLocation();
  return (
    <Routes>
      {paths.map(i =>
        <Route key={i.path} path={i.path} element={<DummyTable tableData={tableData.filter(i => i.path === location.pathname.slice(1))} />} />
      )}
      <Route path="*" element={<Navigate to={paths[0].path} replace />} />

    </Routes>
  )
}

export default Router