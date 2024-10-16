import React, { useContext } from 'react';
import "../app/globals.css"; 
import NavBar from '@/components/NavBar';
import { useUser } from '@/components/UserProvider';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import {Button} from "@nextui-org/react";
import Footer from '@/components/Footer';


export default function Home() {
  const { user } = useUser();

  return (
    <div>
    <NavBar />
<div className="m-24 bg-white ">
<div className="mt-8 text-center">
  <div className="flex justify-center pb-2 items-center">


  <img src="/resources/images/D2D_Logo.svg" className="h-20 pr-6 pb-3" alt="logo" />
  <h1 className="text-6xl mb-5 font-semibold" style={{ color: '#06B7DB' }}>Database</h1>

  </div>
        <h1 className="text-2xl font-semibold">Unpacking protein structure-to-function relationships</h1>
        <h1 className="text-2xl mb-5 font-semibold">through large, high resolution, quantitative datasets.</h1>
        <Button className='mb-40' onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semibold', backgroundColor: "#06B7DB", color: "white"}}>
          About us
        </Button>
        {/* Conditionally render message */}
        {user?.user_name && (
          <p>Hello, {user?.user_name}</p>
        )}
      </div>

    <div className="grid grid-cols-2 gap-40 mt-10">
        <div className="col-span-1 pt-1">
        <p className="max-w-lg font-semibold text-gray-500 text-lg dark:text-gray-200" style={{ color: '#06B7DB' }}>Our mission </p>            
        <h1 className=" mb-4 text-4xl font-inter dark:text-white">Innovative Protein Engineering</h1>
            <p className="mb-6 pb-6 text-gray-500 text-lg dark:text-gray-200">The Design-to-Data workflow was developed in the Siegel Lab with the central research of improving the current predictive limitations of protein modeling software by functionally characterizing single amino acid mutants in a robust model system. This workflow is undergraduate-friendly, and students have an opportunity to practice protein design, kunkel mutagenesis, and enzyme characterization assays. The workflow is intuitively organized through engineering’s conceptual progression of design-build-test. </p>
          <Button variant="bordered" onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semibold', borderColor: "#06B7DB", borderWidth: '3px', color: "#06B7DB"}}>
          Learn More
        </Button>
        </div>
        <div className="col-span-1 h-30 ">
            <img src="/resources/images/Homepage.png" alt="mockup"></img>
        </div>
    </div>

    <div className="m-24 bg-white ">
    <div className="grid grid-cols-2 gap-10 mt-5 items-center">
        <div className="col-span-1 pt-1">
        <p className="max-w-lg font-semibold text-gray-500 text-lg dark:text-gray-200" style={{ color: '#06B7DB' }}>HOW IT WORKS</p>            
        <h1 className=" mb-4 text-4xl font-inter dark:text-white">Analyze and Submit</h1>
            <p className="max-w-lg mb-6 pb-10font-light text-gray-500 text-lg dark:text-gray-200">After conducting research on their enzyme, students will upload and submit their data for approval. </p>
        </div>
        <div className="col-span-1 h-30 ">
            <img src="/resources/images/card_2.png" alt="mockup"></img>
        </div>
    </div>
    </div>


    <div className="m-24 bg-white ">
    <div className="grid grid-cols-2 gap-40 mt-10 items-center">
        <div className="col-span-1 h-30 ">
            <img src="/resources/images/card_large.png" alt="mockup"></img>
        </div>
        <div className="col-span-1 pt-1">
        <h1 className=" mb-4 text-4xl font-inter dark:text-white">Curate</h1>
            <p className="max-w-lg mb-6 pb-10font-light text-gray-500 text-lg dark:text-gray-200">Instructors and faculty members can approve or reject submitted data.</p>
        </div>
    </div>
    </div>

    

    <div className="m-24 bg-white ">
    <div className="grid grid-cols-2 gap-10 mt-10 items-center">
        <div className="col-span-1 pt-1">
        <h1 className=" mb-4 text-4xl font-inter dark:text-white">Characterize</h1>
            <p className="max-w-lg mb-6 pb-10font-light text-gray-500 text-lg dark:text-gray-200">Once the data is approved it will be available for the public to view.</p>
        </div>
        <div className="col-span-1 h-35 ">
            <img src="/resources/images/card_3.png" alt="mockup"></img>
        </div>
    </div>
    </div>

<div className='flex text-center justify-center'>
    <Button className='mb-40' onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semi-bold', backgroundColor: "#06B7DB", color: "white"}}>
          Submit Data
        </Button>
        </div>
</div>
<Footer />
      </div>

  );
}