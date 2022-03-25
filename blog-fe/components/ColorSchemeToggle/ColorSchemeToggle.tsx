import { Button, Group, useMantineColorScheme } from '@mantine/core'

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Group position="center">
      <Button
        variant="outline"
        color="gray"
        onClick={() => toggleColorScheme()}
        size="xs"
        aria-label={`color-scheme-toggle`}
      >
        {colorScheme === 'dark' ? '☀️' : '🌙'}
      </Button>
    </Group>
  )
}
