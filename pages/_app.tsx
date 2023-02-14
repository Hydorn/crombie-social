import ThemeToggle from "@/components/ThemeToggle";
import AuthProvider from "@/context/authContext";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <CssBaseline />
        <Component {...pageProps} />
        <ThemeToggle />
      </AuthProvider>
    </>
  );
}
