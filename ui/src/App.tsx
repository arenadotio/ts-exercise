import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import theme from "./styles";
import { TopBar } from "./topbar/TopBar";
import ClientConfigContainer from "./client-config/ClientConfigContainer";

export const App: React.FC = (): JSX.Element => {
  const [clients, setClients] = React.useState<string[]>([]);
  const [clientLookupName, setClientLookupName] = React.useState<
    string | undefined
  >(undefined);
  const [currentClient, setCurrentClient] = React.useState<string>("");

  const _setCurrentClient = (client: string | null) => {
    if (client !== currentClient) {
      setCurrentClient(client || "");
    }
  };

  React.useEffect(() => {
    setClientLookupName(currentClient);
  }, [currentClient]);

  React.useEffect(() => {
    setClients(["t1", "t2", "t3"]);
  }, []);

  const clientConfigElement = (
    <ClientConfigContainer client={clientLookupName} />
  );

  const renderRoutes = () => {
    return (
      <Routes>
        {<Route path="/" element={clientConfigElement} />}
        {clientConfigElement && (
          <Route path="/client-config" element={clientConfigElement} />
        )}
      </Routes>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <TopBar
          {...{
            currentClient,
            setCurrentClient: _setCurrentClient,
            clients,
          }}
        />
        <Container
          maxWidth={false}
          disableGutters={true}
          sx={{ marginTop: "2em" }}
        >
          {renderRoutes()}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};
