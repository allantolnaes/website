import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Homepage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen pt-16 md:pt-0">
        {/* Right Column */}
        <div className="flex flex-col p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold md:pt-20">
            Welcome to my Performer Website
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            I am a 20-year old actor, musician, multi-instrumentalist, singer, songwriter, composer, and performer. Here you will find everything you need to know about me and my work! <br/><br/> 
            For me, performing is more than just a profession; it's also a medium of expression and a life passion. Please take a look around or contact me if you have any questions.
          </p>
          <Link id="button" href="/my-work" className="mt-6 py-2 px-4 mb-10 rounded-xl text-center bg-blue-600 text-white hover:bg-blue-700 transition">
            MY WORK
          </Link>
          {/* Introduction Section */}
          <section className="pb-10">
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed">
              I am a musician, actor, multi-instrumentalist, poet, singer, songwriter, show-host, and entertainer. With a wide range of skills, I have been able to explore different artistic avenues and showcase my talents to various audiences.
            </p>
          </section>
          
          {/* Contact Me Section (Visible only on larger screens) */}
          <div className="hidden lg:block bg-gray-800 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
            
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p className="text-lg mb-4">allan_tolnaes@icloud.com</p>

            <h2 className="text-2xl font-semibold mb-2">Call or SMS?</h2>
            <p className="text-lg mb-4">+47 471 52 295</p>

            <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
            <div className="flex space-x-6">
              <Link href="https://www.instagram.com/allan_tolnaes/" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:instagram" className="text-purple-400 hover:text-purple-500 transition text-5xl" />
              </Link>
              <Link href="https://open.spotify.com/artist/5Nra890lowSUS5UcXqyIQs?si=kYYGv5YKRPezWX-51MqmVw" passHref>
                <Icon icon="mdi:spotify" className="text-green-500 hover:text-green-600 transition text-5xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Left Column with Image */}
        <div className="relative mt-16">
          <Image
            src="/homepage.jpg" 
            alt="Image for homepage"
            layout="responsive"
            objectFit="cover" 
            className="rounded-lg" // Optional: Add rounded corners
            width={700} 
            height={400}
          />
        </div>
      </div>
    </Layout>
  );
}
