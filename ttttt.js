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