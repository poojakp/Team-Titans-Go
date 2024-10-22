
# Team Titan Go - YouMatter

- [Project summary](#project-summary)
  - [The issue we are hoping to solve](#the-issue-we-are-hoping-to-solve)
  - [How our technology solution can help](#how-our-technology-solution-can-help)
  - [Our idea](#our-idea)
- [Technology implementation](#technology-implementation)
  - [IBM watsonx product(s) used](#ibm-ai-services-used)
  - [Other IBM technology used](#other-ibm-technology-used)
  - [Solution architecture](#solution-architecture)
- [Presentation materials](#presentation-materials)
  - [Solution demo video](#solution-demo-video)
  - [Project development roadmap](#project-development-roadmap)
- [Additional details](#additional-details)
  - [How to run the project](#how-to-run-the-project)

## Project summary

### The issue we are hoping to solve

In many remote and underserved communities, access to mental health resources is significantly limited due to geographic isolation, lack of internet infrastructure, and cultural or language barriers. Mental health challenges in these areas are often neglected, leading to worsening conditions and a lack of professional support. Many existing mental health applications are data-heavy, requiring continuous internet access, making them inaccessible in low-bandwidth regions. Furthermore, language and cultural differences in remote areas create additional hurdles in delivering effective mental health support.

### How our technology solution can help

Our solution provides offline, low bandwidth Optimization, multilingual mental health care service for remote communities.

### Our idea

Access to mental health care is a significant global issue, particularly in remote and underserved communities. In these regions, several challenges hinder effective mental health care delivery. First, geographic isolation often means that mental health professionals are inaccessible, and health facilities are few and far between. This lack of proximity makes it difficult for individuals to receive timely support. Second, poor or intermittent internet connectivity further exacerbates the problem, making telehealth solutions, which typically require stable bandwidth, less effective. Additionally, language barriers present significant obstacles in these areas. Most mental health care resources are not available in the regional languages spoken by these populations, limiting access to culturally and linguistically appropriate care. Lastly, many of these individuals are not familiar with traditional authentication systems like email-based logins, creating barriers to accessing mental health applications.

**Offline Capabilities Using Dexie.js (IndexedDB)**: The app will utilize **Dexie.js**, a wrapper around **IndexedDB**, to store user data and resources locally on the device. This enables the app to work offline, allowing users to access critical mental health resources/services of app without needing an active internet connection. For example, a user in a rural community could complete self-assessments and log their mental health progress even when offline. When the app detects an internet connection, it syncs the data with the backend for further analysis and follow-up care.

**Low Bandwidth Optimization with Caching:** The app will be optimized for low bandwidth environments. **Dexie.js** will be used to cache resources locally, so once downloaded content can be reused without redownloading. Optimizations ensure a smooth and responsive user experience, even in areas with limited connectivity.

**Multilingual Support for Accessibility:** Many remote communities have populations that speak regional languages not typically supported by mainstream apps. We will leverage **i18n (internationalization) libraries** to provide a fully multilingual interface, translating the entire user experience, including mental health content and app instructions, into regional languages. This removes linguistic barriers, making mental health support more accessible to non-native speakers of dominant languages like English or French.

**OTP-based Signup/Sign-in for Simple Authentication:** Recognizing that many users in remote areas may not have email accounts or be familiar with traditional authentication systems, the app will utilize OTP-based authentication. Through SMS services like **Twilio**, users can sign up and sign in using a **one-time password** sent directly to their mobile phones. This system is ideal for regions with basic mobile infrastructure and ensures secure access to the app without the need for complex passwords or email verification.


## Technology implementation

### IBM watsonx product(s) used


**Featured watsonx products**

- [watsonx Assistant](https://cloud.ibm.com/catalog/services/watsonx-assistant) - is utilized to create an intelligent, conversational interface that enables users to interact with the app with their mental health queries. It helps users navigate the app, find mental health resources, and get answers to common mental health-related questions. This virtual assistant can also guide users through mental health assessments, offer instant support, and provide reminders for ongoing activities, making mental health care more accessible and user-friendly for individuals in remote areas.

### Other IBM technology used

**Additional IBM AI services**
- [Natural Language Understanding](https://cloud.ibm.com/catalog/services/natural-language-understanding) - is employed in the app to analyse user inputs, such as text responses to mental health assessments or conversations with the virtual assistant. By extracting key information like sentiment, emotions, and intent from users' responses, NLU allows the app to better understand the user's current mental state and provide personalized recommendations. For instance, if the system detects signs of stress or anxiety in a user's message, it can suggest calming exercises or connect them with relevant resources.

- [Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text) - enables users in remote areas to interact with the app using voice commands, which is especially helpful for those with limited literacy or difficulty typing. The app transcribes users' spoken words into text, allowing for seamless communication. This feature improves accessibility and ease of use, particularly for older adults or users unfamiliar with typing in their regional language.

- [Text to Speech](https://cloud.ibm.com/catalog/services/text-to-speech) - is used to convert written content, such as mental health resources, educational articles, and conversational responses from the virtual assistant, into spoken language. This feature is particularly useful for users who prefer auditory content or have reading difficulties. It makes the app more accessible by providing a voice interface for users who may want to listen to information or instructions rather than read them, enhancing user engagement in remote, low-literacy communities.

### Other key technology used in our project
- Offline Capabilities and Low Bandwidth Optimization with Caching using **Dexie.js (IndexedDB)**
- Multilingual Support for Accessibility using **i18n (internationalization) libraries**
- OTP-based Signup/Sign-in for Simple Authentication using **Twilio**
- Sending user sentiments data via sms/email using **Sendgrid**

### Solution architecture

Diagram and step-by-step description of the flow of our solution:

<img width="607" alt="image" src="https://github.com/user-attachments/assets/13b8b102-89d4-4881-bb27-7898e6e780b8">

1. The user lands on the app's overview, where they can find information about AI chat support, contact a counselor, access self-help resources, and emergency crisis support. There is also an option in the bottom-right corner to connect with the chatbot.

2. The user can navigate to the registration page to create a profile.

3. Once registration is successful, the user can sign in and access the dashboard using OTP-based authentication.

4. The user can also switch between regional languages.

5. The user can now explore various components on the dashboard, such as:

  - User Profile: Allows users in remote areas to update and manage their personal information for personalized support.

  - Self-Assessment: Provides tools to help users assess their mental health and identify areas of concern.

  - Resources: Offers access to mental health articles, guides, and self-help materials, even in low-connectivity regions.

  - Workshops: Facilitates online mental health workshops tailored to users in remote locations.

  - Exercises: Delivers mindfulness and mental health exercises that can be done offline to improve well-being.

  - Counselling: Connects users with virtual counsellors for guidance and mental health support.

  - Emergency: Provides immediate access to emergency mental health services or contacts in case of a crisis.

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

![image](https://github.com/user-attachments/assets/33b257a7-204a-4875-90df-b3a368b7c050)


## Additional details

### How to run the project

**Prerequisites – **
  1.	Visual studio code 
  2.	Install mongo database and mongoose compass application(optional) for database service
   
**Steps to run project solution**
  1. Clone the repository to your local machine using the following command:
    ** git clone [command](https://github.com/poojakp/Team-Titans-Go)**
  2. Open the cloned repository in Visual Studio (VS Code).
  3. In the terminal, navigate to the backend project directory:
     **cd .\MentalHealth-Backend**
  4. Set up the .env file with your Twilio token.
  5. Run the following command to install dependencies:
     **npm install**
  6. Start the backend server:
     **npm start**
  7. Open a new terminal in VS Code for the front-end. Then, navigate to the front-end project directory:
      cd .\MentalHealth-UI
  8. Install front-end dependencies:
     **npm install**
  10. Start the front-end:
      **npm start**
      
