import companies from "../data/companies.json";

export function getCompanies(filters = {}) {
    const {
        search,
        category,
        state,
        rating,
        sort,
    } = filters;

    let results = [...companies];

    //  Search (name, city, state, categories)
    if (search) {
        const q = search.toLowerCase();
        results = results.filter(c =>
            c.name.toLowerCase().includes(q) ||
            c.city.toLowerCase().includes(q) ||
            c.state.toLowerCase().includes(q) ||
            c.categories.some(cat =>
                cat.toLowerCase().includes(q)
            )
        );
    }

    // 🏷 Category filter
    if (category) {
        results = results.filter(c =>
            c.categories.includes(category)
        );
    }

    //  State filter
    if (state) {
        results = results.filter(c =>
            c.state === state
        );
    }

    //  Rating filter
    if (rating) {
        results = results.filter(c =>
            c.rating >= Number(rating)
        );
    }

    // Sorting (based on featured)
    if (sort === "featured") {
        results.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
        });
    }

    //  Sorting (based on rating)
    if (sort === "rating") {
        results.sort((a, b) => b.rating - a.rating);
    }

    return results;
}


export function getCompanyBySlug(slug) {
    return companies.find(c => c.slug === slug);
}

export function getFeaturedCompanies() {
    return companies.filter(c => c.featured).slice(0, 6);
}

export function getStates() {
    return Array.from(
        new Set(companies.map(c => c.state))
    ).sort();
}
