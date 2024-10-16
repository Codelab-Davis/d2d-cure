
import React from 'react';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


const test = () => {

  return (
<><NavBar/>
<div className=" m-24 bg-white ">
    <div className="grid grid-cols-2 gap-36">
        <div className="col-span-1 items-center">
        <Breadcrumbs style = {{marginBottom: '10px'}}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Resources</BreadcrumbItem>
        </Breadcrumbs>
        <div className="col-span-1 items-center pt-16">
            <h1 className="max-w-lg mb-4 text-4xl font-inter tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Resources</h1>
            <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">Explore Comprehensive Resources for D2D CURE: Delve into Structural Insights, Sequence Data, and Research Publications for β-glucosidase B (BglB)</p>
        </div>
        </div>
        <div className="col-span-1 lg:flex ">
            <img src="/resources/images/resource.png" alt="mockup"></img>
        </div>
    </div>
</div>



<div className="m-24 ">
            <h1 className="max-w-lg mb-4 text-5xl pb-4 font-inter tracking-tight leading-none dark:text-white">Data</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-10">
  <div>

  <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light overflow-hidden">
        <h1 className='pl-4 pb-5 pt-2'>Structure & Sequence Files</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
          View Files {'>'}
        </Link>
      </CardFooter>
    </Card>
  </div>



  <div>
  <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light overflow-hidden ">
        <h1 className='pl-4 pb-5 pt-2'>Oligo Search</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="/resources/oligosearch"
          className="text-sm pl-4 pb-3">
          Search Databases {'>'}
        </Link>
      </CardFooter>
    </Card>
  </div>


  <div>
  <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light overflow-hidden ">
        <h1 className='pl-4 pb-5 pt-2'>Complete BgLb Sequence</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
          View Sequence {'>'}
        </Link>
      </CardFooter>
    </Card>
  </div>


  <div><Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light overflow-hidden ">
        <h1 className='pl-4 pb-5 pt-2'>How data is calculated</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
         Learn More {'>'}
        </Link>
      </CardFooter>
    </Card>
    </div>


  <div>    
    <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light overflow-hidden">
        <h1 className='pl-4 pb-5 pt-2'>How to interpret data</h1>
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


  <div>    
    <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light overflow-hidden ">
        <h1 className='pl-4 pb-5 pt-2'>Enzyme Rate Calculator</h1>
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







    <div className="m-24 ">
            <h1 className="max-w-lg pb-4 mb-4 text-5xl font-inter tracking-tight leading-none dark:text-white">Process</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
  <div>

  <Card className="max-w-[330px] h-[170px]">
      <CardBody className="text-4xl font-light overflow-hidden">
        <h1 className='pl-4 pb-5 pt-2'>Lab Manual</h1>
      </CardBody>
      <CardFooter>
        <Link
          href="https://github.com/nextui-org/nextui"
          className="text-sm pl-4 pb-3">
          Open Manual {'>'}
        </Link>
      </CardFooter>
    </Card>
  </div>

  <div>

<Card className="max-w-[330px] h-[170px]">
    <CardBody className="text-4xl font-light overflow-hidden">
      <h1 className='pl-4 pb-5 pt-2'>Publications</h1>
    </CardBody>
    <CardFooter>
      <Link
        href="https://github.com/nextui-org/nextui"
        className="text-sm pl-4 pb-3">
        Learn More {'>'}
      </Link>
    </CardFooter>
  </Card>
</div>


</div>
    </div>





<div className=" m-24 p-12 bg-gray-200 ">
    <div className="grid grid-cols-2 gap-36">
        <div className="col-span-1 items-center pt-20">
            <h1 className="max-w-lg mb-4 text-4xl font-inter tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Resources</h1>
            <p className="max-w-lg mb-6 font-light text-sec lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Explore Comprehensive Resources for D2D CURE: Delve into Structural Insights, Sequence Data, and Research Publications for β-glucosidase B (BglB)</p>
        </div>
        <div className="col-span-1 lg:flex ">
            <img src="/resources/images/resource.png" alt="mockup"></img>
        </div>
    </div>
</div>
<Footer/>

</>
  );
};

export default test;