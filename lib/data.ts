export interface Job {
    id: string;
    title: string;
    location: string;
    type: string;
    category: string;
    featured?: boolean;
    description: string;
    responsibilities: string[];
    qualifications: string[];
    compensation?: {
        dailyMinimum?: string;
        percentage?: string;
        relocationBonus?: string;
        newGradInfo?: string;
        salary?: string;
    };
}

export interface NewsItem {
    id: string;
    category: 'news' | 'insights' | 'press';
    title: string;
    content: string;
    date: string;
    excerpt: string;
}

export const jobs: Job[] = [
    {
        id: "pain-management-physician",
        title: "Interventional Pain Management Physician",
        location: "Tulsa, OK",
        type: "Full-time",
        category: "Healthcare",
        featured: true,
        description: "Our client is a comprehensive pain management practice where physicians operate at the top of their specialty. Utilizing minimally invasive, safe, and effective options for pain care, Seva aims to reduce the long-term need for opiates. The practice offers a competitive financial package and fosters a supportive family culture with a hardworking staff. The practice has four offices across Tulsa, OK, and Dallas, TX, and is actively expanding with the right physician partners. With independently owned surgery centers in each city, the practice provides significant career opportunities, both financially and clinically, for its doctors.",
        responsibilities: [
            "Perform interventional pain management procedures using minimally invasive techniques",
            "Develop comprehensive treatment plans to address chronic pain conditions",
            "Work collaboratively with the clinical team to ensure optimal patient outcomes",
            "Educate patients on pain management options and promote overall wellness",
            "Maintain accurate patient records and ensure compliance with clinic policies"
        ],
        qualifications: [
            "Board certification in Pain Medicine and Anesthesiology",
            "Fellowship training in Pain Management",
            "Valid medical license to practice in Oklahoma",
            "Strong interpersonal and communication skills",
            "Ability to work well in a collaborative team setting"
        ]
    },
    {
        id: "associate-dentist",
        title: "Associate Dentist",
        location: "Milwaukee, WI",
        type: "Full-time",
        category: "Healthcare",
        featured: true,
        description: "BAM Hire is seeking a qualified Associate Dentist for a modern, all-digital dental practice located in Milwaukee, Wisconsin. This position offers an exciting opportunity to join a dynamic and technologically advanced team in a practice with three locations and state-of-the-art, 9-operatory clinics. The ideal candidate will have a minimum of 2 years of experience and be committed to delivering exceptional dental care to patients.",
        responsibilities: [
            "Perform general dental procedures, including but not limited to fillings, crowns, extractions, root canals, and preventative care",
            "Diagnose and treat oral diseases, injuries, and malformations",
            "Educate patients on maintaining optimal oral health",
            "Work closely with the support team to ensure the smooth operation of the clinic",
            "Maintain accurate patient records and ensure compliance with clinic policies",
            "Provide personalized patient care and ensure patient satisfaction"
        ],
        qualifications: [
            "DDS or DMD from an accredited dental school",
            "Valid state dental license for Wisconsin",
            "Minimum of 2 years of experience as a practicing dentist",
            "Strong clinical skills and proficiency in general dentistry procedures",
            "Excellent communication and patient care skills",
            "Ability to work in a fast-paced, high-tech environment"
        ],
        compensation: {
            dailyMinimum: "$800–$850 per day",
            percentage: "32–35% of collections after reaching the minimum guarantee",
            relocationBonus: "$5,000",
            newGradInfo: "Typically exceed their daily minimum in collections within 90 days"
        }
    },
    {
        id: "software-engineer",
        title: "Senior Software Engineer",
        location: "San Francisco, CA",
        type: "Full-time",
        category: "Technology",
        description: "Join our innovative tech team developing cutting-edge solutions for enterprise clients. We're looking for a senior engineer with strong full-stack experience.",
        responsibilities: [
            "Design and implement scalable software solutions",
            "Lead technical architecture discussions and decisions",
            "Mentor junior developers and conduct code reviews",
            "Collaborate with product managers to define technical requirements",
            "Maintain and improve existing systems"
        ],
        qualifications: [
            "5+ years of professional software development experience",
            "Strong proficiency in JavaScript/TypeScript and React",
            "Experience with cloud platforms (AWS/Azure/GCP)",
            "Bachelor's degree in Computer Science or related field",
            "Excellent problem-solving and communication skills"
        ],
        compensation: {
            salary: "$150,000 - $200,000 annually"
        }
    },
    {
        id: "marketing-director",
        title: "Marketing Director",
        location: "New York, NY",
        type: "Full-time",
        category: "Marketing",
        description: "Lead our marketing initiatives and drive brand growth across multiple channels. The ideal candidate will have a strong background in digital marketing and team leadership.",
        responsibilities: [
            "Develop and execute comprehensive marketing strategies",
            "Manage and mentor a team of marketing professionals",
            "Oversee budget and resource allocation",
            "Drive digital transformation initiatives",
            "Report on KPIs and campaign performance"
        ],
        qualifications: [
            "10+ years of marketing experience",
            "Proven track record of successful campaign management",
            "Strong analytical and leadership skills",
            "MBA preferred",
            "Experience with marketing automation tools"
        ],
        compensation: {
            salary: "$140,000 - $180,000 annually"
        }
    },
    {
        id: "data-scientist",
        title: "Senior Data Scientist",
        location: "Boston, MA",
        type: "Full-time",
        category: "Technology",
        description: "Join our data science team to develop and implement machine learning models that drive business decisions. Looking for someone with strong statistical background and programming skills.",
        responsibilities: [
            "Develop and deploy machine learning models",
            "Analyze large datasets to extract insights",
            "Create data visualization dashboards",
            "Collaborate with business stakeholders",
            "Present findings to executive team"
        ],
        qualifications: [
            "Ph.D. in Statistics, Computer Science, or related field",
            "5+ years experience in machine learning",
            "Proficiency in Python and R",
            "Experience with big data technologies",
            "Strong communication skills"
        ],
        compensation: {
            salary: "$160,000 - $190,000 annually"
        }
    },
    {
        id: "financial-analyst",
        title: "Senior Financial Analyst",
        location: "Chicago, IL",
        type: "Full-time",
        category: "Finance",
        description: "Join our finance team to provide strategic financial analysis and support decision-making processes. Looking for someone with strong analytical skills and attention to detail.",
        responsibilities: [
            "Prepare financial models and forecasts",
            "Analyze market trends and competitors",
            "Support M&A activities",
            "Create monthly and quarterly reports",
            "Present findings to management"
        ],
        qualifications: [
            "MBA in Finance or related field",
            "5+ years of financial analysis experience",
            "Advanced Excel and financial modeling skills",
            "CFA certification preferred",
            "Strong analytical mindset"
        ],
        compensation: {
            salary: "$100,000 - $130,000 annually"
        }
    }
];

