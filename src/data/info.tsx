import {
  IconBrandAws,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandNodejs,
  IconBrandPython,
  IconMail,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import { Claude } from "@/components/ui/svgs/claude";
import { Cursor } from "@/components/ui/svgs/cursor";
import { Docker } from "@/components/ui/svgs/docker";
import { Git } from "@/components/ui/svgs/git";
import { GitHubCopilot } from "@/components/ui/svgs/githubCopilot";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { Javascript } from "@/components/ui/svgs/javascript";
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Typescript } from "@/components/ui/svgs/typescript";

type Social = {
  name: string;
  icon: ReactNode;
  href: string;
};

export const socials: Social[] = [
  {
    name: "Email Me",
    icon: <IconMail className="size-4" />,
    href: "mailto:rbhanu504@gmail.com",
  },
  {
    name: "Github",
    icon: <IconBrandGithub className="size-4" />,
    href: "https://github.com/bhanreddy1973",
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin className="size-4" />,
    href: "https://www.linkedin.com/in/bhanu-reddy-a30882288/",
  },
];

export const languages = [
  {
    name: "Python",
    icon: <IconBrandPython className="size-4" />,
    favourite: true,
  },
  {
    name: "JavaScript",
    icon: <Javascript />,
    favourite: false,
  },
  {
    name: "TypeScript",
    icon: <Typescript />,
    favourite: false,
  },
  {
    name: "SQL",
    icon: null,
    favourite: false,
  },
  {
    name: "C++",
    icon: null,
    favourite: false,
  },
];

export const technologies = [
  {
    name: "React",
    icon: <ReactDark />,
    favourite: false,
  },
  {
    name: "Node.js",
    icon: <IconBrandNodejs />,
    favourite: false,
  },
  {
    name: "PyTorch",
    icon: null,
    favourite: true,
  },
  {
    name: "TensorFlow",
    icon: null,
    favourite: false,
  },
  {
    name: "Apache Kafka",
    icon: null,
    favourite: false,
  },
  {
    name: "Apache Flink",
    icon: null,
    favourite: false,
  },
  {
    name: "FastAPI",
    icon: null,
    favourite: false,
  },
];

export const databases = [
  {
    name: "PostgreSQL",
    icon: <Postgresql />,
    favourite: true,
  },
  {
    name: "MongoDB",
    icon: <MongodbIconDark />,
    favourite: false,
  },
  {
    name: "OpenSearch",
    icon: null,
    favourite: false,
  },
];

export const tools = [
  {
    name: "Git",
    icon: <Git />,
    favourite: true,
  },
  {
    name: "GitHub",
    icon: <GithubDark />,
    favourite: false,
  },
  {
    name: "Docker",
    icon: <Docker />,
    favourite: false,
  },
  {
    name: "AWS",
    icon: <IconBrandAws className="size-4" />,
    favourite: false,
  },
  {
    name: "Kubernetes",
    icon: <Kubernetes className="size-4" />,
    favourite: false,
  },
];

export const aiTools = [
  {
    name: "Claude Code",
    icon: <Claude />,
    favourite: true,
  },
  {
    name: "Cursor",
    icon: <Cursor />,
    favourite: false,
  },
  {
    name: "GitHub Copilot",
    icon: <GitHubCopilot />,
    favourite: false,
  },
];

