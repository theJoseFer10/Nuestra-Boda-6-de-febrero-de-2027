"use client"

import { DivisorVictoriano, EsquinasRombo, OrnementoFlores } from "./ornamentos"

const EVENTOS = [
  { titulo: "Ceremonia", hora: "3:00 PM" },
  { titulo: "Recepción", hora: "5:00 PM" },
  { titulo: "Cena", hora: "7:00 PM" },
  { titulo: "Vals de novios", hora: "8:00 - 9:00 PM" },
  { titulo: "Música en vivo", hora: "9:00 - 11:00 PM" },
]

export default function Itinerario() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center gap-16 overflow-hidden bg-background px-6 py-20">
      <header className="relative z-10 flex flex-col items-center text-center">
        <OrnementoFlores className="h-14 w-36 opacity-85 sm:h-16 sm:w-44" />
        <p className="mt-6 font-sans text-xs uppercase tracking-[0.35em] text-primary">
          Horarios
        </p>
        <h2 className="titulo-victoriano mt-4 font-serif text-4xl leading-snug text-foreground italic sm:text-5xl md:text-6xl">
          Itinerario
        </h2>
        <DivisorVictoriano className="mt-7 max-w-xs" label="06 · 02 · 2027" />
      </header>

      <div className="relative z-10 w-full max-w-3xl">
        <div className="marco-victoriano relative border-2 border-primary/60 bg-card/50 p-1.5 shadow-sm">
          <div className="border border-dashed border-secondary/80 px-6 py-10 sm:px-12 sm:py-14">
            <ol className="relative mx-auto flex max-w-xl flex-col">
              {EVENTOS.map((evento, indice) => (
                <li
                  key={evento.titulo}
                  className="group relative flex gap-5 pb-9 last:pb-0 sm:gap-7"
                >
                  {indice < EVENTOS.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-2 top-7 h-[calc(100%-1.75rem)] w-px -translate-x-1/2 bg-gradient-to-b from-secondary/70 via-secondary/40 to-secondary/70"
                    />
                  )}

                  <span
                    aria-hidden
                    className="relative z-10 mt-1 grid size-4 shrink-0 rotate-45 place-items-center border border-primary bg-background transition-colors duration-300 group-hover:bg-primary"
                  >
                    <span className="size-1.5 bg-primary transition-colors duration-300 group-hover:bg-primary-foreground" />
                  </span>

                  <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-serif text-xl text-foreground italic sm:text-2xl">
                      {evento.titulo}
                    </h3>
                    <span className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                      {evento.hora}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <EsquinasRombo />
        </div>
      </div>
    </section>
  )
}
