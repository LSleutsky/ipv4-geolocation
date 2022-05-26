import Button from '@mui/material/Button';

export default function Controls({
  inputValue,
  disabled,
  getIpv4Data,
  showIpData,
  validIpv4Address
}) {
  const retrievedIpv4Data = (data) => {
    if (!data) {
      return null;
    }

    return {
      ipv4: data.traits.ipAddress,
      city: data?.city?.names?.en,
      state: data?.subdivisions?.[0]?.names?.en,
      country: data.country.names.en,
      latitude: data.location.latitude,
      longitude: data.location.longitude
    };
  };

  const clearIpData = () => {
    inputValue('');
    showIpData(false);
  };

  /**
   * Retrieves and returns entered IPv4 data
   *
   * @returns {Object} GeoLite2 data based on the provided IPv4
   */
  const getIpData = async () => {
    try {
      if (validIpv4Address) {
        const { data, error } = await fetch('api/geolocation', {
          method: 'POST',
          body: JSON.stringify({ validIpv4Address }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => response.json());

        const ipv4Data = data ? retrievedIpv4Data(data) : { error };

        getIpv4Data(ipv4Data);
        showIpData(!!ipv4Data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Retrieves and returns IPv4 data from local machine
   *
   * @returns {Object} Data points based on local IPv4
   */
  const getLocalIpData = async () => {
    try {
      const { data } = await fetch('api/myip').then((response) =>
        response.json()
      );

      const { data: localData } = await fetch('api/geolocation', {
        method: 'POST',
        body: JSON.stringify({ validIpv4Address: data.ipAddress }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json());

      const localIpv4Data = retrievedIpv4Data(localData);

      inputValue('');
      getIpv4Data(localIpv4Data);
      showIpData(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center mt-8">
      <Button
        className="normal-case text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:w-44"
        disabled={disabled}
        onClick={getIpData}
        variant="contained"
      >
        Find IPv4
      </Button>
      <Button
        className="normal-case text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 md:mt-0 md:ml-4 md:w-44"
        onClick={getLocalIpData}
        variant="contained"
      >
        My IPv4
      </Button>
      <Button
        className="normal-case text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 md:mt-0 md:ml-4 md:w-44"
        onClick={clearIpData}
        variant="contained"
      >
        Clear
      </Button>
    </div>
  );
}
