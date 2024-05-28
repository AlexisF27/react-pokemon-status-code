import {Card, CardMedia, Typography} from "@mui/material"
import { useLocation, useParams } from 'react-router-dom';

function StatusCodeDetail() {
  const { statusCodeId } = useParams();
  const location = useLocation();
  const { img } = location.state || {}
  console.log(img)
  return (
    <>
      <Typography>
        The Status Code is {statusCodeId}
      </Typography>
      <img src={img} alt="hpjaçs" />

    </>
  )
}

export default StatusCodeDetail