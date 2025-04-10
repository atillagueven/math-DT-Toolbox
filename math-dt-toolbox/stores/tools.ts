import { defineStore } from 'pinia';

export const useToolsStore = defineStore('tools', () => {
  const tools = ref([
    {
      id: 1,
      name: "IoT-based Business Process Improvements Maturity Model",
      description: "Evaluates IoT integration readiness across capability dimensions and maturity levels.",
      reference: "Stoiber, C., & Schönig, S. (2022). Digital transformation and improvement of business processes with Internet of Things: A maturity model for assessing readiness. *Proceedings of HICSS*. https://doi.org/10.24251/HICSS.2022.594",
      details: "The IoT-based Business Process Improvements Maturity Model is a research-backed framework that aids organizations in assessing their readiness for IoT integration within business processes. Structured into 21 capability dimensions across seven focus areas, it provides a clear roadmap for improving digital transformation. The model defines four capability levels for each dimension and five maturity levels to help organizations set structured goals. It was validated through a rigorous Delphi study involving industry and academic experts, ensuring its practical applicability in evaluating and enhancing IoT-driven digital transformation efforts.",
      pillar: "Technology and Infrastructure",
    },
    {
      id: 2,
      name: "AI Readiness Framework",
      description: "Assesses AI readiness across technical and sociotechnical factors.",
      reference: "Holmström, J. (2022). From AI to digital transformation: The AI readiness framework. *Business Horizons, 65*(3), 329-339. https://doi.org/10.1016/j.bushor.2021.03.006",
      details: "The AI Readiness Framework offers organizations a structured way to evaluate their preparedness for AI adoption in digital transformation. It consists of four primary dimensions: technologies, activities, boundaries, and goals. Organizations conduct self-assessments by rating their capabilities on a scale of 0 to 4, identifying areas for improvement. The framework emphasizes the importance of both technical and sociotechnical factors in AI adoption, ensuring organizations address human and structural challenges alongside technological readiness. The results are presented through a radar chart, helping businesses visualize AI preparedness and develop targeted improvement strategies.",
      pillar: "Technology and Infrastructure",
    },
    {
      id: 3,
      name: "Realizing Process Standardization",
      description: "Focuses on standardizing business processes to enhance efficiency and agility.",
      reference: "Kirchmer, M. (2023). Realizing appropriate process standardization: Basis for effective digital transformation. *Business Modeling and Software Design (BMSD 2023)*, *Lecture Notes in Business Information Processing, 483*. Springer, Cham. https://doi.org/10.1007/978-3-031-36757-1_2",
      details: "This tool provides a structured approach to process standardization in digital transformation. By defining context-sensitive process variants and ensuring alignment across key components—organization, data, functions, deliverables, and workflows—it enhances efficiency, agility, and compliance. The methodology highlights the balance between standardization and customization to optimize business operations. Standardization improves process transparency, reduces costs, and enhances customer experience. The framework is particularly relevant in dynamic business environments where organizations must continuously refine and scale their digital processes for competitive advantage.",
      pillar: "Process Automation and Optimization",
    },
    {
      id: 4,
      name: "Process Reference Models",
      description: "Provides best practices for streamlined and scalable DT initiatives.",
      reference: "Kirchmer, M., & Franz, P. (2020). Process reference models: Accelerator for digital transformation. *Lecture Notes in Business Information Processing, 391*, 20-37. https://doi.org/10.1007/978-3-030-52306-0_2",
      details: "Process Reference Models (PRMs) serve as structured templates for accelerating digital transformation by offering best practices in process management. They provide reusable, adaptable frameworks to enhance efficiency, transparency, and scalability in business processes. PRMs facilitate risk reduction, cost savings, and process innovation by structuring workflows in a way that aligns with industry standards. This approach allows organizations to implement digital transformation more effectively, leveraging tested methodologies to optimize and standardize operations across various domains while maintaining flexibility.",
      pillar: "Process Automation and Optimization",
    },
    {
      id: 5,
      name: "Cyber Risk Management Framework",
      description: "A comprehensive framework for addressing cybersecurity risks.",
      reference: "Lee, I. (2021). Cybersecurity: Risk management framework and investment cost analysis. *Business Horizons, 64*(5), 659-671. https://doi.org/10.1016/j.bushor.2021.02.022",
      details: "This framework provides a holistic approach to cybersecurity risk management, integrating both technological and human factors to address evolving threats. It emphasizes cost-effective investments in cybersecurity while ensuring that organizations maintain compliance and resilience. The model guides companies in identifying, assessing, and mitigating risks through structured governance and proactive security strategies. By considering sociotechnical elements, organizations can build comprehensive security policies that align with broader digital transformation goals, ensuring both technological robustness and user awareness in cybersecurity measures.",
      pillar: "Cybersecurity and Data Governance",
    },
    {
      id: 6,
      name: "Data Governance Framework",
      description: "Enterprise framework for managing data as a strategic asset.",
      reference: "Abraham, R., Schneider, J., & vom Brocke, J. (2019). Data governance: A conceptual framework, structured review, and research agenda. *International Journal of Information Management, 49*, 424-438. https://doi.org/10.1016/j.ijinfomgt.2019.07.008",
      details: "The Data Governance Framework provides organizations with a structured approach to managing data as a critical enterprise asset. It defines six key dimensions: governance mechanisms, organizational scope, data scope, domain scope, antecedents, and consequences. This framework helps businesses navigate challenges related to data complexity, regulatory compliance, and innovation barriers. By distinguishing between data governance and data management, organizations can establish clearer policies, ensuring data quality, security, and strategic utilization for long-term business success in digital transformation initiatives.",
      pillar: "Cybersecurity and Data Governance",
    },
    {
      id: 7,
      name: "Dual Drivetrain Model",
      description: "Focuses on industrial big data to drive customized projects and trust-based models.",
      reference: "Liu, Y., Wang, W., & Zhang, Z. J. (2022). The dual drivetrain model of digital transformation: Role of industrial big-data-based affordance. *Management Decision, 60*(2), 344-367. https://doi.org/10.1108/MD-12-2019-1664",
      details: "The Dual Drivetrain Model leverages industrial big data to enable businesses to develop customized projects, provide lifecycle data-driven services, and establish trust-based models. It highlights the integration of internal technological capabilities with external market demands, ensuring organizations maximize data utilization for business innovation. This model identifies key mechanisms that enable enterprises to optimize operations, create new business opportunities, and drive competitive advantage through advanced analytics and digital transformation strategies.",
      pillar: "Data and Analytics",
    },
    {
      id: 8,
      name: "Data Management Maturity Model",
      description: "Assesses the maturity of organizational data management practices.",
      reference: "Zitoun, C., Belghith, O., Ferjaoui, S., & Gabouje, S. S. (2021). DMMM: Data management maturity model. *2021 International Conference on Advanced Enterprise Information System (AEIS)*, 33-39. https://doi.org/10.1109/AEIS53850.2021.00013",
      details: "The Data Management Maturity Model (DMMM) is a comprehensive assessment framework that helps organizations evaluate their data management capabilities. It focuses on four key categories: enterprise and intent, data management, systems, and data operations. Organizations use the model to establish a roadmap for evolving from an initial to an optimized data management state. The framework incorporates dependency mapping, allowing businesses to align data strategies with technological advancements, ensuring improved efficiency, compliance, and scalability in data handling.",
      pillar: "Data and Analytics",
    },
    {
      id: 9,
      name: "Soft Systems Methodology",
      description: "Addresses qualification gaps in higher education for DT.",
      reference: "Goulart, V., Liboni, L., & Cezarino, L. (2021). Balancing skills in the digital transformation era: The future of jobs and the role of higher education. *Industry and Higher Education, 36*, 095042222110297. https://doi.org/10.1177/09504222211029796",
      details: "Soft Systems Methodology (SSM) is an approach that enhances digital skills training by addressing qualification gaps in higher education. It emphasizes three main areas: humanistic education, stronger collaboration between academic institutions and businesses, and the development of socioemotional skills. By integrating these elements, SSM ensures that students and employees are better equipped to handle digital transformation challenges. It supports a participatory approach in which stakeholders continuously refine their capabilities to meet the evolving demands of the digital economy, fostering both adaptability and resilience in workforce training.",
      pillar: "Digital Skills and Training",
    },
    {
      id: 10,
      name: "Human Resource DT",
      description: "Framework for merging digital infrastructure with organizational creativity.",
      reference: "Bansal, A., Panchal, T., Jabeen, F., Mangla, S. K., & Singh, G. (2023). A study of human resource digital transformation (HRDT): A phenomenon of innovation capability led by digital and individual factors. *Journal of Business Research, 157*, 113611. https://doi.org/10.1016/j.jbusres.2022.113611",
      details: "Human Resource Digital Transformation (HRDT) is a framework that integrates digital infrastructure, human-centric design, and organizational creativity to drive digital transformation in HR practices. It identifies innovation potential at individual, team, and organizational levels and highlights the role of leadership, communication, and participatory culture in enabling digital change. HRDT ensures that digital technologies are aligned with human capital strategies, enabling organizations to improve talent management, workforce agility, and employee engagement. By synchronizing human and digital elements, the framework fosters adaptability, innovation, and competitiveness in dynamic business environments.",
      pillar: "Digital Skills and Training",
    },
    {
      id: 11,
      name: "Business Model Navigator",
      description: "Structured methodology for promoting business model innovation.",
      reference: "Gassmann, O., Frankenberger, K., & Choudury, M. (2020). *Geschäftsmodelle entwickeln: 55 innovative Konzepte mit dem St. Galler business model navigator*. Carl Hanser Verlag GmbH Co KG. https://www.alexandria.unisg.ch/entities/publication/d3a87e9b-ccae-42b6-87a6-03c399088911",
      details: "The Business Model Navigator (BMN) is a structured methodology designed to facilitate business model innovation by identifying key drivers of success. It analyzes 55 innovation patterns across industries, enabling companies to transform their existing models or create entirely new ones. By providing a systematic framework, BMN helps organizations navigate the complexities of digital transformation, improving value propositions and competitive advantage. The tool enables firms to explore new revenue streams, optimize operations, and enhance customer engagement, making it a crucial instrument for companies seeking sustainable innovation in digital markets.",
      pillar: "Business Model Innovation",
    },
    {
      id: 12,
      name: "Strategic Action Fields",
      description: "Framework for understanding DT strategies across seven key dimensions.",
      reference: "Peter, M. K., Kraft, C., & Lindeque, J. (2020). Strategic action fields of digital transformation: An exploration of the strategic action fields of Swiss SMEs and large enterprises. *Journal of Strategy and Management, 13*(1), 160-180. https://doi.org/10.1108/JSMA-05-2019-0070",
      details: "The Strategic Action Fields (SAF) framework provides a structured approach to digital transformation strategy by identifying seven key dimensions: Customer Centricity, Digital Business Development, Digital Leadership and Culture, Process Engineering, Digital Marketing, New Technologies, and Cloud & Data. Each SAF represents a crucial aspect of DT, offering internal, external, or mixed perspectives. The framework helps organizations understand how different factors interact within the transformation process, ensuring a holistic approach to strategic decision-making. It enables companies to develop adaptive strategies that align digital capabilities with evolving market and industry demands.",
      pillar: "Business Model Innovation",
    },
    {
      id: 13,
      name: "Capability Based CX Framework",
      description: "Framework for improving customer experience with dynamic capability theory.",
      reference: "Sahu, N., Deng, H., & Molla, A. (2018). A capability-based framework for customer experience-focused digital transformation. *ACIS 2018 Conference Proceedings*. https://doi.org/10.5130/acis2018.an",
      details: "The Capability-Based Customer Experience (CX) Framework applies dynamic capability theory to enhance digital customer interactions. It consists of four key dimensions—Analytics, Business, Customer, and Digitalization—each with subdimensions such as data analytics, strategic execution, and customer engagement. Organizations use this framework to assess and improve their ability to adapt to evolving customer needs. By leveraging real-time data insights and digital tools, businesses can refine their customer strategies, improve satisfaction, and create personalized experiences. The framework underscores the importance of integrating technological and human-centered approaches to maximize customer value.",
      pillar: "Customer Experience",
    },
    {
      id: 14,
      name: "Improving Digital Customer Experience",
      description: "Maps digital tools along the customer journey to enhance CX.",
      reference: "Kandil, O., Dessart, L., Standaert, W., & Bosma, M. (2024). A framework to improve the digital customer experience in complex services. *Services Marketing Quarterly, 45*(1), 25-54. https://doi.org/10.1080/15332969.2023.2294235",
      details: "The Digital Customer Experience (DCX) framework provides a structured approach to optimizing customer interactions through digital tools. It identifies three key dimensions of complexity—Offering, Access, and Relational—and maps them across the phases of the customer journey. By strategically integrating digital solutions at each stage, organizations can enhance engagement, satisfaction, and loyalty. This tool helps companies design seamless, omnichannel experiences that cater to customer preferences, ensuring consistent service delivery across all digital touchpoints. It is particularly useful for businesses looking to enhance their CX through targeted digital transformation efforts.",
      pillar: "Customer Experience",
    },
    {
      id: 15,
      name: "Framework of Prevalent Managerial Archetypes",
      description: "Guidelines for assessing managerial capabilities in DT.",
      reference: "Korherr, P., Kanbach, D. K., Kraus, S., & Mikalef, P. (2022). From intuitive to data-driven decision-making in digital transformation: A framework of prevalent managerial archetypes. *Digital Business, 2*(2), 100045. https://doi.org/10.1016/j.digbus.2022.100045",
      details: "Framework of Prevalent Managerial Archetypes provides organizations with a structured approach to assessing managerial skills in digital transformation. It defines four managerial archetypes—Analytical Thinker, Coach, Guide, and Strategist—each representing a distinct leadership style required for DT success. This framework enables firms to identify and address skill gaps, ensuring that leadership teams possess the necessary competencies to navigate digital change. By aligning managerial roles with digital transformation strategies, organizations can create an environment conducive to innovation, agility, and sustainable growth in a rapidly evolving digital landscape.",
      pillar: "Digital Leadership and Culture",
    },
    {
      id: 16,
      name: "DT Leadership Framework",
      description: "Identifies seven leadership roles tailored to DT challenges.",
      reference: "Weber, E., Krehl, E. H., & Büttgen, M. (2022). The digital transformation leadership framework: Conceptual and empirical insights into leadership roles in technology-driven business environments. *Journal of Leadership Studies, 16*(1), 6-22. https://doi.org/10.1002/jls.21810",
      details: "The Digital Transformation (DT) Leadership Framework defines seven critical leadership roles essential for navigating digital change: Digital Pioneer, Innovator, Enabler, Mentor, Networker, Manager, and Digital Mentee. Each role represents a unique approach to fostering digital transformation, from driving innovation and creating strategic visions to empowering employees and expanding networks. The framework helps organizations develop leadership capabilities that align with their digital goals. By understanding and leveraging these roles, companies can ensure effective leadership structures that facilitate a smooth and sustainable digital transition, fostering innovation and resilience in an ever-changing business landscape.",
      pillar: "Digital Leadership and Culture",
    }
  ]);

  const toolsByPillar = computed(() => (pillar: string) =>
    tools.value.filter((tool) => tool.pillar === pillar)
  );

  

  return { tools, toolsByPillar };
});