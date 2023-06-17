import { useEffect, useState } from 'react';
import Table from '../../../Components/Table/Table';
import axios from 'axios';
import EditUser from './EditUser';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedUser, setEditedUser] = useState({
    // I Must Use Id || UUid for this Section . but i dont have BackEnd And This Project is For Test!
    name: '',
    userName: '',
    email: '',
    phone: '',
    Id: Math.floor(Math.random() * 100),
  });

  // Customize Back-End Data
  const OptimizingUserData = (newUsers) => {
    const OptimizedData = [];
    newUsers.map((item) => {
      OptimizedData.push({
        Name: item?.name,
        UserName: item?.username,
        Email: item?.email,
        Phone: item?.phone,
        Id: item?.id,
      });
    });
    setUsers(OptimizedData);
  };

  // Get Fake Users List From Back-End
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        OptimizingUserData(data);
      })
      .catch(({ err }) => {
        console.log(err, 'err');
      });
  }, []);

  // Table Columns
  const tableCell = [
    {
      key: 1,
      title: 'Name',
    },
    {
      key: 2,
      title: 'UserName',
    },
    {
      key: 3,
      title: 'Email',
    },
    {
      key: 4,
      title: 'Phone',
    },
    {
      key: 5,
      title: 'Actions',
    },
  ];

  // User Delete Handler
  const deleteUserHandler = (id) => {
    const prevUsers = [...users];
    const userIndex = prevUsers.findIndex((user) => user.Id === id);
    prevUsers.splice(userIndex, 1);
    setUsers(prevUsers);
  };

  // Edit User Handler
  const updateUserHandler = () => {
    const prevUsers = [...users];
    const userIndex = prevUsers.findIndex((user) => user.Id === openEditModal);
    prevUsers[userIndex] = editedUser;
    setUsers(prevUsers);
    setOpenEditModal(false);
  };

  return (
    <>
      <Table
        tableCell={tableCell}
        users={users}
        deleteUserHandler={(id) => deleteUserHandler(id)}
        editUserHandler={(id) => setOpenEditModal(id)}
      />
      <EditUser
        open={Boolean(openEditModal)}
        handleClose={() => setOpenEditModal(false)}
        updateUserHandler={updateUserHandler}
        setEditedUser={setEditedUser}
      />
    </>
  );
};

export default UsersTable;
