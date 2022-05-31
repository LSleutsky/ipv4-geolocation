import axios from 'axios';

export default function handler(req, res) {
  axios
    .get('https://api.db-ip.com/v2/free/self')
    .then(({ data }) => res.status(200).json({ data }));
}
