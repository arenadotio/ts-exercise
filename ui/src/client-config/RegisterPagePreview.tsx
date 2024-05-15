import { Box, Button, Fab, Grid, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { RawThemeModel, ThemePreviewModel } from "./utils/theme.model";
import { ColorValue } from "mui-color";
import SaveIcon from "@mui/icons-material/Save";

export const RegisterPagePreview = (props: {
  themePreview: RawThemeModel | undefined;
  themePayload: ThemePreviewModel | undefined;
  onClickSubmit: () => void;
}) => {
  const { themePreview, themePayload, onClickSubmit } = props;
  const [primaryColor, setPrimaryColor] = useState<ColorValue | string | null>(
    themePreview?.primaryColor ?? null
  );
  const [backgroundColor, setBackgroundColor] = useState<
    ColorValue | string | null
  >(themePreview?.backgroundColor ?? null);
  const [textColor, setTextColor] = useState<ColorValue | string | null>(
    themePreview?.textColor ?? null
  );
  const [contrastTextColor, setContrastTextColor] = useState<
    ColorValue | string | null
  >(themePreview?.contrastTextColor ?? null);

  useEffect(() => {
    if (themePayload?.primaryColor) {
      setPrimaryColor(themePayload?.primaryColor);
    }
  }, [themePayload?.primaryColor]);

  useEffect(() => {
    if (themePayload?.backgroundColor) {
      setBackgroundColor(themePayload?.backgroundColor);
    }
  }, [themePayload?.backgroundColor]);

  useEffect(() => {
    if (themePayload?.textColor) {
      setTextColor(themePayload?.textColor);
    }
  }, [themePayload?.textColor]);

  useEffect(() => {
    if (themePayload?.contrastTextColor) {
      setContrastTextColor(themePayload?.contrastTextColor);
    }
  }, [themePayload?.contrastTextColor]);

  const primaryColorValue = primaryColor
    ? primaryColor
    : themePreview?.primaryColor;
  const backgroundColorValue = backgroundColor
    ? backgroundColor
    : themePreview?.backgroundColor;
  const textColorValue = textColor ? textColor : themePreview?.textColor;
  const contrastTextColorValue = contrastTextColor
    ? contrastTextColor
    : themePreview?.contrastTextColor;

  return (
    <Paper
      elevation={10}
      sx={{
        width: "100%",
      }}
    >
      <Stack m={5} spacing="1em" sx={{ flexGrow: 1, height: "80%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          <Grid
            xs={12}
            item
            sx={{
              color: contrastTextColorValue?.toString(),
              backgroundColor: backgroundColorValue?.toString(),
              display: "flex",
              justifyContent: "space-between",
              padding: "1em",
              alignItems: "center",
              margin: 0,
            }}
          >
            <Box
              sx={{
                color: contrastTextColorValue?.toString(),
                width: "30%",
              }}
            >
              {themePayload?.customText}
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              color: textColorValue?.toString(),
              height: "150%",
            }}
            xs={12}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {themePayload?.clientDisplayName} has partnered with Arena for
              this Questionnaire.{" "}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Button
                sx={{
                  backgroundColor: primaryColorValue?.toString(),
                  color: contrastTextColorValue?.toString(),
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Fab color="secondary" aria-label="save" sx={{ margin: 2 }}>
          <SaveIcon onClick={onClickSubmit} />
        </Fab>
      </Grid>
    </Paper>
  );
};
