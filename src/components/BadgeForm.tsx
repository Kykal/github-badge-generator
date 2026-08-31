import TECHNOLOGIES from "../constants/technologies";

import { useForm } from "../contexts/badge";

import {
  Autocomplete,
  Box,
  Center,
  Checkbox,
  Grid,
  Select,
  TextInput,
} from "@mantine/core";

import { FormProvider } from "../contexts/badge";
import BadgeGrid from "./BadgeGrid";

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
          <BadgeGrid />
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
              placeholder="https://github.com"
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
              xs: 6,
              md: 3,
            }}
          >
            <Center h="100%">
              <Checkbox
                label="Show logo"
                key={form.key("showLogo")}
                {...form.getInputProps("showLogo", {
                  type: "checkbox",
                })}
              />
            </Center>
          </Grid.Col>
          <Grid.Col
            span={{
              xs: 6,
              md: 3,
            }}
          >
            <Center h="100%">
              <Checkbox
                label="Show version"
                key={form.key("showVersion")}
                {...form.getInputProps("showVersion", {
                  type: "checkbox",
                })}
              />
            </Center>
          </Grid.Col>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default BadgeForm;
