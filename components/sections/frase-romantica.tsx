import { OrnementoFlores, SiluetaNovia, SiluetaNovio } from "./ornamentos"

const NOVIOS = [
  { nombre: "Cecilia Yasmin García García", Silueta: SiluetaNovia },
  { nombre: "Luis Felipe Arenas Camacho", Silueta: SiluetaNovio },
]

export default function FraseRomantica() {
  return (
    <header className="flex w-full flex-col items-center text-center">
      <OrnementoFlores className="h-12 w-28 opacity-85 sm:h-14 sm:w-36" />
      <p className="mt-6 font-serif text-3xl leading-relaxed text-foreground italic sm:text-4xl md:text-5xl">
        «Dos corazones, una promsea y toda una vida por delante ¿Nos acompañas a decir ``si``?»
      </p>

      <div className="mt-8 flex items-center gap-4">
        <span aria-hidden className="h-px w-12 bg-border sm:w-16" />
        <span
          aria-hidden
          className="size-1.5 rotate-45 border border-primary bg-background"
        />
        <span aria-hidden className="h-px w-12 bg-border sm:w-16" />
      </div>

      <div className="mt-4 grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
        {NOVIOS.map(({ nombre, Silueta }) => (
          <div
            key={nombre}
            className="relative flex h-40 flex-col items-center justify-end sm:h-48"
          >
            <Silueta className="pointer-events-none absolute bottom-0 left-1/2 h-36 w-auto -translate-x-1/2 text-primary/15 sm:h-44" />
            <span className="relative z-10 pb-5 font-sans text-xs uppercase tracking-[0.35em] text-primary sm:text-[0.7rem]">
              {nombre}
            </span>
          </div>
        ))}
      </div>
    </header>
  )
}
