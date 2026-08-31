import { Center, Container } from "@mantine/core";

import BadgeForm from "./components/BadgeForm";

const App = () => {
  return (
    <Container size="xs">
      <Center h="100dvh">
        <BadgeForm />
      </Center>
    </Container>
  );
};

export default App;
