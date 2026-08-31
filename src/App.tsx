import { Button, Center, Container, Group } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

import BadgeForm from "./components/BadgeForm";

const App = () => {
  return (
    <Container component="main" size="xs">
      <Center h="100dvh">
        <BadgeForm />
        <Group
          gap={4}
          py={8}
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <Button variant="transparent" leftSection={<IconExternalLink />}>
            Consider donating to shields.io developers!
          </Button>
        </Group>
      </Center>
    </Container>
  );
};

export default App;
