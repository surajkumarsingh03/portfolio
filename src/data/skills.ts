export interface SkillCategory {
    id: number;
    name: string;
    skills: Skill[];
  }
  
  export interface Skill {
    id: number;
    name: string;
    logo: string;
    proficiency: number; // 1-5
  }
  
  export const skillCategories: SkillCategory[] = [
    {
      id: 1,
      name: "Frontend",
      skills: [
        {
          id: 101,
          name: "HTML5",
          logo: "html5",
          proficiency: 5
        },
        {
          id: 102,
          name: "CSS3",
          logo: "css3",
          proficiency: 4
        },
        {
          id: 103,
          name: "JavaScript",
          logo: "javascript",
          proficiency: 5
        },
        {
          id: 104,
          name: "TypeScript",
          logo: "typescript",
          proficiency: 4
        },
        {
          id: 105,
          name: "React",
          logo: "react",
          proficiency: 4
        },
        {
          id: 106,
          name: "Redux",
          logo: "redux",
          proficiency: 3
        },
        {
          id: 107,
          name: "Tailwind CSS",
          logo: "tailwindcss",
          proficiency: 4
        }
      ]
    },
    {
      id: 2,
      name: "Backend",
      skills: [
        {
          id: 201,
          name: "Node.js",
          logo: "nodejs",
          proficiency: 3
        },
        {
          id: 202,
          name: "Express",
          logo: "express",
          proficiency: 3
        },
        {
          id: 203,
          name: "MongoDB",
          logo: "mongodb",
          proficiency: 2
        },
        {
          id: 204,
          name: "Firebase",
          logo: "firebase",
          proficiency: 3
        }
      ]
    },
    {
      id: 3,
      name: "Tools",
      skills: [
        {
          id: 301,
          name: "Git",
          logo: "git",
          proficiency: 4
        },
        {
          id: 302,
          name: "GitHub",
          logo: "github",
          proficiency: 4
        },
        {
          id: 303,
          name: "VS Code",
          logo: "vscode",
          proficiency: 5
        },
        {
          id: 304,
          name: "Figma",
          logo: "figma",
          proficiency: 3
        },
        {
          id: 305,
          name: "Docker",
          logo: "docker",
          proficiency: 2
        }
      ]
    }
  ];