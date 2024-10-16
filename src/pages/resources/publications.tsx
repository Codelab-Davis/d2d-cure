import React, { useState, useEffect } from 'react';
import "../../app/globals.css";

const PublicationsPage = () => {
    const [publications, setPublications] = useState<any[]>([]);

    useEffect(() => {
        const fetchPublications = async () => {
          const response = await fetch('/api/getPublications');
          const data = await response.json();
          setPublications(data);
        };
    
        fetchPublications()
      }, []);
  

      return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-xl font-bold mb-4">Related Publications</h1>
            <p className = "mb-10">The following papers are related to the D2D project</p>
            <ul>
              {publications.map((publication, index) => (
                <li key={index} className = "mb-5">
                  {publication.id}. {publication.all_authors} <b>({publication.year})</b> &quot;{publication.title}&quot; 
                  <a className="text-orange-400 text-decoration-line: underline" href={publication.link} target="_blank" rel="noopener noreferrer">
                    {publication.journal}, {publication.volume}, {publication.issue}, {publication.first_page}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      );
};

export default PublicationsPage;