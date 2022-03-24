import {
  AppShell,
  Burger,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Text,
  UnstyledButton,
} from '@mantine/core'
import Link from 'next/link'
import { FC, useState } from 'react'
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle'

const NavbarApp: FC = ({ children }) => {
  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 200 }}
        >
          <Navbar.Section grow mt="xs">
            <div>
              <Link href="/" passHref>
                <UnstyledButton
                  sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[0]
                        : theme.black,

                    '&:hover': {
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[6]
                          : theme.colors.gray[0],
                    },
                  })}
                >
                  <Text size="sm">Blog</Text>
                </UnstyledButton>
              </Link>
            </div>
            <div>
              <Link href="/training-log" passHref>
                <UnstyledButton
                  sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[0]
                        : theme.black,

                    '&:hover': {
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[6]
                          : theme.colors.gray[0],
                    },
                  })}
                >
                  <Text size="sm">Training Log</Text>
                </UnstyledButton>
              </Link>
            </div>
          </Navbar.Section>

          <Navbar.Section>
            <Text size="sm">Created by Mattias Mucherie</Text>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>

            <Group position="apart" sx={{ height: '100%', width: '100%' }}>
              <Text
                size="lg"
                variant="gradient"
                gradient={{ from: 'teal', to: 'blue', deg: 0 }}
                weight="bolder"
              >
                mattias mucherie
              </Text>
              <ColorSchemeToggle />
            </Group>
          </div>
        </Header>
      }
    >
      <Text>{children}</Text>
    </AppShell>
  )
}

export default NavbarApp
