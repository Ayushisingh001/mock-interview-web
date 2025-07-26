
import { useAuth } from "@clerk/clerk-react"
import {Loader} from "lucide-react";
import { UserButton} from "@clerk/clerk-react";
import { Link } from "react-router-dom";


export const ProfileContainer = () => {
  const {isSignedIn,isLoaded}=useAuth()

  if(!isLoaded){
    return(
        <div className="flex items-center">
            <Loader className="w-4 h-4 animate-spin
             text-emerald-500"/>
        </div>
    );
  }
  return(
     <div className="flex items-center gap-6">
    {isSignedIn?(
        <UserButton afterSignOutUrl="/" />
    ) : (
       <Link to={"/signin"}><button className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded hover:bg-emerald-600 transition">Get started
       </button>
       </Link>
    )}
    </div>
    );
};


