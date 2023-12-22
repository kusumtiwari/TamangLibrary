import React, { useState } from "react";
import "firebase/database";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "../common/LoadingSpinner";

const PublicationPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const data = collection(db, "publications");

  const [publications, publicationLoading, publicationError] =
    useCollectionData(data, {
      snapshotListenOptions: {
        includeMetadataChanges: true,
      },
    });

  const filteredPublications =
    publications &&
    publications.filter((publication) =>
      publication.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPublications?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil((filteredPublications?.length || 0) / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="w-full h-32 bg-secondary-detailsBackground">
        <form className="relative top-[80%] flex items-center justify-center h-[8vh] ">
          <input
            type="text"
            name="project"
            placeholder="Search Publications"
            className="h-full w-[90%] md:w-[60%] py-4 px-6 rounded-3xl border border-primary-blueText rounder-md focus:border-
            focus:outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button
            className="text-white bg-primary-blueText h-full px-6 absolute right-[5%] md:right-[20%] rounded-r-3xl"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Search
          </button>
        </form>
      </div>
      {publicationLoading && !publicationError ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1 className="uppercase text-primary-blueText mt-24 text-xl md:text-3xl lg:text-4xl text-center">
            Publications
          </h1>
          <div className="flex flex-wrap gap-6 py-12 px-8 justify-center">
            {currentItems?.map((publication, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 text-center"
              >
                <div className="bg-white p-4">
                  <img
                    className="w-64 h-72 object-cover m-auto mb-3 cursor-pointer"
                    src={publication.image}
                    alt={publication.title}
                  />
                  <h3 className="text-xl font-semibold">{publication.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center mt-4 mb-8">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`mx-2 px-3 py-2 rounded-full ${
              currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PublicationPage;
