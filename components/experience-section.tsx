import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and educational background
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-6 space-y-6">
              <TimelineItem
                title="Chrome Extension Developer"
                company="Personal Project - Unopar Chrome Extension"
                period="March 2024 - April 2024"
                description={[
                  "Developed and launched 'Colaborar A+', a Chrome extension designed to help UNOPAR students to easily get the activities from the educational platform.",
                  "Engineered features that streamline workflow processes and improve students on getting info from the educational platform.",
                  "Implemented robust, secure background scripts using JavaScript to handle real-time data.",
                  "Managed the extension's lifecycle, from initial concept, design, development, to deployment and ongoing maintenance.",
                ]}
              />
              <TimelineItem
                title="Freelancer"
                company="Grupo Cometa de Educação"
                period="November 2023 - January 2024"
                description={[
                  "Designed and implemented a management system for scheduling and event requests in a shared auditorium within a multi-institutional environment.",
                  "Utilized Node.js, MongoDB, Express, and EJS as primary technologies, following the MVC architecture for an organized and modular structure.",
                  "Implemented scheduling features, allowing users to reserve specific dates and times for events in the auditorium.",
                  "Configured efficient e-mail notifications with nodemailer and a SMTP server.",
                ]}
              />
              <TimelineItem
                title="Freelancer"
                company="Escrituras GJ"
                period="September 2022 - October 2022"
                description={[
                  "Developed a website for Escrituras GJ, a real estate company, to serve as a digital business card and showcase their main contact information and services.",
                  "Utilized HTML, CSS, and JavaScript to create a visually appealing and interactive website.",
                  "Implemented responsive web design techniques to ensure optimal display on various devices and screen sizes.",
                ]}
              />
              <TimelineItem
                title="Freelancer"
                company="Matsuri Trade Importação e Comércio Ltda"
                period="February 2022 - March 2022"
                description={[
                  "Collaborated remotely with Matsuri Trade Importação e Comércio Ltda to make code modifications to their main company website built with WordPress.",
                  "Implemented changes to improve the website's functionality, user experience, and search engine optimization (SEO).",
                  "Utilized HTML5, JavaScript, and CSS to make frontend enhancements and ensure a visually appealing and interactive website.",
                ]}
              />
            </TabsContent>
            <TabsContent value="education" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>UNOPAR (Universidade Norte do Paraná)</CardTitle>
                  <CardDescription>Technologist - Development and System Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Currently pursuing the degree</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Instituto Federal de Educação, Ciência e Tecnologia da Bahia, Campus Irecê</CardTitle>
                  <CardDescription>Technologist - Development and System Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Incomplete</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fundação Bradesco, Irecê</CardTitle>
                  <CardDescription>High School</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Completed in 2015</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="certificates" className="mt-6 space-y-6">
              <ul className="space-y-4">
                <li className="p-4 border rounded-lg">
                  <h3 className="font-medium">NDG Linux Essentials English 0323 cga</h3>
                  <p className="text-sm text-muted-foreground">Cisco Network Academy, 70H</p>
                </li>
                <li className="p-4 border rounded-lg">
                  <h3 className="font-medium">JavaScript Basic Certification</h3>
                  <p className="text-sm text-muted-foreground">HackerRank</p>
                </li>
                <li className="p-4 border rounded-lg">
                  <h3 className="font-medium">Quality Assurance Developer Certification</h3>
                  <p className="text-sm text-muted-foreground">Freecodecamp.org, 300H</p>
                </li>
                <li className="p-4 border rounded-lg">
                  <h3 className="font-medium">Bootcamp EDUZZ Full Stack Developer</h3>
                  <p className="text-sm text-muted-foreground">Digital Innovation One, 95H</p>
                </li>
                <li className="p-4 border rounded-lg">
                  <h3 className="font-medium">Responsive Web Design</h3>
                  <p className="text-sm text-muted-foreground">Freecodecamp.org, 300H</p>
                </li>
                <li className="p-4 border rounded-lg">
                  <h3 className="font-medium">GIT Essential Training</h3>
                  <p className="text-sm text-muted-foreground">Linkedin Learning, 3H</p>
                </li>
                <li className="p-4 border rounded-lg">
                  <h3 className="font-medium">Become a Web Developer</h3>
                  <p className="text-sm text-muted-foreground">Linkedin Learning, 22H</p>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ title, company, period, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {company} | {period}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

