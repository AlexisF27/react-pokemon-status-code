import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

import PropTypes from 'prop-types'

function PokemonStatusCodeCard({ statusCodeCard }) {
  return (
    <>
      <Grid key={statusCodeCard}>
        <Card sx={{ maxWidth: 345, border: 2, margin: 2 }}>
          <CardActionArea>
            <CardMedia className="h-72 w-80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

    </>
  )
}

PokemonStatusCodeCard.propTypes = {
  statusCodeCard: PropTypes.object.isRequired,

}

export default PokemonStatusCodeCard