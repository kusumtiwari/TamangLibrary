interface Teams {
    id : number,
    image: string,
    name : string,
    position: string,
}

const myTeams : Teams[] = [
    {
        id: 1,
        image: '/Team-members/Team-member1.png',
        name: 'Saroj Tamang',
        position: 'co - Founder and director',
    },
    {
        id: 2,
        image: '/Team-members/Team-member2.png',
        name: 'Raj Kumar Thapa',
        position: 'Chief Executive Officer (CEO)',
    },
    {
        id: 3,
        image: '/Team-members/Team-member3.png',
        name: 'Reena Adhikari',
        position: 'Chief Operation Officer (COO)',
    },
    {
        id: 4,
        image: '/Team-members/Team-member1.png',
        name: 'Shyam Kumar',
        position: 'co - Founder and director',
    },
    {
        id: 5,
        image: '/Team-members/Team-member2.png',
        name: 'Ashish Gurung',
        position: 'Manager',
    }

]

const OurTeam : React.FC = () => {
    return(
        <div>
              <h1 className="uppercase text-2xl md:text-4xl lg:text-5xl font-thin py-12 text-center">Our Teams</h1>
              <div className="flex flex-wrap">

              </div>
        </div>
    )
}
export default OurTeam;