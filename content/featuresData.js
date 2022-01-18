import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LanguageIcon from "@mui/icons-material/Language";
import TransformIcon from "@mui/icons-material/Transform";
import AvTimerIcon from "@mui/icons-material/AvTimer";
const iconSize = 30;
import { red, green, yellow,pink , purple} from "@mui/material/colors";

const data = {
  phonesystem: [
    {
      id: 1,
      title: "International Numbers",
      description:
        "Buy local phone numbers across 100+ countries and make it easy for callers to reach you - even if your team work from country away.Don’t miss any updates of our new templates and extensions.!",
      url: "/",
      more: true,
      icon: <LanguageIcon style={{ fontSize: iconSize }} />,
      color: red[400],
    },
    {
      id: 2,
      title: "Number Porting",
      description:
        "Effortlessly contactwise allows you to use your existing phone numbers by porting them to Contactwise.",
      url: "/integrations",
      more: false,
      icon: <TransformIcon style={{ fontSize: iconSize }} />,
      color: green[400],
    },
    {
      id: 3,
      title: "Vanity Phone Numbers",
      description: "Find vanity phone number to connect better between your brand and customer.",
      url: "/pricing",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: purple[400],
    },
    {
      id: 4,
      title: "Business Hours",
      description:
        "Create time zone specific work hours for each team and plan the inbound routing of phone calls accordingly.Create time zone specific work hours for each team and plan the inbound routing of phone calls accordingly.",
      url: "/resources",
      more: false,
      icon: <AvTimerIcon style={{ fontSize: iconSize }} />,
      color: pink[400],
    },
    {
      id: 5,
      title: "Toll-Free Numbers",
      description:
        "Instantly create toll-free numbers in your local area code or any country in which your business operates. Provide flexible options for callers so they have the convenience to reach your business any time.",
      url: "/resources",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: "#2196f3",
    },
    {
      id: 6,
      title: "Call Queuing",
      description:
        "Create customized call queues. Inbound calls are sorted in call queues based on pre-defined rules and steered to available agents within the right group. Personalized messages are available as well.",
      url: "/resources",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: "#2196f3",
    },
    {
      id: 7,
      title: "Call Recording",
      description:
        "ContactWise can automatically make a recording of all calls. Once the call ends, you can listen to it directly from your internet browser anywhere and anytime. Improve customer interactions by monitoring your team’s calls.",
      url: "/resources",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: "#2196f3",
    },
    {
      id: 8,
      title: "Extension",
      description:
        "Each user, agent, caller queue or department has their own personalized number or extension. This will allow you to reach anyone in your company or seamlessly route a call to a different agent.",
      url: "/resources",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: "#2196f3",
    },
    {
      id: 9,
      title: "Conference Calls",
      description:
        "Improve teamwork with conference calls. You can schedule conference calls easily in a couple of minutes and invite external contacts, e.g. your clients, suppliers, etc.",
      url: "/resources",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: "#2196f3",
    },
    {
      id: 10,
      title: "Unlimited Concurrent Calls",
      description: "Take or place as many calls as you would like simultaneously on the same phone number.",
      url: "/resources",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: "#2196f3",
    },
    {
      id: 11,
      title: "Wiki",
      description: "Use the wiki to share information about the environment with your team.",
      url: "/resources",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: "#2196f3",
    },
    {
      id: 12,
      title: "Security",
      description:
        "Reliable and safe operation of your business phone system. Your data are safe with us. All ContactWise data are stored in modern safe data centers with 24/7 monitoring.",
      url: "/resources",
      more: false,
      icon: <PlayArrowIcon style={{ fontSize: iconSize }} />,
      color: "#2196f3",
    },
    {
      id: 13,
      title: "Online User Management",
      description:
        "You can add new agents into your call center, modify their details and remove agents who no longer work with you. There’s no need to contact us, you can do everything related to agent management yourself, with no hassle.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
      color: "#2196f3",
    },
  ],
  routing: [
    {
      id: 1,
      title: "Workflow Designer",
      description:
        "Workflows are a set of instructions that are created using workflow designer and used by routing engine to direct interactions to the appropriate target (play prompt, route to agent, route to another phone number etc).",
      url: "/",
      more: true,
      icon: "bi bi-globe text-primary fs-2",
    },
    {
      id: 2,
      title: "Automated Call Distribution (ACD)",
      description:
        "Automated smart and efficient queue distribution of inbound calls based on all available data to make sure that callers are always directed to the most qualified agent or agent group.",
      url: "/integrations",
      more: false,
      icon: "bi bi-shift text-primary fs-2",
    },
    {
      id: 3,
      title: "Interactive Voice Response (IVR)",
      description:
        "Create your multi-level interactive voice response (IVR) menu to guide the caller through different options and make sure they are always directed to the right department, agent or group of agents and receive relevant information through customized messages.",
      url: "/pricing",
      more: false,
      icon: "bi bi-clock text-success fs-2 ",
    },
    {
      id: 4,
      title: "Preferred Agent",
      description:
        "Set a preferred agent for each client so that their calls are always directed to the right person. The customer constantly communicates with the same agent, which makes your customer support more personalized, efficient and pleasant.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 5,
      title: "Skill-Based Routing",
      description:
        "Inbound calls can be automatically routed to a specific agent based on their fit and skills required by the caller. You can easily assign skill levels to your agents.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 6,
      title: "Caller-Based Routing",
      description: "Smart routing of inbound calls based on the caller’s phone number with your custom criteria.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 7,
      title: "Webhooks & API",
      description: "Connect our phone system to your everyday tools or build a new custom workflow.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 8,
      title: "Holiday Routing Rules",
      description:
        "Create and manage special routing plans to handle incoming calls during holidays. Holiday Routing helps you to plan your call handling in advance.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 9,
      title: "Automated Call Redirection",
      description:
        "With our business phone system, your clients will always reach you. ContactWise allows you to automatically redirect incoming calls to a selected phone number each time your agents are busy or unavailable during business hours.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 10,
      title: "Queues",
      description:
        "Queues provide a way to queue-up incoming calls from customers and route calls to the most appropriate agent, typically using the First In, First Out (FIFO) algorithm. When an agent becomes available, the highest-ranked caller in the queue is delivered to that agent and everyone else moves up a rank.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 11,
      title: "Real-Time Modifications",
      description:
        "Modified your system settings at any time, including adding new numbers, new workflow or users in a single click.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 12,
      title: "Route Points",
      description:
        "Route point is an internal number that connects interaction to a destination by processing workflow instructions.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 13,
      title: "Prompts",
      description:
        "Prompts are audio files that provide greetings or informational messages to the customer. IVR (Interactive Voice Response) uses voice prompts to provide caller's with instructions and directions for accessing information via phone.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 14,
      title: "Configuration Settings",
      description:
        "Configuration settings are useful collection of configurations,which can be used to handle your interactions. For example, you may configure business hours and call forwarding number here and use it in your workflow.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
  ],
  CloudPBX: [
    {
      id: 1,
      title: "Click To Call",
      description:
        "Dial any phone number on the web with a single click. Make calls instantly to boost your team productivity.",
      url: "/",
      more: true,
      icon: "bi bi-globe text-primary fs-2",
    },
    {
      id: 2,
      title: "Blind Transfer",
      description:
        "Thanks to our Call Transfer feature, you can easily and quickly transfer callers over to another extension, agent or group.",
      url: "/integrations",
      more: false,
      icon: "bi bi-shift text-primary fs-2",
    },
    {
      id: 3,
      title: "Warm Transfer",
      description:
        "Warm Transfer allows you to easily transfer callers over to another agent with having the possibility to speak with them first.",
      url: "/pricing",
      more: false,
      icon: "bi bi-clock text-success fs-2 ",
    },
    {
      id: 4,
      title: "Call Monitoring",
      description: "Accelerate employee training and boost call quality assurance by monitoring live calls.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 5,
      title: "Call Whispering",
      description: "Secretly speak to teammates while they are on a live call so you can provide timely advice.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 6,
      title: "Barge Into Calls",
      description:
        "When monitoring calls, barge in at any point to speak to the callers and the agents simultaneously.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 7,
      title: "Disposition Codes",
      description:
        "Disposition codes allow agents to record interaction outcome after it has ended and are a simple way to keep track of customer interactions. A popular set of disposition codes are 'Issue Resolved', 'Payment Collected', 'Promised to Pay', 'Scheduled follow-up.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
  ],
  Reports: [
    {
      id: 1,
      title: "Call Statistics",
      description:
        "Track the performance of your call center. ContactWise is a truly data-based call center analytics software. Complex statistics on calls, agents and call queues all in one place. Make smart decisions based on relevant data.",
      url: "/",
      more: true,
      icon: "bi bi-globe text-primary fs-2",
    },
    {
      id: 2,
      title: "Real-Time Dashboard",
      description:
        "View call queues, agent availability information, and ongoing calls. You can even monitor or barge into ongoing calls anytime.",
      url: "/integrations",
      more: false,
      icon: "bi bi-shift text-primary fs-2",
    },
    {
      id: 3,
      title: "Call Metrics And Summary",
      description:
        "Manage every call by storing call logs, view call lifetime metrics, and keep a tab of all information for every call made or taken.",
      url: "/pricing",
      more: false,
      icon: "bi bi-clock text-success fs-2 ",
    },
    {
      id: 4,
      title: "Status Code",
      description:
        "Status Codes allow agents to signal their availability for interactions. A popular set of status codes are 'Lunch', 'Training' and 'Team Meeting'.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 5,
      title: "After Call Work",
      description:
        "Utilize the ‘After Call Work’ feature to ensure your agents are meticulous with their customer conversations and stay overwhelmingly productive.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
    {
      id: 6,
      title: "Historical Report",
      description:
        "Historical report to analyse the contact center performance, Emotion analytics and sentiment Analytics.",
      url: "/resources",
      more: false,
      icon: "bi bi-alarm text-primary fs-2",
    },
  ],
};

export default data;
