import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { themeDark, themeLight } from 'lib/theme';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from "../lib/apollo";
import { AuthProvider } from "../lib/useAuth";
import Header from "../components/Header";

export default function MyApp({Component, pageProps})  {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [darkState, setDarkState] = useState(false);
  const handleThemeChange = ()  => setDarkState(!darkState);

  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, [])
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={darkState ? themeDark : themeLight}>
        <CssBaseline />
        <AuthProvider>
          <Header darkState={darkState} handleThemeChange={handleThemeChange}/>
          <Component {...pageProps}/>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
};
