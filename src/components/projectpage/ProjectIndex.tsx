import OnGoingProjects from "./OnGoingProjects";
import CompletedProjects from "./CompletedProjects";
import UpcomingProjects from "./UpcomingProjects";

import { useState, useRef } from "react";
import { db } from "../../../firebase";
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "../../common/LoadingSpinner";

const ProjectIndex = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearchValue(inputRef.current.value.trim());
  // };
  const projectsRef = collection(db, "projects");

  const queryRef = searchValue
    ? query(
        projectsRef,
        where("title", "array-contains-any", searchValue.split(" "))
      )
    : projectsRef;

  const [_projects, loading, error] = useCollectionData(queryRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!loading && error) {
    return <p>{JSON.stringify(error, null, 2)}</p>;
  }
  return (
    <>
      <div className="relative w-full h-[70vh] bg-[url('../../public/Project-page/Project-header.png')] bg-cover bg-no-repeat bg-center">
        <form className="relative top-[80%] flex items-center justify-center h-[8vh] ">
          <input
            type="text"
            name="project"
            placeholder="Search Projects"
            className="h-full w-[90%] md:w-[60%] py-4 px-6 rounded border border-primary-blueText rounder-md focus:border-
            focus:outline-none"
            ref={inputRef}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="text-white bg-primary-blueText h-full px-6 absolute right-[5%] md:right-[20%] rounded-l-none rounded-r-md "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <OnGoingProjects />
      <CompletedProjects />
      <UpcomingProjects />
    </>
  );
};
export default ProjectIndex;
