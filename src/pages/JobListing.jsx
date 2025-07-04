
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { State } from "country-state-city";
import { BarLoader } from "react-spinners";
import { Search, MapPin, Building2, X, Sparkles } from "lucide-react";
import useFetch from "@/hooks/use-fetch";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select.jsx";

import { getCompanies } from "../api/apiCompanies";
import { getJobs } from "../api/apiJobs";
import JobCard from "../components/JobCard.jsx";

const JobListing = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");
    const [company_id, setCompany_id] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const { isLoaded } = useUser();

    const {
        // loading: loadingCompanies,
        data: companies,
        fn: fnCompanies,
    } = useFetch(getCompanies);

    const {
        loading: loadingJobs,
        data: jobs,
        fn: fnJobs,
    } = useFetch(getJobs, {
        location,
        company_id,
        searchQuery,
    });

    useEffect(() => {
        if (isLoaded) {
            fnCompanies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded]);

    useEffect(() => {
        if (isLoaded) fnJobs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded, location, company_id, searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        const query = formData.get("search-query");
        if (query) setSearchQuery(query);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setCompany_id("");
        setLocation("");
    };

    if (!isLoaded) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
                <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <BarLoader width={200} color="#3b82f6" height={4} />
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Loading amazing opportunities...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-20 pb-16 px-4">
                {/* Background Elements */}

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h1 className="flex flex-col items-center justify-center font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-8 animate-fade-in">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent mb-4 relative">
                            Find Your Dream Job
                        </span>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-normal max-w-2xl text-center leading-relaxed">
                            Discover thousands of opportunities from top companies worldwide
                        </p>
                    </h1>

                    {/* Search Section */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* Main Search Bar */}
                        <form onSubmit={handleSearch} className="relative group">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-0`}></div>
                            <div className="relative flex items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 dark:border-gray-700/50">
                                <div className="flex items-center px-4 max-md:hidden">
                                    <Search className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                                </div>
                                <Input
                                    type="text"
                                    placeholder="Search your dream job by title, skills, or company..."
                                    name="search-query"
                                    className="flex-1 lg:h-16 max-md:h-12 border-0 bg-transparent px-4 text-sm lg:text-lg placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                />
                                <Button
                                    type="submit"
                                    className="lg:h-12 max-md:h-8 px-8 m-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Search className="w-4 h-4 mr-2" />
                                    <p className="max-md:hidden">Search</p>
                                </Button>
                            </div>
                        </form>

                        {/* Filters Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Location Filter */}
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-0"></div>
                                <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-xl border border-white/20">
                                    <Select value={location} onValueChange={(value) => setLocation(value)}>
                                        <SelectTrigger className="h-14 border-0 bg-transparent rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <MapPin className="w-5 h-5 text-blue-500" />
                                                <SelectValue placeholder="Filter by Location" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-white/20 dark:border-gray-700/50 shadow-2xl">
                                            <SelectGroup>
                                                {State.getStatesOfCountry("IN").map(({ name }) => {
                                                    return (
                                                        <SelectItem key={name} value={name} className="hover:bg-blue-50 dark:hover:bg-blue-900/30">
                                                            {name}
                                                        </SelectItem>
                                                    );
                                                })}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Company Filter */}
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                                <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Select value={company_id} onValueChange={(value) => setCompany_id(value)}>
                                        <SelectTrigger className="h-14 border-0 bg-transparent rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <Building2 className="w-5 h-5 text-purple-500" />
                                                <SelectValue placeholder="Filter by Company" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-white/20 dark:border-gray-700/50 shadow-2xl">
                                            <SelectGroup>
                                                {companies?.map(({ name, id }) => {
                                                    return (
                                                        <SelectItem key={name} value={id} className="hover:bg-purple-50 dark:hover:bg-purple-900/30">
                                                            {name}
                                                        </SelectItem>
                                                    );
                                                })}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Clear Filters Button */}
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-red-600/50 rounded-2xl"></div>
                                <Button
                                    onClick={clearFilters}
                                    className="relative w-full h-12 max-md:h-8 bg-white/70 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30 font-semibold"
                                    variant="outline"
                                >
                                    <X className="w-4 h-4 mr-2" />
                                    Clear Filters
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative px-4 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Loading State */}
                    {loadingJobs && (
                        <div className="flex flex-col items-center justify-center py-16 space-y-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
                                <Search className="w-6 h-6 text-white" />
                            </div>
                            <BarLoader width={300} color="#3b82f6" height={4} />
                            <p className="text-gray-600 dark:text-gray-400 font-medium">Searching for perfect matches...</p>
                        </div>
                    )}

                    {/* Results */}
                    {loadingJobs === false && (
                        <div className="space-y-8">
                            {/* Results Header */}
                            {jobs?.length > 0 && (
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            Found {jobs.length} amazing {jobs.length === 1 ? 'opportunity' : 'opportunities'}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Your next career move awaits
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full border border-green-200/50 dark:border-green-700/50">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-green-700 dark:text-green-400">Live Results</span>
                                    </div>
                                </div>
                            )}

                            {/* Jobs Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {jobs?.length ? (
                                    jobs.map((job, index) => (
                                        <div
                                            key={job.id}
                                            className="animate-fade-in"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <JobCard
                                                job={job}
                                                savedInit={job?.saved?.length > 0}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center space-y-6">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                                            <Search className="w-10 h-10 text-gray-400" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                No jobs found
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 max-w-md">
                                                We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.
                                            </p>
                                        </div>
                                        <Button
                                            onClick={clearFilters}
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                                        >
                                            Clear All Filters
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobListing;
