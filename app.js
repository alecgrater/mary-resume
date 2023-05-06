const resumeData = {
  name: "Mary Correia",
  email: "correia.mary6@gmail.com",
  phone: "(401) 480-2335",
  education: {
    university: "University of Massachusetts Amherst - College of Humanities and Fine Arts",
    degree: "Bachelor of Arts in English",
    specialization: "Letter of Specialization in Creative Writing",
    graduationDate: "May 12th, 2017",
    gpa: 3.47
  },
  workExperience: [
    {
      company: "Borealis Coffee Roasters",
      location: "Bristol, RI",
      startDate: "October 2021",
      endDate: "Present",
      position: "Cafe Manager",
      responsibilities: [
        "Managed cafe inventory, ensuring timely and cost-effective restocking",
        "Created and maintained weekly cafe schedules, coordinating employee shifts and time off requests",
        "Handled vendor coordination and deliveries for optimal stock availability",
        "Oversaw cash handling procedures and maintained accurate records",
        "Managed online ordering system and resolved issues as they arise",
        "Mentored cafe staff, resolving interpersonal conflicts and providing exceptional customer service",
        "Proactively addressed customer concerns and ensured customer satisfaction",
        "Encouraged team members to meet and exceed service standards"
      ]
    },
    {
      company: "Borealis Coffee Roasters",
      location: "Riverside, RI",
      startDate: "July 2019",
      endDate: "Present",
      position: "Barista",
      responsibilities: [
        "Crafted high-quality espresso, coffee, and tea beverages",
        "Demonstrated expert knowledge of coffee sourcing, grinding, and brewing techniques",
        "Provided exceptional customer service, operated the register, and maintained a clean and stocked cafe"
      ]
    },
    {
      company: "Shelburne Falls Coffee Roasters",
      location: "Amherst, MA",
      startDate: "July 2018",
      endDate: "June 2019",
      position: "Barista / Sandwich Prep",
      responsibilities: [
        "Delivered excellent customer service in a fast-paced cafe environment.",
        "Skillfully prepared and served a variety of beverages and food items.",
        "Operated the register using Square for seamless transactions."
      ]
    },
    {
      company: "Americorps - City Year Philadelphia",
      location: "Philadelphia",
      startDate: "July 2017",
      endDate: "June 2018",
      position: "Americorps Member",
      responsibilities: [
        "Provided academic and emotional support to a class of 7th-grade students at Theodore Roosevelt Junior High School",
        "Developed and presented monthly formal proposals for student events, securing in-kind supplies from local businesses",
        "Designed and implemented three individualized lesson plans each week",
        "Organized and led an after-school program and Creative Writing club",
        "Tutored and mentored students in reading, mathematics, attendance, and behavior."
      ]
    },
    {
      company: "UMASS Studio Arts Department",
      location: "Amherst, MA",
      startDate: "February 2014",
      endDate: "May 2017",
      position: "Administrative Assistant",
      responsibilities: [
        "Managed the main desk in the Art Department, providing assistance to students and staff",
        "Compiled, edited, and distributed a weekly Art Department Newsletter, showcasing important announcements and events",
        "Managed social media accounts for the Art Department",
        "Performed a diverse range of administrative responsibilities in the central office",
            "document management, printing, filing, appointment scheduling, telephone handling, email correspondence"
        ]
      }
    ],
    extracurriculars: [
        "UMass College of Humanities and Fine Arts Student Leadership Board Member",
        "Member of the English Society at UMass Amherst",
    ],
    skills: [
        "Outstanding interpersonal skills and extensive customer service experience",
        "Proficient in utilizing Excel spreadsheets for data management and record-keeping",
        "Advanced writing proficiency and expertise in reading comprehension"
    ]
  };

  // Helper function to populate the contact section
function populateContactSection() {
  const emailElement = document.getElementById("email");
  const phoneElement = document.getElementById("phone");

  emailElement.textContent = resumeData.email;
  phoneElement.textContent = resumeData.phone;
}

// Helper function to populate the education section
function populateEducationSection() {
  const universityElement = document.getElementById("university");
  const degreeElement = document.getElementById("degree");
  const specializationElement = document.getElementById("specialization");
  const graduationDateElement = document.getElementById("graduationDate");
  const gpaElement = document.getElementById("gpa");

  universityElement.textContent = resumeData.education.university;
  degreeElement.textContent = resumeData.education.degree;
  specializationElement.textContent = resumeData.education.specialization;
  graduationDateElement.textContent = resumeData.education.graduationDate;
  gpaElement.textContent = resumeData.education.gpa;
}

// Helper function to populate the work experience section
function populateWorkExperienceSection() {
    const workExperienceListElement = document.getElementById("workExperienceList");
  
    resumeData.workExperience.forEach((experience) => {
      const itemElement = document.createElement("li");
      const companyElement = document.createElement("h3");
      const positionElement = document.createElement("h4");
      const dateElement = document.createElement("p");
      const responsibilitiesListElement = document.createElement("ul");
  
      companyElement.textContent = experience.company;
      positionElement.textContent = `${experience.position}: ${experience.startDate} - ${experience.endDate}`;
    //   dateElement.textContent = `${positionElement.textContent} ${experience.startDate} - ${experience.endDate}`;
  
      experience.responsibilities.forEach((responsibility) => {
        const responsibilityItemElement = document.createElement("li");
        responsibilityItemElement.textContent = responsibility;
        responsibilitiesListElement.appendChild(responsibilityItemElement);
      });
  
      itemElement.appendChild(companyElement);
      itemElement.appendChild(positionElement);
      itemElement.appendChild(dateElement);
      itemElement.appendChild(responsibilitiesListElement);
  
      workExperienceListElement.appendChild(itemElement);
    });
  }
  

// Helper function to populate the extracurriculars section
function populateExtracurricularsSection() {
  const extracurricularsListElement = document.getElementById("extracurricularsList");

  resumeData.extracurriculars.forEach((extracurricular) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = extracurricular;
    extracurricularsListElement.appendChild(itemElement);
  });
}

// Helper function to populate the skills section
function populateSkillsSection() {
  const skillsListElement = document.getElementById("skillsList");

  resumeData.skills.forEach((skill) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = skill;
    skillsListElement.appendChild(itemElement);
  });
}

// Populate the resume sections
function populateResume() {
    populateContactSection();
    populateEducationSection();
    populateWorkExperienceSection();
    populateExtracurricularsSection();
    populateSkillsSection();
  }

// Call the populateResume function
  populateResume();