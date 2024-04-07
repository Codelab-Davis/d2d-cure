import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import "../../app/globals.css";

const ResourcesPage = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl text-center font-bold my-4">D2D CURE Resources Page</h1>
            <div className="my-12 text-center">
                <h2 className="text-xl font-bold mb-4">Structure & Sequence Files</h2>
                <div className="flex justify-between items-center">
                <a href="/resources/structures/BglB.pdb" download className="text-blue-600 underline hover:text-blue-800">
                    BglB.pdb
                </a>
                <a href="/resources/structures/BglB_foldit.zip" download className="text-blue-600 underline hover:text-blue-800">
                    BglB Foldit Files (zipped)
                </a>
                <a href="/resources/sequences/BglB_sequence.fasta" download className="text-blue-600 underline hover:text-blue-800">
                    BglB Fasta Sequence File
                </a>
                </div>
            </div>

            <hr />

            <div className="my-12">
                <h2 className="text-xl text-center font-bold mb-4">Oligo Search</h2>
                <Link href="/resources/oligosearch" className="text-center text-blue-600 underline hover:text-blue-800">
                    Search for a 33-mer DNA oligomer for a specific enzyme variant.
                </Link>
            </div>

            <hr />

            <div className="my-12">
                <h2 className="text-xl text-center font-bold mb-4">Publications</h2>
                <Link href="/resources/publications" className="text-center text-blue-600 underline hover:text-blue-800">
                    Click here to see a list of publications related to this project
                </Link>
            </div>
        </div>
    );
};

export default ResourcesPage