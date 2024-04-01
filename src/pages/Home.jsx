import { Button, Modal, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useFormik } from "formik";
import * as Yup from "yup";
const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const formik = useFormik({
    initialValues: {
      praduct: "",
     
    },
    validationSchema: Yup.object({
      praduct: Yup.string().required("Praduct Name is required"),
    }),
    onSubmit: (values) => {
      // Bu yerdan form ma'lumotlarini yuborish va local storage ga saqlash kerak
      console.log("Submitted:", values);
    }
  });

  return (
    <div className="px-20 mx-auto">
    <div className="flex justify-between mt-5">
      <h1 className="text-4xl font-bold text-white">
        You’ve got <span className=" font-medium text-blue-700">7 book</span>{" "}
      </h1>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        Create a Book
      </Button>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
          <div className="flex justify-between">
          <h2 id="modal-modal-title" className="text-xl font-medium mb-4">
            Create a Book
          </h2>
           <HighlightOffIcon  onClick={handleClose}/>
          </div>
          <form onSubmit={formik.handleSubmit}>
          <TextField
              id="author"
              name="author"
              label="Product Name"
              variant="outlined"
              fullWidth
              {...formik.getFieldProps("praduct")}
              aria-label="praduct"
              placeholder="Product Name"
            />
            {formik.touched.praduct && formik.errors.praduct ? (
              <div className="text-red-500">{formik.errors.praduct}</div>
            ) : null}
            <Button
            sx={{ marginTop:2}}
              className="w-full text-lowercase "
              variant="contained"
              type="submit"
            >
              Add praduct
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
