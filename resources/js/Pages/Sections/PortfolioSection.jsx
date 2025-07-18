import React from 'react';

// You can use any icon library, here's an example with a simple SVG
const ArrowRight = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);


// Sample data for portfolio projects
const portfolioData = [
    {
        id: 1,
        title: 'Eco-Friendly Marketplace',
        description: 'A platform for discovering and purchasing sustainable and eco-friendly products from various sellers.',
        imageUrl: 'https://placehold.co/600x400/22c55e/ffffff?text=Project+1',
        tags: ['React', 'Node.js', 'Tailwind CSS', 'Stripe'],
    },
    {
        id: 2,
        title: 'GreenThumb Garden Planner',
        description: 'A tool for garden enthusiasts to plan their garden layout, track plant growth, and get reminders.',
        imageUrl: 'https://placehold.co/600x400/22c55e/ffffff?text=Project+2',
        tags: ['Next.js', 'Firebase', 'D3.js', 'Framer Motion'],
    },
    {
        id: 3,
        title: 'Nature Photography Blog',
        description: 'A visually-driven blog showcasing nature photography with a clean, minimalist reading experience.',
        imageUrl: 'https://placehold.co/600x400/22c55e/ffffff?text=Project+3',
        tags: ['Gatsby', 'GraphQL', 'Contentful', 'Styled-Components'],
    },
];

// Card component for individual portfolio items
const PortfolioCard = ({ project }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100">
            <img
                className="w-full h-48 object-cover"
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/f87171/ffffff?text=Image+Failed'; }}
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};


const PortfolioSection = () => {
    // Inline style for the abstract background pattern
    const abstractBgStyle = {
        backgroundColor: '#ffffff',
        backgroundImage: `radial-gradient(#dcfce7 1px, transparent 1px)`,
        backgroundSize: `20px 20px`,
    };

    return (
        <section
            className="text-gray-800 py-16 px-4 sm:px-6 lg:px-8 font-sans"
            style={abstractBgStyle}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                        Our Portfolio
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        A showcase of impactful seminars, events, and entrepreneurial journeys from the summit.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Show More Button */}
                <div className="mt-12 text-center">
                    <button className="group inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                        Show More
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
