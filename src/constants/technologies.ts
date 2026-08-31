const TECHNOLOGIES = {
  Angular: {
    technology: "Angular",
    primaryColor: "FFFFFF",
    secondaryColor: "B52E31",
    logo: "angular",
  },
  Deno: {
    technology: "Deno",
    primaryColor: "70FFAF",
    secondaryColor: "000000",
    logo: "deno",
  },
  Django: {
    technology: "Django",
    primaryColor: "FFFFFF",
    secondaryColor: "0F3E2E",
    logo: "django",
  },
  ExpressJS: {
    technology: "ExpressJS",
    primaryColor: "FFFFFF",
    secondaryColor: "141414",
    logo: "express",
  },
  FastAPI: {
    technology: "FastAPI",
    primaryColor: "009485",
    secondaryColor: "1E2129",
    logo: "fastapi",
  },
  Flask: {
    technology: "Flask",
    primaryColor: "3BABC3",
    secondaryColor: "fff",
    logo: "flask",
  },
  Go: {
    technology: "Go",
    primaryColor: "29BEB0",
    secondaryColor: "FFFFFF",
    logo: "go",
  },
  JavaScript: {
    technology: "JavaScript",
    primaryColor: "F7E018",
    secondaryColor: "4D4D4D",
    logo: "javascript",
  },
  Laravel: {
    technology: "Laravel",
    primaryColor: "F53003",
    secondaryColor: "FFFFFF",
    logo: "laravel",
  },
  NestJS: {
    technology: "NestJS",
    primaryColor: "050303",
    secondaryColor: "E0234E",
    logo: "nestjs",
  },
  NextJS: {
    technology: "NextJS",
    primaryColor: "FFF",
    secondaryColor: "000000",
    logo: "next.js",
  },
  NodeJS: {
    technology: "NodeJS",
    primaryColor: "3C873A",
    secondaryColor: "303030",
    logo: "node.js",
  },
  NuxtJS: {
    technology: "NuxtJS",
    primaryColor: "00DC82",
    secondaryColor: "FFFFFF",
    logo: "nuxt",
  },
  Python: {
    technology: "Python",
    primaryColor: "306998",
    secondaryColor: "FFD43B",
    logo: "python",
  },
  React: {
    technology: "React",
    primaryColor: "61DAFB",
    secondaryColor: "20232A",
    logo: "react",
  },
  Ruby: {
    technology: "Ruby",
    primaryColor: "FFFFFF",
    secondaryColor: "CC0000",
    logo: "ruby",
  },
  "Ruby on Rails": {
    technology: "Ruby on Rails",
    primaryColor: "FFFFFF",
    secondaryColor: "CC0000",
    logo: "rubyonrails",
  },
  Rust: {
    technology: "Rust",
    primaryColor: "F74C00",
    secondaryColor: "000000",
    logo: "rust",
  },
  SolidJS: {
    technology: "SolidJS",
    primaryColor: "90C3E8",
    secondaryColor: "538CC8",
    logo: "solid",
  },
  "Spring Boot": {
    technology: "Spring Boot",
    primaryColor: "6CB52D",
    secondaryColor: "FFFFFF",
    logo: "springboot",
  },
  Svelte: {
    technology: "Svelte",
    primaryColor: "FF3E00",
    secondaryColor: "FFFFFF",
    logo: "svelte",
  },
  TypeScript: {
    technology: "TypeScript",
    primaryColor: "3178C6",
    secondaryColor: "FFFFFF",
    logo: "typescript",
  },
  VueJS: {
    technology: "VueJS",
    primaryColor: "41B883",
    secondaryColor: "35495E",
    logo: "vue.js",
  },
} as const;

export type TechnologiesType = typeof TECHNOLOGIES;
export type TechnologyType = TechnologiesType[keyof TechnologiesType];

export default TECHNOLOGIES;
