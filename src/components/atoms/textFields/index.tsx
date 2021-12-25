import { FC } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type TextFieldProps = {
  placeholder: string;
  error: boolean;
  type: "text" | "email" | "password" | "url";
};

const SearchField: FC = () => {
  return (
    <TextField
      placeholder="映画を検索する"
      variant="filled"
      sx={{ width: "750px" }}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

const AuthFormTextField: FC<TextFieldProps> = ({
  placeholder,
  error,
  type,
}) => {
  return (
    <TextField
      required
      type={type}
      error={error}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      sx={{ width: "450px" }}
      variant="standard"
    />
  );
};

const MovieFormTextField: FC<TextFieldProps> = ({
  placeholder,
  error,
  type,
}) => {
  return (
    <TextField
      required
      type={type}
      error={error}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      sx={{ width: "650px" }}
      variant="standard"
    />
  );
};

export { SearchField, AuthFormTextField, MovieFormTextField };
