"use client";

import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "./theme";
import "./fonts/StarJedi-DGRW.ttf";
import "./fonts/DistantGalaxy.ttf"

export const metadata = {
  title: "Mizugomi",
  description: "Reporta lo que Nito no ta haciendo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <Navbar />
              {children}
            </ChakraProvider>
          </CacheProvider>
        </main>
      </body>
    </html>
  );
}
