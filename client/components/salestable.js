import React from 'react'
import styled from 'styled-components'
import {useTable} from 'react-table'
import axios from 'axios'

const Styles = styled.div`
  padding: 1rem;
  * {
    margin-left: auto;
    margin-right: auto;
    font-family: sans-serif;
    text-align: center;
  }
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({columns, data}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th width={column.width} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default function salestable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Sales',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
            width: 300
          },
          {
            Header: '# of days until sold',
            accessor: 'days',
            width: 100
          },
          {
            Header: 'Featured?',
            accessor: 'featured',
            width: 5
          },
          {
            Header: 'Profit',
            accessor: 'profit',
            width: 8
          },
          {
            Header: 'Profit margin',
            accessor: 'margin',
            width: 8
          },
          {
            Header: 'Likes',
            accessor: 'likes',
            width: 10
          },
          {
            Header: 'Notes',
            accessor: 'notes',
            width: 400
          }
        ]
      }
    ],
    []
  )

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get('api/sales/calculated')
      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}
