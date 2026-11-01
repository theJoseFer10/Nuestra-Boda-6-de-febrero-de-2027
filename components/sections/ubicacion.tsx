"use client"

import { EsquinasRombo, OrnementoFlores } from "./ornamentos"

export default function Ubicacion() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center gap-16 overflow-hidden bg-background px-6 py-20">


      <header className="relative z-10 flex flex-col items-center text-center">
        <OrnementoFlores className="h-14 w-36 opacity-85 sm:h-16 sm:w-44" />
        <p className="mt-6 font-sans text-xs uppercase tracking-[0.35em] text-primary">
          Ceremonia y Fiesta
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-snug text-foreground italic sm:text-5xl md:text-6xl">
          ¿Dónde y cuándo?
        </h2>
        <div className="mt-7 flex items-center gap-4">
          <span aria-hidden className="h-px w-12 bg-border sm:w-16" />
          <span className="font-sans text-[0.68rem] uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
            06 · 02 · 2027
          </span>
          <span aria-hidden className="h-px w-12 bg-border sm:w-16" />
        </div>
      </header>

      <div className="relative z-10 grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <article className="flex flex-col gap-6">
          <div className="relative border-2 border-primary/60 bg-card/50 p-1.5 shadow-sm">
            <div className="border border-dashed border-secondary/80 px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col items-center text-center">
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.35em] text-primary">
                  Ceremonia
                </p>
                <h3 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
                  Parroquia de Cristo Rey
                </h3>
                <p className="mt-3 font-sans text-base text-muted-foreground sm:text-lg">
                  Estipac, Jalisco
                </p>
                <a href="https://maps.app.goo.gl/iGvn9HXjcD9YAvhLA" target="_blank" className="mt-3 font-sans text-base text-muted-foreground sm:text-lg">
                  Ubicacion
                </a>
              </div>
            </div>
            <EsquinasRombo />
          </div>
        </article>

        <article className="flex flex-col gap-6">
          <div className="relative border-2 border-primary/60 bg-card/50 p-1.5 shadow-sm">
            <div className="border border-dashed border-secondary/80 px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col items-center text-center">
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.35em] text-primary">
                  Fiesta
                </p>
                <h3 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
                  Salón de Rodríguez.
                </h3>
                <p className="mt-3 font-sans text-base text-muted-foreground sm:text-lg">
                  Atotonilco el Bajo, Jalisco
                </p>
                <a href="https://maps.app.goo.gl/T9YgK8wuB76mSv2p7" target="_blank" className="mt-3 font-sans text-base text-muted-foreground sm:text-lg">
                  Ubicacion
                </a>
              </div>
            </div>
            <EsquinasRombo />
          </div>
        </article>
      </div>
    </section>
  )
}
