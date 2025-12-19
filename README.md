# 🧮 Simple Calculator

## 📝 Live Demo Link: 
https://disheta-simplecalculator.netlify.app/
 
## 📷 Screenshot/GIF 
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fa433a43-1fbf-46cb-8044-1bf8f90a9481" />
 
## 📖 Description 
This project is a functional, simple calculator built as a single-page web application. It handles 
basic arithmetic operations (addition, subtraction, multiplication, and division) and provides clear 
functions for clearing the display and deleting the last entry. The design focuses on usability and 
a modern, appealing aesthetic, resembling the popular calculator apps found on mobile 
operating systems. 
The project demonstrates proficiency in separating structure (HTML), styling (CSS), and 
behavior (JavaScript) to create a robust, interactive user experience. 

## 💻 Technologies Used 
| Category | Technology | Purpose |
|---|---|---|
| Markup | HTML5 | Defines the structure of the calculator, including the display and all buttons. |  
| Styling | CSS3 (Custom) | Implements the responsive grid layout and uses distinct color coding for numbers, operators, and control buttons (Clear/Delete). |
| Logic |  JavaScript (Vanilla) |  Handles all user interaction, expression parsing, and calculation logic. | 

## ✨ Features (Highlighting Complexity) 
The calculator includes the following key features: 
- **Grid Layout:** The buttons are precisely laid out using CSS Grid to create the classic 4x5 
calculator button pattern, which is easily adaptable for different screen sizes. 
- **Arithmetic Operations:** Supports the four fundamental operations (+, -, *, /) and decimal 
input. 
- **Dedicated Control Buttons:** Features dedicated buttons for:
    - *Clear (C):* Resets the entire calculation and display. 
    - *Delete (DEL):* Removes the last entered character, enabling easy correction of input errors. 
- **Visual Feedback:** Uses distinct color schemes for different button types (numbers, 
operators, equals) and includes hover effects (:hover and transform: scale(1.03)) to 
provide smooth visual feedback on button press. 

## 🛠️ Tech Implementation Highlights (The "How I Built It" Section) 
1. **Event Handling and Delegation:** The main logic utilizes 
document.querySelectorAll('.button-item') to attach a single, efficient event listener to all 
calculator buttons, checking the button's content or class to determine the correct action 
(number, operator, clear, equals). 
2. **Robust Evaluation:** The core calculation logic uses the built-in eval() function within a 
try...catch block. This approach simplifies expression parsing while the error handling 
prevents crashes due to invalid expressions. 
3. **Special Button Styling:** The = (equals) button and the 0 (zero) button use grid-column: 
span 2 in CSS to span two columns, which is necessary for the modern calculator layout. 
4. **Display Management:** The display is a readonly input field to prevent users from typing 
arbitrary characters, ensuring the only input comes from the controlled buttons. 

## 🔮 Future Scope 
Ideas for enhancements and further development: 
- **Error Handling Refinement:** Implement more detailed error messages instead of just 
"Error" (e.g., "Division by Zero"). 
- **Keyboard Support:** Add support for keyboard input, allowing users to perform 
calculations without clicking the on-screen buttons. 
- **Scientific Mode:** Introduce advanced functions like sin, cos, tan, and memory buttons 
(M+, M-). 
- **History Log:** Implement a feature to display previous calculations above the main display. 

## ⚙️ Setup and Installation 
This project is built using standard HTML, CSS, and JavaScript. No external libraries or build 
tools are required. 
### Files 
* **index.html:** The HTML structure of the calculator interface. 
* **style.css:** The styling, layout, and button aesthetics. 
* **script.js:** The core logic for handling button presses and evaluating expressions.  

## 🤝 Contact/Credit 
This project was developed by: 
- **Name:** Isheta Dhanavada
- **GitHub:** @Disheta006 
- **LinkedIn:** Isheta Dhanavada
