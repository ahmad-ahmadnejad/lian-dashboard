import { Button, Input, Modal } from '@mui/material';
const EditUser = ({ open, handleClose, setEditedUser, updateUserHandler }) => {
  return (
    <Modal
      className='mt-24'
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className=' w-80 h-80 bg-white m-auto flex flex-col justify-center items-center gap-4'>
        <div>
          <Input
            onChange={(e) => {
              setEditedUser((prevState) => {
                return {
                  ...prevState,
                  name: e.target.value,
                };
              });
            }}
            dir='ltr'
            placeholder='new Name'
          />
        </div>
        <div>
          <Input
            onChange={(e) => {
              setEditedUser((prevState) => {
                return {
                  ...prevState,
                  userName: e.target.value,
                };
              });
            }}
            dir='ltr'
            placeholder='new UserName'
          />
        </div>
        <div>
          <Input
            onChange={(e) => {
              setEditedUser((prevState) => {
                return {
                  ...prevState,
                  email: e.target.value,
                };
              });
            }}
            dir='ltr'
            placeholder='new Email'
          />
        </div>
        <div>
          <Input
            onChange={(e) => {
              setEditedUser((prevState) => {
                return {
                  ...prevState,
                  phone: e.target.value,
                };
              });
            }}
            dir='ltr'
            placeholder='new Phone'
          />
        </div>
        <div className='mt-4'>
          <Button onClick={updateUserHandler}>Submit</Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditUser;
