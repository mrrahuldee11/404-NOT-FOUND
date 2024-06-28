// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export function Providers({ children }) {
  return (
    <body>
      <MantineProvider>{children}</MantineProvider>
    </body>
  );
}
