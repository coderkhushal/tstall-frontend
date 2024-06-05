
import DeskTopNavigation from "@/components/web/navigation/desktop_navigation"
import Topbar from "@/components/web/topbar/topbar"



const MainLayout = async({ children }: { children: React.ReactNode }) => {
    
    return (
      

        <div className="flex h-full w-full  bg-gray-300 ">
            <DeskTopNavigation />
           
            
                {children}
         
        </div>
   
    )
}
export default MainLayout