import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ObfuscatedEmail } from "@/components/obfuscated-email";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Informativa sulla Privacy</h1>
            <p className="text-muted-foreground">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <div className="space-y-4 text-muted-foreground">
              <h2 className="text-2xl font-semibold text-foreground mt-6">1. Introduzione</h2>
              <p>
                Benvenuto in ReviewLution. La tua privacy è di fondamentale importanza per noi. Questa Informativa sulla Privacy descrive come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando utilizzi la nostra piattaforma e i nostri servizi.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">2. Quali informazioni raccogliamo</h2>
              <p>
                Potremmo raccogliere informazioni personali che ci fornisci direttamente, come il tuo nome, indirizzo email, numero di telefono e informazioni di pagamento quando ti registri per un account o richiedi una demo. Raccogliamo anche dati non personali come dati di utilizzo e informazioni sul dispositivo.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">3. Come utilizziamo le tue informazioni</h2>
              <p>
                Utilizziamo le informazioni raccolte per fornire, operare e mantenere i nostri servizi; migliorare, personalizzare ed espandere i nostri servizi; comprendere e analizzare come utilizzi i nostri servizi; sviluppare nuovi prodotti, servizi e funzionalità; e comunicare con te per scopi di servizio e marketing.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">4. Condivisione delle tue informazioni</h2>
              <p>
                Non condividiamo le tue informazioni personali con terze parti, eccetto nei casi descritti in questa Informativa sulla Privacy o quando abbiamo ottenuto il tuo consenso. Potremmo condividere informazioni con fornitori di servizi che svolgono servizi per nostro conto.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">5. Sicurezza dei dati</h2>
              <p>
                Adottiamo misure di sicurezza ragionevoli per proteggere le tue informazioni personali da accessi non autorizzati, uso improprio o divulgazione. Tuttavia, nessun metodo di trasmissione su Internet o metodo di archiviazione elettronica è sicuro al 100%.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">6. Contattaci</h2>
              <p>
                Se hai domande su questa Informativa sulla Privacy, puoi contattarci a:{" "}
                <ObfuscatedEmail emailKey="privacy" />.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}