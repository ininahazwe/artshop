import { Container, Typography, Grid } from "@material-ui/core";
import logo from "./Canon-Kit.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Typography className="title" variant="h1">
              Welcome to DwinaTech Shop
            </Typography>
          </Grid>
          <Grid className="brand" item sm={12}>
            <img src={logo} alt="Brand-tv" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
