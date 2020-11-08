import React from 'react'
import {useTable, usePagination} from 'react-table'
import styled from 'styled-components'
import axios from 'axios'

const Styles = styled.div`
  padding: 1rem;
  * {
    margin-left: auto;
    margin-right: auto;
    font-family: sans-serif;
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
      input {
        background-color: inherit;
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
    position: relative;
    left: 28px;
  }
  #tablebutton {
    margin-left: 35px;
  }
  #submit {
    box-shadow: inset 0px 1px 0px 0px #efdcfb;
    background: linear-gradient(to bottom, #dfbdfa 5%, #ffc5da 100%);
    background-color: #ffc5da;
    border-radius: 6px;
    border: 1px solid #c584f3;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    text-decoration: none;
    text-shadow: 0px 0.5px 0px #9752cc;
    padding: 7px;
    font-weight: bold;
  }
  #submit:hover {
    background: linear-gradient(to bottom, #ffc5da 5%, #dfbdfa 100%);
    background-color: #bc80ea;
  }
  #submit:active {
    position: relative;
    top: 1px;
  }
`

const EditableCell = ({
  value: initialValue,
  row: {index},
  column: {id},
  updateMyData // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(
    () => {
      setValue(initialValue)
    },
    [initialValue]
  )

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell
}

// Be sure to pass our updateMyData and the skipPageReset option
function Table({columns, data, updateMyData, skipPageReset}) {
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex, pageSize}
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData
    },
    usePagination
  )

  // Render the UI for your table
  return (
    <>
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
          {page.map((row, i) => {
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
      <div className="pagination">
        <button
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>{' '}
        <button
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>{' '}
        <button
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>{' '}
        <button
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{width: '100px'}}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default function inventorytable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Inventory',
        columns: [
          {
            Header: 'Item name',
            accessor: 'name',
            width: 50
          },
          {
            Header: 'Date Bought',
            accessor: 'dateBought',
            width: 10
          },
          {
            Header: 'Date Listed',
            accessor: 'dateListed',
            width: 10
          },
          {
            Header: 'Location Bought',
            accessor: 'locationBought',
            width: 20
          },
          {
            Header: 'Featured?',
            accessor: 'featured',
            width: 10
          },
          {
            Header: 'Cost',
            accessor: 'cost',
            width: 10
          }
          // {
          //   Header: 'Notes',
          //   accessor: 'notes',
          //   width: 50,
          // },
        ]
      }
    ],
    []
  )

  const [data, setData] = React.useState([])
  // const [originalData] = React.useState(data)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  React.useEffect(() => {
    async function fetchData() {
      setSkipPageReset(false)
      const response = await axios.get('api/inventory/stock')
      setData(response.data)
    }
    fetchData()
  }, [])

  async function updateData(d) {
    console.log(d)
    await axios.put('/api/inventory', d)
  }

  return (
    <Styles>
      <Table columns={columns} data={data} skipPageReset={skipPageReset} />
      <div id="tablebutton">
        <button id="submit" type="button" onClick={() => updateData(data)}>
          Submit changes
        </button>
      </div>
    </Styles>
  )
}
