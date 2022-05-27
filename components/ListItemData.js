import { Box, Card, CardContent, Typography } from '@mui/material';

import Map from 'components/Map';

export default function OutlinedCard({
  city,
  country,
  error,
  ipv4,
  latitude,
  longitude,
  state
}) {
  const cityState = city ? `${city}, ${state}` : ``;
  const divider = city ? '|' : '';

  return (
    <>
      <Box
        className="w-11/12"
        sx={{ margin: '20px auto', 'text-align': 'center' }}
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
                <Typography color="text.secondary" sx={{ fontSize: 16, mb: 3 }}>
                  {`${cityState} ${divider} ${country?.toUpperCase()}`}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 18 }}>
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
      <Map />
    </>
  );
}
