interface CompanyDetails {
  icon: string;
  value: string;
  title: string;
}

const myCompanyDetails: CompanyDetails[] = [
  {
    icon: "/img/Aboutus-icons/Usericon.png",
    value: "600K +",
    title: "Users",
  },
  {
    icon: "/img/Aboutus-icons/Event-icon.png",
    value: "100K +",
    title: "Events",
  },
  {
    icon: "/img/Aboutus-icons/Book-icon.png",
    value: "40K +",
    title: "Collection",
  },
  {
    icon: "/img/Aboutus-icons/Hearticon.png",
    value: "100M +",
    title: "Donation",
  },
];
const CompanyInfo = () => {
  return (
    <div className="bg-secondary-detailsBackground px-32 py-10 gap-16 md:gap-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-primary-blueText my-16">
      {myCompanyDetails.map((items, index) => {
        return (
          <div key={index}>
            <img src={items.icon} alt="info-icon" />
            <h1 className="py-4 text-2xl">{items.value}</h1>
            <h1 className="text-sm">{items.title}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default CompanyInfo;
