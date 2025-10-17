import Social from 'components/Social'

export default () => (
  <div className="space-y-1.5">
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
        <span>🌏 Belo Horizonte, MG, Brazil</span>
      </a>
    </p>
    <Social />
  </div>
)
