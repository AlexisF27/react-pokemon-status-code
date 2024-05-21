import { Box, Container, Grid } from "@mui/material"
import { useEffect, useState } from 'react';

function NotePad() {
  // eslint-disable-next-line no-unused-vars
  const [pokemonStatusCodeCard, setPokemonStatusCodeCard] = useState([]);

  useEffect(() => {
    // Initialize with 10 elements
    setPokemonStatusCodeCard(new Array(10).fill(null));
  }, []);

  return (
    <Container className="pt-16">
      <Box > 
      <Grid container spacing={8}>
          {pokemonStatusCodeCard.map((statusCodeCard) => ((
            // <MovieCard key={movie.imdbID} movie={movie} />
            <Box className="pr-8" key={statusCodeCard} >
              holas
            </Box>
          )))}
        </Grid>

      </Box>
    </Container>
  )
}

export default NotePad