import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SearchBox({ initialValue = "", onSearch, fullWidth = false }) {
    const [value, setValue] = useState(initialValue);
    const router = useRouter();

    // Sync with external changes
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    function handleSubmit(e) {
        e.preventDefault();

        // If onSearch callback is provided (v4 companies page), use it
        if (onSearch) {
            onSearch(value.trim());
            return;
        }

        // Otherwise use router navigation (v3 style for homepage)
        const query = { ...router.query };

        // CASE 1: input is empty
        if (!value.trim()) {
            // If search already exists, remove it
            if (query.search) {
                delete query.search;

                router.push({
                    pathname: "/companies",
                    query,
                }, undefined, { shallow: true });
            }
            // Otherwise do nothing
            return;
        }

        // CASE 2: input has value push it to the router.
        query.search = value;

        router.push({
            pathname: "/companies",
            query,
        }, undefined, { shallow: true });
    }

    // Use different classes based on fullWidth prop
    const containerClasses = fullWidth 
        ? "mainSearch bg-white px-20 py-15 rounded-100"
        : "mainSearch -w-900 bg-white px-10 py-10 rounded-100";

    return (
        <form onSubmit={handleSubmit}>
            <div className={containerClasses}>
                <div className="button-grid items-center">

                    {/* Search input */}
                    <div className="searchMenu-loc px-30 lg:px-0 flex-1">
                        <h4 className="text-15 fw-500 ls-2 lh-16 text-black">
                            Search
                        </h4>


                        <div className="text-15 text-light-1 ls-2 lh-16">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search by city, state, or company"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="js-search text-dark-1"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="button-item">
                        <button
                            type="submit"
                            className="mainSearch__submit button -dark-1 h-60 px-35 rounded-100 bg-blue-1 text-white"
                        >
                            <i className="icon-search text-20 mr-10"></i>
                            Search
                        </button>
                    </div>

                </div>
            </div>
        </form>
    );
}