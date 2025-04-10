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
            text: 'To what extent are AI technologies integrated into standardized processes for strategic operations, and are these processes regularly evaluated and improved?',
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
            text: 'To what extent are your business processes systematically documented, monitored, and continuously improved based on defined standards and KPIs?',
          },
          {
            id: 8,
            title: 'Process Standardization Establishment',
            text: 'To what extent are standards and documentation for critical processes established, consistently applied, maintained, and continuously improved across the organization?',
          },
        ],
      },
      {
        pillar: 'Cybersecurity and Data Governance',
        questions: [
          {
            id: 9,
            title: 'Data Management',
            text: 'To what extent does your organization follow standardized and actively maintained processes for managing data lifecycle, security, and compliance?',
          },
          {
            id: 10,
            title: 'Compliance Assurance',
            text: 'To what extent does your organization follow standardized and proactive processes to monitor and manage its reputation across digital and physical channels?',
          },
          {
            id: 11,
            title: 'Efficiency Auditing',
            text: 'How systematically does your organization conduct audits to improve resource utilization and ensure operational efficiency?',
          },
          {
            id: 12,
            title: 'Data Integrity',
            text: 'To what extent are processes to ensure data accuracy, consistency, and security documented, monitored, and regularly reviewed?',
          },
          {
            id: 13,
            title: 'Reputation Safeguarding',
            text: 'To what extent does your organization use structured and repeatable processes to monitor and manage its reputation across digital and physical channels?',
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
            text: 'To what extent are standardized and consistently applied processes in place to ensure transparency and accountability across the organization?',
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
            text: 'To what extent does your organization implement structured training programs for digital and socio-emotional skills, with ongoing evaluation?',
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
            text: 'How effective have initiatives been taken to innovate and diversify revenue streams within your business model?',
          },
          {
            id: 23,
            title: 'Ecosystem Creation',
            text: 'To what extent are ecosystem collaborations with partners based on defined strategies and integrated into repeatable, measured processes?',
          },
        ],
      },
      {
        pillar: 'Customer Experience',
        questions: [
          {
            id: 24,
            title: 'Customer Need Alignment',
            text: 'To what extent are customer needs systematically identified, documented, and addressed through repeatable and optimized processes?',
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
            text: 'To what extent is leadership involvement in transformation managed through structured and continuously monitored change processes?',
          },
          {
            id: 28,
            title: 'Change Management Excellence',
            text: 'To what extent does your organization apply standardized and continuously optimized frameworks to manage change during digital transformation?',
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