export const workExperience = [
  {
    company: "Swiggy",
    role: "AI / Data Engineering Intern",
    type: "intern",
    iconUrl: "/swiggy.jpeg",
    period: "Nov 2025 - Present",
    location: "Onsite - Bangalore",
    points: [
      "Built a production MCP (Model Context Protocol) tool server — a FastMCP-based agentic backend exposing 6 AI-callable tools (semantic search, metadata retrieval, lineage traversal, schema lookup, column discovery, DDL access) enabling LLM agents to query enterprise data via structured tool calls.",
      "Architected an end-to-end LLM documentation pipeline auto-generating structured metadata for 6,500+ Snowflake and Databricks tables — from schema extraction and GitHub code search across 14 private repos to Claude LLM summarization and OpenSearch indexing.",
      "Engineered a context compression algorithm condensing schema, lineage, usage signals, and code snippets into token-efficient prompts — reducing LLM input size by 60% while preserving documentation quality at warehouse scale.",
      "Built a hybrid semantic search system — 1024-dim dense embeddings, BM25 sparse retrieval, and hybrid re-ranking — enabling sub-second natural-language discovery across the enterprise knowledge corpus.",
      "Implemented structured output parsing with self-repair: malformed LLM JSON outputs trigger a secondary correction pass — achieving >99.5% parse success rate across 6,500+ invocations.",
      "Achieved 10x pipeline throughput via parallel processing (15 workers), bulk prefetching (replacing ~60,000 per-table queries with 6 batch queries), thread-safe caching, and exponential backoff retry logic.",
      "Shipped a real-time CDC streaming pipeline using Debezium, Apache Kafka, and Apache Flink — built the Flink transformation layer consuming raw binlog events, flattening Debezium envelopes, applying PII detection/masking, and publishing to downstream topics with schema evolution handling.",
      "Acted as primary bridge between Swiggy and Confluent's Professional Services team — set up the full Confluent Flink environment (Nginx/HAProxy proxy, endpoint whitelisting, VPC peering) within Swiggy's private network, unblocking the entire team.",
      "Built Grafana alerting for RDS connector health, consumer lag, and throughput; developed CDC sync/merge logic with deduplication and schema evolution handling.",
    ],
  },
  {
    company: "IIIT Kottayam",
    role: "Research Assistant — Medical AI",
    type: "intern",
    iconUrl: "/talnex.png",
    period: "Aug 2024 - Sept 2025",
    location: "Kottayam, Kerala",
    points: [
      "Developed a CNN-based classification pipeline for skin cancer detection — achieving 90.5% accuracy on clinical dermoscopy datasets with class-imbalanced multi-label prediction.",
      "Applied model compression (structured pruning + INT8 quantization) reducing inference latency by 40% — enabling deployment on resource-constrained medical devices without accuracy degradation.",
      "Followed MLOps best practices: reproducible experiment tracking, hyperparameter search, model versioning, and automated evaluation pipelines.",
      "Published peer-reviewed research under Prof. Dr. Bhanu Chander on deep learning for medical image classification.",
    ],
  },
  {
    company: "Drdot",
    role: "Backend Engineer Intern",
    type: "intern",
    iconUrl: "/talnex.png",
    period: "Dec 2024 - May 2025",
    location: "Remote",
    points: [
      "Built backend microservices in Node.js with 85% unit test coverage — focused on writing clean, well-documented, production-quality code following industry best practices.",
      "Improved API throughput by 50% through query optimization and connection pooling.",
      "Integrated CI/CD pipelines that automatically gate deployments on test passage.",
      "Collaborated in agile sprint cycles: participated in code reviews, wrote detailed API documentation, and contributed to technical design discussions for new feature development.",
    ],
  },
];

export const projects = [
  {
    name: "LLM Inference Gateway",
    imageUrl: "/projects/LLm_interface.png",
    description:
      "Self-hostable API gateway for Claude models — FastAPI, gRPC workers, Redis rate limiting, ClickHouse analytics, and a Next.js dashboard.",
    href: "https://llm-inference-gateway.vercel.app/",
    github: "https://github.com/bhanreddy1973/LLM-Inference-Gateway",
  },
  {
    name: "Bite a Bit",
    imageUrl: "/projects/bite_a_bit.png",
    description:
      "Full-stack food ordering app with personalized dining experience — Next.js, TypeScript, Firebase, and Firestore.",
    href: "https://biteabit.vercel.app/",
    github: "https://github.com/bhanreddy1973/bite_a_bit",
  },
  {
    name: "Distributed Real-Time Platform",
    imageUrl: "/projects/Chat_application.png",
    description:
      "Real-time chat platform with sub-second latency, 15+ REST APIs, JWT auth, and 99.9% uptime on AWS.",
    href: "https://vchat-xn0io.sevalla.app/",
    github: "https://github.com/bhanreddy1973/vchat",
  },
  {
    name: "AI Content Generation App",
    imageUrl: "/projects/Meme_generator.png",
    description:
      "AI-powered web app — prompt engineering pipeline generating contextually relevant content. Built with React, TypeScript, Firebase.",
    href: "https://github.com/bhanreddy1973/MEME-GENERATOR",
    github: "https://github.com/bhanreddy1973/MEME-GENERATOR",
  },
  {
    name: "Skin Cancer Classifier",
    imageUrl: "/projects/skin_care.png",
    description:
      "CNN pipeline for skin cancer classification — 90.5% accuracy with INT8 quantization for edge deployment.",
    href: "https://drive.google.com/file/d/1bI1m3YYtqdghhuphrybC0duBIaYopwnA/view",
    github: "https://drive.google.com/file/d/1bI1m3YYtqdghhuphrybC0duBIaYopwnA/view",
  },
];
