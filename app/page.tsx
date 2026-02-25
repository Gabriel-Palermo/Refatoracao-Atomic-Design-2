import { SearchBar } from "@/app/componentes/molecules/SearchBar"
import { MemberCard } from "@/app/componentes/molecules/MemberCard"

export default function ComunidadePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 bg-[radial-gradient(circle_at_top,_#111_0%,_#000_60%)]">

      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Membros do Grupo</h1>
        <SearchBar />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MemberCard
          name="Ana Silva"
          role="Full-stack Developer"
          description="Especialista em React e Node.js. Adora café e Docker."
          gradientFrom="from-blue-500"
          gradientTo="to-purple-500"
        />

        <MemberCard
          name="Bruno Costa"
          role="UI/UX Designer"
          description="Focado em acessibilidade e design systems escaláveis."
          gradientFrom="from-green-500"
          gradientTo="to-teal-500"
        />

        <MemberCard
          name="Carla Dias"
          role="DevOps Engineer"
          description="Mestre em Kubernetes e automação de pipelines CI/CD."
          gradientFrom="from-orange-500"
          gradientTo="to-red-500"
        />
      </main>

    </div>
  )
}