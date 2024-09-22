import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function ContactCard () {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
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
    );
}