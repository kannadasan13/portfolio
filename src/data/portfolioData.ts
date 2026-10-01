import {
  PersonalInfo,
  MetricCard,
  SkillItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  ProjectItem,
  WorkflowStep
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Kannadasan',
  titles: [
    'Data Analyst',
    'Data Analytics Enthusiast',
    'Python & SQL Specialist',
    'Economics & Business Analyst'
  ],
  headline: 'Data Analytics Enthusiast & B.A. Economics Graduate',
  summary:
    'Data Analytics enthusiast with a B.A. in Economics and hands-on internship experience analyzing data using Python. Skilled in Pandas and NumPy for data manipulation, and applying statistical methods to derive insights. Eager to leverage an analytical, economics-driven mindset to solve real-world business problems.',
  location: 'Thanjavur, Tamil Nadu, India',
  phone: '+91 89460 68909',
  email: 'dasan9377@gmail.com',
  status: 'Open to Work | Data Analyst & Analytics Intern Roles',
  languages: ['Tamil (Native / Fluent)', 'English (Professional Working)']
};

export const analyticsSnapshot: MetricCard[] = [
  {
    label: 'Internship Experience',
    value: '01',
    subtext: 'Data Analytics Intern at Login 360',
    iconName: 'Briefcase'
  },
  {
    label: 'Professional Certifications',
    value: '02',
    subtext: 'NSDC Skill India & Login 360',
    iconName: 'Award'
  },
  {
    label: 'Core Analytics Stack',
    value: '08+',
    subtext: 'Python, SQL, Power BI, Pandas, NumPy & More',
    iconName: 'Cpu'
  },
  {
    label: 'Academic Foundation',
    value: '6.1',
    subtext: 'CGPA | B.A. in Economics',
    iconName: 'GraduationCap'
  }
];

