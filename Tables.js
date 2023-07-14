import React, { useEffect, useState } from 'react';
import { Box, Grid, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';

function TableComponent({ tableIndex, sheet,tableData_TW_TOD  }) {
  const newRows = [];
  const [rows, setRows] = useState([]);
  const renderTableRows=() => {
    
    if (sheet === 'TAKEOFF DRY') {
      

      const rowCount = 7; // Number of rows in each table
      const colCount = 6; // Number of 0columns in each table

    
      for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
        const cells = [];

        for (let cellIndex = 1; cellIndex <= colCount; cellIndex++) {
          let cellData = '';

          if (cellIndex === 1 && rowIndex >= 1 && rowIndex <= 9) {
            cellData = [
              '             ',
              'Rwy Length ft',
              'Rwy Length m',
              'FieldLimited',
              'Tire Speed Limited',
              'Climb (2nd seg) WAT',
              'Brake Energy (MBE)',
            ][rowIndex - 1];
          } else {
            cellData = `Cell ${cellIndex}-${rowIndex}`;
          }

          cells.push(
            <Td borderWidth='1px' p={1} key={cellIndex}>
              {cellData}
            </Td>
          );
        }

        const row = <Tr key={rowIndex}>{cells}</Tr>;

        newRows.push(row);
      }


      //,tableData_TW_TOD[1][0]
      //console.log("HIHIHIHIHIHIH");

       if (tableIndex === 2) {
        /* newRows[1][2] = '5';
        newRows[1][3] = '9'; */
        
         newRows[1].props.children[2] = (
          <Td borderWidth='1px' p={1} key={3}>
            5
          </Td>
        );
        newRows[1].props.children[3] = (
          <Td borderWidth='1px' p={1} key={4}>
            9
          </Td>
        ); 
      } 

      //setRows(newRows);//causing an error when activated since its causing more loops infinite loop
      
    }
    return newRows;
  } 
   useEffect(() => {
    renderTableRows();
    setRows(newRows);
  }, [sheet]); 
  //console.log("hihi",tableData_TW_TOD);
  console.log("55555555555555555",newRows);
  console.log("*******************",sheet);
  console.log("////////////////////",rows);
  return (
    
    <Table variant='striped' colorScheme='teal' borderWidth='1px' borderRadius='md'>
      <TableCaption>Aircraft Data</TableCaption>
      <Thead>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps=  ,AC_Type=  </Th>
          <Th borderWidth='1px' p={1}>Alt (m)</Th>
          <Th borderWidth='1px' p={1}>Alt (ft)</Th>
          <Th borderWidth='1px' p={1}>DISA</Th>
          <Th borderWidth='1px' p={1}>OAT</Th>
          <Th borderWidth='1px' p={1}>QNH</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderTableRows()}
        {/* {rows} */}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps</Th>
          <Th borderWidth='1px' p={1}>Flaps#1</Th>
          <Th borderWidth='1px' p={1}>Flaps#2</Th>
          <Th borderWidth='1px' p={1}>Flaps#3</Th>
          <Th borderWidth='1px' p={1}>Flaps#4</Th>
          <Th borderWidth='1px' p={1}>Flaps#5</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

function TableComponent_TW({ tableIndex, tableData_ZW_LD, tableData_ZW_LW, tableData_ZW_TOD, tableData_ZW_TOW, tableData_HW_LD, tableData_HW_LW, tableData_HW_TOD, tableData_HW_TOW, tableData_TW_LD, tableData_TW_LW, tableData_TW_TOD, tableData_TW_TOW }) {
  const renderTableRows = () => {
    const rowCount = 7; // Number of rows in each table
    const colCount = 6; // Number of columns in each table

    const rows = [];

    for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
      const cells = [];

      for (let cellIndex = 1; cellIndex <= colCount; cellIndex++) {
        let cellData = '';

        if (cellIndex === 1 && rowIndex >= 1 && rowIndex <= 9) {
          cellData = [
            '             ',
            'Rwy Length ft',
            'Rwy Length m',
            'FieldLimited',
            'Tire Speed Limited',
            'Climb (2nd seg) WAT',
            'Brake Energy (MBE)',
          ][rowIndex - 1];
        } else {
          cellData = `Cell ${cellIndex}-${rowIndex}`;
        }

        cells.push(
          <Td borderWidth='1px' p={1} key={cellIndex}>
            {cellData}
          </Td>
        );
      }

      const row = <Tr key={rowIndex}>{cells}</Tr>;

      rows.push(row);
    }

    if (tableIndex === 2) {
      rows[1].props.children[2] = (
        <Td borderWidth='1px' p={1} key={3}>
          99
        </Td>
      );
      rows[1].props.children[3] = (
        <Td borderWidth='1px' p={1} key={4}>
          88
        </Td>
      );
    }
    
    return rows;
  };

  return (
    <Table variant='striped' colorScheme='teal' borderWidth='1px' borderRadius='md'>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps=  ,AC_Type=  </Th>
          <Th borderWidth='1px' p={1}>Alt (m)</Th>
          <Th borderWidth='1px' p={1}>Alt (ft)</Th>
          <Th borderWidth='1px' p={1}>DISA</Th>
          <Th borderWidth='1px' p={1}>OAT</Th>
          <Th borderWidth='1px' p={1}>QNH</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderTableRows()}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps</Th>
          <Th borderWidth='1px' p={1}>Flaps#1</Th>
          <Th borderWidth='1px' p={1}>Flaps#2</Th>
          <Th borderWidth='1px' p={1}>Flaps#3</Th>
          <Th borderWidth='1px' p={1}>Flaps#4</Th>
          <Th borderWidth='1px' p={1}>Flaps#5</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

function TableComponent_LW({ tableIndex, tableData_ZW_LD, tableData_ZW_LW, tableData_ZW_TOD, tableData_ZW_TOW, tableData_HW_LD, tableData_HW_LW, tableData_HW_TOD, tableData_HW_TOW, tableData_TW_LD, tableData_TW_LW, tableData_TW_TOD, tableData_TW_TOW }) {
  const renderTableRows = () => {
    const rowCount = 7; // Number of rows in each table
    const colCount = 6; // Number of columns in each table

    const rows = [];

    for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
      const cells = [];

      for (let cellIndex = 1; cellIndex <= colCount; cellIndex++) {
        let cellData = '';

        if (cellIndex === 1 && rowIndex >= 1 && rowIndex <= 9) {
          cellData = ['          ', 'Rwy Length ft', 'Rwy Length m', 'Field Limit (FieldLength)', 'APP CLB Limit(WAT)', 'LDG CLB Limit (WAT)', 'Quick Turn (MBE)'][rowIndex - 1];
        } else {
          cellData = `Cell ${cellIndex}-${rowIndex}`;
        }

        cells.push(
          <Td borderWidth='1px' p={1} key={cellIndex}>
            {cellData}
          </Td>
        );
      }

      const row = (
        <Tr key={rowIndex}>
          {cells}
        </Tr>
      );

      rows.push(row);
    }

    return rows;
  };

  return (
    <Table variant='striped' colorScheme='teal' borderWidth='1px' borderRadius='md'>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps=  ,AC_Type=  </Th>
          <Th borderWidth='1px' p={1}>Alt (m)</Th>
          <Th borderWidth='1px' p={1}>Alt (ft)</Th>
          <Th borderWidth='1px' p={1}>DISA</Th>
          <Th borderWidth='1px' p={1}>OAT</Th>
          <Th borderWidth='1px' p={1}>QNH</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderTableRows()}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps</Th>
          <Th borderWidth='1px' p={1}>Flaps#1</Th>
          <Th borderWidth='1px' p={1}>Flaps#2</Th>
          <Th borderWidth='1px' p={1}>Flaps#3</Th>
          <Th borderWidth='1px' p={1}>Flaps#4</Th>
          <Th borderWidth='1px' p={1}>Flaps#5</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

function TableComponent_LD({ tableIndex, tableData_ZW_LD, tableData_ZW_LW, tableData_ZW_TOD, tableData_ZW_TOW, tableData_HW_LD, tableData_HW_LW, tableData_HW_TOD, tableData_HW_TOW, tableData_TW_LD, tableData_TW_LW, tableData_TW_TOD, tableData_TW_TOW }) {
  const renderTableRows = () => {
    const rowCount = 7; // Number of rows in each table
    const colCount = 6; // Number of columns in each table

    const rows = [];

    for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
      const cells = [];

      for (let cellIndex = 1; cellIndex <= colCount; cellIndex++) {
        let cellData = '';

        if (cellIndex === 1 && rowIndex >= 1 && rowIndex <= 9) {
          cellData = ['OWE=    ,MTOW=     ', 'Rwy Length ft', 'Rwy Length m', 'FieldLimit(Field Length)', 'APP CLB Limit (WAT)', 'LDG CLB Limit (WAT)', 'Quick Turn (MBE)'][rowIndex - 1];
        } else {
          cellData = `Cell ${cellIndex}-${rowIndex}`;
        }

        cells.push(
          <Td borderWidth='1px' p={1} key={cellIndex}>
            {cellData}
          </Td>
        );
      }

      const row = (
        <Tr key={rowIndex}>
          {cells}
        </Tr>
      );

      rows.push(row);
    }

    return rows;
  };

  return (
    <Table variant='striped' colorScheme='teal' borderWidth='1px' borderRadius='md'>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps=  ,Wind=  ,Slope=  </Th>
          <Th borderWidth='1px' p={1}>Alt (m)</Th>
          <Th borderWidth='1px' p={1}>Alt (ft)</Th>
          <Th borderWidth='1px' p={1}>DISA</Th>
          <Th borderWidth='1px' p={1}>OAT</Th>
          <Th borderWidth='1px' p={1}>QNH</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderTableRows()}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th borderWidth='1px' p={1}>Flaps</Th>
          <Th borderWidth='1px' p={1}>Flaps#1</Th>
          <Th borderWidth='1px' p={1}>Flaps#2</Th>
          <Th borderWidth='1px' p={1}>Flaps#3</Th>
          <Th borderWidth='1px' p={1}>Flaps#4</Th>
          <Th borderWidth='1px' p={1}>Flaps#5</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

function Tables({ selectedSheet, showTitles = true, tableData_TW_TOD }) {
  const tableComponents = [];
  const tableCount = 48;

  for (let i = 1; i <= tableCount; i++) {
    if (selectedSheet === 'TAKEOFF DRY') {
      tableComponents.push(<TableComponent tableIndex={1} sheet={selectedSheet} />);
     }  else if (selectedSheet === 'TAKEOFF WET') {
      tableComponents.push(<TableComponent_TW tableIndex={i} />);
    } else if (selectedSheet === 'LANDING DRY') {
      tableComponents.push(<TableComponent_LD tableIndex={i} />);
    } else if (selectedSheet === 'LANDING WET') {
      tableComponents.push(<TableComponent_LW tableIndex={i} />);
    } else {
      tableComponents.push(null);
    }
  } 

  return (
    <div>
      {showTitles && (
        <>
          <h1 className="red-header">TAIL-WIND-DATA</h1>
          <div className="tables-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {/* Table Line 1 */}
            <div className="table-row" style={{ display: 'flex' }}>
              {tableComponents.slice(0, 4).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 2 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(4, 8).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 3 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(8, 12).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 4 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(12, 16).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
          </div>
          <h1 className="red-header">HEAD-WIND-DATA</h1>
          <div className="tables-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {/* Table Line 1 */}
            <div className="table-row" style={{ display: 'flex' }}>
              {tableComponents.slice(16, 20).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 2 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(20, 24).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 3 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(24, 28).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 4 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(28, 32).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
          </div>
          <h1 className="red-header">ZERO-WIND-DATA</h1>
          <div className="tables-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {/* Table Line 1 */}
            <div className="table-row" style={{ display: 'flex' }}>
              {tableComponents.slice(32, 36).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 2 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(36, 40).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 3 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(40, 44).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
            {/* Table Line 4 */}
            <div className="table-row" style={{ display: 'flex', marginTop: '10px' }}>
              {tableComponents.slice(44, 48).map((component, index) => (
                <div className="table-column" style={{ marginRight: '10px' }} key={index}>
                  {component}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
              }

export default Tables;
