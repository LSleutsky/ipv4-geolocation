import { useState } from 'react';

import TextField from '@mui/material/TextField';

import Controls from 'components/Controls';

import { validateIp } from 'utils/validate';

export default function IPv4Input({
  getIpv4Data,
  getValidIpv4Address,
  showIpData,
  validIpv4Address
}) {
  const [ipv4Format, setIpv4Format] = useState('');
  const [isInvalidIp, setIsInvalidIp] = useState(false);

  const allowOnlyIpv4Format = (evt) => {
    const inputValue = evt.target.value;

    if (inputValue.match('^[0-9.,]*$') !== null) {
      setIpv4Format(inputValue);
    }

    setIsInvalidIp(!validateIp(inputValue));
  };

  const getValidIpv4 = (evt) => {
    const ipAddress = evt.target.value;

    if (validateIp(ipAddress)) {
      getValidIpv4Address(ipAddress);
    }

    setIsInvalidIp(!validateIp(ipAddress));
  };

  const setInputValue = (input) => {
    setIpv4Format(input);
    setIsInvalidIp(false);
  };

  return (
    <div className="flex flex-col">
      <TextField
        error={isInvalidIp}
        id={isInvalidIp ? 'outlined-error' : 'outlined-basic'}
        helperText={isInvalidIp && 'Please enter valid IP'}
        label="Enter IPv4 Address"
        onChange={allowOnlyIpv4Format}
        onBlur={(evt) => getValidIpv4(evt)}
        value={ipv4Format}
        variant="outlined"
      />
      <Controls
        disabled={isInvalidIp || !ipv4Format}
        getIpv4Data={getIpv4Data}
        setInputValue={setInputValue}
        showIpData={showIpData}
        validIpv4Address={validIpv4Address}
      />
    </div>
  );
}
