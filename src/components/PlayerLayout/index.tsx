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
    padding={2}
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
              sm: '48px calc(40% - 48px - 8px) calc(60% - 8px)',
            }
          : { sm: '48px calc(100% - 48px - 8px)' }
      }
      templateColumns="1fr"
      gap="8px"
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
