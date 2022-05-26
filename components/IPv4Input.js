import { useState } from 'react';

import Controls from 'components/Controls';
import TextField from '@mui/material/TextField';

import { validateIp } from 'utils/validate';

export default function IPv4Input({
  getIpv4Data,
  getValidIpv4Address,
  showIpData,
  validIpv4Address
}) {
  const [ipv4FormatOnly, setIpv4FormatOnly] = useState('');
  const [isInvalidIp, setIsInvalidIp] = useState(false);

  const allowOnlyIpv4Format = (evt) => {
    const inputValue = evt.target.value;

    if (inputValue.match('^[0-9.,]*$') !== null) {
      setIpv4FormatOnly(inputValue);
    }

    setIsInvalidIp(!validateIp(inputValue));
  };

  const clearInput = (input) => {
    setIpv4FormatOnly(input);
  };

  const getValidIpv4 = (evt) => {
    const ipAddress = evt.target.value;

    if (validateIp(ipAddress)) {
      getValidIpv4Address(ipAddress);
    }

    setIsInvalidIp(!validateIp(ipAddress));
  };

  return (
    <>
      <div className="flex flex-col">
        <TextField
          error={isInvalidIp}
          id={isInvalidIp ? 'outlined-error' : 'outlined-basic'}
          helperText={isInvalidIp && 'Please enter valid IP'}
          label="Enter IPv4 Address"
          onChange={allowOnlyIpv4Format}
          onBlur={(evt) => getValidIpv4(evt)}
          value={ipv4FormatOnly}
          variant="outlined"
        />
        <Controls
          clearInput={clearInput}
          disabled={isInvalidIp || !ipv4FormatOnly}
          getIpv4Data={getIpv4Data}
          showIpData={showIpData}
          validIpv4Address={validIpv4Address}
        />
      </div>
    </>
  );
}
