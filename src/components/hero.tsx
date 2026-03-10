import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Trasforma le Recensioni in Crescita
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                ReviewLution analizza migliaia di recensioni con l'IA per darti
                insight strategici e aiutarti a migliorare il tuo business come
                mai prima d'ora.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Richiedi una Demo</Button>
              <Button size="lg" variant="outline">
                Scopri di più
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-3xl opacity-20"></div>
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-72 h-72 bg-primary/10 rounded-full flex items-center justify-center p-4">
                    <div className="w-60 h-60 bg-primary/20 rounded-full flex items-center justify-center p-4">
                        <div className="w-48 h-48 bg-primary/30 rounded-full flex items-center justify-center p-4">
                             <div className="w-36 h-36 bg-primary/40 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}