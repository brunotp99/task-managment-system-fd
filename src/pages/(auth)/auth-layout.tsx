import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="w-full min-h-screen">
          <div className="flex min-h-screen gap-x-5 p-5">
            <div className="hidden w-1/2 relative rounded-md bg-gray-900 lg:flex flex-col items-center justify-center p-5">
              <h1 className="font-[800] absolute top-5 self-start text-4xl text-white">Organic<br/>Mind</h1>
              <img src="/images/auth/spaceship.png" alt="Spaceship" className="w-[400px]" />
            </div>
            <div className="w-full lg:w-1/2 border border-gray-100 border-1 rounded-md p-10 flex items-center justify-center">
              <div className="w-[85%]">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
    );
}
 
export default AuthLayout;