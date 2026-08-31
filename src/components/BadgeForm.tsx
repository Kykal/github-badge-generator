import {
  Autocomplete,
  Box,
  Checkbox,
  Grid,
  Select,
  TextInput,
} from "@mantine/core";

import TECHNOLOGIES from "../constants/technologies";
import { FormProvider, useForm } from "../contexts/badge";
import Badge from "./Badge";

const BadgeForm = () => {
  const form = useForm({
    mode: "controlled",
    initialValues: {
      externalUrl: "",
      showLogo: true,
      showVersion: true,
      style: "for-the-badge",
      technology: "",
      version: "",
    },
  });

  return (
    <FormProvider form={form}>
      <Box
        component="form"
        style={{
          display: "contents",
        }}
        onSubmit={form.onSubmit((values) => {
          console.info(values);
        })}
      >
        <Grid>
          <Grid.Col span={12}>
            <Badge />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              lg: 6,
            }}
          >
            <Autocomplete
              label="Technology"
              placeholder="React"
              data={Object.keys(TECHNOLOGIES)}
              key={form.key("technology")}
              clearable
              {...form.getInputProps("technology")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              lg: 6,
            }}
          >
            <TextInput
              label="Version"
              placeholder="1.0.2"
              key={form.key("version")}
              {...form.getInputProps("version")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput
              label="External URL"
              placeholder="https://github.com/"
              description="The URL that the badge will link to when clicked."
              type="url"
              key={form.key("externalUrl")}
              {...form.getInputProps("externalUrl")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              xs: 12,
              md: 6,
            }}
          >
            <Select
              label="Style"
              data={[
                {
                  value: "for-the-badge",
                  label: "For the badge",
                },
                {
                  value: "flat",
                  label: "Flat",
                },
                {
                  value: "flat-square",
                  label: "Flat square",
                },
                {
                  value: "plastic",
                  label: "Plastic",
                },
              ]}
              allowDeselect={false}
              key={form.key("style")}
              {...form.getInputProps("style")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Checkbox
              label="Show logo"
              key={form.key("showLogo")}
              {...form.getInputProps("showLogo", {
                type: "checkbox",
              })}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Checkbox
              label="Show version"
              key={form.key("showVersion")}
              {...form.getInputProps("showVersion", {
                type: "checkbox",
              })}
            />
          </Grid.Col>
        </Grid>
      </Box>
      <Box
        component="pre"
        style={{
          backgroundColor: "#ffec9e",
          borderColor: "#c99157",
          borderRadius: 8,
          borderStyle: "solid",
          borderWidth: 1,
          left: 0,
          marginLeft: 8,
          marginTop: 8,
          padding: 8,
          position: "absolute",
          top: 0,
        }}
      >
        {JSON.stringify(form.getValues(), null, 2)}
      </Box>
    </FormProvider>
  );
};

export default BadgeForm;
