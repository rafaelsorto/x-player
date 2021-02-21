import React from 'react'
import { selectPlayer } from 'src/store/features/player'
import { useSelector } from 'src/store/hooks'

export const Player: React.FC = () => {
  const { media, status } = useSelector(selectPlayer)

  return status !== 'idle' ? (
    <iframe
      src={`http://x-frame-player.url.sv/${encodeURIComponent(media)}`}
      height="100%"
      width="40%"
    />
  ) : (
    <div>React Player</div>
  )
}
