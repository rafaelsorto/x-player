import React from 'react'
import { TopNavbar } from 'src/components'
import { Grid, GridItem } from '@chakra-ui/react'
import { Player } from 'src/containers/Player'

type PlayerLayoutProps = {
  showPlayer: boolean
}

const PlayerSection = (props) => (
  <GridItem
    backgroundColor="white"
    borderRadius="md"
    boxShadow="md"
    maxHeight="100%"
    overflow="auto"
    padding={4}
    position="relative"
    {...props}
  />
)

export const PlayerLayout: React.FC<PlayerLayoutProps> = ({
  children,
  showPlayer,
}) => {
  return (
    <Grid
      h="100vh"
      templateRows={
        showPlayer
          ? {
              sm: '48px calc(50% - 48px - 16px) calc(50% - 16px)',
            }
          : { sm: '48px calc(100% - 48px - 16px)' }
      }
      templateColumns="1fr"
      gap="16px"
    >
      <PlayerSection p={0} px={4} display="flex" alignItems="center">
        <TopNavbar />
      </PlayerSection>
      {showPlayer && (
        <PlayerSection>
          <Player />
        </PlayerSection>
      )}
      <PlayerSection>{children}</PlayerSection>
    </Grid>
  )
}
