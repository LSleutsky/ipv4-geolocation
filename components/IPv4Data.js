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
  const cardClass = ipv4 ? `md:h-96` : 'h-fit';
  const cardContentClass = ipv4 ? `md:w-4/12 md:mr-0` : `md:w-8/12`;

  return (
    <main className="flex flex-col md:flex-row m-auto mb-4">
      <Box
        className={`w-11/12 ${cardContentClass}`}
        sx={{ margin: '0 auto', textAlign: 'center' }}
      >
        <Card
          className={`bg-neutral-100 shadow-none rounded-none mb-2 md:mr-2 ${cardClass}`}
        >
          <CardContent>
            {ipv4 ? (
              <>
                <Typography color="text.secondary" sx={{ fontSize: 18 }}>
                  {isLocalIpv4 ? 'Local IPv4' : 'IPv4'}
                </Typography>
                <Typography component="div" variant="h4">
                  {ipv4}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                  {cityState}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                  {countryName}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontSize: 15, mb: 3, mt: 2 }}
                >
                  {currentLocationDateTime}
                </Typography>
                <hr className="w-1/2 m-auto" />
                <Typography color="text.secondary" sx={{ fontSize: 18, mt: 3 }}>
                  Latitude
                </Typography>
                <Typography component="div" variant="h4">
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
      {!error && <Map lat={latitude} lng={longitude} zoom={15} />}
    </main>
  );
}
