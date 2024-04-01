import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Input } from "@mui/base/Input";

const SignIn = () => {
  return (
    <div className="mt-32">
    <Card className="px-6" sx={{ minWidth: 175, maxWidth: 500 }}>
      <CardContent className={""}>
        <Typography
          className="text-center"
          sx={{ fontSize: 56 }}
          color="text.secondary"
          gutterBottom
        >
          Sing In
        </Typography>
        <label htmlFor="">UserName</label>
        <Input
          className={""}
          slotProps={{
            input: {
              className:
                "w-full text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0"
            }
          }}
          aria-label="Demo input"
          placeholder="Username"
        />
        <label htmlFor="">Password</label>
        <Input
          className={""}
          slotProps={{
            input: {
              className:
                "w-full my-2 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0"
            }
          }}
          aria-label="Demo input"
          placeholder="Repeat the password"
        />
      </CardContent>
      <CardActions>
        <Button className="w-full text-uppercase" variant="contained">
          Submit
        </Button>
      </CardActions>
      <p id="parent-modal-description" className="modal-description text-center pb-7">
      Already signed in? <span className="text-blue-700 text-sm"> Go to sign up.</span>
      </p>
    </Card>
    </div>

  );
};

export default SignIn;
