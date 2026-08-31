const TECHNOLOGIES = {
  // "ASP.NET Core": {
  //   technology: "ASP.NET Core",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // Angular: {
  //   technology: "Angular",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // Deno: {
  //   technology: "Deno",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
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
  },
  // "Ruby on Rails": {
  //   technology: "Ruby on Rails",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // Rust: {
  //   technology: "Rust",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // SolidJS: {
  //   technology: "SolidJS",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // "Spring Boot": {
  //   technology: "Spring Boot",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // Svelte: {
  //   technology: "Svelte",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // TypeScript: {
  //   technology: "TypeScript",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
  // VueJS: {
  //   technology: "VueJS",
  //   primaryColor: "",
  //   secondaryColor: "",
  // },
} as const;

export type TechnologiesType = typeof TECHNOLOGIES;
export type TechnologyType = TechnologiesType[keyof TechnologiesType];

export default TECHNOLOGIES;
