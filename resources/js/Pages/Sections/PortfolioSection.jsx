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
        title: 'FUTURE ENTREPRENEUR SUMMIT SURABAYA 2025',
        youtubeUrl: 'https://www.youtube.com/embed/QZycyxPV9bo?si=W1pZTzDVFZE917y3',
        tags: ['Surabaya', 'Kapal Api', 'Jeromi Polin'],
    },
    {
        id: 2,
        title: 'FUTURE ENTREPRENEUR SUMMIT JEMBER 2024',
        youtubeUrl: 'https://www.youtube.com/embed/5eaj50YPD8Y?si=yZw6--qU5AdsxuFC',
        tags: ['Next.js', 'Firebase', 'D3.js', 'Framer Motion'],
    },
    {
        id: 3,
        title: 'Nature Photography Blog',
        youtubeUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
        tags: ['Gatsby', 'GraphQL', 'Contentful', 'Styled-Components'],
    },
];


// Card component for individual portfolio items
const PortfolioCard = ({ project }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100">
            <div className="w-full h-48 overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src={project.youtubeUrl}
                    title={`YouTube video of ${project.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-base mb-4">{project.description}</p>
                
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
