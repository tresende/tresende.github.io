import About from 'components/About'
import Experience from 'components/Experience'
import Skills from 'components/Skills'
import Title from 'components/Title'

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <Title />
        <About />
        <Experience />
        <Skills />
      </section>
    </main>
  )
}
