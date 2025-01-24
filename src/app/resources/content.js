import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Raphael Francis",
  lastName: "Marcial",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Accounting Student",
  avatar: "/images/avatar.jpg",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
  images: {
    resume: "/images/resume/resume.jpg",
    alt: "resume",
    orientation: "vertical",
  },
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Social media links
  {
    name: "Facebook",
    icon: "facebook", // Matches the key in your iconLibrary
    link: "https://facebook.com/RaphaelFrancisMarcial", // Add your Facebook link
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raphmarcial/",
  },
  {
    name: "X",
    icon: "x", // Matches the key in your iconLibrary
    link: "https://twitter.com/", // Replace with your X (Twitter) profile link
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:raphaelfrancism@gmail.com", // Replace with your email
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Aspiring Accounting Professional</>,
  subline: (
    <>
      I'm Raphael, an Accounting Student at{" "}
      <InlineCode>Our Lady of Fatima University</InlineCode>, where I learn
      reporting, taxation, and accounting software. In my free time, I study and
      enhance my skills.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Raphael is an accounting student based in Philippines with a passion for
        transforming complex financial data into clear, actionable insights. His
        focus spans reporting, taxation, and accounting software, exploring the
        intersection of finance and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "2B Hardware Store",
        timeframe: "2022",
        role: "FREELANCE AUDITOR",
        achievements: [
          <>
            Conducted a financial audit, identifying areas for improvement in
            internal controls.
          </>,
          <>
            Provided actionable recommendations to senior management, gaining
            expertise in auditing, financial analysis, and risk management.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sweet Tooth Online Dessert Shop",
        timeframe: "2021",
        role: "OWNER",
        achievements: [
          <>
            Operated an online dessert shop, managing daily operations and
            conducting market research.
          </>,
          <>
            Developed strategies for pricing, promotion, and distribution to
            create a competitive edge.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Our Lady of Fatima University",
        logo: "/images/logo/olfu.jpg",
        timeframe: "2021 - Present",
        description: (
          <>Studying Bachelor of Science in Accounting Information System.</>
        ),
      },
      {
        name: "School of Our Lady of La Salette",
        logo: "/images/logo/sols.jpg",
        timeframe: "2019 - 2021",
        description: (
          <>Studied Accountancy, Business Management, and Entrepreneurship.</>
        ),
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Certifications",
    skills: [
      {
        title: "Xero Accounting Software",
        description: (
          <>
            Specialized in cloud-based accounting, mastering financial workflows
            and advisory services for businesses.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/certification/xero-01.jpg",
            alt: "Certification-Xero",
            width: 11,
            height: 16,
          },
        ],
      },
      {
        title: "Coursera",
        description: (
          <>
            Focused on practical skills in data analysis, financial modeling,
            and advanced Excel for budgeting and visualization.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/certification/coursera-01.jpg",
            alt: "Certification-Financial",
            width: 18,
            height: 12,
          },
          {
            src: "/images/certification/coursera-02.jpg",
            alt: "Certification-Profit",
            width: 18,
            height: 12,
          },
          {
            src: "/images/certification/coursera-03.jpg",
            alt: "Certification-Portfolio",
            width: 18,
            height: 12,
          },
          {
            src: "/images/certification/coursera-04.jpg",
            alt: "Certification-Budget",
            width: 18,
            height: 12,
          },
          {
            src: "/images/certification/coursera-05.jpg",
            alt: "Certification-Stock",
            width: 18,
            height: 12,
          },
        ],
      },
      {
        title: "Open Edu",
        description: (
          <>
            Developed a strong foundation in accounting principles, financial
            management, and advanced Excel techniques for financial analysis and
            reporting.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/certification/openedu-01.jpg",
            alt: "Certification-Accounting",
            width: 11,
            height: 16,
          },
          {
            src: "/images/certification/openedu-02.jpg",
            alt: "Certification-Companies",
            width: 11,
            height: 16,
          },
          {
            src: "/images/certification/openedu-03.jpg",
            alt: "Certification-Risk",
            width: 11,
            height: 16,
          },
          {
            src: "/images/certification/openedu-04.jpg",
            alt: "Certification-Business",
            width: 11,
            height: 16,
          },
          {
            src: "/images/certification/openedu-05.jpg",
            alt: "Certification-Law",
            width: 11,
            height: 16,
          },
          {
            src: "/images/certification/openedu-06.jpg",
            alt: "Certification-Coding",
            width: 11,
            height: 16,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about accounting and tech..",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
