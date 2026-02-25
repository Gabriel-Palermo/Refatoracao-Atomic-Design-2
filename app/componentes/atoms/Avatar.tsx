interface AvatarProps {
  gradientFrom: string
  gradientTo: string
}

export function Avatar({ gradientFrom, gradientTo }: AvatarProps) {
  return (
    <div
      className={`w-12 h-12 bg-gradient-to-tr ${gradientFrom} ${gradientTo} rounded-full shadow-[0_0_15px_rgba(0,255,255,0.8)]`}
    />
  )
}