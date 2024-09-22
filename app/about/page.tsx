import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="pt-24 px-8 lg:px-20 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12">Who am I?</h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed">
              I am a musician, actor, multi-instrumentalist, poet, singer, songwriter, show-host, and entertainer. With a wide range of skills, I have been able to explore different artistic avenues and showcase my talents to various audiences.
            </p>
          </section>

          <div className="space-y-12">
            {/* Instruments Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Instruments</h2>
              <p className="text-lg leading-relaxed">
                Due to my interest in various instruments, here's a list, from most to least experienced: <br />
                <b>1st instruments:</b> Piano/keyboard and vocal <br />
                <b>2nd instruments:</b> Drums, percussion, bass-guitar, trombone, saxophones, and flute <br />
                <b>3rd instruments:</b> Accordion, harmonica, acoustic guitar, clarinet, tuba, and more
              </p>
            </section>

            {/* Musician and Actor Sections */}
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">As a Musician</h2>
                <p className="text-lg leading-relaxed">
                  I've played in orchestras and bands as a lead singer and instrumentalist. I started playing music from a young age, and I’ve had the honor of being the kapellmeister of a big band. My passion for music continues to grow, and I love sharing it with others.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">As an Actor</h2>
                <p className="text-lg leading-relaxed pb-20">
                  I've worked as an actor on stage and in film, participating in short films, advertisements, and Netflix movies. With each role, I discover new facets of myself and improve my acting skills. Thank you for learning more about my journey.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
