import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value as string);
    localStorage.setItem("LANGUAGE", event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} mr={5}>
      <FormControl fullWidth>
        <Select
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
            "&::before": {
              borderBottom: "1px solid white",
            },
            "&::after": {
              borderBottom: "1px solid #1976d2",
            },
          }}
          defaultValue={localStorage.getItem("LANGUAGE") ?? "en"}
          variant="standard"
          labelId="Language"
          id="lang"
          label="Language"
          onChange={handleChange}
          color="success">
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ua">Українська</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