export const newsItems: NewsItem[] = [
    {
        id: "global-expansion",
        category: "news",
        title: "BAM hire Expands Global Reach with Strategic Partnerships",
        date: "2024-01-15",
        excerpt: "BAM hire announces expansion of international presence through new strategic partnerships with leading recruitment agencies across key global markets.",
        content: `BAM hire is thrilled to announce the expansion of its international presence through new strategic partnerships with leading recruitment agencies across key global markets. This exciting development allows BAM hire to offer an even broader array of staffing solutions tailored to meet the unique needs of businesses and job seekers worldwide. These partnerships will strengthen BAM hire's ability to connect businesses with top-tier talent and provide professionals with life-changing career opportunities in industries ranging from technology to healthcare and beyond.
  
  With a growing global footprint, BAM hire is positioning itself to better serve clients and candidates, ensuring companies have access to the skilled workforce they need to drive innovation and growth. In addition, job seekers will benefit from increased access to diverse roles in new regions, furthering their career aspirations.
  
  As part of its commitment to fostering collaboration and inclusivity in the workforce, BAM hire will continue to innovate and refine its services, ensuring they meet the demands of an ever-evolving job market. Through these new partnerships, BAM hire is poised to enhance its reputation as a forward-thinking leader in workforce solutions, committed to creating meaningful connections and empowering both businesses and individuals to succeed on a global scale.`
    },
    {
        id: "digital-talent-acquisition",
        category: "insights",
        title: "Navigating the Future of Talent Acquisition in a Digital World",
        date: "2024-01-14",
        excerpt: "As the workforce landscape shifts, BAM hire continues to lead the way in innovative talent acquisition strategies.",
        content: `As the workforce landscape shifts, BAM hire continues to lead the way in innovative talent acquisition strategies. With the rapid advancement of AI and automation, businesses face both challenges and opportunities in their recruitment processes. In this latest insight, BAM hire delves into how technology is reshaping hiring practices and explores the importance of blending cutting-edge tools with a human touch to ensure businesses find the right fit for their teams.
  
  By staying ahead of trends and adapting to changes, BAM hire provides expert guidance on how organizations can thrive in the evolving world of work.
  
  Stay tuned to BAM hire's insights section for ongoing analysis of industry trends, hiring best practices, and expert advice on shaping the future of your workforce.`
    },
    {
        id: "company-announcement",
        category: "press",
        title: "BAM hire Revolutionizes Talent Acquisition Landscape",
        date: "2024-01-13",
        excerpt: "BAM hire announces revolutionary approach to connecting businesses with top-tier talent.",
        content: `BAM hire, a leading workforce solutions provider, is revolutionizing the talent acquisition landscape by offering businesses and professionals alike access to transformative opportunities. With a focus on connecting companies with top-tier talent and empowering individuals to find fulfilling careers, BAM hire bridges the gap between skill and demand.
  
  With a diverse range of services, BAM hire specializes in both temporary and permanent staffing solutions, tailored to meet the unique needs of businesses across multiple industries. The company's global reach and advanced technology allow them to tap into a wide pool of talent, ensuring clients find candidates who are not only qualified but also aligned with their organizational culture.
  
  "We understand the ever-evolving dynamics of the workforce," say Azam, Bogdan, and Mike, co-founders of BAM hire. "Our mission is to connect businesses with the best talent, enabling growth and innovation while providing job seekers with opportunities that truly enhance their careers."
  
  By leveraging innovative recruitment strategies, BAM hire ensures a seamless hiring experience. Their team of experienced professionals works closely with clients to understand their specific needs, allowing them to provide customized workforce solutions. Whether businesses are looking for highly specialized professionals or need to fill large-scale temporary roles, BAM hire has the expertise to deliver.
  
  For job seekers, BAM hire offers a range of tools and support to help them navigate the job market. From resume building to interview preparation, the company is dedicated to ensuring candidates are not just prepared but also confident as they embark on their new career journeys.
  
  BAM hire is committed to fostering an inclusive work environment where diverse talent can thrive. The company values innovation, collaboration, and personal growth, striving to build long-term relationships with both clients and candidates.
  
  As the world of work continues to evolve, BAM hire remains at the forefront, providing unparalleled workforce solutions that drive success for both businesses and individuals. With a focus on creating meaningful connections, BAM hire is reshaping the future of work.`
    }
];

