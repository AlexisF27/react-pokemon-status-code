import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

import PropTypes from 'prop-types'
import img from '../../assets/img/logo.jpg';

function PokemonStatusCodeCard({ statusCodeCard }) {
  return (
    <>
      <Grid className="pl-12" key={statusCodeCard.status_code_id}>
        <Card className="m-2 border-black h-72 w-80">
          <CardActionArea>
            <CardMedia 
              className="h-56"
              title={statusCodeCard.title}
              image={img}
            />
            <CardContent>
              <Typography className="flex justify-center" gutterBottom variant="h5" component="div">
              {statusCodeCard.status_code_id} - {statusCodeCard.title}
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