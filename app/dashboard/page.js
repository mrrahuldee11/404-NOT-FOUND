"use client";
import MapComponent from "@/components/MapComponent";
import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
  px,
} from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";

const getChild = (height) => (
  <Skeleton height={height} radius="md" animate={false} />
);
const BASE_HEIGHT = 700;
const getSubHeight = (children, spacing) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export default function page() {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, xs: 4 }}>
        {getChild(BASE_HEIGHT)}
        <Stack>
          <MapComponent/>
          {getChild(getSubHeight(2, px(theme.spacing.md)))}
        </Stack>
        <Stack>
          {getChild(getSubHeight(3, px(theme.spacing.md)))}
          {getChild(getSubHeight(3, px(theme.spacing.md)))}
          {getChild(getSubHeight(3, px(theme.spacing.md)))}
        </Stack>
        {getChild(BASE_HEIGHT)}
      </SimpleGrid>
    </Container>
  );
}
