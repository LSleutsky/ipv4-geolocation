import { mapsApiKey } from 'config';

export default function Map({
  latitude,
  longitude,
  mapType = 'satellite',
  zoom = 15
}) {
  return (
    <iframe
      className="w-11/12 md:w-8/12 pb-16"
      allowFullScreen
      height="600"
      referrerpolicy="no-referrer-when-downgrade"
      style={{ margin: '0 auto' }}
      src={`https://www.google.com/maps/embed/v1/view?key=${mapsApiKey}
    &center=${latitude},${longitude}&zoom=${zoom}&maptype=${mapType}`}
    ></iframe>
  );
}
