"use client"
import DeskTopNavigation from "@/components/web/navigation/desktop_navigation"




const MainLayout = async({ children }: { children: React.ReactNode }) => {
    
    return (
      

        <div className="flex h-full w-full  bg-secondary ">
            <DeskTopNavigation />
           
            
                {children}
         
        </div>
   
    )
}
export default MainLayout