import { createFormContext } from "@mantine/form";

export type FormValues = {
  externalUrl: string;
  showLogo: boolean;
  showVersion: boolean;
  style: string;
  technology: string;
  version: string;
};

export const [FormProvider, useFormContext, useForm] =
  createFormContext<FormValues>();
