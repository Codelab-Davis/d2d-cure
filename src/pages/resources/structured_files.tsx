import React, { useState, useEffect } from 'react';
import Link1 from 'next/link'
import "../../app/globals.css";
import NavBar from '@/components/NavBar';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import Footer from '@/components/Footer';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";

const ResourcesPage = () => {
    return (
    <><NavBar />
        <Breadcrumbs style = {{marginBottom: '10px'}}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Resources</BreadcrumbItem>
          <BreadcrumbItem>Oligo Search</BreadcrumbItem>
        </Breadcrumbs>
    <div className="container mx-auto px-4">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-lg mb-4 text-4xl font-inter tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Resources</h1>
                        <p className="max-w-lg mb-6 font-light text-sec lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Explore Comprehensive Resources for D2D CURE: Delve into Structural Insights, Sequence Data, and Research Publications for β-glucosidase B (BglB)</p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="/resources/images/resource.png" alt="mockup"></img>
                    </div>
                </div>
            </section>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl pb-3 tracking-tight text-gray-900">Data</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light">
        <h1 className='pl-5 pb-5 pt-2'>Structure & Sequence Files</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
          View Files {'>'}
        </Link>
      </CardFooter>
    </Card>
    <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light ">
        <h1 className='pl-5 pb-5 pt-2'>Oligo Search</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="/resources/oligosearch"
          className="text-sm pl-4 pb-3">
          Search Databases {'>'}
        </Link>
      </CardFooter>
    </Card>
    <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light ">
        <h1 className='pl-5 pb-5 pt-2'>Complete BgLb Sequence</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
          View Sequence {'>'}
        </Link>
      </CardFooter>
    </Card>
    <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light ">
        <h1 className='pl-5 pb-5 pt-2'>How data is calculated</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
         Learn More {'>'}
        </Link>
      </CardFooter>
    </Card>
    <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light">
        <h1 className='pl-5 pb-5 pt-2'>How to interpret data</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
          Visit Calculator {'>'}
        </Link>
      </CardFooter>
    </Card>
    <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light ">
        <h1 className='pl-5 pb-5 pt-2'>Enzyme Rate Calculator</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
          Visit Calculator {'>'}
        </Link>
      </CardFooter>
    </Card>
</div>
</div>
</div>
<div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
        <h2 className="text-5xl tracking-tight pb-3 text-gray-900">Process</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-3">
        <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl">
        <h1 className='pl-5 pb-5 pt-2'>How to interpret data</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
          Open Manual {'>'}
        </Link>
      </CardFooter>
    </Card>
    <Card className="max-w-[330px] h-[170px] ">
      <CardBody className="text-4xl font-light ">
        <h1 className='pl-5 pb-5 pt-2'>Publications</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="/resources/publications"
          className="text-sm pl-4 pb-3">
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
        </div> 
             <Footer /></>
    );
};

export default ResourcesPage