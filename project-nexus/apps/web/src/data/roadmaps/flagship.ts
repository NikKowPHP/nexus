import { Roadmap } from '@/types/roadmap';

export const flagshipRoadmaps: Roadmap[] = [
  {
    id: 'web-development',
    title: 'Web Development Fundamentals',
    description: 'Comprehensive guide to modern web development',
    nodes: [
      {
        id: 'html-basics',
        title: 'HTML Basics',
        description: 'Learn the foundation of web content structure',
        completed: false,
        dependencies: []
      },
      {
        id: 'css-fundamentals',
        title: 'CSS Fundamentals',
        description: 'Style your web pages effectively',
        completed: false,
        dependencies: ['html-basics']
      },
      {
        id: 'javascript-essentials',
        title: 'JavaScript Essentials',
        description: 'Add interactivity to your websites',
        completed: false,
        dependencies: ['html-basics']
      }
    ]
  },
  {
    id: 'frontend-react',
    title: 'Frontend Development with React',
    description: 'Master modern frontend development using React',
    nodes: [
      {
        id: 'react-basics',
        title: 'React Fundamentals',
        description: 'Learn React components and JSX',
        completed: false,
        dependencies: []
      },
      {
        id: 'state-management',
        title: 'State Management',
        description: 'Understand useState and useEffect hooks',
        completed: false,
        dependencies: ['react-basics']
      },
      {
        id: 'react-router',
        title: 'Routing in React',
        description: 'Implement navigation with React Router',
        completed: false,
        dependencies: ['react-basics']
      }
    ]
  },
  {
    id: 'backend-node',
    title: 'Backend Development with Node.js',
    description: 'Build robust backend services using Node.js',
    nodes: [
      {
        id: 'node-basics',
        title: 'Node.js Fundamentals',
        description: 'Understand event loop and core modules',
        completed: false,
        dependencies: []
      },
      {
        id: 'express-framework',
        title: 'Express Framework',
        description: 'Build RESTful APIs with Express',
        completed: false,
        dependencies: ['node-basics']
      },
      {
        id: 'database-integration',
        title: 'Database Integration',
        description: 'Connect to PostgreSQL database',
        completed: false,
        dependencies: ['express-framework']
      }
    ]
  },
  {
    id: 'devops-fundamentals',
    title: 'DevOps Fundamentals',
    description: 'Learn essential DevOps practices and tools',
    nodes: [
      {
        id: 'docker-basics',
        title: 'Docker Basics',
        description: 'Containerize applications with Docker',
        completed: false,
        dependencies: []
      },
      {
        id: 'ci-cd',
        title: 'CI/CD Pipelines',
        description: 'Implement continuous integration/deployment',
        completed: false,
        dependencies: ['docker-basics']
      },
      {
        id: 'cloud-deployment',
        title: 'Cloud Deployment',
        description: 'Deploy to AWS or Google Cloud',
        completed: false,
        dependencies: ['ci-cd']
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science Basics',
    description: 'Introduction to data analysis and machine learning',
    nodes: [
      {
        id: 'python-basics',
        title: 'Python for Data Science',
        description: 'Learn NumPy and Pandas libraries',
        completed: false,
        dependencies: []
      },
      {
        id: 'data-visualization',
        title: 'Data Visualization',
        description: 'Create charts with Matplotlib and Seaborn',
        completed: false,
        dependencies: ['python-basics']
      },
      {
        id: 'ml-intro',
        title: 'Machine Learning Intro',
        description: 'Understand basic ML concepts',
        completed: false,
        dependencies: ['python-basics']
      }
    ]
  }
];