"use client"
import { NextUIProvider } from "@nextui-org/react"
import Navigation from '@/components/navigation/navigation'
import { darkTheme } from "@/tools/themes/darkTheme"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>EAP - Easy Assignment Project</title>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body>
        <NextUIProvider theme={darkTheme}>
          <Navigation></Navigation>
          {children}      
        </NextUIProvider>        
      </body>
    </html>
  )
}
