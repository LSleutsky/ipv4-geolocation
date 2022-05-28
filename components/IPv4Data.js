import { Box, Card, CardContent, Typography } from '@mui/material';

import Map from 'components/Map';

export default function IPv4Data({
  city,
  country,
  error,
  ipv4,
  latitude,
  longitude,
  state
}) {
  const cityState = city ? `${city}, ${state}` : '';
  const countryName = country ? country.toUpperCase() : '';

  return (
    <>
      <Box
        className="w-11/12 md:w-8/12"
        sx={{ margin: '0 auto', textAlign: 'center' }}
      >
        <Card variant="outlined">
          <CardContent>
            {ipv4 ? (
              <>
                <Typography color="text.secondary" sx={{ fontSize: 18 }}>
                  IPv4
                </Typography>
                <Typography component="div" variant="h4">
                  {ipv4}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 15, mt: 1 }}>
                  {cityState}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 15, mb: 3 }}>
                  {countryName}
                </Typography>
                <hr className="w-1/2 m-auto" />
                <Typography color="text.secondary" sx={{ fontSize: 18, mt: 3 }}>
                  Latitude
                </Typography>
                <Typography component="div" gutterBottom variant="h4">
                  {latitude}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 18 }}>
                  Longitude
                </Typography>
                <Typography component="div" variant="h4">
                  {longitude}
                </Typography>
              </>
            ) : (
              <Typography className="text-center" component="div" variant="h5">
                {error?.error}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
      {!error && <Map lat={latitude} lng={longitude} zoom={15} />}
    </>
  );
}
