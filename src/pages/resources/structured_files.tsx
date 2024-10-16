
import React from 'react';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import NavBar from '@/components/NavBar';
import {Button} from "@nextui-org/react";
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
            
            <div className="grid grid-cols-4 grid-rows-1">


  <div>
  <Card className="max-w-[280px] h-[190px]">
      <CardBody className="text-4xl pt-6 font-light overflow-hidden">
      <img src="/resources/images/download.png" className="pl-4 pt-4 w-14 h-15" alt="mockup"></img>
        <h1 className='text-xl pl-4 pt-2 pl-5 font-semibold'>BglB.pdb</h1>
      </CardBody>
      <CardFooter>
      <Button variant="bordered" onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semibold', borderColor: "#06B7DB", borderWidth: '3px', color: "#06B7DB"}}>
          Download
        </Button>
      </CardFooter>
    </Card>
  </div>


  <div>
  <Card className="max-w-[280px] h-[190px]">
      <CardBody className="text-4xl pt-6 font-light overflow-hidden">
      <img src="/resources/images/download.png" className="pl-4 pt-4 w-14 h-15" alt="mockup"></img>
        <h1 className='text-xl pl-4 pt-2 pl-5 font-semibold'>BglB.pdb</h1>
      </CardBody>
      <CardFooter>
      <Button variant="bordered" onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semibold', borderColor: "#06B7DB", borderWidth: '3px', color: "#06B7DB"}}>
          Download
        </Button>
      </CardFooter>
    </Card>
  </div>


  <div>

  <Card className="max-w-[280px] h-[190px]">
      <CardBody className="text-4xl pt-6 font-light overflow-hidden">
      <img src="/resources/images/download.png" className="pl-4 pt-4 w-14 h-15" alt="mockup"></img>
        <h1 className='text-xl pl-4 pt-2 pl-5 font-semibold'>BglB.pdb</h1>
      </CardBody>
      <CardFooter>
      <Button variant="bordered" onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semibold', borderColor: "#06B7DB", borderWidth: '3px', color: "#06B7DB"}}>
          Download
        </Button>
      </CardFooter>
    </Card>
  </div>


</div>
    </div>







    <div className="m-24 ">
            <h1 className=" pb-4 mb-4 text-3xl text-slate-500 font-inter dark:text-white ">Assay Data Spreadsheet Templates</h1>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
            
            
            <div>

<Card className="max-w-[280px] h-[190px]">
    <CardBody className="text-4xl pt-6 font-light overflow-hidden">
    <img src="/resources/images/download.png" className="pl-4 pt-4 w-14 h-15" alt="mockup"></img>
      <h1 className='text-xl pl-4 pt-2 pl-5 font-semibold'>BglB.pdb</h1>
    </CardBody>
    <CardFooter>
    <Button variant="bordered" data-hover='bg-blue-300' onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semibold', borderColor: "#06B7DB", borderWidth: '3px', color: "#06B7DB"}}>
        Download
      </Button>
    </CardFooter>
  </Card>
</div>


<div>

<Card className="max-w-[280px] h-[190px]">
    <CardBody className="text-4xl pt-6 font-light overflow-hidden">
    <img src="/resources/images/download.png" className="pl-4 pt-4 w-14 h-15" alt="mockup"></img>
      <h1 className='text-xl pl-4 pt-2 pl-5 font-semibold'>BglB.pdb</h1>
    </CardBody>
    <CardFooter>
    <Button variant="bordered" onPress={() => window.location.href = '/login'} style={{ width: '300px', height: '45px', fontWeight: 'semibold', borderColor: "#06B7DB", borderWidth: '3px', color: "#06B7DB"}}>
        Download
      </Button>
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