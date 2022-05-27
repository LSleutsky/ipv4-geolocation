import Button from 'components/Button';

export default function Controls({
  disabled,
  getIpv4Data,
  setInputValue,
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
    setInputValue('');
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

        const ipv4Data = retrievedIpv4Data(data) ?? { error };

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

      setInputValue('');
      getIpv4Data(localIpv4Data);
      showIpData(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center mt-8">
      <Button
        className="bg-blue-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-medium rounded-lg text-sm px-5 py-4 text-center md:w-44 normal-case"
        disabled={disabled}
        label="Find IPv4"
        onClick={getIpData}
      />
      <Button
        className="bg-green-200 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded font-medium rounded-lg text-sm px-5 py-4 text-center mt-4 md:mt-0 md:ml-4 md:w-44 normal-case"
        label="My IPv4"
        onClick={getLocalIpData}
      />
      <Button
        className="bg-red-300 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded font-medium rounded-lg text-sm px-5 py-4 text-center mt-4 md:mt-0 md:ml-4 md:w-44 normal-case"
        label="Clear"
        onClick={clearIpData}
      />
    </div>
  );
}
