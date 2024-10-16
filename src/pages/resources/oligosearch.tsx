// Important: does not yet support multiple proteins. It defaults to the BglB database regardless of what enzyme the user selects. All the major logic is done though
import NavBar from '@/components/NavBar';
import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Footer from '@/components/Footer';

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
      setOligosDisplay(`${foundOligo.oligo}`);
    } else {
      setOligosDisplay("No matching oligo found for the specified variant.");
    }
  };

  const sizes = ["sm", "md", "lg"];
  const variants = ["flat", "bordered", "underlined", "faded"];

  return (
    <>
      <NavBar />
      <div className="m-24 bg-white">
        <div className="col-span-1 items-center">
          <Breadcrumbs
            itemClasses={{
              item: "text-black data-[current=true]:text-gray-300", // White text for breadcrumb items, lighter for current item
              separator: "text-black/40", // Lighter white for separators
            }}
          >
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem>Resources</BreadcrumbItem>
            <BreadcrumbItem>Oligo Search</BreadcrumbItem>
          </Breadcrumbs>
          <div className="pt-8">
            <h1 className="mb-4 text-4xl font-inter md:text-4xl xl:text-5xl dark:text-white">Oligo Search</h1>
            <p className="mb-2 text-left" style={{ color: 'grey', marginBottom: '80px' }}>
              Select the enzyme and enter an enzyme variant code to search for a reverse-compliment, <br />
              codon-optimized DNA 33-mer for use as a primer for the gene mutant.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div style={{ marginBottom: '10px', marginRight: '50px' }}>
                  <label htmlFor="enzyme" style={{ display: 'block', marginBottom: '10px' }}>Enzyme</label>
                  {sizes.includes("sm") && (
                    <Select
                      size="sm"
                      id="enzyme"
                      value={enzyme}
                      onChange={(e) => setEnzyme(e.target.value)}
                      label="Select Enzyme"
                      style={{ width: '300px', borderRadius: '8px' }}
                    >
                      {enzymeList.map((enzyme) => (
                        <SelectItem key={enzyme.id} value={enzyme.abbr}>
                          {enzyme.abbr}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                </div>
                <div>
                  <label htmlFor="enzymeVariant">Enzyme Variant</label>
                  {variants.map((variant) => (
                    sizes.map((size) => (
                      variant === "bordered" && size === "lg" && (
                        <div key={`${size}-${variant}`} style={{ marginTop: '10px' }}>
                          <Input
                            key={`${size}-${variant}`}
                            type="text"
                            id="enzymeVariant"
                            value={enzymeVariant}
                            onChange={(e) => setEnzymeVariant(e.target.value)}
                            placeholder="Search"
                            size={size}
                            variant={variant}
                            style={{ width: '200px' }}
                            radius="sm"
                          />
                        </div>
                      )
                    ))
                  ))}
                </div>
                <Button
                  onClick={handleSubmit}
                  style={{ marginTop: '35px', height: '45px', backgroundColor: "#06B7DB", color: "white" }}
                  radius="sm"
                >
                  Search
                </Button>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <label style={{ padding: '10px' }}> Results </label>
              {oligosDisplay && (
                <div className="mt-4" style={{ padding: '10px', color: 'grey' }}>
                  <p style={{ marginBottom: '20px' }}>
                    The optimized DNA oligomer sequence to use as a DNA primer for the <br />
                    production of BgIB variant <div style={{ color: 'black', display: 'inline', fontWeight: 'bold' }}>{enzymeVariant}</div> is:
                  </p>
                  <div style={{ color: 'black', fontWeight: 'bold' }}>{oligosDisplay}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OligoSearchPage;
