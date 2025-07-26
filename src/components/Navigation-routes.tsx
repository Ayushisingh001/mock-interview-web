
import { MainRoutes } from "@/lib/helpers";
import {cn} from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps{
    isMobile?:boolean;
}


export const NavigationRoutes =  ({ isMobile = false}: NavigationRoutesProps) => {
    return(
         <ul className={cn( isMobile?"flex flex-col items-start gap-4" : "flex items-center gap-6")}>
            {MainRoutes.map((route)=>(
                <NavLink
                 key={route.href}
                 to={route.href}
                 className={({ isActive })=>
                    cn("text-base text-neutral-600",
                        isActive && "text-neutral-900 font-semibold"
                    )
                }
                >
                {route.label}
                </NavLink>
            ))}
        </ul>
        );
};




