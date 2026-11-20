import CuentaAtras from "./cuenta-atras"
import { EsquinasRombo } from "./ornamentos"

export default function Temporizador() {
  return (
    <div className="relative w-full max-w-md">
      <div className="marco-victoriano border-2 border-primary/60 bg-card/50 p-1.5 shadow-sm">
        <div className="border border-dashed border-secondary/80 px-5 py-6 sm:px-8">
          <CuentaAtras />
        </div>
      </div>
      <EsquinasRombo />
    </div>
  )
}
