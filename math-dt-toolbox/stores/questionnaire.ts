import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useQuestionnaireStore = defineStore('questionnaire', () => {
    const questionsByPillar = ref([
      {
        pillar: 'Technology and Infrastructure',
        questions: [
          {
            id: 1,
            title: 'AI Deployment',
            text: 'How effectively is your organization leveraging AI technologies such as machine learning and deep learning for strategic operations?',
          },
          {
            id: 2,
            title: 'IoT Utilization',
            text: 'To what extent does your organization integrate IoT systems into its operational and strategic processes?',
          },
          {
            id: 3,
            title: 'Blockchain-Based Security Enhancement',
            text: 'Has your organization implemented blockchain technologies for enhancing data security and decentralization?',
          },
          {
            id: 4,
            title: 'External Infrastructure Utilization',
            text: 'How extensively does your organization utilize cloud computing or hybrid cloud strategies for operational flexibility?',
          },
          {
            id: 5,
            title: 'Infrastructure Securitization',
            text: 'What measures are in place to secure your infrastructure from cyber threats, including encryption and secure protocol development?',
          },
          {
            id: 6,
            title: 'Structured Data Harvesting',
            text: 'How effectively does your organization collect, store, and analyze structured data to drive decision-making?',
          },
        ],
      },
      {
        pillar: 'Process Automation and Optimization',
        questions: [
          {
            id: 7,
            title: 'Process Definition & Improvement',
            text: 'What strategies are used to map, optimize, and redesign business processes within your organization?',
          },
          {
            id: 8,
            title: 'Process Standardization Establishment',
            text: 'Are there defined standards and documentation for critical processes across your organization?',
          },
        ],
      },
      {
        pillar: 'Cybersecurity and Governance',
        questions: [
          {
            id: 9,
            title: 'Data Management',
            text: 'How robust is your data governance framework in managing data lifecycle, security, and compliance?',
          },
          {
            id: 10,
            title: 'Compliance Assurance',
            text: 'How does your organization ensure adherence to regulatory and compliance requirements effectively?',
          },
          {
            id: 11,
            title: 'Efficiency Auditing',
            text: 'How systematically does your organization conduct audits to improve resource utilization and ensure operational efficiency?',
          },
          {
            id: 12,
            title: 'Data Integrity',
            text: 'What policies and measures are in place to maintain data accuracy, consistency, and security?',
          },
          {
            id: 13,
            title: 'Reputation Safeguarding',
            text: 'How does your organization monitor and manage its online and offline reputation?',
          },
        ],
      },
      {
        pillar: 'Data and Analytics',
        questions: [
          {
            id: 14,
            title: 'Decision Support',
            text: 'How advanced are your organization\'s decision-support systems, including predictive analytics and visualization tools?',
          },
          {
            id: 15,
            title: 'Process Transparency',
            text: 'What steps have been taken to ensure transparency in your organizational processes for accountability?',
          },
          {
            id: 16,
            title: 'Analytics Solutions',
            text: 'How comprehensively does your organization deploy data analytics solutions to enhance business insights and processes?',
          },
        ],
      },
      {
        pillar: 'Digital Skills and Training',
        questions: [
          {
            id: 17,
            title: 'Skills Acquisition Trainings',
            text: 'What training programs are in place to develop digital skills and socio-emotional competencies in your workforce?',
          },
          {
            id: 18,
            title: 'Device Proficiency',
            text: 'How proficient is your workforce in using and managing digital devices and tools?',
          },
          {
            id: 19,
            title: 'Technology Interaction',
            text: 'How effectively does your workforce interact with new and existing digital technologies?',
          },
        ],
      },
      {
        pillar: 'Business Model Innovation',
        questions: [
          {
            id: 20,
            title: 'Core Competency Focus',
            text: 'How effectively does your organization identify and develop core competencies to strengthen strategic focus and capabilities?',
          },
          {
            id: 21,
            title: 'Outsourcing Efficiency',
            text: 'How effectively does your organization manage outsourcing to enhance operational efficiency?',
          },
          {
            id: 22,
            title: 'Revenue Stream Innovation',
            text: 'What initiatives have been taken to innovate and diversify revenue streams within your business model?',
          },
          {
            id: 23,
            title: 'Ecosystem Creation',
            text: 'How does your organization collaborate with partners and build ecosystems to drive innovation?',
          },
        ],
      },
      {
        pillar: 'Customer Experience',
        questions: [
          {
            id: 24,
            title: 'Customer Need Alignment',
            text: 'How well does your organization identify and align with evolving customer needs and expectations?',
          },
          {
            id: 25,
            title: 'Service Innovation',
            text: 'What efforts are being made to innovate and improve service delivery to enhance customer satisfaction?',
          },
        ],
      },
      {
        pillar: 'Digital Leadership and Culture',
        questions: [
          {
            id: 26,
            title: 'Strategy/Culture Alignment',
            text: 'How aligned are your organizational culture and strategic objectives for digital transformation?',
          },
          {
            id: 27,
            title: 'Leadership-Driven Change',
            text: 'How effectively does your leadership drive change initiatives within the organization?',
          },
          {
            id: 28,
            title: 'Change Management Excellence',
            text: 'What frameworks or methodologies are in place to manage organizational change during digital transformation?',
          },
          {
            id: 29,
            title: 'Adaptability and Resilience',
            text: 'How agile and resilient is your organization in adapting to market changes and unforeseen challenges?',
          },
        ],
      },
    ]);

    const answers = ref<{ [key: number]: number }>({}); // Initialize `answers` as an empty object

    function getQuestionsByPillar() {
      return questionsByPillar.value;
    }
  
    function saveAnswers(newAnswers: { [key: number]: number }) {
      console.log('Previous answers:', answers.value);
      answers.value = { ...answers.value, ...newAnswers };
      console.log('Updated answers:', answers.value);
    }
      
  
    return {
      getQuestionsByPillar,
      answers, // Export answers
      saveAnswers,
    };
});
