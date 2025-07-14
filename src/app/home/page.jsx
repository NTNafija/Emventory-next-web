import FAQ from '@/components/Home/FAQ'
import Hero from '@/components/Home/Hero'
import ProbSolution from '@/components/Home/ProbSolution'
import ScrollSplitLayout from '@/components/Home/ScrollSplitLayout'
import SideScroll from '@/components/Home/SideScroll'
import Footer from '@/components/Navbar/Footer'
import Nav from '@/components/Navbar/Nav'
import { Scroll } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <>
    <div >
       <Hero /> 
       <SideScroll />
       <ProbSolution />
       <ScrollSplitLayout />
       <FAQ />
       <Footer />

    </div>
   

    </>
  )
}

export default page