import { defineStore } from 'pinia';

export const useToolsStore = defineStore('tools', () => {
  const tools = ref([
    {
      id: 1,
      name: "IoT-based Business Process Improvements Maturity Model",
      description: "Evaluates IoT integration readiness across capability dimensions and maturity levels.",
      reference: "DT-IoT-BPI-MM",
      details: "Helps organizations assess readiness for IoT technologies with structured goals.",
      pillar: "Technology and Infrastructure",
    },
    {
      id: 2,
      name: "AI Readiness Framework",
      description: "Assesses AI readiness across technical and sociotechnical factors.",
      reference: "holmstrom2022ai-readiness-framework",
      details: "Framework with four dimensions: technologies, activities, boundaries, and goals.",
      pillar: "Technology and Infrastructure",
    },
    {
      id: 3,
      name: "Realizing Process Standardization",
      description: "Focuses on standardizing business processes to enhance efficiency and agility.",
      reference: "kirchmer2023process_standardization",
      details: "Context-sensitive process standardization across organization, data, and functions.",
      pillar: "Process Automation and Optimization",
    },
    {
      id: 4,
      name: "Process Reference Models",
      description: "Provides best practices for streamlined and scalable DT initiatives.",
      reference: "kirchmer2020process_optimization",
      details: "Conceptual frameworks for reusable, adaptable process management knowledge.",
      pillar: "Process Automation and Optimization",
    },
    {
      id: 5,
      name: "Cyber Risk Management Framework",
      description: "A comprehensive framework for addressing cybersecurity risks.",
      reference: "Lee2021CybersecurityRiskFramework",
      details: "Holistic approach integrating technology and human factors for cybersecurity investments.",
      pillar: "Cybersecurity and Governance",
    },
    {
      id: 6,
      name: "Data Governance Framework",
      description: "Enterprise framework for managing data as a strategic asset.",
      reference: "abraham2019datagovernance",
      details: "Focuses on regulatory compliance and strategic use of data assets.",
      pillar: "Cybersecurity and Governance",
    },
    {
      id: 7,
      name: "Dual Drivetrain Model",
      description: "Focuses on industrial big data to drive customized projects and trust-based models.",
      reference: "liu2022dualdrivetrain-data-analytics",
      details: "Mechanisms for integrating technological capabilities with market demands.",
      pillar: "Data and Analytics",
    },
    {
      id: 8,
      name: "Data Management Maturity Model",
      description: "Assesses the maturity of organizational data management practices.",
      reference: "zitoun-dmmm-data-management",
      details: "Covers enterprise intent, systems, and data operations for strategic alignment.",
      pillar: "Data and Analytics",
    },
    {
      id: 9,
      name: "Soft Systems Methodology",
      description: "Addresses qualification gaps in higher education for DT.",
      reference: "goulart-skills-dt",
      details: "Focuses on collaboration between institutions and socioemotional skill development.",
      pillar: "Digital Skills and Training",
    },
    {
      id: 10,
      name: "Human Resource DT",
      description: "Framework for merging digital infrastructure with organizational creativity.",
      reference: "bansal2023hrdt-human-resource",
      details: "Supports continuous HR innovation by synchronizing human and digital elements.",
      pillar: "Digital Skills and Training",
    },
    {
      id: 11,
      name: "Business Model Navigator",
      description: "Structured methodology for promoting business model innovation.",
      reference: "gassmann2020business-model-navigator",
      details: "Identifies 55 innovation patterns to adapt and transform models.",
      pillar: "Business Model Innovation",
    },
    {
      id: 12,
      name: "Strategic Action Fields",
      description: "Framework for understanding DT strategies across seven key dimensions.",
      reference: "peter2020strategicactionfields-DT",
      details: "Includes dimensions like customer centricity, process engineering, and cloud data.",
      pillar: "Business Model Innovation",
    },
    {
      id: 13,
      name: "Capability Based CX Framework",
      description: "Framework for improving customer experience with dynamic capability theory.",
      reference: "sahu-CX-framework",
      details: "Includes analytics, business, customer, and digitalization dimensions.",
      pillar: "Customer Experience",
    },
    {
      id: 14,
      name: "Improving Digital Customer Experience",
      description: "Maps digital tools along the customer journey to enhance CX.",
      reference: "kandil2024DCX-framework",
      details: "Focuses on integrating tools into offering, access, and relational complexity dimensions.",
      pillar: "Customer Experience",
    },
    {
      id: 15,
      name: "Capability Based CX Framework",
      description: "Guidelines for assessing managerial capabilities in DT.",
      reference: "korherr2022intuitive-managerial-archetypes",
      details: "Defines four managerial archetypes: Analytical Thinker, Coach, Guide, and Strategist.",
      pillar: "Digital Leadership and Culture",
    },
    {
      id: 16,
      name: "DT Leadership Framework",
      description: "Identifies seven leadership roles tailored to DT challenges.",
      reference: "weber2022digitalleadership",
      details: "Roles include Digital Pioneer, Innovator, Enabler, Mentor, and Manager.",
      pillar: "Digital Leadership and Culture",
    },
  ]);

  const toolsByPillar = computed(() => (pillar: string) =>
    tools.value.filter((tool) => tool.pillar === pillar)
  );

  return { tools, toolsByPillar };
});