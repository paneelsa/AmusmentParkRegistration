Amusement Park Registration System
Overview:
This project is a full-stack application built to handle user registration for an amusement park, using Ionic Angular for the frontend and Express.js for the backend. The system ensures that users meet various health and safety criteria before registering, with real-time validation and feedback.

Key Features:

Frontend (Ionic Angular): A user-friendly registration form with real-time validation for age, weight, height, and medical history.
Backend (Express.js): A RESTful API that handles the form submissions, validates data, and returns appropriate success or rejection messages.
Form Validation: Ensures users meet age, weight, height, and medical history criteria to ensure a safe and smooth registration process.
Error Handling: Provides clear feedback for rejected registrations with custom messages for each validation failure.
Technologies Used:

Frontend: Ionic, Angular, Typescript
Backend: Express.js, Node.js, CORS
Validation: Custom logic to ensure user data is valid and safe
How It Works:

Users fill out a registration form on the frontend.
Data is validated through API requests to the backend.
Users receive feedback—either success or rejection messages—based on the data they submit.
Key Benefits:

Seamless User Experience: Clear and instant validation to improve user interaction.
Robust Backend: Secure and efficient server-side validation and data handling.
Scalability: Easily extendable to handle more forms or integrate with other services.
Setup:

Clone the repository.
Run the backend with npm start.
Serve the frontend using ionic serve.
Test the full registration flow.
