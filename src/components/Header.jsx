
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
    SignedIn,
    SignedOut,
    UserButton,
    SignIn,
    useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
    const [showSignIn, setShowSignIn] = useState(false);

    const [search, setSearch] = useSearchParams();
    const { user } = useUser();

    useEffect(() => {
        if (search.get("sign-in")) {
            setShowSignIn(true);
        }
    }, [search]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowSignIn(false);
            setSearch({});
        }
    };

    return (
        <>
            <nav className="md:px-20 max-sm:px-6 py-4 flex justify-between items-center backdrop-blur-md bg-slate-900/20 border-b border-white/10 sticky top-0 z-50">
                <Link to="/" className="transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <img
                                src="/logo.png"
                                className="h-16 drop-shadow-2xl"
                                alt="Hirrd Logo"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl -z-10"></div>
                        </div>
                    </div>
                </Link>

                <div className="flex gap-4 items-center">
                    <SignedOut>
                        <Button
                            variant="outline"
                            onClick={() => setShowSignIn(true)}
                            className="relative overflow-hidden bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600/50 text-white hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 rounded-xl px-6 py-2"
                        >
                            <span className="relative z-10">Login</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        {user?.unsafeMetadata?.role === "recruiter" && (
                            <Link to="/post-job">
                                <Button
                                    variant="destructive"
                                    className="relative overflow-hidden bg-gradient-to-r from-emerald-500/80 to-teal-600/80 hover:from-emerald-400/80 hover:to-teal-500/80 border-0 text-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 rounded-xl px-6 py-2 group"
                                >
                                    <PenBox size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                                    <span className="font-medium">Post a Job</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Button>
                            </Link>
                        )}
                        <div className="relative">
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-12 h-12 rounded-full border-2 border-blue-400/50 hover:border-blue-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-110",
                                        userButtonPopoverCard: "bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-2xl",
                                        userButtonPopoverActionButton: "text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 rounded-xl",
                                        userButtonPopoverFooter: "bg-slate-700/30 border-t border-slate-600/30",
                                    },
                                }}
                            >
                                <UserButton.MenuItems>
                                    <UserButton.Link
                                        label="My Jobs"
                                        labelIcon={<BriefcaseBusiness size={15} className="text-blue-400" />}
                                        href="/my-jobs"
                                    />
                                    <UserButton.Link
                                        label="Saved Jobs"
                                        labelIcon={<Heart size={15} className="text-pink-400" />}
                                        href="/saved-jobs"
                                    />
                                    <UserButton.Action label="manageAccount" />
                                </UserButton.MenuItems>
                            </UserButton>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </div>
                    </SignedIn>
                </div>
            </nav>

            {showSignIn && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 animate-fade-in"
                    onClick={handleOverlayClick}
                >
                    <div className="relative animate-scale-in">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-2 shadow-2xl">
                            <SignIn
                                signUpForceRedirectUrl="/onboarding"
                                fallbackRedirectUrl="/onboarding"
                                appearance={{
                                    elements: {
                                        rootBox: "rounded-2xl overflow-hidden",
                                        card: "bg-transparent shadow-none border-0",
                                        headerTitle: "text-white text-2xl font-bold",
                                        headerSubtitle: "text-slate-300",
                                        socialButtonsBlockButton: "bg-slate-800/50 border-slate-600/50 text-white hover:bg-slate-700/50 transition-all duration-200 rounded-xl",
                                        formButtonPrimary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 transition-all duration-300 rounded-xl shadow-lg hover:shadow-blue-500/25",
                                        formFieldInput: "bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-400 rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 transition-all duration-200",
                                        formFieldLabel: "text-slate-300",
                                        dividerLine: "bg-slate-600/50",
                                        dividerText: "text-slate-400",
                                        footerActionLink: "text-blue-400 hover:text-blue-300 transition-colors duration-200",
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;


// // e0Xd6e4PGPdaO8qh project password
// // e0Xd6e4PGPdaO8qh
