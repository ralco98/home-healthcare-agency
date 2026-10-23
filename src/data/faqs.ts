export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "care" | "visiting" | "admissions" | "practical";
}

export const faqs: FAQItem[] = [
  {
    id: "care-types",
    category: "care",
    question: "What types of care do you provide?",
    answer: "Care options depend on the services offered by the home and each person's assessed needs. We offer residential care, dementia care support, respite and temporary stays, personal care assistance, and daily activities with companionship. Contact our admissions team to discuss the support available and whether it meets your loved one's specific requirements.",
  },
  {
    id: "can-we-visit",
    category: "visiting",
    question: "Can we visit before making a decision?",
    answer: "Yes, absolutely. Families are encouraged to arrange a visit, meet the team, explore our living and garden spaces, and ask questions in person without any pressure. We can host you for morning coffee or afternoon tea so you can experience the atmosphere firsthand.",
  },
  {
    id: "care-cost",
    category: "admissions",
    question: "How much does residential care cost?",
    answer: "Fees depend on the level of care required, accommodation type selected, and individual support arrangements. Following an initial confidential consultation and needs assessment, we provide a transparent written breakdown of all fees and inclusions before you make any commitment.",
  },
  {
    id: "bring-belongings",
    category: "practical",
    question: "Can residents bring their own belongings?",
    answer: "Personal belongings can help a room feel familiar and comforting. We warmly invite residents to bring cherished photographs, favourite armchairs, paintings, bedspreads, and sentimental keepsakes. Our team can explain what residents may bring and assist with arranging the room before move-in day.",
  },
  {
    id: "communicate-families",
    category: "visiting",
    question: "How do you communicate with families?",
    answer: "We maintain close, collaborative communication with designated family members. You will have a named point of contact on our care team, receive prompt updates on health or routine changes, and can call anytime for an informal chat or arrange care review meetings whenever desired.",
  },
  {
    id: "before-move-in",
    category: "admissions",
    question: "What happens before someone moves in?",
    answer: "The process typically includes an initial friendly conversation, an in-person visit to our home, a thorough discussion of care needs and personal preferences, a pre-admission assessment with our care lead, and confirmation of availability. We then coordinate a gentle, planned transition at a comfortable pace.",
  },
  {
    id: "medical-mobility-needs",
    category: "care",
    question: "Can you accommodate specific medical or mobility needs?",
    answer: "Suitability depends on the person's individual requirements and the services, staffing, equipment, and facilities available. We have step-free level access, modern mobility aids, and close relationships with local healthcare professionals, and we discuss all specific medical or mobility needs in detail before any placement is agreed.",
  },
  {
    id: "how-arrange-visit",
    category: "visiting",
    question: "How can we arrange a visit?",
    answer: "Use our online enquiry form, call our team directly at +1 (267) 448-9408, or send an email. We will get in touch promptly to arrange a convenient day and time that fits your family's schedule.",
  },
];
