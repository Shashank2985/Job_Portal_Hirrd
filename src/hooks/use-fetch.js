import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const useFetch = (cb, options = {}) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { session, isLoaded } = useSession();

    const fn = async (...args) => {
        if (!isLoaded) {
            console.warn("Clerk session not loaded yet");
            return;
        }

        if (!session) {
            console.error("No session found");
            setError(new Error("User session not available"));
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const supabaseAccessToken = await session.getToken({
                template: "supabase",
            });

            const response = await cb(supabaseAccessToken, options, ...args);
            setData(response);
        } catch (error) {
            setError(error);
            console.error("useFetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fn };
};

export default useFetch;
