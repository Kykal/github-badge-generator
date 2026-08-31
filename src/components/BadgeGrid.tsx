import TECHNOLOGIES from "../constants/technologies";
const TECHNOLOGY_FALLBACK = "Technology";
const VERSION_FALLBACK = "Version";
const BADGE_BASE_URL = "https://img.shields.io";

import { useMemo } from "react";
import { useFormContext } from "../contexts/badge";

import { Button, Center, CopyButton, Grid, Image } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

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

  if (showLogo && showVersion) {
    url.pathname = `/badge/${version}-${
      technology === TECHNOLOGY_FALLBACK
        ? "999999"
        : TECHNOLOGIES[technology as keyof typeof TECHNOLOGIES].primaryColor
    }`;
    url.searchParams.append("style", style);
    url.searchParams.append("logo", technology);
    url.searchParams.append("label", technology);
    url.searchParams.append(
      "labelColor",
      technology === TECHNOLOGY_FALLBACK
        ? "333333"
        : TECHNOLOGIES[technology as keyof typeof TECHNOLOGIES].secondaryColor,
    );

    return url;
  }

  if (!showLogo && showVersion) {
    url.pathname = `/badge/${version}-${
      technology === TECHNOLOGY_FALLBACK
        ? "999999"
        : TECHNOLOGIES[technology as keyof typeof TECHNOLOGIES].primaryColor
    }`;
    url.searchParams.append("style", style);
    url.searchParams.append("label", technology);
    url.searchParams.append(
      "labelColor",
      technology === TECHNOLOGY_FALLBACK
        ? "333333"
        : TECHNOLOGIES[technology as keyof typeof TECHNOLOGIES].secondaryColor,
    );

    return url;
  }

  if (showLogo && !showVersion) {
    url.pathname = `/badge/${technology}-${
      technology === TECHNOLOGY_FALLBACK
        ? "999999"
        : TECHNOLOGIES[technology as keyof typeof TECHNOLOGIES].secondaryColor
    }`;
    url.searchParams.append("style", style);
    url.searchParams.append("logo", technology);

    return url;
  }

  url.pathname = `/badge/${technology}-${
    technology === TECHNOLOGY_FALLBACK
      ? "999999"
      : TECHNOLOGIES[technology as keyof typeof TECHNOLOGIES].secondaryColor
  }`;
  url.searchParams.append("style", style);

  return url;
};

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
                onClick={copy}
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
                onClick={copy}
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
