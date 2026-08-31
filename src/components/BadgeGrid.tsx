import TECHNOLOGIES from "../constants/technologies";
const TECHNOLOGY_FALLBACK = "Technology";
const VERSION_FALLBACK = "Version";
const BADGE_BASE_URL = "https://img.shields.io";

import { Button, Center, CopyButton, Grid, Image } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useMemo } from "react";
import { useFormContext } from "../contexts/badge";

const emptyStringFallback = (value: string, fallback: string) =>
  value === "" ? fallback : value;

const parseUrl = (
  showLogo: boolean,
  showVersion: boolean,
  style: string,
  technology: string,
  version: string,
) => {
  const url = new URL(BADGE_BASE_URL);

  url.searchParams.append("style", style);

  const tech: TechnologyType | undefined =
    TECHNOLOGIES[technology as keyof typeof TECHNOLOGIES];

  if (showLogo && showVersion) {
    url.pathname = `/badge/${version}-${
      technology === TECHNOLOGY_FALLBACK
        ? "999999"
        : (tech?.primaryColor ?? "999999")
    }`;
    url.searchParams.append("logo", tech?.logo ?? "");
    url.searchParams.append("label", technology);
    url.searchParams.append(
      "labelColor",
      technology === TECHNOLOGY_FALLBACK
        ? "333333"
        : (tech?.secondaryColor ?? "333333"),
    );

    return url;
  }

  if (!showLogo && showVersion) {
    url.pathname = `/badge/${version}-${
      technology === TECHNOLOGY_FALLBACK
        ? "999999"
        : (tech?.primaryColor ?? "999999")
    }`;
    url.searchParams.append("label", technology);
    url.searchParams.append(
      "labelColor",
      technology === TECHNOLOGY_FALLBACK
        ? "333333"
        : (tech?.secondaryColor ?? "333333"),
    );

    return url;
  }

  if (showLogo && !showVersion) {
    url.pathname = `/badge/${technology}-${
      technology === TECHNOLOGY_FALLBACK
        ? "999999"
        : (tech?.secondaryColor ?? "999999")
    }`;
    url.searchParams.append("logo", technology);

    return url;
  }

  url.pathname = `/badge/${technology}-${
    technology === TECHNOLOGY_FALLBACK
      ? "999999"
      : (tech?.secondaryColor ?? "999999")
  }`;

  return url;
};

import type { TechnologyType } from "../constants/technologies";

const BadgeGrid = () => {
  const form = useFormContext();

  const externalUrl = form.useWatchValue("externalUrl");
  const showLogo = form.useWatchValue("showLogo");
  const showVersion = form.useWatchValue("showVersion");
  const style = form.useWatchValue("style");
  const technology = emptyStringFallback(
    form.useWatchValue("technology"),
    TECHNOLOGY_FALLBACK,
  );
  const version = emptyStringFallback(
    form.useWatchValue("version"),
    VERSION_FALLBACK,
  );

  const { href } = useMemo(
    () => parseUrl(showLogo, showVersion, style, technology, version),
    [showLogo, showVersion, style, technology, version, parseUrl],
  );

  return (
    <>
      <Grid.Col span={12}>
        <Center>
          <Image alt="badge" fit="none" src={href} w="fit-content" />
        </Center>
      </Grid.Col>
      <Grid.Col span={6}>
        <Center>
          <CopyButton value={href}>
            {({ copied, copy }) => (
              <Button
                variant="outline"
                onClick={() => {
                  copy();

                  notifications.show({
                    message: "Badge URL copied!",
                    color: "green",
                    icon: <IconCheck />,
                  });
                }}
                leftSection={copied ? <IconCheck /> : <IconCopy />}
              >
                Copy badge URL
              </Button>
            )}
          </CopyButton>
        </Center>
      </Grid.Col>
      <Grid.Col span={6}>
        <Center>
          <CopyButton
            value={`[![${technology}](https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react)](${externalUrl})`}
          >
            {({ copied, copy }) => (
              <Button
                variant="outline"
                onClick={() => {
                  copy();

                  notifications.show({
                    message: "Markdown URL copied!",
                    color: "green",
                    icon: <IconCheck />,
                  });
                }}
                leftSection={copied ? <IconCheck /> : <IconCopy />}
              >
                Copy markdown URL
              </Button>
            )}
          </CopyButton>
        </Center>
      </Grid.Col>
    </>
  );
};

export default BadgeGrid;
