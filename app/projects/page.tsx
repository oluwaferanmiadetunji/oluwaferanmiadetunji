import React from 'react'
import { Navigation } from '../components/nav'
import { Card } from '../components/card'
import { Article } from './article'
import { allProjects } from '../../util/constants'

export default async function ProjectsPage() {
  const sorted = allProjects.sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
  )

  return (
    <div className="relative pb-16">
      <Navigation />

      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project?.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project?.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project?.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
