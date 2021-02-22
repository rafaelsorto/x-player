import React from 'react'
import { selectPlayer } from 'src/store/features/player'
import { useSelector } from 'src/store/hooks'
import ReactPlayer from 'react-player'

export const Player: React.FC = () => {
  const { media, status } = useSelector(selectPlayer)

  return status !== 'idle' ? (
    <ReactPlayer
      url={media}
      controls={true}
      playing={false}
      height="100%"
      width="100%"
      config={{
        file: {
          hlsOptions: {
            maxBufferLength: 120,
          },
        },
      }}
    />
  ) : (
    <div>React Player</div>
  )
}
