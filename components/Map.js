export default function Map({ latitude, longitude, zoom = 15 }) {
  return (
    <iframe
      className="w-11/12 pb-16"
      allowFullScreen
      height="600"
      referrerpolicy="no-referrer-when-downgrade"
      style={{ margin: '0 auto' }}
      src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyC_U4rBA7QLVcqgWp5w_aP_hmERuLYF-1c
    &center=${latitude},${longitude}&zoom=${zoom}`}
    ></iframe>
  );
}
