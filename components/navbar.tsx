"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Nivando Soares
        </Link>

        {isMobile ? (
          <MobileNav />
        ) : (
          <div className="flex items-center gap-4">
            <DesktopNav />
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="#home" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#skills" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Skills</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#experience" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Experience</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  return (
    <div className="flex items-center gap-2">
      <ModeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Nivando Soares</SheetTitle>
            <SheetDescription>Fullstack Developer & Designer</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            <Link href="#home" className="text-lg font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#skills" className="text-lg font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-lg font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  return isMobile
}

