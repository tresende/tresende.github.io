export default function Skills() {
  const skills = ['TypeScript', 'Node.js', 'Java', 'Kotlin', 'AWS', 'Microservices', 'SQL/NoSQL', 'Kubernetes', 'React']

  return (
    <section className="flex min-h-0 flex-col gap-y-3">
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => (
          <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
