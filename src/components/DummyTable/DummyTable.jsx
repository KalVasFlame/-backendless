import s from './DummyTable.module.scss'

const DummyTable = ({ tableData }) => (
  <table className={s.table}>
      <thead>
        <tr>
          <th className={s.td}>ID</th>
          <th className={s.td}>Title</th>
          <th className={s.td}>Order</th>
          <th className={s.td}>Path</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td className={s.td}>{tableData[0].id}</td>
          <td className={s.td}>{tableData[0].title}</td>
          <td className={s.td}>{tableData[0].order}</td>
          <td className={s.td}>{tableData[0].path}</td>
        </tr>
      </tbody>
    </table>
  )

export default DummyTable
