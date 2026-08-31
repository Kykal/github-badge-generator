import { useMemo } from "react";
import { useFormContext } from "../contexts/badge";

import { Image } from "@mantine/core";

const TECHNOLOGY_FALLBACK = "Technology";
const VERSION_FALLBACK = "Version";
const BADGE_BASE_URL = "https://img.shields.io/badge";

const emptyStringFallback = (value: string, fallback: string) =>
  value === "" ? fallback : value;

const Badge = () => {
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

  const { href } = useMemo(() => {
    const url = new URL(BADGE_BASE_URL);

    if (showLogo && showVersion) {
      url.pathname = "omg";
    }

    return url;
  }, [externalUrl, showLogo, showVersion, style, technology, version]);

  console.info(href);

  return (
    <>
      <span>{JSON.stringify(href)}</span>
      <Image alt="badge" fit="none" src={href} w="fit-content" />
    </>
  );
};

export default Badge;

/**
 * # BADGE WITH LOGO, TECH. AND VERSION
 * https://img.shields.io/badge/1.0.25-61DAFB?style=for-the-badge&logo=react&label=reactjs&labelColor=20232A
 * https://img.shields.io/badge/Version-999999?style=for-the-badge&logo=Technology&label=Technology&labelColor=333333
 *
 * # BADGE WITH TECH. AND VERSION
 * https://img.shields.io/badge/19.2.8-61DAFB?style=for-the-badge&label=reactjs&labelColor=20232A
 *
 * # BADGE WITH LOGO TECH.
 * https://img.shields.io/badge/reactjs-20232A?style=for-the-badge&logo=react
 *
 * # BADGE WITH TECH.
 * https://img.shields.io/badge/reactjs-20232A?style=for-the-badge
 */
