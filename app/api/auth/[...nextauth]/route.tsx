import CredentialsProvider from "next-auth/providers/credentials";
// import { handler } from "next/dist/build/templates/app-page";
import NextAuth from "next-auth";

let data = {
  
  username : "adesh", 
  password : "1234" 
}
const handler = NextAuth({providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",

    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
    //   otp: { label: "otp", type: "password" },
    },
    async authorize(credentials:any) {


      if (credentials.username==data.username){
        return credentials ; 

      }

       return null  ; 


        
    //  return null ; 



    
    }
  })
]
})
console.log("hello");

export const GET=handler ; 
export const POST=handler ; 
