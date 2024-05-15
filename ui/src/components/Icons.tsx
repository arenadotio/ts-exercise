import { styled } from "@mui/material";

const StatusIcon = {
  width: "16px",
  height: "16px",
  marginRight: 8,
  background: "url(/status/not_started.svg) no-repeat",
};

export const NotStarted = styled("div")(() => ({
  ...StatusIcon,
  ...{ background: "url(/status/not_started.svg) no-repeat" },
}));

export const Archived = styled("div")(() => ({
  ...StatusIcon,
  ...{ background: "url(/status/archived.svg) no-repeat" },
}));

export const Started = styled("div")(() => ({
  ...StatusIcon,
  ...{ background: "url(/status/in_progress.svg) no-repeat" },
}));

export const Completed = styled("div")(() => ({
  ...StatusIcon,
  ...{ background: "url(/status/success.svg) no-repeat" },
}));

export const Declined = styled("div")(() => ({
  ...StatusIcon,
  ...{ background: "url(/status/error.svg) no-repeat" },
}));
