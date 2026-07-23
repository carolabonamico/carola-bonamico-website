import { useState } from 'react'
import { FiPlay } from 'react-icons/fi'

/* ============================================================================
   Lite YouTube embed (facade pattern). Shows the poster thumbnail and loads the
   heavy iframe only on click — keeps the page fast and avoids third-party
   scripts running before the visitor opts in.
   ========================================================================== */

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [active, setActive] = useState(false)

  const poster = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  const posterFallback = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  if (active) {
    return (
      <div className="yt">
        <iframe
          className="yt__frame"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button className="yt yt--facade" onClick={() => setActive(true)} aria-label={title}>
      <img
        className="yt__poster"
        src={poster}
        alt=""
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget
          if (img.src !== posterFallback) img.src = posterFallback
        }}
      />
      <span className="yt__scrim" />
      <span className="yt__play">
        <FiPlay />
      </span>
      <span className="yt__title">{title}</span>
    </button>
  )
}
