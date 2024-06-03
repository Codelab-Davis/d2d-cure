import React, { useContext } from 'react';
import "../app/globals.css"; 
import NavBar from '@/components/NavBar';
import { useUser } from '@/components/UserProvider';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import {Button} from "@nextui-org/react";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
    <NavBar />
<div className="m-24 bg-white ">
<div className="mt-8 text-center">
        <h1 className="text-6xl mb-5 font-semibold" style={{ color: '#06B7DB' }}>D2D Database</h1>
        <h1 className="text-2xl font-semibold">Unpacking protein structure-to-function relationships</h1>
        <h1 className="text-2xl mb-4 font-semibold">through large, high resolution, quantitative datasets.</h1>
        <Button className='mb-40' onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semi-bold', backgroundColor: "#06B7DB", color: "white"}}>
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
            <p className="max-w-lg mb-6 pb-10font-light text-gray-500 text-lg dark:text-gray-200">The Design-to-Data workflow was developed in the Siegel Lab with the central research of improving the current predictive limitations of protein modeling software by functionally characterizing single amino acid mutants in a robust model system. This workflow is undergraduate-friendly, and students have an opportunity to practice protein design, kunkel mutagenesis, and enzyme characterization assays. The workflow is intuitively organized through engineering’s conceptual progression of design-build-test. </p>
          <Button variant="bordered" onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semi-bold', borderColor: "#06B7DB", color: "#06B7DB"}}>
          Learn More
        </Button>
        </div>
        <div className="col-span-1 h-30 ">
            <img src="/resources/images/Homepage.png" alt="mockup"></img>
        </div>

    </div>
</div>
      </div>

  );
}