import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import { Briefcase, User } from "lucide-react";

const Onboarding = () => {
    const { user, isLoaded } = useUser();
    const navigate = useNavigate();

    const navigateUser = (currRole) => {
        navigate(currRole === "recruiter" ? "/post-job" : "/jobs");
    };

    const handleRoleSelection = async (role) => {
        await user
            .update({ unsafeMetadata: { role } })
            .then(() => {
                console.log(`Role updated to: ${role}`);
                navigateUser(role);
            })
            .catch((err) => {
                console.error("Error updating role:", err);
            });
    };

    useEffect(() => {
        if (user?.unsafeMetadata?.role) {
            navigateUser(user.unsafeMetadata.role);
        }
    }, [user]);

    if (!isLoaded) {
        return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
    }

    return (
        <div className="space-y-5 pt-8">
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    I am a...
                </h2>
                <p className="text-slate-300 text-lg">Choose your path to get personalized recommendations</p>
            </div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <button
                    onClick={() => handleRoleSelection("candidate")}
                    className="mx-4 group py-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 border border-blue-500/30 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                    <User className="w-16 h-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-2">Job Seeker</h3>
                    <p className="text-slate-300">Find your dream job and advance your career</p>
                </button>

                <button
                    onClick={() => handleRoleSelection("recruiter")}
                    className="mx-4 group py-8 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 hover:from-emerald-500/30 hover:to-teal-600/30 border border-emerald-500/30 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                    <Briefcase className="w-16 h-16 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-2">Recruiter</h3>
                    <p className="text-slate-300">Discover and hire exceptional talent</p>
                </button>
            </div>
        </div>
    );
};

export default Onboarding;