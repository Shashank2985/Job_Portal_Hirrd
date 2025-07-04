
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Briefcase, UploadCloud, Star, Users, Zap, Shield } from "lucide-react";

const LandingPage = () => {
    return (
        <div>
            {/* Background Effects */}
            <main className="relative flex flex-col gap-16 sm:gap-24 py-12 sm:py-20 sm:pt-12">
                {/* Hero Section */}
                <section className="text-center px-4 animate-fade-in">
                    <div className="relative mb-8">
                        <h1 className="flex flex-col items-center justify-center font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight py-4 animate-scale-in">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4">
                                Find Your Dream Job
                            </span>
                            <span className="flex items-center gap-2 sm:gap-6 text-4xl sm:text-6xl lg:text-7xl">
                                <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    and get
                                </span>
                                <div className="relative group">
                                    <img
                                        src="/logo.png"
                                        className="h-14 sm:h-24 lg:h-32 transform group-hover:scale-110 transition-transform duration-300"
                                        alt="Hirrd Logo"
                                    />
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </span>
                        </h1>
                    </div>
                    <p className="text-slate-300 sm:mt-6 text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed">
                        Explore thousands of job listings or find the perfect candidate in our next-generation platform
                    </p>
                </section>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center px-4 animate-fade-in">
                    <Link to="/jobs">
                        <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 border border-blue-500/30 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
                            <div className="flex items-center justify-center gap-3">
                                <Briefcase className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                                <span className="text-lg font-semibold text-white">Find Jobs</span>
                            </div>
                        </button>
                    </Link>
                    <Link to="/post-job">
                        <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 hover:from-emerald-500/30 hover:to-teal-600/30 border border-emerald-500/30 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
                            <div className="flex items-center justify-center gap-3">
                                <UploadCloud className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                                <span className="text-lg font-semibold text-white">Post a Job</span>
                            </div>
                        </button>
                    </Link>
                </div>

                {/* Companies Carousel */}
                <div className="px-4 animate-fade-in">
                    <h3 className="text-center text-slate-400 text-sm sm:text-base mb-8 uppercase tracking-wide">
                        Trusted by Leading Companies
                    </h3>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="flex gap-8 sm:gap-12 items-center">
                            {companies.map(({ name, id, path }) => (
                                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                                    <div className="flex justify-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                        <img
                                            src={path}
                                            alt={name}
                                            className="h-8 sm:h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* Hero Banner */}
                <div className="w-full flex justify-center items-center px-4 animate-fade-in">
                    <div className="relative group">
                        <img
                            src="/banner.jpeg"
                            className="w-full max-w-5xl h-auto object-cover rounded-3xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                            alt="Banner"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Feature Cards */}
                <section className="flex flex-col lg:flex-row gap-8 justify-center items-stretch px-4 max-w-6xl mx-auto animate-fade-in">
                    <Card className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <Users className="w-6 h-6 text-blue-400" />
                                </div>
                                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    For Job Seekers
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="text-slate-300 text-lg leading-relaxed">
                            Search and apply for jobs, track applications, and connect with your dream employers in our intuitive platform.
                        </CardContent>
                    </Card>

                    <Card className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    <Shield className="w-6 h-6 text-emerald-400" />
                                </div>
                                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                                    For Employers
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="text-slate-300 text-lg leading-relaxed">
                            Post jobs, manage applications, and discover the best candidates with advanced filtering and AI-powered matching.
                        </CardContent>
                    </Card>
                </section>

                {/* FAQ Section */}
                <section className="w-full max-w-4xl mx-auto px-4 animate-fade-in">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-300 text-lg">
                            Everything you need to know about our platform
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6">
                        <Accordion type="multiple" className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index + 1}`}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300"
                                >
                                    <AccordionTrigger className="text-lg font-semibold text-white px-6 py-4 hover:text-blue-400 transition-colors duration-200 [&[data-state=open]]:text-blue-400">
                                        <div className="flex items-center gap-3">
                                            <Zap className="w-5 h-5 text-blue-400" />
                                            {faq.question}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-300 px-6 pb-4 text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
