import { OrnementoFlores, SiluetaNovia, SiluetaNovio, Vela } from "./ornamentos"

type Novio = {
  iniciales: string
  Silueta: typeof SiluetaNovia
  padres: [string, string]
  parentesco: string
}

const NOVIA: Novio = {
  iniciales: "Ceci",
  Silueta: SiluetaNovia,
  padres: ["José Alberto García Reyes", "María del Rosario García Polanco"],
  parentesco: "de la novia",
}

const NOVIO: Novio = {
  iniciales: "Felipe",
  Silueta: SiluetaNovio,
  padres: ["Felipe Jesús Arenas López", "María Yesenia Camacho Polanco"],
  parentesco: "del novio",
}

function Padres({ novio, className }: { novio: Novio; className?: string }) {
  return (
    <div className={className}>
      <p className="font-sans text-[0.55rem] uppercase tracking-[0.32em] text-primary/70 sm:text-[0.6rem]">
        Padres {novio.parentesco}
      </p>
      <ul className="mt-2 space-y-1.5 font-serif text-[0.78rem] leading-snug text-foreground/80 italic sm:text-sm">
        {novio.padres.map((nombre) => (
          <li key={nombre}>{nombre}</li>
        ))}
      </ul>
    </div>
  )
}

function Retrato({ novio }: { novio: Novio }) {
  const { iniciales, Silueta } = novio

  return (
    <figure className="flex flex-col items-center">
      <Silueta className="h-56 w-auto text-primary/35 sm:h-64 lg:h-72" />
      <figcaption className="-mt-5 font-script text-4xl leading-none text-primary sm:text-5xl">
        {iniciales}
      </figcaption>
    </figure>
  )
}

export default function FraseRomantica() {
  return (
    <header className="flex w-full flex-col items-center text-center">
      <OrnementoFlores className="h-12 w-28 opacity-85 sm:h-14 sm:w-36" />
      <p className="mt-6 font-serif text-3xl leading-relaxed text-foreground italic sm:text-4xl md:text-5xl">
        ¡Nos casamos!
      </p>
      <p className="mt-6 font-serif text-3xl leading-relaxed text-foreground italic sm:text-4xl md:text-5xl">
        «Dos corazones, una promesa y toda una vida por delante ¿Nos acompañas a decir “sí”?»
      </p>

      <div className="mt-8 flex items-center gap-4">
        <span aria-hidden className="h-px w-12 bg-border sm:w-16" />
        <span
          aria-hidden
          className="size-1.5 rotate-45 border border-primary bg-background"
        />
        <span aria-hidden className="h-px w-12 bg-border sm:w-16" />
      </div>

      <p className="mt-8 max-w-md font-serif text-base leading-relaxed text-foreground/75 italic sm:text-lg">
        Con la bendición de Dios y de nuestros padres
      </p>

      <div className="mt-10 flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-4">
        <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-4">
          <Padres novio={NOVIA} className="w-28 text-right sm:w-32" />
          <Retrato novio={NOVIA} />
        </div>

        <span
          aria-hidden
          className="font-script text-5xl leading-none text-primary/60 sm:text-6xl"
        >
          &amp;
        </span>

        <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-4">
          <Retrato novio={NOVIO} />
          <Padres novio={NOVIO} className="w-28 text-left sm:w-32" />
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <Vela className="mb-4 h-24 w-auto text-primary/45 sm:h-28" />
        <p className="font-sans text-[0.55rem] uppercase tracking-[0.32em] text-primary/70 sm:text-[0.6rem]">
          Padrinos de velación
        </p>
        <ul className="mt-2 space-y-1.5 font-serif text-[0.78rem] leading-snug text-foreground/80 italic sm:text-sm">
          <li>Rosa Rubio Preciado</li>
          <li>Jesús García Polanco</li>
        </ul>
      </div>
    </header>
  )
}
