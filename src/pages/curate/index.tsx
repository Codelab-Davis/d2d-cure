import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import { AuthChecker } from '@/components/AuthChecker';
import NavBar from '@/components/NavBar';


const CuratePage = () => {
    const { user, loading } = useUser();

    const [data, setData] = useState<any[]>([]);
    const [sortColumn, setSortColumn] = useState<string>('ID');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/getPendingData');
            const data = await response.json();
            const sortedData = sortData(data)
            setData(sortedData);

        };
        fetchData();
    }, [])

    const handleColumnClick = (columnName: string) => {
        if (sortColumn === columnName) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(columnName);
            setSortDirection('asc');
        }
        const sortedData = sortData(data)
        setData(sortedData);
    };

    function sortData(data: any) {
        const sortedData = data.sort((a: any, b: any) => {
            let valA, valB;
            let compareVal;
            if (sortColumn === 'ID') {
                valA = a.id;
                valB = b.id;
                compareVal = valA - valB;
            } else if (sortColumn === 'Variant') {
                valA = a.resnum;
                valB = b.resnum;
                compareVal = valA - valB;
            } else if (sortColumn === 'Creator') {
                valA = a.creator;
                valB = b.creator;
                compareVal = valA.localeComapre(valB);
            }

            if (compareVal !== 0) {
                if (sortDirection === 'asc') {
                    return compareVal;
                } else {
                    return -compareVal;
                }
            }

            // Always sort by ascending ID secondarily
            compareVal = a.id - b.id;
            return compareVal;

        })

        return sortedData
    }

    const getVariantDisplay = (resid: any, resnum: any, resmut: any) => {
        if (resnum === 0) {
          return 'WT';
        }
        return `${resid}${resnum}${resmut}`;
    };

    return (
        <div>
            <NavBar />
            <AuthChecker minimumStatus={"professor"}>
                <div>
                    <div className="flex flex-col items-center p-4">
                        <table className="table-auto border-collapse border border-gray-400">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 cursor-pointer" onClick={() => handleColumnClick("ID")}>ID</th>
                                    <th className="border border-gray-300 cursor-pointer" onClick={() => handleColumnClick("Variant")}>Variant</th>
                                    <th className="border border-gray-300 cursor-pointer" onClick={() => handleColumnClick("Creator")}>Creator</th>
                                    <th className="border border-gray-300">Km</th>
                                    <th className="border border-gray-300">Kcat</th>
                                    <th className="border border-gray-300">T50</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300">
                                            {data.id}
                                        </td>
                                        <td className="border border-gray-300">
                                            {getVariantDisplay(data.resid, data.resnum, data.resmut)}
                                        </td>
                                        <td className="border border-gray-300">
                                            {data.creator}
                                        </td>
                                        <td className="border border-gray-300">
                                            {data.KM_avg}
                                        </td>
                                        <td className="border border-gray-300">
                                            {data.kcat_avg}
                                        </td>
                                        <td className="border border-gray-300">
                                            {data.T50}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AuthChecker>
        </div>


    )
}

export default CuratePage;