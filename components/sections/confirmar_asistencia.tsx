"use client"

import { useState, type FormEvent } from "react"
import { Dialog } from "@base-ui/react/dialog"
import { X } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { EsquinasRombo, OrnementoFlores } from "./ornamentos"

const ANFITRIONES = [
  { nombre: "", numero: "523751258249" },
]

function construirMensaje(nombre: string, personas: string, frase: string) {
  return [
    "Confirmación de asistencia a la boda de Ceci y Felipe",
    "",
    `Nombre: ${nombre}`,
    `Personas que asistirán: ${personas}`,
    `Mensaje para los novios: ${frase}`,
  ].join("\n")
}

function crearEnlace(numero: string, mensaje: string) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}

const campo =
  "mt-2 w-full rounded-sm border border-secondary/70 bg-background px-4 py-3 font-serif text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"

const etiqueta =
  "font-sans text-[0.62rem] uppercase tracking-[0.3em] text-primary"

export default function ConfirmarAsistencia() {
  const [abierto, setAbierto] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [nombre, setNombre] = useState("")
  const [personas, setPersonas] = useState("1")
  const [frase, setFrase] = useState("")

  const mensaje = construirMensaje(nombre, personas, frase)

  function cerrar() {
    setAbierto(false)
    setEnviado(false)
    setNombre("")
    setPersonas("1")
    setFrase("")
  }

  function manejarEnvio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden bg-background px-6 py-20">
      <header className="relative z-10 flex flex-col items-center text-center">
        <OrnementoFlores className="h-14 w-36 opacity-85 sm:h-16 sm:w-44" />
        <p className="mt-6 font-sans text-xs uppercase tracking-[0.35em] text-primary">
          Nos encantaría contar contigo
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-snug text-foreground italic sm:text-5xl md:text-6xl">
          Confirma tu asistencia
        </h2>
        <p className="mt-5 max-w-md font-serif text-base leading-relaxed text-foreground/75 italic sm:text-lg">
          Ayúdanos a preparar todo para compartir este día tan especial.
        </p>
      </header>

      <Dialog.Root
        open={abierto}
        onOpenChange={(open) => {
          if (open) {
            setAbierto(true)
          } else {
            cerrar()
          }
        }}
      >
        <Dialog.Trigger
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 px-8 font-sans text-[0.68rem] uppercase tracking-[0.3em]",
          )}
        >
          Confirmar asistencia
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 min-h-dvh bg-foreground/35 backdrop-blur-sm transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 border-2 border-primary/60 bg-background p-1.5 shadow-2xl transition-[scale,opacity] duration-150 ease-out data-ending-style:scale-[0.97] data-ending-style:opacity-0 data-starting-style:scale-[0.97] data-starting-style:opacity-0">
            <div className="relative border border-dashed border-secondary/80 px-6 py-8 sm:px-8">
              <EsquinasRombo />

              <Dialog.Close
                aria-label="Cerrar"
                className="absolute top-4 right-4 grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <X className="size-4" />
              </Dialog.Close>

              <div className="flex flex-col items-center text-center">
                <p className={etiqueta}>
                  {enviado ? "Gracias por confirmar" : "Confirmación"}
                </p>
                <Dialog.Title className="mt-3 font-script text-4xl leading-none text-primary sm:text-5xl">
                  {enviado ? nombre : "Nos vemos pronto"}
                </Dialog.Title>
                <Dialog.Description className="mt-3 max-w-sm font-serif text-sm leading-relaxed text-foreground/70 italic sm:text-base">
                  {enviado
                    ? "Tu mensaje está listo. Envíalo para que la confirmación llegue."
                    : "Completa tus datos y envía tu confirmación por WhatsApp."}
                </Dialog.Description>
              </div>

              {enviado ? (
                <div className="mt-7 flex flex-col gap-3">
                  {ANFITRIONES.map((anfitrion, indice) => (
                    <a
                      key={anfitrion.numero}
                      href={crearEnlace(anfitrion.numero, mensaje)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: indice === 0 ? "default" : "outline",
                          size: "lg",
                        }),
                        "h-11 w-full gap-2 px-6 font-sans text-[0.68rem] uppercase tracking-[0.25em]",
                      )}
                    >
                      Enviar {anfitrion.nombre}
                    </a>
                  ))}

                  <button
                    type="button"
                    onClick={cerrar}
                    className="mt-1 font-sans text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Cerrar
                  </button>
                </div>
              ) : (
                <form onSubmit={manejarEnvio} className="mt-7 flex flex-col gap-5">
                  <div>
                    <label htmlFor="nombre" className={etiqueta}>
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="name"
                      value={nombre}
                      onChange={(event) => setNombre(event.target.value)}
                      placeholder="Tu nombre"
                      className={campo}
                    />
                  </div>

                  <div>
                    <label htmlFor="personas" className={etiqueta}>
                      Personas que asistirán
                    </label>
                    <input
                      id="personas"
                      name="personas"
                      type="number"
                      required
                      min={1}
                      max={30}
                      inputMode="numeric"
                      value={personas}
                      onChange={(event) => setPersonas(event.target.value)}
                      className={campo}
                    />
                  </div>

                  <div>
                    <label htmlFor="frase" className={etiqueta}>
                      Una frase para los novios
                    </label>
                    <textarea
                      id="frase"
                      name="frase"
                      required
                      rows={4}
                      value={frase}
                      onChange={(event) => setFrase(event.target.value)}
                      placeholder="Escribe unas palabras para Ceci y Felipe"
                      className={cn(campo, "resize-none leading-relaxed")}
                    />
                  </div>

                  <button
                    type="submit"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-1 h-11 w-full font-sans text-[0.68rem] uppercase tracking-[0.3em]",
                    )}
                  >
                    Enviar
                  </button>
                </form>
              )}
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
