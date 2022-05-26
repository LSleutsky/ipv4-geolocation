import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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

  console.info(error);

  return (
    <Box sx={{ width: 350, margin: '20px auto' }}>
      <Card className="shadow-none">
        <CardContent>
          {ipv4 ? (
            <>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                IPv4
              </Typography>
              <Typography component="div" variant="h5">
                {ipv4}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14, mb: 3 }}>
                {`${cityState} ${divider} ${country?.toUpperCase()}`}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                Latitude
              </Typography>
              <Typography component="div" gutterBottom variant="h5">
                {latitude}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                Longitude
              </Typography>
              <Typography component="div" variant="h5">
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
  );
}
