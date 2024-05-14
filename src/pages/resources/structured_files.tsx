import React, { useState, useEffect } from 'react';
import Link1 from 'next/link'
import "../../app/globals.css";
import NavBar from '@/components/NavBar';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


const ResourcesPage = () => {
    return (
    <><NavBar />

    
    
    
    <div className="container mx-auto px-4">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-lg mb-4 text-4xl font-inter tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Resources</h1>
                        <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Explore Comprehensive Resources for D2D CURE: Delve into Structural Insights, Sequence Data, and Research Publications for β-glucosidase B (BglB)</p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="/images/image15.png" alt="mockup"></img>
                    </div>
                </div>
            </section>



            
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl tracking-tight text-gray-900">Data</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        
        
        <Card className="max-w-[290px] h-[150px]">
      <CardBody className="text-3xl">
        <h1>Structure & Sequence Files</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm">
          View Files {'>'}
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[290px] h-[150px]">
      <CardBody className="text-3xl">
        <h1>Oligo Search</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm">
          Search Databases {'>'}
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[290px] h-[150px]">
      <CardBody className="text-3xl">
        <h1>Complete BgLb Sequence</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm">
          View Sequence {'>'}
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[290px] h-[150px]">
      <CardBody className="text-3xl">
        <h1>How data is calculated</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm">
         Learn More {'>'}
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[290px] h-[150px]">
      <CardBody className="text-3xl">
        <h1>How to interpret data</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm">
          Visit Calculator {'>'}
        </Link>
      </CardFooter>
    </Card>


    <Card className="max-w-[290px] h-[150px]">
      <CardBody className="text-3xl">
        <h1>Enzyme Rate Calculator</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm">
          Visit Calculator {'>'}
        </Link>
      </CardFooter>
    </Card>
</div>
</div>
</div>


<div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl tracking-tight text-gray-900">Process</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-3">
        
        <Card className="max-w-[290px] h-[150px]">
      <CardBody className="text-3xl">
        <h1>How to interpret data</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm">
          Open Manual {'>'}
        </Link>
      </CardFooter>
    </Card>


    <Card className="max-w-[290px] h-[150px]">
      <CardBody className="text-3xl">
        <h1>Publications</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm">
          Learn More {'>'}
        </Link>
      </CardFooter>
    </Card>

    </div>
    </div>
    </div>


            <div className="my-12 text-center">
                <h2 className="text-xl font-bold mb-4">Structure & Sequence Files</h2>
                <div className="flex justify-between items-center">
                    <a href="/resources/structures/BglB.pdb" download className="text-blue-600 underline hover:text-blue-800">
                        BglB.pdb
                    </a>
                    <a href="/resources/structures/BglB_foldit.zip" download className="text-blue-600 underline hover:text-blue-800">
                        BglB Foldit Files (zipped)
                    </a>
                    <a href="/resources/sequences/BglB_sequence.fasta" download className="text-blue-600 underline hover:text-blue-800">
                        BglB Fasta Sequence File
                    </a>
                </div>
            </div>

            <hr />

            <div className="my-12">
                <h2 className="text-xl text-center font-bold mb-4">Oligo Search</h2>
                <Link href="/resources/oligosearch" className="text-center text-blue-600 underline hover:text-blue-800">
                    Search for a 33-mer DNA oligomer for a specific enzyme variant.
                </Link>
            </div>

            <hr />

            <div className="my-12">
                <h2 className="text-xl text-center font-bold mb-4">Publications</h2>
                <Link href="/resources/publications" className="text-center text-blue-600 underline hover:text-blue-800">
                    Click here to see a list of publications related to this project
                </Link>
            </div>
        </div></>
    );
};

export default ResourcesPage