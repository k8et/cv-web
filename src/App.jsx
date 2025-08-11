import React from "react";

const data = {
    header: {
        name: "Maksym Goncharov",
        title: "Frontend Developer | React / Next.js Specialist",
        email: "mxmgnchrv@gmail.com",
        telegram: "@k833t",
        location: "Kharkiv, Ukraine",
    },
    links: [
        {label: "GitHub", url: "https://github.com/k8et"},
        {label: "LinkedIn", url: "https://www.linkedin.com/in/mxmgnchrv/"},
        {label: "Telegram", url: "https://t.me/mxmgnchrv"},
    ],
    profile:
        "Frontend Developer | React / Next.js Specialist with 4+ years of experience building high-performance web applications and SaaS platforms. Proven track record in developing services for Steam top-ups, SMS reception, Telegram bot automation, gift card marketplaces with full admin panels, crypto payment systems, and AI-powered SaaS generators. Experienced with React Native for mobile development and Flask for backend integrations. Strong background in full-stack development using Next.js, Tailwind CSS, and modern UI libraries. Currently acting as a Frontend Developer and Team Lead in a 4-member cross-functional team.",
    techStack: {
        frontend:
            "React, Next.js, Redux Toolkit (RTK), React Query, SWR, Tailwind CSS, NextUI, ShadCN UI, MUI, Framer Motion, Zustand, Headless UI, Radix UI",
        backend: "Node.js, Next.js API Routes, Drizzle ORM, PostgreSQL, Flask",
        tools: "Zod, React Hook Form, OpenAI API, JWT, Lucide React, nprogress",
        mobile: "React Native (basic)",
        other: "Scrum, responsive design, performance optimization",
    },
    experience: [
        {
            company: "ProCoders",
            role: "Trainee Frontend Developer",
            period: "2022 – 2023",
            bullets: [
                "Completed a trainee program focused on frontend development.",
                "Gained experience with Scrum methodology and teamwork in a professional environment.",
            ],
        },
        {
            company: "NWS Studio",
            role: "React Developer",
            period: "2021 – 2023",
            bullets: [
                "Worked on client projects in small, cross-functional teams (PM, designer, backend developers).",
                "Developed scripts using JavaScript & TypeScript and created responsive web pages with React.",
                "Built mobile applications with React Native.",
            ],
        },
        {
            company: "DEVE",
            role: "React Developer → Project Lead",
            period: "2023 – Present",
            bullets: [
                "Promoted from Mid-level React Developer to Project Lead.",
                "Led complex products: Steam top-up service, SMS reception platform, Telegram bot automation, gift card marketplace with full admin panel, crypto payment gateway.",
                "Delivered multiple admin panels for vendors selling digital goods (gift cards, game keys).",
                "Currently coordinating a 4-member team (1 backend, 1 frontend, 1 designer, and myself).",
            ],
        },
    ],
    projects: [
        {
            name: "Steam Account Top-up Platform",
            desc: "Web platform for recharging Steam balances with vendor dashboards.",
        },
        {name: "SMS Reception Platform", desc: "Virtual numbers and SMS inbox service."},
        {
            name: "Telegram Bot Automation SaaS",
            desc: "Service for creating and automating Telegram bots.",
        },
        {
            name: "Gift Card Marketplace (Admin Panel)",
            desc: "Marketplace for buying/selling gift cards with a full-featured admin.",
        },
        {name: "Crypto Payment Gateway", desc: "Payment processor supporting cryptocurrencies."},
        {name: "AI SaaS Generator", desc: "AI-powered platform for generating SaaS content and workflows."},
    ],
    achievements: [
        "Promoted to Project Lead within 1 year.",
        "Delivered 10+ complex web apps and admin panels.",
        "Improved delivery speed via reusable UI components and optimized workflow.",
        "Integrated AI features and automation to increase client efficiency.",
    ],
    education: [
        {
            degree: "High School Diploma",
            place: "School №60 | Kharkiv, Ukraine",
        },
        {
            degree: "Bachelor’s in Computer Engineering",
            place: "NTU \"KhPI\"",
            period: "2020 – 2024",
        },
    ],
};

