import { Avatar } from "../atoms/Avatar"
import { Button } from "../atoms/Button"

export interface MemberCardProps {
  name: string
  role: string
  description: string
  gradientFrom: string
  gradientTo: string
}

export function MemberCard({
  name,
  role,
  description,
  gradientFrom,
  gradientTo
}: MemberCardProps) {
  return (
    <div className="relative bg-black/60 backdrop-blur-md p-6 rounded-xl border border-cyan-500/40 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.7)] transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <Avatar gradientFrom={gradientFrom} gradientTo={gradientTo} />
        <div>
          <h2 className="text-xl font-semibold text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]">{name}</h2>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4">{description}</p>

      <Button className="w-full bg-gray-700 hover:bg-gray-600">
        Ver Perfil
      </Button>
    </div>
  )
}