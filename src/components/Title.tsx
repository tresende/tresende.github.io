import Social from 'components/Social'

export default function Title() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex-1 space-y-1.5">
          <h1 className="text-2xl font-bold">Thiago Resende</h1>
          <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
            Software engineer focused on building amazing products
          </p>
          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <a
              className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href="https://www.google.com/maps/place/Belo+Horizonte,+State+of+Minas+Gerais"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hidden sm:block">🌏</span>
              <span>Belo Horizonte, Minas Gerais, Brazil</span>
            </a>
          </p>
          <Social />
        </div>
        <span className="relative flex shrink-0 overflow-hidden rounded-xl size-20 sm:size-28">
          <img className="aspect-square h-full w-full" alt="Thiago Resende" src="https://github.com/tresende.png" />
        </span>
      </div>
    </>
  )
}
