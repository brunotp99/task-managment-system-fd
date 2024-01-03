import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const GetStarted = () => {
    //const location = useLocation();
    //const params = new URLSearchParams(location.search);
    //const from = params.get("from") || "/";
  
    //const navigation = useNavigation();
    //const isLoggingIn = navigation.formData?.get("username") != null;
  
    //const actionData = useActionData() as { error: string } | undefined;
  
    return (
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="font-[800] me-auto text-5xl text-gray-800">Productive Mind</h1>
        <p className="text-gray-500 text-justify">With only the features you need, Organic Mind is costumized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.</p>
        <Link to="/sign-up" className="w-full">
          <Button variant="ghost" className="w-full bg-[#FFD43B] text-gray-700">
            Get Started
          </Button>
        </Link>
        <span className="text-gray-500">Already have an account? <Link className="text-[#FFD43B]" to="/sign-in">Sign in</Link> </span>
    </div>
    );
  }