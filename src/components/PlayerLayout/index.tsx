import React from 'react'
import { TopNavbar } from 'src/components'
import { Grid, GridItem } from '@chakra-ui/react'

const Player = () => <div>Player</div>

const PlayerSection = (props) => (
  <GridItem
    backgroundColor="white"
    borderRadius="md"
    boxShadow="md"
    padding={4}
    position="relative"
    {...props}
  />
)

export const PlayerLayout: React.FC = ({ children }) => {
  return (
    <Grid
      h="100%"
      templateRows={{ sm: '48px 1fr 1fr', md: '48px 1fr' }}
      templateColumns={{ sm: '1fr', md: '3fr 1fr' }}
      gap={4}
    >
      <PlayerSection
        colSpan={{ sm: 1, md: 2 }}
        p={0}
        px={4}
        display="flex"
        alignItems="center"
      >
        <TopNavbar />
      </PlayerSection>
      <PlayerSection>
        <Player />
      </PlayerSection>
      <PlayerSection>{children}</PlayerSection>
    </Grid>
  )
}
