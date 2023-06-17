import * as React from 'react';
import { default as MuiTable } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const Table = ({ tableCell, users, deleteUserHandler, editUserHandler }) => {
  return (
    <>
      <TableContainer key={Math.floor(Math.random() * 10)} component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {tableCell?.map((item) => (
                <TableCell align='center'>{item?.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.values(row).map((UserData, index) => {
                  return Object.keys(row)[index] === 'Id' ? (
                    <div
                      key={index}
                      className='flex flex-row justify-center items-center w-full'
                    >
                      <DeleteForeverIcon
                        onClick={() => deleteUserHandler(UserData)}
                      />
                      <EditIcon onClick={() => editUserHandler(UserData)} />
                    </div>
                  ) : (
                    <TableCell align='center'>{UserData}</TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  );
};

export default Table;
