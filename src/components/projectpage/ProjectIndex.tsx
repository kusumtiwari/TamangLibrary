import OnGoingProjects from "./OnGoingProjects";
import CompletedProjects from "./CompletedProjects";
import UpcomingProjects from "./UpcomingProjects";
import { useState, useContext } from "react";
import { db } from "../../../firebase";
import { collection, DocumentData } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingSpinner from "../../common/LoadingSpinner";
import { UserContext } from "../../context/Context";
const ProjectIndex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<DocumentData[]>([]);

  const contextValue = useContext(UserContext);
  const handleOnGoingProjectNavigation =
    contextValue?.handleOnGoingProjectNavigation;
  const handleUpComingProjectNavigation =
    contextValue?.handleUpComingProjectNavigation;
  const handleCompletedProjectNavigation =
    contextValue?.handleCompletedProjectNavigation;
  const projectsQuery = collection(db, "projects");
  const [projects, projectsLoading, projectsError] = useCollectionData(
    projectsQuery,
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  if (projectsLoading) {
    return <LoadingSpinner />;
  }

  if (!projectsLoading && projectsError) {
    return <p>{JSON.stringify(projectsError, null, 2)}</p>;
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (projects) {
      const filtered: DocumentData[] = projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  };
  if (projectsLoading) {
    return <LoadingSpinner />;
  }

  if (!projectsLoading && projectsError) {
    return <p>{JSON.stringify(projectsError, null, 2)}</p>;
  }

  const handleClick = (obj: DocumentData) => {
    if (obj.status === "ONGOING") {
      if (handleOnGoingProjectNavigation) {
        handleOnGoingProjectNavigation(obj);
      } else {
        console.log("cant find ongoing project navigation");
      }
    } else if (obj.status === "UPCOMING") {
      if (handleUpComingProjectNavigation) {
        handleUpComingProjectNavigation(obj);
      } else {
        console.log("cant find upcoming project navigation");
      }
    } else if (obj.status === "COMPLETED") {
      if (handleCompletedProjectNavigation) {
        handleCompletedProjectNavigation(obj);
      } else {
        console.log("cant find completed project navigation");
      }
    } else if (obj.status === "ONGOING") {
      if (handleOnGoingProjectNavigation) {
        handleOnGoingProjectNavigation(obj);
      } else {
        console.log("cant find past project navigation");
      }
    }
  };

  return (
    <>
      <div className="relative w-full h-[70vh] bg-[url('/img/common/Project-header.png')] bg-cover bg-no-repeat bg-center">
        <form
          className="relative top-[80%] flex items-center justify-center h-[8vh] "
          onSubmit={handleSearch}
        >
          <input
            type="text"
            name="project"
            placeholder="Search Projects"
            className="h-full w-[90%] md:w-[60%] py-4 px-6 rounded border border-primary-blueText rounder-md focus:border-
            focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="text-white bg-primary-blueText h-full px-6 absolute right-[5%] md:right-[20%] rounded-l-none rounded-r-md "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {filteredProjects.length > 0 ? (
        <div>
          {filteredProjects.map((item, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between items-center text-primary-blueText w-[95vw] mt-16"
              >
                <div className="w-[80%] md:w-[60%] h-[50vh] cursor-pointer relative">
                  <img
                    src="/img/common/Union.png"
                    alt="blue-line"
                    className="absolute bottom-0"
                  />
                  <img
                    src={item.image}
                    alt="ongoing-project"
                    className="w-full h-full absolute left-[2%] bottom-[4%] object-cover"
                    onClick={() => handleClick(item)}
                  />
                </div>
                <div className="w-[80%] md:w-[60%] mt-6">
                  <p className="w-[100%] font-playfair text-xl font-semibold text-black cursor-pointer">
                    {item.title}
                  </p>
                  <p
                    className="text-lg pt-8 text-justify text-black"
                    style={{ lineHeight: "32px" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <OnGoingProjects />
          <CompletedProjects />
          <UpcomingProjects />
        </div>
      )}
    </>
  );
};
export default ProjectIndex;
