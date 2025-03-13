import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Languages & Achievements</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My language proficiency and professional achievements
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
              <CardDescription>My language proficiency</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">English</span>
                <Badge>C1 Certified (EFSET)</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Portuguese</span>
                <Badge>Native</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Professional recognitions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Successfully completed LinkedIn Skill Assessments in multiple technologies, demonstrating proficiency in
                various technical domains.
              </p>
              <p>
                Developed and published a Chrome extension that helps UNOPAR students access educational content more
                efficiently.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

