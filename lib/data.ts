import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaReact, FaSymfony } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import symfony from "@/public/Symfony.png";
import laravel from "@/public/Laravel.png";
import angular from "@/public/Angular.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Privacy Policy",
    hash: "/privacy-policy",
    link: true
  },
] as const;

export const experiencesData = [
  {
    title: "Master of Science in Computer Science Software Engineering",
    location: "University Badji Mokhtar Annaba",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2009-2014",
  },
  {
    title: "Full Stack Developer - Freelance",
    location: "Remote",
    description:
      "Work as Assistant Project Manager for the implementation of projects such as Electronic Medical Records Platform for the management of hospitals and care centres, Pharmacy Management Platform, ERP for Hospital Management Triple Hospital Accounting.",
    icon: React.createElement(FaSymfony),
    date: "2015-2020",
  },
  {
    title: "Full Stack Developer - Freelance",
    location: "Remote",
    description:
      "Develop web solutions, api, plugins and also development under the e-commerce platforms sylius, prestashop, woocommerce",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer - Freelance",
    location: "Remote",
    description:
      "Write the code needed to run applications Stack: AngularJS, Nodejs, FIrebase.",
    icon: React.createElement(FaAngular),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Management of hospitals and care centres platform",
    description:
      "for more than 5 years i have Work as Assistant Project Manager for the implementation of projects such as Electronic Medical Records Platform for the management of hospitals and care centres also a Pharmacy Management Platform, and ERP for Hospital Management Triple Hospital Accounting",
    tags: ["Symfony 3..5", "BootStrap", "phpmyadmin", "adobeXD", "C#"],
    imageUrl: symfony,
  },
  {
    title: "Develop and support E-commerce platform",
    description:
      "Develop web solutions, api, plugins and also development under the e-commerce platforms sylius, prestashop, woocommerce, from the initial concept to the final configuration, according to the specifications of the company.",
    tags: ["Symfony", "Laravel", "Mautic", "Sylius", "Payment Gatway", "GIT", "GITHUB", "basecamp"],
    imageUrl: laravel,
  },
  {
    title: "Marketing platform",
    description:
      "Write the code needed to run applications, Test the proper functioning of the site from all points of view (testing) Fix the errors that appeared (debugging), Solve technical problems related to the operation of web applications",
    tags: ["Angular", "NodeJs", "Firebase", "Firestore", "storage", "google cloud", "fuse", "GIT", "GITHUB", "atlassian/jira"],
    imageUrl: angular,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Angular",
  "PHP",
  "Laravel",
  "Symfony",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
