import { batch, createEffect } from 'solid-js'
import { createSignal } from 'solid-js'
import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
} from 'lucide-solid'
import { Flex, Container, HStack } from '../styled-system/jsx'
import { Button } from './components/button'
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from './components/menu'
import { Text } from './components/text'

export function Root() {
  let ref: HTMLButtonElement | undefined

  const [className, setClassName] = createSignal('')
  const [classNum, setClassNum] = createSignal(0)
  createEffect(() => {
    batch(() => {
      setClassName(ref!.className)
      setClassNum(ref!.classList.length)
    })
  })

  return (
    <Container height="100vh">
      <Flex
        direction="column"
        height="full"
        width="full"
        align="center"
        justify="center">
        <Menu>
          <MenuTrigger asChild>
            <Button
              ref={ref}
              variant="outline"
              onClick={(event) =>
                batch(() => {
                  setClassName(event.target.className)
                  setClassNum(event.target.classList.length)
                })
              }>
              Open Menu
            </Button>
          </MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItemGroup id="group-1">
                <MenuItemGroupLabel for="group-1">
                  My Account
                </MenuItemGroupLabel>
                <MenuSeparator />
                <MenuItem id="profile">
                  <HStack gap="6" justify="space-between" flex="1">
                    <HStack gap="2">
                      <UserIcon />
                      Profile
                    </HStack>
                    <Text as="span" color="fg.subtle" textStyle="xs">
                      ⇧⌘P
                    </Text>
                  </HStack>
                </MenuItem>
                <MenuItem id="billing">
                  <HStack gap="2">
                    <CreditCardIcon /> Billing
                  </HStack>
                </MenuItem>
                <MenuItem id="settings">
                  <HStack gap="6" justify="space-between" flex="1">
                    <HStack gap="2">
                      <SettingsIcon /> Settings
                    </HStack>
                    <Text as="span" color="fg.subtle" textStyle="xs">
                      ⌘,
                    </Text>
                  </HStack>
                </MenuItem>
                <Menu positioning={{ placement: 'right-start', gutter: -2 }}>
                  <MenuTriggerItem justifyContent="space-between">
                    <HStack gap="2">
                      <UserPlusIcon />
                      Invite member
                    </HStack>
                    <ChevronRightIcon />
                  </MenuTriggerItem>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem id="email">
                        <HStack gap="2">
                          <MailIcon /> Email
                        </HStack>
                      </MenuItem>
                      <MenuItem id="message">
                        <HStack gap="2">
                          <MessageSquareIcon /> Message
                        </HStack>
                      </MenuItem>
                      <MenuSeparator />
                      <MenuItem id="other">
                        <HStack gap="2">
                          <PlusCircleIcon />
                          More Options...
                        </HStack>
                      </MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </Menu>
                <MenuSeparator />
                <MenuItem id="logout">
                  <HStack gap="2">
                    <LogOutIcon />
                    Logout
                  </HStack>
                </MenuItem>
              </MenuItemGroup>
            </MenuContent>
          </MenuPositioner>
        </Menu>
        <Text>Number of button classes: {classNum()}</Text>
        <Text>{className()}</Text>
      </Flex>
    </Container>
  )
}
