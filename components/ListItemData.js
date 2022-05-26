import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function OutlinedCard({
  city,
  country,
  ipv4,
  latitude,
  longitude,
  state
}) {
  return (
    <Box sx={{ width: 350, margin: '20px auto' }}>
      <Card className="shadow-none">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            IPv4
          </Typography>
          <Typography variant="h5" component="div">
            {ipv4}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`${city}, ${state} | ${country}`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Latitude
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            {latitude}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Longitude
          </Typography>
          <Typography variant="h5" component="div">
            {longitude}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
