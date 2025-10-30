import Image from "next/image";
import { getServerSession } from "next-auth";
import { Appcheck } from "./components/Appcheck";


export default async function Home() {
  // const response = await fetch('http://localhost:3000/api/users')

  // let data = await response.json() ;
  // data = 

// console.log(data.message[0]);


const session = getServerSession() ; 

  return (

    <>  
          {/* <h1</h1>
          <h1>{data.email}</h1> */}

<Appcheck></Appcheck>
    </>
  )
}
