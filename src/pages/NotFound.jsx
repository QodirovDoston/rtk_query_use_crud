import { Button } from "@mui/material";
import notFound from "../assets/notFound.svg";
const NotFound = () => {
  return (
    <div className="routet">
      <div className="pt-6">
        <img
          className="w-full h-[500px] flex justify-center"
          src={notFound}
          alt=""
        />
        <div className="flex justify-center items-center gap-5 mt-5">
          <a href="/">
            <Button
              sx={{ paddingX: { xs: 2, sm: 8 } }}
              className="text-lowercase mt-16"
              variant="contained"
              type="submit"
            >
              Go Home Page
            </Button>
          </a>
          <Button
            sx={{ paddingX: { xs: 2, sm: 8 } }}
            className="text-lowercase mt-16  border border-blue-700"
            variant="outlined"
            type="submit"
          >
            Reloade Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
