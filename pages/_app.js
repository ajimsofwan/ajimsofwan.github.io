import Layout from "../components/Layout";
import "../styles/globals.css";
import { Raleway } from "@next/font/google";

const poppins = Raleway({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
