import Image from "next/image"
import FraseRomantica from "./frase-romantica"
import { DivisorVictoriano, EsquinasRombo, OrnementoFlores, Regalo } from "./ornamentos"
import Temporizador from "./temporizador"
import Reproductor from "./reproductor"
import Ubicacion from "./ubicacion"
import Itinerario from "./itinerario"
import ConfirmarAsistencia from "./confirmar_asistencia"

export default function InvitacionHero() {
  return (
    <>
      <Reproductor />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,color-mix(in_oklch,var(--muted)_70%,transparent))]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background to-transparent"
      />

      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-6 py-16">
        <div className="animar-contenido relative z-10 flex w-full max-w-3xl flex-col items-center gap-12 text-center">
          <FraseRomantica />

          <div className="flex flex-col items-center gap-6">
            <OrnementoFlores className="h-12 w-28 opacity-80 sm:h-14 sm:w-36" />
            <DivisorVictoriano className="mt-7 max-w-xs" label="06 · 02 · 2027" />
            <div className="flex flex-col items-center gap-3">
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-primary sm:text-sm">
                ¡Nos casamos en!
              </p>
            </div>
          </div>

          <Temporizador />
        </div>
      </section>

      <div className="animar-foto pointer-events-none fixed inset-0 z-20 flex items-center justify-center bg-background px-6">
        <figure className="relative w-full max-w-4xl">
          <div className="marco-victoriano relative border-2 border-primary/50 bg-background p-2 shadow-xl">
            <div className="border border-secondary/70 p-1.5">
              <Image
                src="/foto-novios.jpg"
                alt="Retrato de los novios"
                width={509}
                height={339}
                priority
                sizes="(max-width: 768px) 100vw, 64rem"
                className="h-auto w-full object-cover [filter:sepia(0.16)_saturate(0.98)]"
              />
            </div>
            <EsquinasRombo />
          </div>
        </figure>
      </div>

      <Ubicacion />
      <Itinerario />
      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-6 py-16 text-center">
        <p className="max-w-xl font-serif text-base leading-relaxed text-foreground/75 italic sm:text-lg">
          Tu presencia es nuestro mejor regalo. Si deseas hacernos un detalle,
          será recibido con mucho cariño.
        </p>
        <Regalo className="h-24 w-auto text-primary/40 sm:h-28" />
      </div>
      <ConfirmarAsistencia />
    </>
  )
}
