import Routes from "./routes/Routes";

import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "sonner";

function App() {
  return (
    <Layout>
      <Toaster richColors />
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
