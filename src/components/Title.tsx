import Social from 'components/Social'

export default function Title() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex-1 space-y-1.5">
          <h1 className="text-2xl font-bold">Thiago Resende</h1>
          <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
            Software Engineer focused on building highly scalable products
          </p>
          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <a
              className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href="https://www.google.com/maps/place/Belo+Horizonte,+State+of+Minas+Gerais"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe size-3"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              Belo Horizonte, Minas Gerais, Brazil
            </a>
          </p>
          <Social />
        </div>
        <span className="relative flex shrink-0 overflow-hidden rounded-xl size-28">
          <img className="aspect-square h-full w-full" alt="Thiago Resende" src="https://github.com/tresende.png" />
        </span>
      </div>
    </>
  )
}
