interface StarLogoProps {
  size?: number
  id?: string
}

export function StarLogo({ size = 22, id = "star-grad" }: StarLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="block">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7B5FE8" />
          <stop offset="100%" stopColor="#E040A0" />
        </linearGradient>
      </defs>
      <path d="M50 2 L60 40 L98 50 L60 60 L50 98 L40 60 L2 50 L40 40 Z" fill={`url(#${id})`} />
    </svg>
  )
}
