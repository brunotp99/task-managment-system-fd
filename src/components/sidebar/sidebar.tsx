import { X } from "lucide-react";
import { Button } from "../ui/button";

interface SidebarProps {
    setExpand: (state : boolean) => void;
}

const Sidebar = ({
    setExpand
}: SidebarProps) => {
    return ( 
        <div className="bg-[#F4F4F4] rounded-lg py-5 px-4 space-y-4 flex flex-col items-center h-full">
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="font-bold text-xl text-gray-600 ms-2">Menu</h1>
                </div>
                <div>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="md:hover:bg-white"
                        onClick={() => setExpand(false)}
                    >
                        <X className="w-4 h-4 text-gray-600" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;