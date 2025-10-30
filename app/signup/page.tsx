"use client"
export default function Signup (){

    return(
        <>
        <input type="text" placeholder="eneter your email" /><br />
        <input type="text" placeholder="eneter your pass" /><br />

        <button onClick={()=>{
            console.log("hi there");
     }}>signup </button>
        </>
    )
}


