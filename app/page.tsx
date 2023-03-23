'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import NavBar from './components/navBar'
import Header from './components/Header'
import SectionOne from './components/sectionOne'
import SectionTwo from './components/sectionTwo'
import SectionThree from './components/sectionThree'
import Footer from '../app/components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar />
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <Footer />
    </>
  )
}
