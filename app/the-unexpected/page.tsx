import Layout from "../components/Layout";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <Layout>
      <div className="container mx-auto pt-24 px-8 lg:px-20">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Exam Concert
        </h1>
        {/* Introduction Text */}
        <p className="text-2xl leading-relaxed text-center">
            Click on the icons to Listen Now!
        </p>

        {/* Icons Section */}
        <div className="flex justify-center space-x-12 mt-8 mb-20">
            <Link href="https://open.spotify.com/track/5B4Xeq6zxvFaZeasivZg1O?si=289b2ae1057144ff" passHref>
                <Icon icon="mdi:spotify" className="text-green-500 hover:text-green-600 transition text-6xl md:text-8xl" />
            </Link>
            <Link href="https://music.apple.com/us/album/the-unexpected/1668984965?i=1668985068" passHref>
                <Icon icon="mdi:apple" className="text-white hover:text-slate-500 transition text-6xl md:text-8xl" />
            </Link>
            <Link href="https://www.youtube.com/watch?v=btaHZGDMCho" passHref>
                <Icon icon="mdi:youtube" className="text-red-600 hover:text-red-700 transition text-6xl md:text-8xl" />
            </Link>
        </div>

        {/* Image Section */}
        <div className="mb-8">
            <Image
                src="/the-unexpected.png" 
                alt="Project Image"
                width={700}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg mb-8"
            />
        </div>

        {/* Additional Text */}
        <p className="text-2xl leading-relaxed">
            My first ever song on Streaming Services. Expect the unexpected!
        </p>
        <p className="text-md pb-20">
            And by the way, yes, I made the painting myself
        </p>
      </div>
    </Layout>
  );
}
