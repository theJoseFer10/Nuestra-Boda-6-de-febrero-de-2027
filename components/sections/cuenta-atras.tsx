"use client"

import { useSyncExternalStore } from "react"

export const FECHA_BODA = new Date(2027, 1, 6, 0, 0, 0)

type Tiempo = {
  dias: number
  horas: number
  minutos: number
  segundos: number
}

const UNIDADES = [
  { clave: "dias", etiqueta: "días" },
  { clave: "horas", etiqueta: "horas" },
  { clave: "minutos", etiqueta: "minutos" },
  { clave: "segundos", etiqueta: "segundos" },
] as const

function calcularTiempo(milisegundos: number): Tiempo {
  const restante = Math.max(0, FECHA_BODA.getTime() - milisegundos)
  const totalSegundos = Math.floor(restante / 1000)

  return {
    dias: Math.floor(totalSegundos / 86400),
    horas: Math.floor(totalSegundos / 3600) % 24,
    minutos: Math.floor(totalSegundos / 60) % 60,
    segundos: totalSegundos % 60,
  }
}

function suscribir(cambiar: () => void) {
  const id = setInterval(cambiar, 1000)
  return () => clearInterval(id)
}

let reloj: { segundo: number; valor: number } | null = null

function leerReloj() {
  const segundo = Math.floor(Date.now() / 1000)
  if (!reloj || reloj.segundo !== segundo) {
    reloj = { segundo, valor: segundo * 1000 }
  }
  return reloj.valor
}

function leerRelojServidor() {
  return 0
}

export default function CuentaAtras() {
  const ahora = useSyncExternalStore(suscribir, leerReloj, leerRelojServidor)
  const tiempo = ahora > 0 ? calcularTiempo(ahora) : null

  return (
    <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-4">
      {UNIDADES.map(({ clave, etiqueta }) => (
        <div key={clave} className="flex flex-col items-center gap-1.5">
          <span className="font-sans text-2xl text-primary tabular-nums sm:text-3xl">
            {tiempo ? String(tiempo[clave]).padStart(2, "0") : "--"}
          </span>
          <span className="font-sans text-[0.58rem] uppercase tracking-[0.25em] text-muted-foreground sm:text-[0.62rem]">
            {etiqueta}
          </span>
        </div>
      ))}
    </div>
  )
}
