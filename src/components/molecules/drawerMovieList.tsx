import { Link, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";

const DrawerMovieList: FC = () => {
  const data = [
    { id: 1, text: "Movie 1" },
    { id: 2, text: "Movie 2" },
    { id: 3, text: "Movie 3" },
    { id: 4, text: "Movie 4" },
    { id: 5, text: "Movie 5" },
    { id: 6, text: "Movie 6" },
    { id: 7, text: "Movie 7" },
    { id: 8, text: "Movie 8" },
    { id: 9, text: "Movie 9" },
    { id: 10, text: "Movie 10" },
    { id: 11, text: "Movie 11" },
    { id: 12, text: "Movie 12" },
    { id: 1, text: "Movie 1" },
    { id: 2, text: "Movie 2" },
    { id: 3, text: "Movie 3" },
    { id: 4, text: "Movie 4" },
    { id: 5, text: "Movie 5" },
    { id: 6, text: "Movie 6" },
    { id: 7, text: "Movie 7" },
    { id: 8, text: "Movie 8" },
    { id: 9, text: "Movie 9" },
    { id: 10, text: "Movie 10" },
    { id: 11, text: "Movie 11" },
    { id: 12, text: "Movie 12" },
  ];

  return (
    <List
      sx={{
        height: "70%",
        overflowY: "auto",
      }}
    >
      {data.map(({ text, id }) => (
        <ListItem button key={id} component={Link} href={`/movie/${id}`}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export { DrawerMovieList };
