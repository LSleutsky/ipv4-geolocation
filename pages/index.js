import Head from 'next/head';
import { useState } from 'react';

import IPv4Data from 'components/IPv4Data';
import IPv4Input from 'components/IPv4Input';

export default function Home() {
  const [validIpv4Address, setValidIpv4Address] = useState('');
  const [localIpv4Data, setIpv4Data] = useState('');
  const [showIpv4Data, setShowIpv4Data] = useState(false);

  const getIpv4Data = (localIpv4) => {
    setIpv4Data(localIpv4);
  };

  const getValidIpv4Address = (ipv4) => {
    setValidIpv4Address(ipv4);
  };

  const showIpData = (show) => {
    setShowIpv4Data(show);
  };

  return (
    <>
      <Head>
        <title>IPv4 Geolocation</title>
        <meta
          name="description"
          content="Retrieve geolocation information for an IPv4 address"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center pt-16 pb-8 w-800 m-auto">
        <fieldset className="border-4 border-solid border-sky-500 w-11/12">
          <legend className="text-xl md:text-2xl text-slate-500 font-bold ml-3 md:ml-10 px-2">
            IPv4 Geolocation
          </legend>
          <section className="my-10 m-auto w-4/5">
            <IPv4Input
              getIpv4Data={getIpv4Data}
              getValidIpv4Address={getValidIpv4Address}
              showIpData={showIpData}
              validIpv4Address={validIpv4Address}
            />
          </section>
        </fieldset>
      </main>

      {showIpv4Data && <IPv4Data {...localIpv4Data} />}
    </>
  );
}
