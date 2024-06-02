
import React from 'react';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import NavBar from '@/components/NavBar';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import Footer from '@/components/Footer';


const test = () => {

  return (
<><NavBar/>
<div className=" m-24 bg-white ">
        <div className="col-span-1 items-center">
        <Breadcrumbs style = {{marginBottom: '10px'}}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Resources</BreadcrumbItem>
          <BreadcrumbItem>Publications</BreadcrumbItem>
        </Breadcrumbs>
        <div className="pt-10">
            <h1 className="max-w-lg mb-4 text-4xl font-inter tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Publications</h1>
            <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">The following papers are related to the D2D Project.</p>
        <ol className="list-decimal">
          <li>Carlin, D.A.; Caster, R.W.; Wang, X.; Betzenderfer, S.A.; Chen, C.X.; Duong, V.M.; Ryklansky, C.V.; Alpekin, A.; Beaumont, N.; Kapoor, H.; Kim, N.; Mohabbot, H.; Pang, B.; Teel, R.; Whithaus, L.; Tagkopoulos, I.; & Siegel, J.B. (2016) “Kinetic Characterization of 100 Glycoside Hydrolase Mutants Enables the Discovery of Structural Features Correlated with Kinetic Constants.” PLoS ONE 11(1), e0147596.</li>
          <li>Carlin, D.A.; Hapig-Ward S.; Chan, B.W.; Damrau, N.; Riley, M.; Caster, R.W.; Bethards, B.; & Siegel, J.B. (2017) “Thermal stability and kinetic constants for 129 variants of a family 1 glycoside hydrolase reveal that enzyme activity and stability can be separately designed.” PLoS ONE 12(5), e0176255.</li>
          <li> Huang, P.; Chu, S.K.; Frizzo, H.N.; Connolly, M.P.; Caster, R.W.; & Siegel, J. B. (2020) “Evaluating Protein Engineering Thermostability Prediction Tools Using an Independently Generated Dataset..” ACS Omega 5(12), 6487–6493.</li>
        </ol>
</div>
</div>
</div>
<Footer/>
</>
  );
};

export default test;