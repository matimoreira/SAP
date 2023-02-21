"use client"
import { NextUIProvider } from "@nextui-org/react"
import Navigation from '@/components/navigation/navigation'
import { darkTheme } from "@/tools/themes/darkTheme"
import { useState } from "react"
import { usePathname } from 'next/navigation';
import AppLayout from '@/components/appLayout/appLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [page, setPage] = useState(usePathname() === "/"? "/": usePathname());
  console.log(page);
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
          <AppLayout>
            <Navigation page={page} setPage={setPage}></Navigation>
            {children}
            {/*Footer */}
          </AppLayout> 
        </NextUIProvider>        
      </body>
    </html>
  )
}
