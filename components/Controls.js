import Button from 'components/Button';

export default function Controls({
  disabled,
  getIpv4Data,
  getIsLocalIpv4,
  getTimeData,
  setInputValue,
  showIpData,
  validIpv4Address
}) {
  const clearIpData = () => {
    setInputValue('');
    showIpData(false);
  };

  /**
   * Fetches data in parallel from the GeoLite2 API and the World Time API
   *
   * @param {string} validIpv4Address The IPv4 address in the allowable format
   *
   * @returns {array} Resolved promise array for GeoLite2 and World Time API responses
   */
  const geolocationDatetimeApi = (validIpv4Address) => {
    const geolocationApi = fetch('api/geolocation', {
      method: 'POST',
      body: JSON.stringify({ validIpv4Address }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const worldTimeApi = fetch(
      `http://worldtimeapi.org/api/ip/${validIpv4Address}`
    );

    return Promise.all([
      geolocationApi.then((response) => response.json()),
      worldTimeApi.then((response) => response.json())
    ]);
  };

  /**
   * Retrieves and returns user-entered IPv4 data
   */
  const getIpData = async () => {
    try {
      if (validIpv4Address) {
        const [{ data, error }, timeData] = await geolocationDatetimeApi(
          validIpv4Address
        );

        const ipv4Data = setRetrievedIpv4Data(data) ?? { error };

        getIpv4Data(ipv4Data);
        getIsLocalIpv4(false);
        getTimeData(timeData);
        showIpData(!!ipv4Data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Retrieves and returns IPv4 data from the local machine
   */
  const getLocalIpData = async () => {
    try {
      const {
        data: { ipAddress }
      } = await fetch('api/myip').then((response) => response.json());

      const [{ data }, timeData] = await geolocationDatetimeApi(ipAddress);
      const localIpv4Data = setRetrievedIpv4Data(data);

      getIpv4Data(localIpv4Data);
      getIsLocalIpv4(true);
      getTimeData(timeData);
      setInputValue('');
      showIpData(true);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Returns an object with the desired key-value pairs plucked from the API response
   *
   * @param {object} data The data object being returned
   *
   * @returns {object} GeoLite2 data based on an IPv4 address
   */
  const setRetrievedIpv4Data = (data) => {
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

  return (
    <div className="flex flex-col md:flex-row justify-center mt-8">
      <Button
        className="bg-blue-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-medium rounded-lg text-sm px-5 py-3 md:py-5 text-center md:w-2/6 normal-case"
        disabled={disabled}
        label="Find IPv4"
        onClick={getIpData}
      />
      <Button
        className="bg-green-200 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded font-medium rounded-lg text-sm px-5 py-3 md:py-5 text-center mt-4 md:mt-0 md:ml-4 md:w-2/6 normal-case"
        label="My IPv4"
        onClick={getLocalIpData}
      />
      <Button
        className="bg-red-300 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded font-medium rounded-lg text-sm px-5 py-3 md:py-5 text-center mt-4 md:mt-0 md:ml-4 md:w-2/6 normal-case"
        label="Clear"
        onClick={clearIpData}
      />
    </div>
  );
}
