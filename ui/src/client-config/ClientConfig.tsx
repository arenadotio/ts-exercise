/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
// import { axios, useAxios } from "../auth";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import ThemeForm from "./ThemeForm";
import { RegisterPagePreview } from "./RegisterPagePreview";
import { RawThemeModel, ThemePreviewModel } from "./utils/theme.model";

interface ConfigProps {
  client?: string;
}

const ClientConfig: React.FC<ConfigProps> = ({ client }) => {
  const baseURL = `${process.env.REACT_APP_API_URL || "http://localhost:3001"}`;

  const [isNewTheme, setIsNewTheme] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(new FormData());
  const [theme, setTheme] = useState<RawThemeModel | null>();
  const [themePayload, setThemePayload] = useState<ThemePreviewModel>();
  const handleFormValueChange = (newValue: ThemePreviewModel) => {
    setThemePayload(newValue);
  };

  useEffect(() => {
    if (client !== undefined) {
      axios
        .get(`${baseURL}/theme/${client}`)
        .then(
          (response: {
            status: number;
            data: React.SetStateAction<RawThemeModel | null | undefined>;
          }) => {
            if (response.status === 200) {
              setTheme(response.data);
            } else {
              setIsNewTheme(true);
            }
          }
        )
        .catch(() => setTheme(null));
    }
  }, [client]);

  const submitNewTheme = () => {
    if (themePayload) {
      const filteredPayload = removeEmptyValues(themePayload);
      Object.keys(filteredPayload).forEach((key) => {
        formData.append(key, filteredPayload[key]);
      });
      throw "not implemented";
    }
  };
  const submitPatchTheme = () => {
    if (themePayload) {
      const filteredPayload = removeEmptyValues(themePayload);
      Object.keys(filteredPayload).forEach((key) => {
        formData.append(key, filteredPayload[key]);
      });
      setFormData(formData);
      throw "not implemented";
    }
  };

  const removeEmptyValues = (themePreview: ThemePreviewModel): any => {
    return Object.keys(themePreview).reduce((next, key) => {
      if (themePreview[key] !== undefined && themePreview[key] !== null) {
        return { ...next, [key]: themePreview[key] };
      }
      return next;
    }, {});
  };

  return (
    <>
      {theme && (
        <>
          <Typography m={2} variant="h5">
            Registration Portal Theme Configuration for {client}
          </Typography>{" "}
          <Container
            maxWidth="lg"
            sx={{
              width: "100%",
              height: "90%",
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <ThemeForm theme={theme} onValueChange={handleFormValueChange} />
            {theme && themePayload && (
              <RegisterPagePreview
                themePreview={theme}
                themePayload={themePayload}
                onClickSubmit={isNewTheme ? submitNewTheme : submitPatchTheme}
              />
            )}
          </Container>{" "}
        </>
      )}
    </>
  );
};
export default ClientConfig;
