import { Alert, Container } from "@mui/material";
import ClientConfig from "./ClientConfig";

type ClientContainerProps = {
  client: string | undefined;
};

const ClientConfigContainer = ({ client }: ClientContainerProps) => {
  return (
    <>
      {client && <ClientConfig client={client} />}
      {!client && (
        <>
          <Container maxWidth="sm">
            <Alert severity="error">Please select a client</Alert>
          </Container>
        </>
      )}
    </>
  );
};

export default ClientConfigContainer;
