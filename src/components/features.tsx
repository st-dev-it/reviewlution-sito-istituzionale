import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, BarChart3, Target } from "lucide-react";

const featuresData = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "Analisi AI Avanzata",
    description: "I nostri algoritmi di intelligenza artificiale analizzano il testo e il sentiment delle recensioni per darti una comprensione profonda del feedback dei clienti.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Report e Dashboard Intuitive",
    description: "Visualizza i dati in modo chiaro e immediato. Individua trend, punti di forza e aree di miglioramento con le nostre dashboard interattive.",
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: "Insight Strategici Azionabili",
    description: "Non solo dati, ma suggerimenti concreti. ReviewLution trasforma l'analisi in azioni strategiche per ottimizzare prodotti e servizi.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Perché ReviewLution?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Smettila di leggere recensioni una per una. Inizia a prendere decisioni basate sui dati.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {featuresData.map((feature) => (
            <Card key={feature.title} className="text-left">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}