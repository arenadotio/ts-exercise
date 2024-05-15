import React from "react";
import { Button, Menu, MenuItem, Box, SxProps, Theme } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

interface Props {
  buttonSx?: SxProps<Theme>;
  currentClient?: string | null;
  setCurrentClient?: (client: string | null) => void;
  clients: string[];
}

export const ClientDropdown: React.FC<Props> = ({
  clients,
  currentClient,
  setCurrentClient,
  buttonSx,
}): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [clientsDisabled, setClientsDisabled] = React.useState<boolean>(
    clients.length <= 1
  );

  const _setCurrentClient = (client: string | null) => {
    if (setCurrentClient) {
      setCurrentClient(client);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  React.useEffect(() => {
    setClientsDisabled(clients.length <= 1);
  }, [clients]);

  return (
    <Box justifyContent="center">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        disabled={clientsDisabled}
        sx={buttonSx}
      >
        <span>{currentClient ? currentClient : "Select string"}</span>
        <ArrowDropDown />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {clients.map((c, idx) => {
          return (
            <MenuItem
              key={c || idx}
              onClick={() => {
                if (c === "no_client") {
                  _setCurrentClient(null);
                } else {
                  _setCurrentClient(c);
                }
                handleClose();
              }}
            >
              {c}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
