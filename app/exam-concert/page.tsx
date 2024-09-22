import Layout from "../components/Layout";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <Layout>
      <div className="container mx-auto pt-24 px-8 lg:px-20">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Exam Concert
        </h1>

        {/* Introduction Text */}
        <p className="text-lg leading-relaxed mb-8">
          This concert was my last performance at Norwegian high school Lillestrøm VGs, where I performed a variety of genres and a broad range of repertoire. It was a fun, but nerve-racking experience. Luckily, I had many of my good friends and some of my teachers play with me in the band. Thanks to all who stood with me on stage, to my teachers, friends, and family for all their support, and most of all to everyone in the audience that day for giving me a great time performing on stage! <br /><br />
          Here you can watch a short part of our performance of the song "Say Something" from the musical "A Great Big World." All creds to my good friend and partner in crime Mona Menger for singing with me!
        </p>

        {/* Video Section */}
        <div className="mb-8 flex justify-center">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/QeVudZ-imqY"
            title="Say Something"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Additional Information Text */}
        <p className="text-lg leading-relaxed pb-20">
            The audience was incredibly supportive throughout the whole concert, and it was great to see how my hard work in rehearsals had paid off. Even though I did have quite a hard time practising my vocals because of non-stop illness... I was grateful for the chance to perform and show my skills to my supportive teachers, friends and family. I felt so proud, and it was a wonderful experience that I will never forget. I had a great time, and I can't wait to perform in other concerts and shows the coming years!
        </p>
      </div>
    </Layout>
  );
}
