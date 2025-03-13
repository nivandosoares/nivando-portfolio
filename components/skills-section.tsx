import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Toolbox</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical expertise and tools I work with
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="extras">Extras</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                  <CardDescription>Technologies for building user interfaces</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Bootstrap</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="backend" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Backend Development</CardTitle>
                  <CardDescription>Server-side technologies and databases</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">SQLite</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="languages" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                  <CardDescription>Languages I'm proficient in</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Dart</Badge>
                  <Badge variant="secondary">C</Badge>
                  <Badge variant="secondary">Java</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cloud" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cloud Services</CardTitle>
                  <CardDescription>Cloud platforms and deployment services</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Heroku</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Google Cloud</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="design" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design Tools</CardTitle>
                  <CardDescription>Tools for graphic and UI design</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Adobe Photoshop</Badge>
                  <Badge variant="secondary">Krita</Badge>
                  <Badge variant="secondary">Canva</Badge>
                  <Badge variant="secondary">GIMP</Badge>
                  <Badge variant="secondary">Inkscape</Badge>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="extras" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Extras</CardTitle>
                  <CardDescription>Additional tools and technologies</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Markdown</Badge>
                  <Badge variant="secondary">NPM</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">Notion</Badge>
                  <Badge variant="secondary">Git</Badge>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">LinkedIn Skill Assessments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "C Language",
              "MongoDB",
              "HTML",
              "JavaScript",
              "Node.js",
              "Frontend Development",
              "CSS",
              "React JS",
              "Agile Methodologies",
              "Linux",
              "MySQL",
              "GIT",
              "jQuery",
              "OOP",
              "Windows Bash",
              "IT Operations",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2 p-3 rounded-lg border">
                <span className="text-amber-500">🏅</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

