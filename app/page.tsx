import Link from 'next/link'
import React from 'react'
import Particles from './components/particles'
import { links } from '../util/constants'
import { Linkedin, Github, Mail, Twitter } from 'lucide-react'

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <div className="flex absolute top-5 right-5 animate-fade-in">
        <Link href={links.TWITTER} target="_blank">
          <button className="text-sm duration-500 hover:text-zinc-500 text-[#70FF00] mr-3">
            <Twitter size={20} />
          </button>
        </Link>

        <Link href={links.LINKEDIN} target="_blank">
          <button className="text-sm duration-500 hover:text-zinc-500 text-[#70FF00] mr-3">
            <Linkedin size={20} />
          </button>
        </Link>

        <Link href={links.GITHUB} target="_blank">
          <button className="text-sm duration-500 hover:text-zinc-500 text-[#70FF00] mr-3">
            <Github size={20} />
          </button>
        </Link>

        <Link href={links.EMAIL} target="_blank">
          <button className="text-sm duration-500 hover:text-zinc-500 text-[#70FF00] mr-3">
            <Mail size={20} />
          </button>
        </Link>
      </div>

      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-[lightblue] hover:text-[#70FF00]"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-left animate-fade-in w-full md:w-2/5">
        <h2 className="text-sm text-zinc-500 ">
          Hello, I'm{' '}
          <span className="text-[#70FF00]">Adetunji Oluwaferanmi</span>, a
          passionate software engineer dedicated to crafting innovative
          solutions through code.
          <br /> Let's connect and discuss how I can contribute to your projects
          and help bring your vision to life!
        </h2>
      </div>
    </div>
  )
}
