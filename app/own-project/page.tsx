import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <Layout>
      <div className="container mx-auto pt-24 px-8 lg:px-20">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8">Own Project</h1>

        {/* Introduction Text */}
        <p className="text-lg leading-relaxed mb-8">
            My friend's "Own Project" is an exciting and unique video project recorded in Lillestrøm and its surrounding areas. From smashing down a door with an axe to exploring the depths of a mysterious murder, this project has it all! It's a must-see for sure.
        </p>

        {/* Image or Video Section */}
        <div className="mb-8">
          {/* Image Example */}
          <Image
            src="/own-project.png" 
            alt="Project Image"
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Button to Video */}
        <div className="text-center mb-8 text-2xl">
          <Link className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition" href="https://youtu.be/YOn0R9jIR-0" passHref>
              Watch it here!
          </Link>
        </div>

        {/* Additional Text */}
        <p className="text-lg leading-relaxed pb-20">
            Acting is an incredibly rewarding job. A while ago, I had the opportunity to take part in an acting project and it was one of the most thrilling experiences of my life. My girlfriend was contacted by a friend who asked if she knew any male actors who might be interested, and so we both ended up with the lead parts. <br/><br/>
            It was an exciting experience and I even got to knock down a door with an axe! We also had the chance to work with some amazing people, who helped us to bring the story to life. The end result was a captivating piece of art that I will never forget.
        </p>
      </div>
    </Layout>
  );
}
