import React from "react";

const TimelineItem = ({ start, end, content }) => (
    <li className="mb-8">
        <hr className="border-gradient-to-r from-primary/30 to-secondary/30" />

        {/* Start marker */}
        {start && (
            <div className="timeline-start timeline-box bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:scale-105 transition-all duration-300 border-2 border-primary/50">
                {start}
            </div>
        )}

        {/* Middle marker with pulse animation */}
        <div className="timeline-middle">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-8 w-8 drop-shadow-lg animate-pulse"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                    />
                </svg>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-ping"></div>
            </div>
        </div>

        {/* Content area */}
        {content && (
            <div className="timeline-content p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 hover:shadow-primary/25 hover:-translate-y-2 transition-all duration-500 mb-4 max-w-md mx-auto md:ml-8">
                <p className="text-gray-800 font-medium text-lg leading-relaxed">{content}</p>
            </div>
        )}

        {/* End marker */}
        {end && (
            <div className="timeline-end timeline-box bg-gradient-to-r from-secondary to-primary/80 text-white shadow-lg hover:scale-105 transition-all duration-300 border-2 border-secondary/50">
                {end}
            </div>
        )}
    </li>
);

const Roadmap = ({ title, steps }) => (
    <div className="my-12 p-8 bg-gradient-to-br from-white/50 to-gray-50/50 backdrop-blur-sm border border-white/30 rounded-3xl shadow-2xl hover:shadow-primary/20 transition-all duration-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent drop-shadow-lg">
            {title}
        </h2>

        <ul className="timeline timeline-vertical">
            {steps.map((step, i) => (
                <TimelineItem
                    key={i}
                    start={step.start}
                    end={step.end}
                    content={step.content}
                />
            ))}
        </ul>
    </div>
);

const Roadmaps = () => {
    return (
        <div className="w-full max-w-3xl mx-auto">

            {/* Backend */}
            <Roadmap
                title="Backend Developer Roadmap"
                steps={[
                    {
                        start: "1",
                        content: "Master PHP, Python, Node.js, or Java. Focus on server-side logic, HTTP protocols, and building robust APIs.",
                        end: "Databases"
                    },
                    {
                        start: "2",
                        content: "Learn MySQL, PostgreSQL, MongoDB. Master CRUD operations, relationships, indexing, and query optimization.",
                        end: "APIs"
                    },
                    {
                        start: "3",
                        content: "Build RESTful APIs and GraphQL endpoints. Learn API design patterns, versioning, and documentation.",
                        end: "Security"
                    },
                    {
                        start: "4",
                        content: "Implement JWT, OAuth2, bcrypt. Secure your APIs against common vulnerabilities (SQL injection, XSS).",
                        end: "Advanced"
                    },
                    {
                        start: "5",
                        content: "Redis/Memcached caching, unit/integration testing, performance profiling, and deployment strategies."
                    },
                ]}
            />

            {/* Fullstack */}
            <Roadmap
                title="Full-Stack Developer Roadmap"
                steps={[
                    {
                        start: "1",
                        content: "Master HTML5, CSS3, modern JavaScript (ES6+), DOM manipulation, and responsive design principles.",
                        end: "Frameworks"
                    },
                    {
                        start: "2",
                        content: "React, Vue.js, or Angular. Learn component architecture, state management (Redux/Zustand), and hooks.",
                        end: "Backend"
                    },
                    {
                        start: "3",
                        content: "Node.js, PHP/Laravel, Python/Django. Build complete full-stack applications with authentication.",
                        end: "Data"
                    },
                    {
                        start: "4",
                        content: "SQL/NoSQL databases with Prisma, Mongoose, or Sequelize. Database migrations and seeding.",
                        end: "Deploy"
                    },
                    {
                        start: "5",
                        content: "Docker, CI/CD, Vercel/Netlify, cloud providers. Environment variables and production optimization."
                    },
                ]}
            />

            {/* Mobile */}
            <Roadmap
                title="Mobile Developer Roadmap"
                steps={[
                    { start: "Programming Language (Kotlin, Swift, Dart)" },
                    { end: "UI Framework (Jetpack, SwiftUI, Flutter)" },
                    { start: "Networking & APIs" },
                    { end: "Local Databases (Room, CoreData, Hive)" },
                    { start: "Publishing Apps (Play Store / App Store)" },
                ]}
            />

            {/* DevOps */}
            <Roadmap
                title="DevOps Engineer Roadmap"
                steps={[
                    { start: "Linux & Networking Essentials" },
                    { end: "Version Control (Git & GitHub)" },
                    { start: "CI/CD Pipelines (GitHub Actions, Jenkins)" },
                    { end: "Containers & Docker" },
                    { start: "Cloud (AWS, Azure, GCP)" },
                ]}
            />

            {/* Cybersecurity */}
            <Roadmap
                title="Cybersecurity Engineer Roadmap"
                steps={[
                    { start: "Networking & Linux Basics" },
                    { end: "Security Tools (Nmap, Burp Suite)" },
                    { start: "Web Vulnerabilities (OWASP)" },
                    { end: "Ethical Hacking & Pen Testing" },
                    { start: "Security Certifications (CEH, Security+)" },
                ]}
            />

            {/* Database */}
            <Roadmap
                title="Database Administrator (DBA) Roadmap"
                steps={[
                    { start: "Database Fundamentals (SQL, ERD)" },
                    { end: "RDBMS Systems (MySQL, PostgreSQL, Oracle)" },
                    { start: "Database Security & Indexing" },
                    { end: "Backups, Replication, HA" },
                    { start: "Monitoring & Optimization" },
                ]}
            />

            {/* Software Engineer */}
            <Roadmap
                title="Software Engineer Roadmap"
                steps={[
                    { start: "Data Structures & Algorithms" },
                    { end: "Object Oriented Programming" },
                    { start: "System Design Basics" },
                    { end: "Clean Code & Design Patterns" },
                    { start: "Distributed Systems + Cloud" },
                ]}
            />

            {/* UI/UX */}
            <Roadmap
                title="UI / UX Designer Roadmap"
                steps={[
                    { start: "Design Basics (Color, Typography, Layout)" },
                    { end: "Wireframing (Figma, Adobe XD)" },
                    { start: "UI Design (Components, Layouts)" },
                    { end: "UX Research & User Flow" },
                    { start: "Prototyping & Testing" },
                ]}
            />

            {/* IT Help Desk */}
            <Roadmap
                title="IT Help Desk Roadmap"
                steps={[
                    { start: "Computer Hardware & OS Basics" },
                    { end: "Networking Essentials" },
                    { start: "Troubleshooting & Diagnostics" },
                    { end: "Ticketing Systems (Jira, ServiceNow)" },
                    { start: "Soft Skills & Communication" },
                ]}
            />

        </div>
    );
};

export default Roadmaps;