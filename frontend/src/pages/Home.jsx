import '../App.css'

export default function Home() {
  return (
    <main>
      <section className="section hero-section">
        <div className="hero">
          <div className="hero-photo-wrap">
            <img
              src="/lucy.png"
              alt="Lucy Barton"
              className="hero-photo"
            />
          </div>
          <h1>Lucy Barton</h1>
          <p className="tagline">
            Software Engineer dedicated to solutions that connect people and empower progress.
          </p>
        </div>
      </section>  
    </main>
  );
}
