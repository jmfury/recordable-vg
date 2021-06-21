import "../styles/globals.css";
import { AppStateProvider } from "../state";

export default function App({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
