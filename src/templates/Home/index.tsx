import Bio from 'components/Bio'
import Github from 'components/Github'
import Social from 'components/Social'
import Terminal from 'components/Terminal'
import Video from 'components/Video'

const Home = () => (
  <>
    <Video />
    <main className="flex fixed justify-center items-center h-full w-full bg-black/60">
      <section className="flex flex-col justify-around md:p-16 text-white max-w-2xl md:h-auto bg-black/60 p-8 h-screen">
        <Terminal />
        <Bio />
        <Social />
      </section>
    </main>
    <Github />
  </>
)

export default Home
