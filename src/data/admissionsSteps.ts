export interface AdmissionStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export const admissionSteps: AdmissionStep[] = [
  {
    stepNumber: "01",
    title: "Start a Conversation",
    description: "Tell us a little about the person seeking care, their needs, and what matters most to them.",
    detail: "Give us a quick call or send an online enquiry. An experienced member of our admissions team will listen attentively, answer your initial questions, and discuss how our care options align with your family's situation.",
    iconName: "PhoneCall",
  },
  {
    stepNumber: "02",
    title: "Arrange a Visit",
    description: "Come and explore the home, meet the team, and ask questions in person.",
    detail: "We welcome you to visit at a time that suits you. Tour our bedrooms, shared lounges, and gardens, meet our care and hospitality staff, and get a genuine feel for the daily rhythm and friendly atmosphere.",
    iconName: "Calendar",
  },
  {
    stepNumber: "03",
    title: "Discuss Care Needs",
    description: "Talk through support requirements, preferences, relevant assessments, and whether the home can meet the person's needs.",
    detail: "Our care coordinator will conduct a sensitive, comprehensive assessment covering medical considerations, mobility, dietary preferences, and personal routines to ensure we can meet all needs with dignity.",
    iconName: "FileHeart",
  },
  {
    stepNumber: "04",
    title: "Plan the Transition",
    description: "If the home is a suitable fit and arrangements are agreed, the team will help plan the move and discuss the next steps.",
    detail: "We help personalize the bedroom with familiar belongings, coordinate move-in day details with compassion, and pair the resident with a dedicated key caregiver to ensure a reassuring, gentle transition.",
    iconName: "CheckCircle2",
  },
];
