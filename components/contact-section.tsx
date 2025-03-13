import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind? Let's work together!
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your Message" className="min-h-[120px]" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Connect with me</CardTitle>
              <CardDescription>Find me on these platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link
                href="https://github.com/nivandosoares"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/nivandosoares</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nivando"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/nivando</span>
              </Link>
              <Link
                href="https://twitter.com/nevandu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span>twitter.com/nevandu</span>
              </Link>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors">
                <Mail className="h-5 w-5" />
                <span>contact@nivandosoares.dev</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

