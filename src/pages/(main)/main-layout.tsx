import { AuthStatus } from "@/components/auth-status";
import Sidebar from "@/components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { useBreakpoints } from "@/hooks/use-breakpoints";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function MainLayout() {

    const [expand, setExpand] = useState(true);
    const [manualAction, setManualAction] = useState(false);
  
    const breakpoint = useBreakpoints();
    
    useEffect(() => {
      if (expand === false) {
        setManualAction(false);
      }
    }, [expand])
    
    useEffect(() => {
      if (breakpoint === "md" || breakpoint === "sm" || breakpoint === "xs") {
        setExpand(manualAction);
      } else {
        setExpand(true);
      }
    }, [breakpoint, manualAction]);
    
    const onClick = () => {
      const state = !expand;
      setManualAction(state);
      setExpand(state);
    }

    return (
        <div className="flex gap-x-4 p-5 h-full">
            {
              expand
              ?
                <div className="flex h-full w-[300px] z-30 flex-col fixed inset-y-0 py-5">
                  <Sidebar 
                    setExpand={setExpand}
                  />
                </div>
              :
              <div  className={cn(
                expand && "hidden",
                "w-[50px]"
              )}>
                <Button
                    onClick={onClick}
                    size="icon"
                    variant="ghost"
                    className="md:hover:bg-white"
                >
                    <Menu className="w-5 h-5 text-gray-600" />
                </Button>
              </div>
            }
            <div className={cn(
              expand && "pl-[320px]",
              "h-full"
            )}>
                <h1>Auth Example using RouterProvider</h1>

                <AuthStatus />

                <ul>
                    <li>
                        <Link to="/">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>

                <Outlet />
                
                
            </div>
        </div>
    );
}
