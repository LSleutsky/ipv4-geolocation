import { WebServiceClient } from '@maxmind/geoip2-node';

export default function handler(req, res) {
  const client = new WebServiceClient('723301', 'w45Xg6ofHEIpX2qe', {
    host: 'geolite.info'
  });

  const ipv4Address = req.body.validIpv4Address;

  client.city(ipv4Address).then((data) => {
    res.status(200).json({ data });
  });
}
