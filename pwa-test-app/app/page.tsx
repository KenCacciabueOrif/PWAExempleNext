
import Head from 'next/head';
import SWRegister from "./_components/client-component/SWRegister";

export default function Home() {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>
      <SWRegister/>
    <p>Test</p>
    </div>
  );
}
