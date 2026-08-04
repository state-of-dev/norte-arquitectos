import Image from "next/image"
import Link from "next/link"

const footerLinks = [
  { label: "Proyectos", href: "#projects" },
  { label: "Estudio", href: "#studio" },
  { label: "Enfoque", href: "#approach" },
  { label: "Bitácora", href: "#journal" },
  { label: "Contacto", href: "#contact" },
]

const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
]

function InstagramIcon() {
  return (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.35 7.8A2.15 2.15 0 1 0 5.35 3.5a2.15 2.15 0 0 0 0 4.3ZM3.5 9.5h3.7V20H3.5V9.5Zm5.8 0h3.55v1.44h.05c.49-.94 1.7-1.94 3.5-1.94 3.75 0 4.45 2.47 4.45 5.68V20h-3.7v-4.72c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.23-1.82 2.5V20H9.3V9.5Z" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-.79-.17-2 .03-2.86l1.18-5s-.3-.6-.3-1.49c0-1.39.81-2.43 1.82-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24 1 .5 1.82 1.48 1.82 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.72-4.08-4.19-4.08-2.85 0-4.53 2.14-4.53 4.35 0 .86.33 1.79.75 2.29.08.1.09.19.07.29l-.28 1.14c-.05.18-.15.22-.34.13-1.27-.59-2.06-2.44-2.06-3.92 0-3.2 2.32-6.13 6.69-6.13 3.51 0 6.24 2.5 6.24 5.85 0 3.49-2.2 6.29-5.23 6.29-1.02 0-1.98-.53-2.31-1.16l-.63 2.39c-.23.88-.84 1.97-1.25 2.64A10 10 0 1 0 12 2Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="px-6 py-16 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
        <div className="md:col-span-5">
          <div className="max-w-xs">
            <Image
              src="/norte-mark.svg"
              alt=""
              width={44}
              height={44}
              className="mb-7 brightness-0"
              aria-hidden="true"
            />
            <Link
              href="/"
              className="text-xs font-medium tracking-[0.3em] uppercase text-foreground"
            >
              Norte Arquitectos
            </Link>
            <p className="mt-5 text-sm leading-[1.75] text-muted-foreground">
              Estudio de arquitectura con sede en Ciudad de México, creando espacios residenciales,
              culturales y comerciales desde 2003.
            </p>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
            Navegación
          </p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-11">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
            Redes
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  className="h-5 w-5 text-foreground/60 transition-colors duration-300 hover:text-foreground"
                >
                  <span className="block h-full w-full">
                    <Icon />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          {"Norte Arquitectos. Todos los derechos reservados."}
        </p>
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          Ciudad de México
        </p>
      </div>
    </footer>
  )
}
