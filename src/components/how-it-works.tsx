import { DatabaseZap, Search, TrendingUp } from "lucide-react";

const steps = [
    {
        icon: <DatabaseZap className="w-8 h-8 text-primary" />,
        title: "1. Raccogli",
        description: "Colleghiamo le tue fonti (Google, TripAdvisor, etc.) e raccogliamo automaticamente tutte le recensioni in un unico posto."
    },
    {
        icon: <Search className="w-8 h-8 text-primary" />,
        title: "2. Analizza",
        description: "La nostra IA analizza ogni recensione per estrarre temi chiave, sentiment e suggerimenti nascosti nel testo."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        title: "3. Agisci",
        description: "Usa i nostri report per prendere decisioni informate, migliorare l'esperienza del cliente e far crescere il tuo business."
    }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Semplice, Veloce, Potente
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Inizia a trasformare il feedback in risultati in soli tre passaggi.
            </p>
          </div>
        </div>
        <div className="relative">
            <div className="absolute left-1/2 top-12 bottom-12 w-px bg-border -translate-x-1/2 hidden md:block"></div>
            <div className="grid gap-12 md:grid-cols-3">
                {steps.map((step, index) => (
                    <div key={step.title} className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground max-w-xs">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}