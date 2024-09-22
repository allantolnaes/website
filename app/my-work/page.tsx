import Link from "next/link";
import Layout from "../components/Layout";

export default function MyWork() {
  return (
    <Layout>
      <div className="pt-24 px-8 lg:px-20 min-h-screen pb-20">
        <h1 className="text-4xl font-bold text-center mb-12">My Work</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link href="/the-last-hope" className="border rounded-lg overflow-hidden shadow-lg">
            <img src="/the-last-hope-card.png" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                The Last Hope
              </h2>
            <p className="text-sm">
                Shortfilm from The Last of Us univers
            </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/own-project" className="border rounded-lg overflow-hidden shadow-lg">
            <img src="/own-project.png" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                "Own Project"
              </h2>
              <p className="text-sm">
                Smashing down a door with an axe?
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/exam-concert" className="border rounded-lg overflow-hidden shadow-lg">
            <img src="/exam-concert.png" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Exam concert
              </h2>
              <p className="text-sm">
                25-min concert at the end of High School
              </p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link href="/the-unexpected" className="border rounded-lg overflow-hidden shadow-lg">
            <img src="/the-unexpected.png" alt="Project 4" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                The unexpected
              </h2>
              <p className="text-sm">
                My first ever single on Streaming Services
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
