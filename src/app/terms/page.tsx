import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Termini e Condizioni</h1>
            <p className="text-muted-foreground">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <div className="space-y-4 text-muted-foreground">
              <h2 className="text-2xl font-semibold text-foreground mt-6">1. Accettazione dei Termini</h2>
              <p>
                Accedendo e utilizzando ReviewLution, accetti di essere vincolato da questi Termini e Condizioni. Se non sei d'accordo con una qualsiasi parte dei termini, non puoi utilizzare il nostro servizio.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">2. Utilizzo del Servizio</h2>
              <p>
                Ti viene concessa una licenza non esclusiva, non trasferibile e revocabile per accedere e utilizzare ReviewLution rigorosamente in conformità con questi termini. Come condizione per l'utilizzo del sito, garantisci che non utilizzerai il sito per scopi illegali o proibiti da questi Termini.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">3. Account Utente</h2>
              <p>
                Se crei un account sul sito, sei responsabile del mantenimento della sicurezza del tuo account e sei pienamente responsabile di tutte le attività che si verificano sotto l'account.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">4. Proprietà Intellettuale</h2>
              <p>
                Tutti i contenuti inclusi come parte del Servizio, come testo, grafica, loghi, immagini, così come la loro compilazione, e qualsiasi software utilizzato sul Sito, sono di proprietà di ReviewLution o dei suoi fornitori e protetti dalle leggi sul copyright e altre leggi che proteggono la proprietà intellettuale.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">5. Modifiche ai Termini</h2>
              <p>
                ReviewLution si riserva il diritto, a sua esclusiva discrezione, di modificare i Termini in base ai quali il sito viene offerto. La versione più recente dei Termini sostituirà tutte le versioni precedenti.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-6">6. Contattaci</h2>
              <p>
                ReviewLution accoglie con favore le tue domande o commenti riguardo ai Termini: support@reviewlution.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}