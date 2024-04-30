import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';
import { AuthChecker } from '@/components/AuthChecker';
import NavBar from '@/components/NavBar';


const CuratePage = () => {
    const { user, loading } = useUser();

    const [data, setData] = useState<any[]>([]);
    const [sortColumn, setSortColumn] = useState<string>('ID');
    const [sortDirection, setSortDirection] = useState<string>('asc');
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/getPendingData');
            const data = await response.json();
            if (!user) return;
            const filteredData = data.filter((item:any) => item.institution === user.institution)
            const sortedData = sortData(filteredData, sortColumn, sortDirection)
            setData(sortedData);
            const initialCheckedItems = data.reduce((state:any, item:any) => ({
                ...state,
                [item.id]: false  // Initialize all checkboxes as unchecked
            }), {} as Record<string, boolean>);
            setCheckedItems(initialCheckedItems);
        };
        fetchData();
    }, [user])

    const handleColumnClick = (columnName: string) => {
        let newSortDirection;
        if (sortColumn === columnName) {
            newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc'
            setSortDirection(newSortDirection);
        } else {
            newSortDirection = 'asc'
            setSortColumn(columnName);
            setSortDirection('asc');
        }
        const sortedData = sortData(data, columnName, newSortDirection)
        setData(sortedData);
    };

    function sortData(data: any, sortColumn: string, sortDirection: string) {
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
                if (compareVal === 0) {
                    compareVal = a.resmut.localeCompare(b.resmut);
                }
            } else if (sortColumn === 'Creator') {
                valA = a.creator;
                valB = b.creator;
                console.log(valA, valB)
                compareVal = valA.localeCompare(valB);
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

    const handleCheckboxChange = (id: string) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div>
            <NavBar />
            <AuthChecker minimumStatus={"professor"}>
                <div>
                    <div className="flex flex-col items-center p-4">
                        <h1 className="text-2xl font-bold">Bulk Curation of Data</h1>
                        <h2 className="text-xl">Data from the {user?.user_name} Lab or other labs at {user?.institution}</h2>

                        <table className="table-auto border-collapse border border-gray-400">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300"/>
                                    <th className={`border border-gray-300 cursor-pointer ${sortColumn === "ID" ? "text-orange-500" : "text-blue-500"}`}
                                        onClick={() => handleColumnClick("ID")}>ID {sortColumn === "ID" ? (sortDirection === "asc" ? "▲" : "▼") : ""}</th>
                                    <th className={`border border-gray-300 cursor-pointer ${sortColumn === "Variant" ? "text-orange-500" : "text-blue-500"}`}
                                        onClick={() => handleColumnClick("Variant")}>Variant {sortColumn === "Variant" ? (sortDirection === "asc" ? "▲" : "▼") : ""}</th>
                                    <th className={`border border-gray-300 cursor-pointer ${sortColumn === "Creator" ? "text-orange-500" : "text-blue-500"}`}
                                        onClick={() => handleColumnClick("Creator")}>Creator {sortColumn === "Creator" ? (sortDirection === "asc" ? "▲" : "▼") : ""}</th>
                                    <th className="border border-gray-300">Km</th>
                                    <th className="border border-gray-300">Kcat</th>
                                    <th className="border border-gray-300">T50</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems[data.id] || false}
                                            onChange={() => handleCheckboxChange(data.id)}
                                        />
                                        </td>
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