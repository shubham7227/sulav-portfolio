import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiRust,

  // Frontend
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,

  // Backend
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFastapi,
  SiNginx,
  SiFlask,

  // Databases / APIs
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiFirebase,

  // Cloud & DevOps
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiAkamai,
  SiAlibabacloud,
  SiCloudflare,

  // Tools
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiIntellijidea,
  SiVisualstudiocode,
  SiPostman,
  SiSwagger,
  SiNx,
  SiRedux,

  // Observability
  SiPrometheus,
  SiGrafana,
  SiDatadog,
  SiDynatrace,

  // Testing
  SiJunit5,
  SiJest,
  SiApachejmeter,

  // AI / ML
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiApachekafka,
} from "react-icons/si";

// Font Awesome (generic / conceptual / social)
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaProjectDiagram,
  FaWordpressSimple,
  FaSitemap,
  FaRunning,
  FaNetworkWired,
  FaBrain,
  FaPlug,
  FaStripe,
  FaSass,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";

// Material Design (conceptual)
import { MdAutoAwesome, MdFlashOn, MdSyncAlt } from "react-icons/md";

/**
 * 🔒 Single source of truth
 * Keys are what Sanity stores
 */
export const iconMap = {
  // Languages
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  java: <FaJava />,
  python: <SiPython />,
  go: <SiGo />,
  rust: <SiRust />,

  // Frontend
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  angular: <SiAngular />,
  vue: <SiVuedotjs />,
  tailwind: <SiTailwindcss />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  nx: <SiNx />,
  redux: <SiRedux />,

  // Backend / Frameworks
  springboot: <SiSpringboot />,
  reactive: <MdFlashOn />,
  nodejs: <SiNodedotjs />,
  express: <SiExpress />,
  nestjs: <SiNestjs />,
  django: <SiDjango />,
  fastapi: <SiFastapi />,
  flask: <SiFlask />,
  nginx: <SiNginx />,
  stripe: <FaStripe />,

  // Architecture / Design
  microservices: <FaProjectDiagram />,
  systemdesign: <FaSitemap />,
  cloudnative: <FaCloud />,
  agile: <FaRunning />,

  // Databases / APIs
  postgresql: <SiPostgresql />,
  mysql: <SiMysql />,
  mongodb: <SiMongodb />,
  redis: <SiRedis />,
  graphql: <SiGraphql />,
  rest: <FaNetworkWired />,
  firebase: <SiFirebase />,
  wordpress: <FaWordpressSimple />,

  // Cloud & DevOps
  aws: <SiAmazonaws />,
  gcp: <SiGooglecloud />,
  azure: <SiMicrosoftazure />,
  alicloud: <SiAlibabacloud />,
  docker: <SiDocker />,
  kubernetes: <SiKubernetes />,
  terraform: <SiTerraform />,
  jenkins: <SiJenkins />,
  akamai: <SiAkamai />,
  cloudflare: <SiCloudflare />,
  cicd: <MdSyncAlt />,
  harness: <MdSyncAlt />,
  kafka: <SiApachekafka />,

  // Tools
  git: <SiGit />,
  github: <SiGithub />,
  gitlab: <SiGitlab />,
  bitbucket: <SiBitbucket />,
  intellij: <SiIntellijidea />,
  vscode: <SiVisualstudiocode />,
  postman: <SiPostman />,
  swagger: <SiSwagger />,

  // Observability
  prometheus: <SiPrometheus />,
  grafana: <SiGrafana />,
  datadog: <SiDatadog />,
  dynatrace: <SiDynatrace />,

  // Testing
  junit: <SiJunit5 />,
  jest: <SiJest />,
  jmeter: <SiApachejmeter />,

  // AI / ML
  openai: <SiOpenai />,
  tensorflow: <SiTensorflow />,
  pytorch: <SiPytorch />,
  ollama: <FaBrain />,
  rag: <FaDatabase />,
  mcp: <FaPlug />,
  genai: <MdAutoAwesome />,

  // Generic / Social
  github_social: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  code: <FaCode />,
  server: <FaServer />,
  database: <FaDatabase />,
  cloud: <FaCloud />,

  sass: <FaSass />,
  bootstrap: <FaBootstrap />,
};
