import Projects from '../../components/Projects/Projects'
import './HomePage.css'

export default function AboutPage() {

  return (
    <main className="home">
      <div className="about">
        <h1>Hi, I'm Serra!</h1>
        <p>I am a full-stack developer who loves solving puzzles and tinkering. Whether it’s building a 3D printed keyboard or trying to understand how someone cut down loading times for a game, I am always seeing how software engineering fits into my everyday life. In marrying the two together, I am able to remain passionate not just about my hobbies, but my work as well.</p>
      </div>
      <div>
        <h2>My Projects:</h2>
        <Projects />
      </div>
      </main>
      )}
