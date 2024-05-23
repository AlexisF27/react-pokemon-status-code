import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

import PropTypes from 'prop-types'

function PokemonStatusCodeCard({ statusCodeCard }) {
  return (
    <>
      <Grid className="pl-12" key={statusCodeCard}>
        <Card className="m-2 border-black h-72 w-80">
          <CardActionArea>
            <CardMedia 
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
  statusCodeCard: PropTypes.object,

}

export default PokemonStatusCodeCard