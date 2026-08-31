import { Button, Center, Container } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

import BadgeForm from "./components/BadgeForm";

const App = () => {
  return (
    <Container component="main" size="xs">
      <Center h="100dvh">
        <BadgeForm />
        <Button
          component="a"
          href="https://opencollective.com/shields"
          leftSection={<IconExternalLink />}
          rel="noopener noreferrer"
          target="_blank"
          variant="transparent"
          mb={8}
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          Consider donating to shields.io developers!
        </Button>
      </Center>
    </Container>
  );
};

export default App;
