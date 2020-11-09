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
        text-align: center;
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
    margin-top: 15px;
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
  updateMyData
}) => {
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    updateMyData(index, id, value)
  }

  React.useEffect(
    () => {
      setValue(initialValue)
    },
    [initialValue]
  )

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}

const defaultColumn = {
  Cell: EditableCell
}

function Table({columns, data, updateMyData, skipPageReset}) {
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
      autoResetPage: !skipPageReset,
      updateMyData
    },
    usePagination
  )

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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

export default function editsalestable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Sales',
        columns: [
          {
            Header: 'Item name',
            accessor: 'name'
          },
          {
            Header: 'Date Listed',
            accessor: 'dateListed'
          },
          {
            Header: 'Date Sold',
            accessor: 'dateSold'
          },
          {
            Header: 'Sold Price',
            accessor: 'soldPrice'
          },
          {
            Header: 'Featured?',
            accessor: 'featured'
          },
          {
            Header: 'Cost',
            accessor: 'cost'
          },

          {
            Header: 'Shipping cost',
            accessor: 'shippingCost'
          },
          {
            Header: '# likes at sale',
            accessor: 'likes'
          },
          {
            Header: 'Notes',
            accessor: 'notes'
          }
        ]
      }
    ],
    []
  )

  const [data, setData] = React.useState([])
  // const [originalData] = React.useState(data)
  const [skipPageReset, setSkipPageReset] = React.useState(false)

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value
          }
        }
        return row
      })
    )
  }

  React.useEffect(() => {
    async function fetchData() {
      setSkipPageReset(false)
      const response = await axios.get('api/sales/editsalesdata')
      setData(response.data)
    }
    fetchData()
  }, [])

  // const resetData = () => setData(originalData)

  async function updateData(d) {
    console.log(d)
    await axios.put('/api/sales', d)
  }

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
      <div id="tablebutton">
        <button id="submit" type="button" onClick={() => updateData(data)}>
          Submit changes
        </button>
      </div>
    </Styles>
  )
}
