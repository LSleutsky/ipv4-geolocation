import TextField from '@mui/material/TextField';

import { validateIp } from 'utils/validate';

export default function IPv4Input({ getValidIpv4Address }) {
  const getValidIpv4 = (evt) => {
    const ipAddress = evt.target.value;

    if (validateIp(ipAddress)) {
      getValidIpv4Address(ipAddress);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <TextField
          id="outlined-basic"
          label="Enter IPv4 Address"
          onChange={(evt) => getValidIpv4(evt)}
          variant="outlined"
        />
      </div>
    </>
  );
}
