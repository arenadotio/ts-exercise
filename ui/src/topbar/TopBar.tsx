import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Paper, Stack, SxProps, Theme } from "@mui/material";
import { ClientDropdown } from "../components/ClientDropdown";
import { Logo } from "../components/Logo";

interface TopBarProps {
  currentClient?: string | null;
  setCurrentClient: (client: string | null) => void;
  clients: string[];
}

const buttons: SxProps<Theme> = [
  { borderColor: (theme) => theme.palette.primary["50p"] },
  {
    "&:hover": {
      borderColor: (theme) => theme.palette.primary["4p"],
      backgroundColor: (theme) => theme.palette.primary["4p"],
    },
  },
];

export const TopBar: React.FC<TopBarProps> = ({
  clients,
  currentClient,
  setCurrentClient,
}): JSX.Element => {
  return (
    <Paper
      sx={{
        height: "6em",
        width: "100%",
        padding: "1em 2em",
        minWidth: "1200px",
      }}
    >
      <Grid container alignItems="center" justifyContent="center" height="4em">
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing="1em"
          >
            <Box>
              <ClientDropdown
                currentClient={currentClient}
                setCurrentClient={setCurrentClient}
                buttonSx={buttons}
                clients={clients}
              />
            </Box>

            <Box>
              <Button
                variant="outlined"
                component={Link}
                to="/client-config"
                sx={buttons}
              >
                Configuration
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
