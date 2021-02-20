import React from 'react'
import { TopNavbar } from 'src/components'
import { Grid, GridItem } from '@chakra-ui/react'
import { useSelector } from 'src/store/hooks'
import { selectPlayer } from 'src/store/features/player'

const Player = () => <div>Player</div>

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

export const PlayerLayout: React.FC = ({ children }) => {
  const { status } = useSelector(selectPlayer)
  const playerIsIdle = status === 'idle'

  return (
    <Grid
      h="100vh"
      templateRows={
        playerIsIdle
          ? { sm: '48px minmax(auto, calc(100% - 48px - 16px))' }
          : { sm: '48px 1fr 1fr', md: '48px 1fr' }
      }
      templateColumns={
        playerIsIdle ? { sm: '1fr' } : { sm: '1fr', md: '3fr 1fr' }
      }
      gap="16px"
    >
      <PlayerSection
        colSpan={playerIsIdle ? { sm: 1 } : { sm: 1, md: 2 }}
        p={0}
        px={4}
        display="flex"
        alignItems="center"
      >
        <TopNavbar />
      </PlayerSection>
      {!playerIsIdle && (
        <PlayerSection>
          <Player />
        </PlayerSection>
      )}
      <PlayerSection>{children}</PlayerSection>
    </Grid>
  )
}
