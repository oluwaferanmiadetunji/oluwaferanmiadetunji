import { notFound } from 'next/navigation'
import { allProjects } from '../../../util/constants'
import { Header } from './header'
import Image from 'next/image'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allProjects.map((p) => ({
    slug: p.slug,
  }))
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug
  const project = allProjects.find((project) => project.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-zinc-50 min-h-screen bg-gradient-to-tl from-black via-zinc-900 to-black pb-10">
      <Header project={project} />

      {project?.image && (
        <div className="flex flex-col items-center justify-center w-screen overflow-hidden">
          <Image
            src={project?.image}
            width={500}
            height={500}
            alt={project?.title}
          />
        </div>
      )}

      <div className="mx-auto my-10 py-10 max-w-6xl w-6xl px-6 lg:px-8 flex flex-col items-center">
        {project?.info && (
          <div>
            <h2 className="text-2xl text-zinc-500 mb-2 pb-2 font-bold">
              About this project
            </h2>

            <hr className="mb-8" />

            {project?.info}
          </div>
        )}
      </div>
    </div>
  )
}
