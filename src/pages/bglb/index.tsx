import React, { useState, ChangeEvent } from 'react';
import axios, { AxiosResponse } from 'axios';

import { fontString } from 'chart.js/helpers';
import { parse } from 'path';


function KineticTable() {
  const MetaData: React.FC<{data:any}> = ({data}) => {
    if (data == null) {
      return (<div></div>)
    }
    console.log("HELLO");
    console.log(data);
    return (
      <div>
        yeild is {data.yield}
        <br />
        assayed on {data.assay_date} by {data.user_name}
        <br />
        purified on {data.purification_date}
        <br />
        dilution {data.dilution}
      </div>
    )
  }

  interface TableProps {
    data: string[][];
}

const TableRow: React.FC<{ rowData: string[] }> = ({ rowData }) => {
    return (
        <tr>
            {rowData.map((item, index) => (
                <td key={index}>{item}</td>
            ))}
        </tr>
    );
};

const TableHeaderRow: React.FC<{ headers: string[] }> = ({ headers }) => {
    return (
        <tr>
            {headers.map((header, index) => (
                <th key={index}>{header}</th>
            ))}
        </tr>
    );
};

const Table: React.FC<TableProps> = ({ data }) => {
    if (data.length === 0) return null;

    const headers = data[0];

    return (
        <table>
            <thead>
                <TableHeaderRow headers={headers} />
            </thead>
            <tbody>
                {data.slice(1).map((rowData, index) => (
                    <TableRow key={index} rowData={rowData} />
                ))}
            </tbody>
        </table>
    );
};
  
  const headingStyle = {
    fontFamily: 'Vetrena MF Thin, sans-serif', // Replace with your desired font family
    // You can add more styles as needed
    fontSize: '24px', // Replace with your desired font size
    fontWeight: 'bold', // Replace with your desired font weight
    color: '#333', // Replace with your desired text color
  };

  const textBlockStyle = {
    fontFamily: 'Vetrena MF Thin, sans-serif', // Replace with your desired font family
    fontWeight: 'normal', // Replace with your desired font weight
    color: '#333', // Replace with your desired text color
    /* Add more styles as needed */
  };
  const default2d = [[]];
  const [WT, setWT] = useState<string[][]>(default2d);
  const [WTdata, setWTdata] = useState<any>();
  const [dataresponse, setdata] = useState<any>();
  const [ddata, set2ddata] = useState<string[][]>(default2d);
  const [renderStatus, setRenderStatus] = useState<boolean>(false);
  
  const displayKineticData = async () => {
    try {
        // const response = await fetch('/api/getKineticData');
        const response = await axios.get('/api/getKineticData', 
          {params: {
            id: 1
          }}
        )
        console.log(JSON.stringify(response));
        // const parent_id = data[0].parent_id;
        // console.log(parent_id);

        const data = response.data
        setdata(data);
        let WT_reference;

        if (data.parent_id !== null) {
          WT_reference = await axios.get('/api/getKineticData',
            {params: {
              id: data.parent_id
            }}
          )
        }
        console.log(JSON.stringify(WT_reference));
        const WTdata = WT_reference?.data;

        console.log("HELLOEFWEF");
        console.log(WTdata);
        setWTdata(WTdata)

        const buffer64 = Buffer.from(data.cell_data.data, 'binary').toString('utf8').slice(4, -3).split(';');
        const wtData = Buffer.from(WTdata.cell_data.data, 'binary').toString('utf8').slice(4, -3).split(';');

        const parsedData = buffer64.map(dataParse);
        const finalData = new Array();
        finalData.push(["Row", "1", "2", "3"]);
        for (let i = 0; i < parsedData.length; i = i + 7) {
          const temp = new Array();
          for (let j = i; j < i + 7; j = j + 2) {
            temp.push(parsedData[j]);
          }
          finalData.push(temp);
        }
        console.log(buffer64);
        console.log(parsedData);

        const parsedWT = wtData.map(dataParse);
        const WTarr = new Array();

        WTarr.push(["Row", "1", "2", "3"]);
        for (let i = 0; i < parsedWT.length; i = i + 7) {
          const temp = new Array();
          for (let j = i; j < i + 7; j = j + 2) {
            temp.push(parsedWT[j]);
          }
          WTarr.push(temp);
        }
        setWT(WTarr);
        set2ddata(finalData);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
  }
  const jsonData = {
    yield: 10 // example yield value
  };

  return (
    <div>
      <h2 style = {headingStyle}>Data Visualization</h2>
      <button onClick = {displayKineticData}> get data </button>
        <div style = {{position : 'relative', top: '30px'}}>
          {renderStatus && <img id="graphImage" alt="Graph will be displayed here after uploading."/>}
          <Table data={ddata}/>
          <MetaData data = {dataresponse}/>
          <br />
          <div>
            <Table data = {WT}/>
            <MetaData data = {WTdata}/>
          </div>
        </div>
      </div>
  );
}

function displayMetaData(data:any) {
  return <div>

    {data.yeild} {data.dilution}
  </div>
}

function dataParse(s:string) {
  let start = -1;
  let end = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '"' ) {
      start = i;
      break;
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == '"') {
      end = i;
      break;
    }
  }
  if (start != -1) {
    return s.slice(start + 1, end)
  }
  return ""
}

export default KineticTable;

