const DummyTable = ({ tableData }) => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Order</th>
          <th>Path</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{tableData[0].id}</td>
          <td>{tableData[0].title}</td>
          <td>{tableData[0].order}</td>
          <td>{tableData[0].path}</td>
        </tr>
      </tbody>
    </table>
  )

export default DummyTable
