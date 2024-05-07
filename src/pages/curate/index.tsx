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
    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const fetchData = async () => {
            if (!user) return;

            const response = await fetch('/api/getPendingData');
            const data = await response.json();
            const filteredData = data.filter((item:any) => item.institution === user.institution)
            const sortedData = sortData(filteredData, sortColumn, sortDirection)
            setData(sortedData);
            const initialCheckedItems = data.reduce((state:any, item:any) => ({
                ...state,
                [item.id]: false  // Initialize all checkboxes as unchecked
            }), {} as Record<number, boolean>);
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

    const handleCheckboxChange = (id: number) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const roundTo = (number:number, decPlaces:number) => {
        if (number === null) {
          return null;
        }
        const factor = Math.pow(10, decPlaces);
        return (Math.round(number * factor) / factor).toFixed(decPlaces);
    };

    const getSelectedIds = () => {
        return Object.entries(checkedItems)
                .filter(([key, value]) => value === true)
                .map(([key, value]) => parseInt(key, 10));
    }

    const approveData = () => {
        const selectedIds = getSelectedIds();
        fetch(`/api/curateData`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids: selectedIds }),
        }).then((response) => {
            if (!response.ok) {  // Checks if response status code is not in the 200-299 range
                throw new Error('Failed to approve data, server responded with ' + response.status);
            }
            setData((originalData) => originalData.filter((item) => !selectedIds.includes(item.id) ));
            console.log("Successfully approved data.");
        }).catch((error) => {
            console.log(error);
        })
    }

    const rejectData = () => {
        const selectedIds = getSelectedIds();
        fetch(`/api/curateData`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids: selectedIds }),
        }).then((response) => {
            if (!response.ok) {  // Checks if response status code is not in the 200-299 range
                throw new Error('Failed to reject data, server responded with ' + response.status);
            }
            setData((originalData) => originalData.filter((item) => !selectedIds.includes(item.id) ));
            console.log("Successfully rejected data.");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <NavBar />
            <AuthChecker minimumStatus={"professor"}>
                <div>
                    <div className="flex flex-col items-center p-4">
                        <h1 className="text-2xl font-bold">Bulk Curation of Data</h1>
                        <h2 className="text-xl">Data from the {user?.user_name} Lab or other labs at {user?.institution}</h2>
                        <div className="flex flex-row items-center my-2">
                            <button onClick={approveData} className='bg-green-500 mx-2 p-2 rounded'>Approve</button>
                            <button onClick={rejectData} className='bg-red-500 mx-2 p-2 rounded'>Reject</button>
                        </div>
                        <table className="table-auto min-w-full border-collapse border border-gray-400">
                            <thead className="bg-gray-100 sticky top-0 z-10">
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
                                    <th>Dataset</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => (
                                    <>
                                        <tr>
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
                                                {data.KM_avg !== null && !isNaN(data.KM_avg) ? `${roundTo(data.KM_avg, 2)} ± ${data.KM_SD !== null && !isNaN(data.KM_SD) ? roundTo(data.KM_SD, 2) : '—'}` : '—'}
                                            </td>
                                            <td className="border border-gray-300">
                                                {data.kcat_avg !== null && !isNaN(data.kcat_avg) ? `${roundTo(data.kcat_avg, 1)} ± ${data.kcat_SD !== null && !isNaN(data.kcat_SD) ? roundTo(data.kcat_SD, 1) : '—'}` : '—'}
                                            </td>
                                            <td className="border border-gray-300">
                                                {data.T50 !== null && !isNaN(data.T50) ? `${roundTo(data.T50, 1)} ± ${data.T50_SD !== null && !isNaN(data.T50_SD) ? roundTo(data.T50_SD, 1) : '—'}` : '—'}
                                            </td>
                                            <td className="border border-gray-300">
                                                View Dataset
                                            </td>
                                        </tr>
                                        {data.kineticRawData && (
                                            <tr>
                                                <td />
                                                <td>Kin. Data: --</td>
                                                <td>Plate ID: {data.kineticRawData.plate_num ?? "N/A"}</td>
                                                <td colSpan={2}>Uploaded by: {data.kineticRawData.user_name ?? "N/A"}</td>
                                                <td>Purif. Date: {data.kineticRawData.purification_date ?? "N/A"}</td>
                                                <td>Assay Date: {data.kineticRawData.assay_date ?? "N/A"}</td>
                                            </tr>
                                        )}
                                        {data.tempRawData && (
                                            <tr>
                                                <td />
                                                <td>Temp. Data: </td>
                                                <td>Plate ID: {data.tempRawData.plate_num ?? "N/A"}</td>
                                                <td colSpan={2}>Uploaded by: {data.tempRawData.user_name ?? "N/A"}</td>
                                                <td>Purif. Date: {data.tempRawData.purification_date ?? "N/A"}</td>
                                                <td>Assay Date: {data.tempRawData.assay_date ?? "N/A"}</td>
                                            </tr>
                                        )}
                                    </>

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