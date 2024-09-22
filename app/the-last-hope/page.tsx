import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function TheLastHope() {
  return (
    <Layout>
      <div className="container mx-auto pt-24 px-8 lg:px-20 ">
        {/* Image or Video Section */}
        <div className="mb-8">
          <Image
            src="/the-last-hope-text.png" 
            alt="Project Image"
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg mb-8"
          />
          <Image
            src="/the-last-hope-2.png" 
            alt="Project Image"
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg mb-8"
          />
          <Image
            src="/the-last-hope-3.png" 
            alt="Project Image"
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg mb-8"
          />
          <Image
            src="/the-last-hope-card.png" 
            alt="Project Image"
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg mb-8"
          />
          <Image
            src="/the-last-hope-4.png" 
            alt="Project Image"
            width={1200}
            height={700}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg mb-8"
          />
        </div>

        {/* Button to Video */}
        <div className="text-center mb-8 text-3xl">
          <Link className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition" href="https://www.youtube.com/watch?v=H1lN3PLcokQ&t=3s" passHref>
              Watch it here!
          </Link>
        </div>

        {/* Additional Text */}
        <p className="text-lg leading-relaxed pb-20">
          I enjoyed working on the short-film production "The Last Hope" as it was a great learning experience for me. Despite the low-budget production, the cast and crew were fantastic, and I was able to gain valuable experience as an actor on camera. Being part of the project allowed me to explore different characters and emotions, and it was a pleasure to work with such a talented and dedicated team.
        </p>
      </div>
    </Layout>
  );
}
