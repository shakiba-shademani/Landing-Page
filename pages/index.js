import Head from "next/head";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Service Center Scout</title>
      </Head>
      <div className="font-shabnam">
        <Nav />
        <div className="inline-flex max-w-full">
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
    </div>
  );
}
