import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Escrituras GJ website",
    url: "https://escriturasgj-he4ktavid-nivandosoares.vercel.app/",
    desc: "Developed a website serving as a business card for a real estate company, containing their main contact links and services. Implemented using HTML, CSS, and JavaScript.",
    highlight: "Frontend development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Free ROMS project",
    url: "https://free-roms.fly.dev/",
    desc: "Basic CRUD operations in MongoDB database using EJS as the view engine and Node.js Express as the Backend.",
    highlight: "Fullstack development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "caTinder with catapi",
    url: "https://catinder.vercel.app/",
    desc: "Tinder like layout developed with HTML, CSS, and JavaScript, and populated with images consumed from the catapi REST API.",
    highlight: "Frontend development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Consuming the GitHub API with React",
    url: "https://github-api-interface-dio.vercel.app/",
    desc: "Project made during the EDUZZ Full Stack Developer Bootcamp.",
    highlight: "Backend development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "SAGES",
    url: "https://cometa.fly.dev/",
    desc: "A scheduling app made with Node.js, Express, and MongoDB.",
    highlight: "Fullstack development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Unopar crawler web extension",
    url: "https://chromewebstore.google.com/detail/colaborar-a+/aigpjgbdkakibodbblbjfnnbgaajkbpn?hl=en-US&utm_source=ext_sidebar",
    desc: "A Chrome extension designed to help UNOPAR students to easily get the activities from the educational platform. Available on the Chrome Web Store.",
    highlight: "Chrome Extension",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <Badge>{project.highlight}</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{project.desc}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