const Section = ({
                     title,
                     children,
                 }) => (
    <section className="mb-6 break-inside-avoid print:mb-4">
        <h2 className="text-lg font-semibold tracking-wide text-gray-800 mb-2 border-b border-gray-200 pb-1 print:text-base">
            {title}
        </h2>
        {children}
    </section>
);

const BulletList = ({items}) => (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
        {items.map((it, idx) => (
            <li key={idx}>{it}</li>
        ))}
    </ul>
);

const LinkPill = ({label, url}) => (
    <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition"
    >
        {label}
    </a>
);

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 p-4 print:bg-white print:p-0">
            <div
                className="mx-auto max-w-5xl bg-white shadow-sm rounded-2xl p-6 print:shadow-none print:rounded-none print:p-0"
                style={{boxShadow: "0 10px 30px rgba(0,0,0,0.06)"}}
            >
                <header
                    className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 print:text-xl">
                            {data.header.name}
                        </h1>
                        <p className="text-gray-700 print:text-gray-800">
                            {data.header.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            {data.header.location}
                        </p>
                    </div>
                    <div className="text-sm text-gray-700 flex flex-col gap-1 mt-2 md:mt-0">
            <span>
              <strong>Email:</strong> {data.header.email}
            </span>
                        <span>
              <strong>Telegram:</strong> {data.header.telegram}
            </span>
                    </div>
                </header>

                <div className="flex flex-wrap gap-2 mt-4 print:mt-2">
                    {data.links.map((l, i) => (
                        <LinkPill key={i} label={l.label} url={l.url}/>
                    ))}
                </div>

                <main className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 print:mt-4">
                    <div className="md:col-span-2">
                        <Section title="Profile">
                            <p className="text-gray-700 leading-relaxed">{data.profile}</p>
                        </Section>

                        <Section title="Work Experience">
                            <div className="space-y-4">
                                {data.experience.map((exp, idx) => (
                                    <div key={idx} className="border border-gray-200 rounded-xl p-4">
                                        <div
                                            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                            <h3 className="font-semibold text-gray-900">
                                                {exp.company} — {exp.role}
                                            </h3>
                                            <span className="text-sm text-gray-500">{exp.period}</span>
                                        </div>
                                        <BulletList items={exp.bullets}/>
                                    </div>
                                ))}
                            </div>
                        </Section>

                    </div>

                    <aside className="md:col-span-1">
                        <Section title="Tech Stack">
                            <div className="space-y-3 text-gray-700">
                                <div>
                                    <div className="font-medium text-gray-900">Frontend</div>
                                    <div className="text-sm">{data.techStack.frontend}</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Backend</div>
                                    <div className="text-sm">{data.techStack.backend}</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Tools & Libraries</div>
                                    <div className="text-sm">{data.techStack.tools}</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Mobile</div>
                                    <div className="text-sm">{data.techStack.mobile}</div>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">Other</div>
                                    <div className="text-sm">{data.techStack.other}</div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Achievements">
                            <BulletList items={data.achievements}/>
                        </Section>

                        <Section title="Education">
                            <div className="space-y-2">
                                {data.education.map((e, idx) => (
                                    <div key={idx}>
                                        <div className="font-medium text-gray-900">{e.degree}</div>
                                        <div className="text-sm text-gray-700">
                                            {e.place} {e.period ? `• ${e.period}` : ""}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </aside>
                </main>
            </div>

            <div className="fixed bottom-4 right-4 flex gap-2 print:hidden">
                <a
                    href="/cv.pdf"
                    download="Maksym_Goncharov_CV.pdf"
                    className="px-4 py-2 rounded-xl bg-neutral-900 text-white shadow hover:bg-black transition"
                >
                    Download CV (PDF)
                </a>
            </div>
        </div>
    );
}

