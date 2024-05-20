// Important: does not yet support multiple proteins. It defaults to the BglB database regardless of what enzyme the user selects. All the major logic is done though

import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

const OligoSearchPage = () => {
  const { user } = useUser();

  console.log(user);
  const [enzymeList, setEnzymeList] = useState<any[]>([]);
  const [enzyme, setEnzyme] = useState('');
  const [enzymeVariant, setEnzymeVariant] = useState('');
  const [oligosData, setOligosData] = useState<any[]>([]);
  const [oligosDisplay, setOligosDisplay] = useState("");
  const [filePath, setFilePath] = useState('/path/to/your/file.txt');


  useEffect(() => {
    const fetchEnzymes = async () => {
      const response = await fetch('/api/getEnzymes');
      const data = await response.json();
      setEnzymeList(data);
    };
    const fetchOligosData = async () => {
      const response = await fetch('/api/getOligos');
      const data = await response.json();
      setOligosData(data);
    };

    fetchEnzymes();
    fetchOligosData();
  }, []);

  const handleSubmit = () => {
    const foundOligo = oligosData.find(oligo => oligo.variant === enzymeVariant);
    if (foundOligo) {
      setOligosDisplay(`The optimized DNA oligomer sequence to use as a DNA primer for the production of ${enzyme} variant ${enzymeVariant} is: ${foundOligo.oligo}`);
    } else {
      setOligosDisplay("No matching oligo found for the specified variant.");
    }
  };

  const sizes = ["sm", "md", "lg"];
  const variants = ["flat", "bordered", "underlined", "faded"];
  return (
    <div className="flex justify-center items-center p-4" style={{ height: '100vh', display: 'flex', justifyContent: 'flex-start', paddingLeft: '100px'}}>
      <div className="text-left">
        <Breadcrumbs style = {{marginBottom: '10px'}}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Resources</BreadcrumbItem>
          <BreadcrumbItem>Oligo Search</BreadcrumbItem>
        </Breadcrumbs>
        <h1 style={{ fontWeight: '100px', fontSize: '40px', marginBottom: '10px'}}>Oligo Search</h1>
        <p className="mb-2 text-left" style={{color: 'grey', marginBottom: '80px'}}>Select the enzyme and enter an enzyme variant code to search for a reverse-compliment, <br></br>codon-optimized DNA 33-mer for use as a primer for the gene mutant.</p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div style={{marginBottom: '10px', marginRight: '50px'}}>
              <label htmlFor="enzyme" className="font-bold" style={{ fontWeight: 'bold', display: 'block'}}>Enzyme</label>
              {sizes.map((size) => (
                size === "sm" && (
                  <Select
                    size = {size}
                    id="enzyme"
                    value={enzyme}
                    onChange={(e) => setEnzyme(e.target.value)}
                    label="Select Enzyme"
                    style={{ width: '300px'}}
                  >
                    {enzymeList.map((enzyme) => (
                      <SelectItem key={enzyme.id} value={enzyme.abbr}>{enzyme.abbr}</SelectItem>
                    ))}
                  </Select>
                )))}
          </div>
          <div style={{marginBottom: '10px'}}>
            <label htmlFor="enzymeVariant" className="font-bold" style={{ fontWeight: 'bold', marginBottom: '10px'}}>Enzyme Variant</label>
            {sizes.map((size) => (
              size === "lg" && (
                <Input
                  key={size}
                  type="text"
                  id="enzymeVariant"
                  value={enzymeVariant}
                  onChange={(e) => setEnzymeVariant(e.target.value)}
                  placeholder="Search"
                  size={size}
                  style={{width: '200px', borderRadius: '10px'}}
                />
              )
            ))}
          </div>

            <Button onClick={handleSubmit} style = {{marginTop: '25px', height: '45px', backgroundColor: "#06B7DB", color: "white"}}>
                        Search
            </Button>

          </div>
        </div>
        <Card style = {{marginTop: '30px', width: '800px'}}>
          <CardBody style = {{marginLeft: '10px', marginTop: '10px'}}>
            <label style={{ fontWeight: '100px' , fontSize: '25px', padding: '10px'}}> Results </label>
            {oligosDisplay && <div className="mt-4 font-bold" style ={{padding: '10px', color: 'grey'}}>{oligosDisplay}</div>}
          </CardBody>
      </Card>

      </div>
    </div>
  );
};

export default OligoSearchPage;