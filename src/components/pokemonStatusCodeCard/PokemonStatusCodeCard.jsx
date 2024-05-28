import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

import PropTypes from 'prop-types'
import img from '../../assets/img/logo.jpg';
import { useNavigate } from 'react-router-dom';

function PokemonStatusCodeCard({ statusCodeCard }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${statusCodeCard.status_code_id}`,{
      state: { img: img }
    });
  };
  return (
    <>
      <Grid className="pl-12" key={statusCodeCard.status_code_id}>
        <Card className="m-2 border-black  w-80">
          <CardActionArea  onClick={handleCardClick}>
            <CardMedia 
              className="h-52"
              title={statusCodeCard.title}
              image={img}
            />
            <CardContent>
              <Typography className="flex justify-center text-center" gutterBottom variant="h5" component="div">
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