import { Box, Container, Grid } from "@mui/material"
import { useEffect, useState } from 'react';

import PokemonStatusCodeCard from "../pokemonStatusCodeCard/PokemonStatusCodeCard"
import PropTypes from 'prop-types'
import statusCodes from '../../assets/data/status_code_pokemon.json';

function NotePad({ inputSearch }) {
  const [pokemonStatusCodeCard, setPokemonStatusCodeCard] = useState([]);

  useEffect(() => {
    if (inputSearch) {
      if (!isNaN(inputSearch)) {
        const searchQuery = Number(inputSearch);
        const filteredStatusCodes = statusCodes.filter(statusCodeCard =>
          statusCodeCard.status_code_id === searchQuery
        );
        setPokemonStatusCodeCard(filteredStatusCodes);
      } else {
        const filteredStatusCodes = statusCodes.filter(statusCodeCard =>
          statusCodeCard.title.toLowerCase().includes(inputSearch.toLowerCase())
        );
        setPokemonStatusCodeCard(filteredStatusCodes);
      }
    } else {
      setPokemonStatusCodeCard(statusCodes);
    }
  }, [inputSearch]);

  return (
    <Container className="ml-16 pt-16">
      <Box className="flex justify-center items-center" >
        <Grid container spacing={2}>
          {pokemonStatusCodeCard.map((statusCodeCard) => ((
            <PokemonStatusCodeCard key={statusCodeCard.status_code_id} statusCodeCard={statusCodeCard} />
          )))}
        </Grid>

      </Box>
    </Container>
  )
}

NotePad.propTypes = {
  inputSearch: PropTypes.string.isRequired,

}

export default NotePad