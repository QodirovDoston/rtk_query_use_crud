import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input } from "@mui/base/Input";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const SignUp = ({setToken}) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmpassword: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
      confirmpassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match")
    }),
    onSubmit: async(values) => {
      try {
        const response = await axios.post('https://reqres.in/api/register', {
          username: values.username,
          password: values.password,
          confirmpassword:values.confirmpassword
        });
        const { token } = response.data;
        setToken(token);
        window.localStorage.setItem('token', token);
        toast.success("Wow Successfully logged in!")
      } catch (error) {
        console.error('Error signing in');
        toast.error("some thing wrong bro!  Try again!" , error)
      }
    }
  });
  // https://reqres.in/api/register

  return (
    <div className="routet">
    <div className="pt-24 flex justify-center items-center">
      <Card className="px-2" sx={{ minWidth: 450, maxWidth: 500 }}>
        <CardContent className={""}>
          <Typography
            className="text-center"
            sx={{ fontSize: 56 }}
            color="text.secondary"
            gutterBottom
          >
            Sing Up
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <label className="text-sm" htmlFor="username">
              Username
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              slotProps={{
                input: {
                  className:
                    "w-full my-1 text-md font-sans font-normal leading-5 px-3 py-3 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0"
                }
              }}
              {...formik.getFieldProps("username")}
              aria-label="Username"
              placeholder="Username"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500">{formik.errors.username}</div>
            ) : null}

            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              slotProps={{
                input: {
                  className:
                    "w-full my-1 text-md font-sans font-normal leading-5 px-3 py-3 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0"
                }
              }}
              {...formik.getFieldProps("password")}
              aria-label="Password"
              placeholder="Password"
            />
            <label className="text-sm" htmlFor="">
              Confirm password
            </label>
            <Input
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              slotProps={{
                input: {
                  className:
                    "w-full my-1 mb-4 text-md font-sans font-normal leading-5 px-3 py-3 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0"
                }
              }}
              {...formik.getFieldProps("confirmpassword")}
              aria-label="Password"
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}

            <Button
              className="w-full text-lowercase mt-16"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </CardContent>
        <p
          id="parent-modal-description"
          className="modal-description text-center pb-7"
        >
          Already signed up?{" "}
          <span className="text-blue-700 text-sm">
            <Link to="/signin" relative="path">
              {" "}
              Go to sign in.
            </Link>
          </span>
        </p>
      </Card>
    </div>
    </div>
  );
};

export default SignUp;
