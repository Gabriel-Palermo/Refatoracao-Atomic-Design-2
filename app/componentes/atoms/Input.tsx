interface InputProps {
  type?: string
  placeholder?: string
}

export function Input({ type = "text", placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}