import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const SearchCard = ({ data }) => {
  const theme = useTheme();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flex: '1 1 auto' }}>
        <Typography component="div" variant="h5">
          Search
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Please enter your query below
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
        <TextField
          label="Keyword"
          variant="standard"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: '100%' }} // Stretch the TextField to the width of its container
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Card>
  );
};

export default SearchCard;
