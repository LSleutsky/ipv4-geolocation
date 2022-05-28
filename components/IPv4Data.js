import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Box, Card, CardContent, Typography } from '@mui/material';

import Map from 'components/Map';

dayjs.extend(localizedFormat);

export default function IPv4Data({
  city,
  country,
  error: { error } = {},
  ipv4,
  isLocalIpv4,
  latitude,
  longitude,
  state,
  timeData
}) {
  const cityState = city ? `${city}, ${state}` : '';
  const countryName = country ? country.toUpperCase() : '';
  // Extract datetime data as ISO string to pass into dayjs for allowable format
  const datetime = timeData?.datetime?.split('.')[0];
  const currentLocationDateTime = dayjs(datetime).format('LLLL');

  return (
    <>
      {!error && <Map lat={latitude} lng={longitude} zoom={15} />}
      <Box
        className="w-11/12 md:w-8/12 mb-10"
        sx={{ margin: '0 auto', textAlign: 'center' }}
      >
        <Card variant="outlined">
          <CardContent>
            {ipv4 ? (
              <>
                <Typography color="text.secondary" sx={{ fontSize: 18 }}>
                  {isLocalIpv4 ? 'Local IPv4' : 'IPv4'}
                </Typography>
                <Typography component="div" variant="h4">
                  {ipv4}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 15, mt: 1 }}>
                  {cityState}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: 15, mb: 1.5 }}
                >
                  {countryName}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 15, mb: 3 }}>
                  {currentLocationDateTime}
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
                {error}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
