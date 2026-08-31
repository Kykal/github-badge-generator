const TECHNOLOGIES = {
  // "ASP.NET Core": {
  //   technology: "ASP.NET Core",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
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
  // Django: {
  //   technology: "Django",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // ExpressJS: {
  //   technology: "ExpressJS",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // FastAPI: {
  //   technology: "FastAPI",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // Flask: {
  //   technology: "Flask",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // Golang: {
  //   technology: "Golang",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // JavaScript: {
  //   technology: "JavaScript",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // Laravel: {
  //   technology: "Laravel",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // NestJS: {
  //   technology: "NestJS",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // NextJS: {
  //   technology: "NextJS",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // NodeJS: {
  //   technology: "NodeJS",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // NuxtJS: {
  //   technology: "NuxtJS",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // Python: {
  //   technology: "Python",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  React: {
    technology: "React",
    primaryColor: "61DAFB",
    secondaryColor: "20232A",
    logo: "react",
  },
  Ruby: {
    technology: "Ruby on Rails",
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
