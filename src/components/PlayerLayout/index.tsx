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
              sm: '48px calc(60% - 48px - 8px) calc(40% - 8px)',
            }
          : { sm: '48px calc(100% - 48px - 8px)' }
      }
      templateColumns={{ sm: '1fr', md: '3fr 2fr' }}
      gap="8px"
    >
      <PlayerSection
        p={0}
        px={4}
        display="flex"
        alignItems="center"
        colSpan={{ md: '2' }}
      >
        <TopNavbar />
      </PlayerSection>
      {showPlayer && (
        <PlayerSection rowSpan={{ md: '2' }}>
          <Player />
        </PlayerSection>
      )}
      <PlayerSection
        colSpan={{ md: showPlayer ? '1' : '2' }}
        rowSpan={{ md: showPlayer ? '2' : '1' }}
      >
        {children}
      </PlayerSection>
    </Grid>
  )
}
