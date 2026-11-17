import { useState } from 'react'
import Logo from './Logo'

/**
 * Photo frame. Loads `src` (a URL); if it is missing or fails to load,
 * falls back to a branded gingham placeholder with the logo.
 */
export default function ItemImage({ src, alt, emoji = '🌾', tone = 'sand', className = '', ratio = 'aspect-[4/3]', bar = true }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = src && !failed

  return (
    <div className={`relative overflow-hidden bg-sand-deep ${ratio} ${className}`}>
      {showPhoto ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      ) : (
        <div className={`gingham relative flex h-full w-full items-center justify-center tone-${tone}`} role="img" aria-label={alt}>
          <span className="relative text-6xl md:text-7xl">{emoji}</span>
          <Logo className="absolute bottom-3 right-3 h-7 opacity-90" />
        </div>
      )}
      {bar && <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-forest-800 via-forest-700 to-gold" />}
    </div>
  )
}