export const skillsData: SkillItem[] = [
  {
    name: 'Python',
    category: 'Programming',
    level: 'Working Knowledge',
    iconName: 'FileCode2',
    description: 'Writing clean analytical scripts for dataset exploration, automation, and data preparation.',
    tags: ['Scripting', 'Data Manipulation', 'Functions', 'Logic']
  },
  {
    name: 'Pandas',
    category: 'Data Manipulation & Analysis',
    level: 'Intermediate',
    iconName: 'TableProperties',
    description: 'DataFrames, Series, filtering, grouping, merging, pivot tables, handling missing values, and reshaping data.',
    tags: ['DataFrames', 'GroupBy', 'Merging', 'Transformations']
  },
  {
    name: 'NumPy',
    category: 'Data Manipulation & Analysis',
    level: 'Working Knowledge',
    iconName: 'Binary',
    description: 'Multi-dimensional arrays, vectorization, mathematical operations, and statistical calculations.',
    tags: ['Arrays', 'Vectorization', 'Math Ops', 'Broadcasting']
  },
  {
    name: 'SQL',
    category: 'Databases',
    level: 'Working Knowledge',
    iconName: 'Database',
    description: 'Writing queries with SELECT, WHERE, JOINs, GROUP BY, HAVING, and aggregate functions for data retrieval.',
    tags: ['Queries', 'JOINs', 'Aggregations', 'Filtering']
  },
  {
    name: 'Power BI',
    category: 'Business Intelligence',
    level: 'Working Knowledge',
    iconName: 'BarChart3',
    description: 'Building interactive visual dashboards, configuring charts, and reporting key business performance indicators.',
    tags: ['Dashboards', 'KPIs', 'Visual Reports', 'Interactive Filters']
  },
  {
    name: 'MS Excel',
    category: 'Business Intelligence',
    level: 'Intermediate',
    iconName: 'Sheet',
    description: 'Formulas, Pivot Tables, data summarization, spreadsheet organization, and analytical chart creation.',
    tags: ['Pivot Tables', 'Formulas', 'VLOOKUP/XLOOKUP', 'Charting']
  },
  {
    name: 'Data Cleaning & Preprocessing',
    category: 'Data Manipulation & Analysis',
    level: 'Intermediate',
    iconName: 'Sparkles',
    description: 'Handling null values, duplicate records, outlier treatment, standardizing formats, and data validation.',
    tags: ['Deduplication', 'Imputation', 'Formatting', 'Consistency']
  },
  {
    name: 'Data Analysis & EDA',
    category: 'Data Manipulation & Analysis',
    level: 'Intermediate',
    iconName: 'Search',
    description: 'Exploratory data analysis, uncovering hidden trends, assessing distributions, and extracting patterns.',
    tags: ['EDA', 'Pattern Recognition', 'Trend Detection', 'Insights']
  },
  {
    name: 'Statistics',
    category: 'Statistical Methods',
    level: 'Working Knowledge',
    iconName: 'TrendingUp',
    description: 'Descriptive statistics (mean, median, variance, std dev), trend summaries, and quantitative reasoning.',
    tags: ['Descriptive Stats', 'Variance', 'Trend Analysis', 'Distributions']
  },
  {
    name: 'MS PowerPoint',
    category: 'Business Intelligence',
    level: 'Working Knowledge',
    iconName: 'Presentation',
    description: 'Translating complex statistical findings into visually clean executive slides and stakeholder presentations.',
    tags: ['Presentations', 'Stakeholder Communication', 'Visual Storytelling']
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Data Analytics Intern',
    company: 'Login 360',
    period: 'June 2026 – August 2026',
    type: 'Internship',
    location: 'Chennai / Hybrid',
    responsibilities: [
      'Analyzed datasets using Python (Pandas, NumPy) to identify trends, patterns, and support data-driven decisions.',
      'Performed rigorous data cleaning and preprocessing to ensure data accuracy, remove duplicates, and maintain consistency for analytical workflows.',
      'Applied statistical techniques to summarize complex findings and prepared structured insight reports.',
      'Presented analytical findings and actionable business observations clearly to the internal team.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Statistics', 'Data Cleaning', 'Data Analysis'],
    keyOutcomes: [
      'Delivered clean, reliable datasets ready for analysis and reporting.',
      'Identified key trend shifts using statistical summarization techniques.',
      'Enhanced team decision-making through concise, data-backed presentations.'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Arts in Economics (B.A. Economics)',
    institution: 'Rajah Serfoji Govt. College',
    location: 'Thanjavur, Tamil Nadu',
    period: '2022 – 2025',
    cgpa: '6.1',
    highlights: [
      'Rigorous foundation in economic theory, market behavior, and quantitative methods.',
      'Trained in interpreting macroeconomic indicators, demand-supply equilibrium, and fiscal trends.',
      'Application of statistical concepts to socio-economic data sets and resource allocation scenarios.'
    ],
    synergyWithData:
      'Economics brings a natural business mindset to data analytics—understanding the "why" behind figures, evaluating incentives, opportunity costs, and consumer behavior, rather than simply writing code.'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    name: 'Data Analytics',
    organization: 'Login 360',
    year: '2026',
    badge: 'Industry Analytics Program',
    skillsCovered: [
      'Python Data Analysis',
      'Pandas & NumPy',
      'Data Cleaning & Preprocessing',
      'Statistical Methods',
      'Insight Communication'
    ]
  },
  {
    name: 'Application Developer – Web & Mobile',
    organization: 'N.S.D.C Skill India',
    year: '2022',
    badge: 'National Skill Development Certification',
    skillsCovered: [
      'Programming Fundamentals',
      'Application Architecture',
      'Logic & Algorithm Design',
      'Software Development Life Cycle'
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'eda-trend-analysis',
    title: 'Python Exploratory Data Analysis & Statistical Trend Detection',
    subtitle: 'Hands-on dataset exploration, distribution modeling, and trend identification using Python',
    category: 'Python Data Analysis',
    businessProblem:
      'Organizations gather vast volumes of transactional data, but hidden trends, distribution skews, and anomalies remain invisible without systematic exploratory data analysis.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Statistics', 'Data Analysis'],
    datasetContext: 'Real-world business and transactional dataset analyzed during internship training.',
    analyticalProcess: [
      {
        step: 'Data Ingestion & Profiling',
        description: 'Loaded structured tabular datasets into Pandas DataFrames, evaluating data types, shape, and null value distribution.'
      },
      {
        step: 'Statistical Summarization',
        description: 'Calculated measures of central tendency (mean, median, mode) and dispersion (variance, standard deviation) using NumPy.'
      },
      {
        step: 'Trend & Pattern Discovery',
        description: 'Employed rolling aggregations and group-by routines to uncover cyclical fluctuations and performance segments.'
      },
      {
        step: 'Insight Delivery',
        description: 'Synthesized statistical findings into actionable summaries to guide team decisions.'
      }
    ],
    keyInsights: [
      'Identified critical trend inflection points through systematic grouping and descriptive statistics.',
      'Eliminated bias in averages by examining median distributions across skewed subsets.',
      'Delivered data-driven justification for operational timing and resource allocation.'
    ],
    outcome:
      'Produced well-documented analytical scripts and concise presentation summaries that supported data-driven team decisions.'
  },
  {
    id: 'data-cleaning-pipeline',
    title: 'Data Cleaning & Preprocessing Consistency Pipeline',
    subtitle: 'Automated data sanitation, duplicate resolution, and integrity verification workflow',
    category: 'Data Cleaning & Preprocessing',
    businessProblem:
      'Dirty, incomplete, and inconsistently formatted data degrades reporting quality, leads to false business conclusions, and disrupts downstream reporting.',
    technologies: ['Python', 'Pandas', 'Data Cleaning', 'Data Quality'],
    datasetContext: 'Multi-column dataset with missing entries, disparate formats, and duplicate records.',
    analyticalProcess: [
      {
        step: 'Anomaly & Null Auditing',
        description: 'Conducted null-value distribution checks and identified inconsistent string formats across records.'
      },
      {
        step: 'Handling Missing Values',
        description: 'Applied domain-aware imputation strategies and deliberate dropped records where integrity could not be guaranteed.'
      },
      {
        step: 'Deduplication & Type Casting',
        description: 'Enforced unique constraint validation, stripped invalid whitespace, and converted object dates and numbers to clean types.'
      },
      {
        step: 'Quality Certification',
        description: 'Ran pre- and post-cleaning assertion checks to ensure zero loss of valid observations.'
      }
    ],
    keyInsights: [
      'Standardized heterogeneous date and text formats across thousands of records.',
      'Identified and resolved duplicate rows that previously inflated calculation metrics.',
      'Created a reproducible data preparation workflow that cut future data prep turnaround time.'
    ],
    outcome:
      'Delivered a verified, production-ready dataset with consistent schemas and documented transformation rules.'
  },
  {
    id: 'bi-kpi-dashboard',
    title: 'Business Intelligence KPI Dashboard & Executive Reporting',
    subtitle: 'Multi-metric visual performance tracking, variance analysis, and presentation slides',
    category: 'Business Intelligence & Reporting',
    businessProblem:
      'Executive decision-makers need high-level KPI visibility with interactive drill-down capabilities rather than static, text-heavy spreadsheets.',
    technologies: ['Power BI', 'MS Excel', 'MS PowerPoint', 'Data Visualization'],
    datasetContext: 'Operational performance, sales volume, and target variance records.',
    analyticalProcess: [
      {
        step: 'Data Modeling & Structure',
        description: 'Imported cleaned datasets, defined relationships between dimension and fact tables, and organized reporting hierarchies.'
      },
      {
        step: 'Metric & KPI Formulation',
        description: 'Formulated calculated measures for key performance metrics, targets, growth rates, and category distributions.'
      },
      {
        step: 'Interactive Dashboard Design',
        description: 'Designed clean, high-contrast visual layouts incorporating bar charts, trend lines, donut breakdowns, and dynamic slicers.'
      },
      {
        step: 'Executive Slide Deck',
        description: 'Exported key visual summaries into PowerPoint with structured takeaway bullet points for stakeholder reviews.'
      }
    ],
    keyInsights: [
      'Visualized target-vs-actual variance at a glance, highlighting underperforming areas within seconds.',
      'Segmented metrics by operational categories to reveal which units drove the majority of output.',
      'Enabled rapid stakeholder filtering by date ranges and categories without modifying underlying data.'
    ],
    outcome:
      'Constructed an intuitive BI dashboard and accompanying presentation deck ready for executive review.'
  },
  {
    id: 'sql-relational-querying',
    title: 'Relational Database Querying & Business Aggregations',
    subtitle: 'Multi-table JOINs, conditional aggregations, and business metrics extraction using SQL',
    category: 'SQL & Database Analysis',
    businessProblem:
      'Answering specific business questions requires querying normalized database tables, applying business filters, and summarizing millions of rows efficiently.',
    technologies: ['SQL', 'Relational Databases', 'MS Excel', 'Data Analysis'],
    datasetContext: 'Relational schema containing transactional, customer, and product categorization tables.',
    analyticalProcess: [
      {
        step: 'Schema & Relationship Mapping',
        description: 'Mapped primary and foreign key constraints across relational tables to ensure lossless join logic.'
      },
      {
        step: 'Query Formulation & JOINs',
        description: 'Crafted structured SQL queries using INNER JOIN and LEFT JOIN across operational entities.'
      },
      {
        step: 'Grouping & Aggregations',
        description: 'Utilized GROUP BY, HAVING, and aggregate functions (COUNT, SUM, AVG) to compute segmented metrics.'
      },
      {
        step: 'Export & Validation',
        description: 'Validated query results against Excel control totals to guarantee numerical exactness.'
      }
    ],
    keyInsights: [
      'Consolidated multiple operational tables into unified analytical summaries with zero redundant rows.',
      'Derived customer retention and transactional frequency metrics using multi-condition filtering.',
      'Optimized query conditions for accurate, reproducible report pulls.'
    ],
    outcome:
      'Standardized SQL query library for recurring analytical questions and business reporting.'
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Understand',
    subtitle: 'Business Objective Framing',
    tools: ['Economics Mindset', 'Stakeholder Discussions'],
    description: 'Frame the business problem, identify core goals, define key questions, and establish measurable analytical criteria.',
    iconName: 'HelpCircle'
  },
  {
    stepNumber: 2,
    title: 'Collect & Ingest',
    subtitle: 'Data Extraction',
    tools: ['SQL', 'MS Excel', 'Python'],
    description: 'Extract raw data from relational databases using structured SQL queries and load CSV/Excel files into Python.',
    iconName: 'Download'
  },
  {
    stepNumber: 3,
    title: 'Clean & Preprocess',
    subtitle: 'Data Integrity & Formatting',
    tools: ['Python', 'Pandas'],
    description: 'Handle missing values, remove duplicates, detect anomalies, standardize datetime and text, and validate schemas.',
    iconName: 'Sparkles'
  },
  {
    stepNumber: 4,
    title: 'Explore & Summarize',
    subtitle: 'Exploratory Data Analysis',
    tools: ['NumPy', 'Statistics', 'Pandas'],
    description: 'Analyze data distributions, compute measures of central tendency, variance, and detect patterns and correlations.',
    iconName: 'Compass'
  },
  {
    stepNumber: 5,
    title: 'Analyze',
    subtitle: 'Quantitative & Trend Analysis',
    tools: ['Python', 'Statistical Methods'],
    description: 'Evaluate underlying drivers, identify cyclical patterns, perform comparative analyses, and test hypotheses.',
    iconName: 'TrendingUp'
  },
  {
    stepNumber: 6,
    title: 'Visualize',
    subtitle: 'Dashboarding & Charts',
    tools: ['Power BI', 'MS Excel Charts'],
    description: 'Build interactive dashboards, KPI scorecards, dynamic charts, and clear visual representations of findings.',
    iconName: 'LayoutDashboard'
  },
  {
    stepNumber: 7,
    title: 'Communicate',
    subtitle: 'Insights & Strategic Decisions',
    tools: ['MS PowerPoint', 'Executive Reports'],
    description: 'Translate statistical outputs into plain-language business insights, executive presentations, and decision support.',
    iconName: 'Presentation'
  }
];

export const economicsEdgePoints = [
  {
    title: 'Market & Incentive Intuition',
    description: 'Economics trains the analyst to look past vanity metrics and examine underlying consumer incentives, market forces, and behavioral triggers.',
    icon: 'Brain'
  },
  {
    title: 'Opportunity Cost Mindset',
    description: 'Every business decision involves trade-offs. An economics background naturally quantifies what is gained versus what is foregone in every resource decision.',
    icon: 'Scale'
  },
  {
    title: 'Econometric & Statistical Logic',
    description: 'Distinguishing between correlation and causation is central to economics, preventing misleading analytical conclusions in business reports.',
    icon: 'TrendingUp'
  },
  {
    title: 'Macro & Micro Context',
    description: 'Ability to connect internal departmental metrics with broader industry, price inflation, and economic demand cycles.',
    icon: 'Globe'
  }
];
