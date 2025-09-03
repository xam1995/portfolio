import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/style/ThemeRegistry";
import {getTabTitle} from "@/services/about/service";
import {ReactNode} from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: getTabTitle()
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
            {children}
        </ThemeRegistry>
        </body>
        </html>
    );
}
