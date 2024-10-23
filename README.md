
# Team Titan Go - YouMatter

- [Project summary](#project-summary)
  - [The issue we are hoping to solve](#the-issue-we-are-hoping-to-solve)
  - [How our technology solution can help](#how-our-technology-solution-can-help)
  - [Our idea](#our-idea)
- [Technology implementation](#technology-implementation)
  - [IBM watsonx product(s) used](#ibm-watsonx-products-used)
  - [Other IBM technology used](#other-ibm-technology-used)
  - [Solution architecture](#solution-architecture)
- [Presentation materials](#presentation-materials)
  - [Solution demo video](#solution-demo-video)
  - [Project development roadmap](#project-development-roadmap)
- [Additional details](#additional-details)
  - [How to run the project](#how-to-run-the-project)

## Project summary

### The issue we are hoping to solve

In many remote and rural areas, access to mental health resources is significantly limited due to geographic isolation, lack of internet infrastructure, and cultural or language barriers. Mental health challenges in these areas are often neglected, leading to worsening conditions and a lack of professional support. Many existing mental health applications are data-heavy, requiring continuous internet access, making them inaccessible in low-bandwidth regions. Furthermore, language and cultural differences in remote areas create additional hurdles in delivering effective mental health support.

### How our technology solution can help

Our solution provides offline, low bandwidth Optimization, multilingual mental health care support for rural/remote communities.

### Our idea

Access to mental health care is a significant global issue, particularly in remote and rural communities.In these regions, several challenges hinder effective mental health care delivery such as-
1. **Geographic isolation** often means that mental health professionals are inaccessible, and health facilities are few and far between. This lack of proximity makes it difficult for individuals to receive timely support. 

2. **Poor or intermittent internet connectivity** further increases the problem as most of the modern app relies on high internet bandwidth.
   
3. Additionally, **language barriers** present significant obstacles in these areas. Most mental health care resources are not available in the regional languages spoken by these populations, limiting access to culturally and linguistically appropriate care.
   
4. Many of these individuals are **not familiar with traditional authentication systems** like email-based logins, creating barriers to accessing mental health applications.

**Our application is addressing all the challenges by providing below functionalities-** 


- **Offline Capabilities with Dexie.js (IndexedDB):** The app stores data locally using Dexie.js, enabling offline access to mental health resources. When online, it syncs with the backend for analysis and follow-up care.

- **Low Bandwidth Optimization with Caching:** Dexie.js caches resources locally, allowing the app to function smoothly in low bandwidth environments by reusing downloaded content.

- **Multilingual Support:** The app provides a multilingual interface using i18n libraries, translating content into regional languages for greater accessibility in remote communities.

- **OTP-based Authentication:** The app uses OTP-based sign-up and sign-in via SMS, ideal for users in remote areas with basic mobile infrastructure, ensuring secure access without complex passwords.


## Technology implementation

### IBM watsonx product(s) used


**Featured watsonx products**

- [watsonx Assistant](https://cloud.ibm.com/catalog/services/watsonx-assistant) -This is utilized to create an intelligent, conversational interface that enables users to interact with the app with their mental health queries. It helps users to get answers related to common mental health.

### Other IBM technology used

**Additional IBM AI services**
- [Natural Language Understanding](https://cloud.ibm.com/catalog/services/natural-language-understanding) - This is integrated in the app to analyse user inputs, such as responses to mental health assessments. By extracting key information like sentiment, emotions, and intent from users' responses, NLU allows the app to better understand the user's current mental state and provide personalized recommendations. For instance, if the system detects signs of stress or anxiety in a user's assessment, it can suggest calming exercises or connect them with relevant resources (NGO or other local communities).

- [Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text) - This will transcribes users' spoken words into text, allowing for seamless communication. This feature improves accessibility (by using voice commands) ,enables ease of use, particularly for older adults or users unfamiliar with typing in their regional language.

- [Text to Speech](https://cloud.ibm.com/catalog/services/text-to-speech) - is used to convert written content, such as mental health resources, educational articles, and conversational responses from the virtual assistant, into spoken language.

### Other key technology used in our project
- Offline Capabilities and Low Bandwidth Optimization with Caching using **Dexie.js (IndexedDB)**
- Multilingual Support for Accessibility using **i18n (internationalization) libraries**
- OTP-based Signup/Sign-in for Simple Authentication using **Twilio**
- Sending user sentiments data via sms/email using **Sendgrid**

### Solution architecture

Diagram and step-by-step description of the flow of our solution:

![Alt text](https://github.com/poojakp/Team-Titans-Go/blob/main/images/Youmatter_AD.png)

1. The user lands on the app's overview, where they can find information about AI chat support, contact a counselor, access self-help resources, and emergency crisis support. There is also an option in the bottom-right corner to connect with the chatbot.

2. The user can navigate to the registration page to create a profile.

3. Once registration is successful, the user can sign in and access the dashboard using OTP-based authentication.

4. The user can also switch between regional languages.

5. The user can now explore various components on the dashboard, such as:

   - **User Profile**: Allows users in remote areas to update and manage their personal information for personalized support.
        
   - **Self-Assessment**: Provides tools to help users assess their mental health and identify areas of concern.
        
   - **Resources**: Offers access to mental health articles, guides, and self-help materials, even in low-connectivity regions.
        
   - **Workshops**: Facilitates online mental health workshops tailored to users in remote locations.
        
   - **Exercises**: Delivers mindfulness and mental health exercises that can be done offline to improve well-being.
        
   - **Counselling**: Connects users with virtual counsellors for guidance and mental health support.
        
   - **Emergency**: Provides immediate access to emergency mental health services or contacts in case of a crisis.

## Presentation materials

### Solution demo video


### Project development roadmap

The project currently does the following things.

  •	Multilingual Support

  •	Offline Capabilities

  •	Low-Bandwidth Optimized

  •	Secure OTP-Based Signup/Sign-in

In the future we plan to...

See below for our proposed schedule on next steps after Call for Code 2024 submission.

**October - December 2024: Feature Enhancements and Stability**

  **1. Multilingual Support Expansion:**

  a. Extend Watson Assistant's support for regional languages and dialects.

  b. Integrate advanced translation models to enable seamless conversations in multiple languages, both voice and text.

  **2. AI Model Refinements:**

  a. Fine-tune sentiment analysis models for different cultural and emotional contexts.

  b. Expand the dataset with diverse user data to improve empathy and response accuracy.

  **3. Analytics Dashboards:**

  a. Build a dashboard for healthcare professionals to monitor mental health trends, mood shifts, and engagement levels.

  b. Add features for personalized intervention recommendations based on user history.

**January - March 2025: Advanced Features & Integrations**

  **1. Offline-first Optimization:**

  a. Improve offline capabilities by incorporating more AI functions on the client side (using IndexedDB for local storage).

  b. Implement a sync mechanism that ensures all data is uploaded to MongoDB when the connection is restored.

  **2. Gamification:**

  a. Add features like progress streaks, mood tracking rewards, and challenges to encourage regular user interaction.

  b. Track user progress and visualize it through graphs for better engagement.

**April - June 2025: Community and Professional Support**

**1. Community Feature:**

  a. Develop a secure, anonymous forum for users to share experiences and get support from peers.

  b. Use AI to moderate these discussions, ensuring a positive and helpful environment.

**2. Professional Integration:**

  a. Enable live video or chat consultations with certified therapists or counselors.

  b. Integrate AI-driven triage to prioritize high-risk cases and refer them to professionals immediately.

**3. Crisis Intervention System:**

  a. Build a system that can detect and respond to users in crisis, sending alerts to emergency contacts or hotlines.

  b. Create an emergency button for immediate help, connecting users with mental health resources in their location.

**July - September 2025: Advanced Personalization & Scaling**

  **1. AI-Driven Personalization:**

  a. Develop tailored wellness plans based on users’ emotional patterns, daily check-ins, and activity levels.

  b. Provide recommendations like mindfulness activities or personalized goals.

  **2. Global Scaling:**

  a. Partner with international mental health organizations for global reach.

  b. Expand support to underserved regions with partnerships, particularly targeting low-income or rural areas.

  **3. Specialized Modules for Different Groups:**

  a. Build custom modules for adolescents, elderly users, or specific cultural groups to offer targeted mental health support.

## Additional details

### How to run the project

**Prerequisites**
  1.	Visual studio code 
  2.	Install mongo database and mongoose compass application(optional) for database service
   
**Steps to run project solution**
  1. Clone the repository to your local machine using the following command:

     **git clone https://github.com/poojakp/Team-Titans-Go**
     
  3. Open the cloned repository in Visual Studio (VS Code).
     
  4. In the terminal, navigate to the backend project directory:
     
     **cd .\MentalHealth-Backend**
     
  5. Set up the .env file with keys shared here - https://drive.google.com/file/d/1QyMfRr5bQ8ltUYulQGiDybsyuhiAGGou/view?usp=sharing
     and add that .env file in .\MentalHealth-Backend folder
     
  7. Run the following command to install dependencies:
      
     **npm install**
     
  8. Start the backend server:
      
     **npm start**
     
  9. Open a new terminal in VS Code for the front-end. Then, navigate to the front-end project directory:
      
      **cd .\MentalHealth-UI**
      
  10. Install front-end dependencies:

      **npm install**
     
  11. Start the front-end:
      
      **npm start**
      
