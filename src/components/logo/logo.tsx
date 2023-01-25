import { Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const Logo: React.FC = () => {
  return (
    <>
      <PetsIcon
        sx={{ fontSize:50, display: { xs: "flex", md: "flex" }, mr: 1 }}
      />

      <Typography
        variant = "h3"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 0,
          display: { xs: "flex", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 300,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        VetClinic
      </Typography>
    </>
  );
};

export default Logo;
