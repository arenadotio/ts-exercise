/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormGroup } from "@mui/material";
import TextInput from "./form-elements/TextInput";
import useTextInputHook from "./hooks/textInputHook";
import ColorPickerInput from "./form-elements/ColorPickerInput";
import { useEffect } from "react";
import { RawThemeModel, ThemePreviewModel } from "./utils/theme.model";
import useColorInputHook from "./hooks/colorInputHook";
import { ColorObject, ColorValue, createColor } from "mui-color";
const ThemeForm = ({
  onValueChange,
  theme,
}: {
  onValueChange: (changedTheme: ThemePreviewModel) => void;
  theme: RawThemeModel | undefined;
}) => {
  const [clientName, setClientName] = useTextInputHook(
    "Client Display Name",
    theme?.clientDisplayName ?? ""
  );
  const [customTxt, setCustomText] = useTextInputHook(
    "Custom Text",
    theme?.customText || ""
  );
  const [primColor, setPrimaryColor] = useColorInputHook(
    "Primary Color",
    createColor(theme?.primaryColor ?? "")
  );
  const [bgColor, setBackgroundColor] = useColorInputHook(
    "Header Background Color",
    createColor(theme?.backgroundColor ?? "")
  );
  const [textColor, setTxtColor] = useColorInputHook(
    "Text Color",
    createColor(theme?.textColor ?? "")
  );
  const [contrastTxtColor, setContrastTxtCol] = useColorInputHook(
    "Primary Color",
    createColor(theme?.contrastTextColor ?? "")
  );

  const colorValueToString = (value: ColorValue): string => {
    return `#${(value as ColorObject).hex}`;
  };

  useEffect(() => {
    const newTheme = {
      clientDisplayName: clientName,
      customText: customTxt,
      primaryColor: colorValueToString(primColor),
      backgroundColor: colorValueToString(bgColor),
      textColor: colorValueToString(textColor),
      contrastTextColor: colorValueToString(contrastTxtColor),
    } as ThemePreviewModel;
    onValueChange(newTheme);
  }, [clientName, customTxt, primColor, bgColor, textColor, contrastTxtColor]);

  return (
    <form>
      <FormGroup sx={{ ml: -30 }}>
        <TextInput
          label="Client Display Name"
          type="text"
          onChange={setClientName}
          value={clientName}
        />
        <TextInput
          label="Custom Header Text"
          type="text"
          multiline={true}
          onChange={setCustomText}
          value={theme?.customText || ""}
        />
        <ColorPickerInput
          label="Primary Button Color"
          value={primColor}
          onChange={setPrimaryColor}
        />
        <ColorPickerInput
          label="Header Background Color"
          value={bgColor}
          onChange={setBackgroundColor}
        />
        <ColorPickerInput
          label="Text Color"
          value={textColor}
          onChange={setTxtColor}
        />
        <ColorPickerInput
          label="Contrast Text Color"
          value={contrastTxtColor}
          onChange={setContrastTxtCol}
        />
        <br></br>
        <br></br>
      </FormGroup>
    </form>
  );
};

export default ThemeForm;
