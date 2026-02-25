interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border border-cyan-400 text-cyan-400 font-bold py-2 px-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_10px_rgba(0,255,255,0.6)] ${className}`}
    >
      {children}
    </button>
  )
}