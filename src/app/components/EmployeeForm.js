// // EmployeeForm.js BLUM KELAR FORM TAMBAH KARYAWAN

// import React, { useState } from 'react';
// import { Modal, Backdrop, Fade, TextField, Button } from "@mui/material";

// const EmployeeForm = ({ open, handleClose }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     nama: '',
//     tanggalLahir: '',
//     kontak: '',
//     nik: '',
//     email: '',
//     jabatan: '',
//     awalKontrak: '',
//     akhirKontrak: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     console.log('Data karyawan baru:', formData);
//     handleClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{
//         timeout: 500,
//       }}
//     >
//       <Fade in={open}>
//         <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', outline: 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//           <h2 id="modal-modal-title">Tambah Karyawan</h2>
//           {/* Form fields */}
//           <TextField
//             label="Username"
//             variant="outlined"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//           {/* Other fields */}
//           <Button onClick={handleSubmit} variant="contained" color="primary" style={{ marginTop: '10px' }}>Tambah</Button>
//         </div>
//       </Fade>
//     </Modal>
//   );
// };

// export default EmployeeForm;
