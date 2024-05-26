export default function Education() {
  return (
    <section className="flex min-h-0 flex-col gap-y-3">
      <h2 className="text-xl font-bold">Education</h2>
      <div className="rounded-lg bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="font-semibold leading-none">PUC Minas</h3>
            <div className="text-sm tabular-nums text-gray-500">2012 - 2017</div>
          </div>
        </div>
        <div className="text-pretty font-mono text-sm text-muted-foreground mt-2">
          Information systems, Computer Software Engineering
        </div>
      </div>

      <div className="rounded-lg bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="font-semibold leading-none">Colégio COTEMIG</h3>
            <div className="text-sm tabular-nums text-gray-500">2009 - 2011</div>
          </div>
        </div>
        <div className="text-pretty font-mono text-sm text-muted-foreground mt-2">Technical High School, Computing</div>
      </div>
    </section>
  )
}
