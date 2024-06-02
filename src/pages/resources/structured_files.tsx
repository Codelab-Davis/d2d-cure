
import React from 'react';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


const test = () => {

  return (
<><NavBar/>
<div className=" m-24 bg-white ">
        <div className="col-span-1 items-center">
        <Breadcrumbs style = {{marginBottom: '8px'}}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Resources</BreadcrumbItem>
          <BreadcrumbItem>Structure & Sequence Files</BreadcrumbItem>
        </Breadcrumbs>
        <div className="pt-6">
            <h1 className="mb-4 text-4xl font-inter md:text-5xl xl:text-5xl dark:text-white">Structure & Sequence Files</h1>
</div>
</div>
</div>


<div className="m-24">
            <h1 className="max-w-lg mb-4 text-3xl pb-4 text-slate-500 font-inter tracking-tight leading-none dark:text-white">β-glucosidase B (BglB)</h1>
            
            <div className="grid grid-cols-3 grid-rows-1 gap-10">
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


</div>
    </div>







    <div className="m-24 ">
            <h1 className=" pb-4 mb-4 text-3xl text-slate-500 font-inter dark:text-white ">Assay Data Spreadsheet Templates</h1>
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
<Footer/>

</>
  );
};

export default test;