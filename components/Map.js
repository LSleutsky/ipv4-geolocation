import appSettings from 'config';

export default function Map({
  latitude,
  longitude,
  mapType = 'satellite',
  zoom = 15
}) {
  return (
    <iframe
      allowFullScreen
      className="w-11/12 md:w-8/12 pb-16 m-auto"
      height="600"
      referrerpolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/view?key=${appSettings.mapsApiKey}
    &center=${latitude},${longitude}&zoom=${zoom}&maptype=${mapType}`}
    />
  );
}
