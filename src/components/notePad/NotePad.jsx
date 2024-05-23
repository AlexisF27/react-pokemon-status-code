import { Box, Container, Grid } from "@mui/material"
import { useEffect, useState } from 'react';

import PokemonStatusCodeCard from "../pokemonStatusCodeCard/PokemonStatusCodeCard"
import statusCodes from '../../assets/data/status_code_pokemon.json';

function NotePad() {
  // eslint-disable-next-line no-unused-vars
  const [pokemonStatusCodeCard, setPokemonStatusCodeCard] = useState([]);

  useEffect(() => {
    setPokemonStatusCodeCard(statusCodes);
  }, []);

  return (
    <Container className="ml-16 pt-16">
      <Box className="flex justify-center items-center" >
        <Grid container spacing={2}>
          {pokemonStatusCodeCard.map((statusCodeCard) => ((
            <PokemonStatusCodeCard key={statusCodeCard} />
          )))}
        </Grid>

      </Box>
    </Container>
  )
}

export default NotePad