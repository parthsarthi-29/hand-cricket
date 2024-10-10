# Hand Cricket Simulator

**Hand Cricket Simulator** is a fun, interactive web application where users can play a virtual hand cricket game. The game involves selecting a number and competing against a randomly generated opponent number. The player can choose either **Odd** or **Even** for the toss and decide whether they want to bat or bowl first. 

## Features

- **Toss Selection**: Users can select either **Odd** or **Even** and play the toss against the opponent's randomly generated number.
- **Number Selection**: Players choose numbers from **1 to 6** during both batting and bowling.
- **Innings**: There are two innings – **Batting** and **Bowling**, and the user can either set or chase a target.
- **Game Modes**: 
  - Batting Mode: Players try to score as many runs as possible.
  - Bowling Mode: Players aim to restrict the opponent’s score.

## How to Play

1. **Start the Toss**: Select **Odd** or **Even**, choose a number, and see who wins the toss.
2. **Play the Game**:
   - If you bat first, try to score as many runs as you can by selecting numbers.
   - If you bowl first, aim to stop the opponent from scoring higher than the target.
3. **Result**: At the end of both innings, the game will display the result (Win, Loss, Tie).

## Components

### **Toss.js**
This component handles the toss process. It allows users to select **Odd** or **Even**, then compares the user's number with the opponent’s randomly generated number to determine the winner of the toss.

### **NumberSelector.js**
A component that renders selectable numbers for the player. It uses a **map** function to display numbers from **1 to 6**.

### **Batting.js**
This component handles the batting phase of the game. Players select a number, and a random number is generated for the opponent. Runs are scored if the player’s number is not the same as the opponent's.

### **Bowling.js**
This component handles the bowling phase. Players select a number, and if their number matches the opponent's number, the opponent is out. Otherwise, the opponent scores.

### **Opponent.js**
Displays the selected number and opponent’s number along with their respective images. The **Play** button triggers the game logic.

### **Home.js**
The home page for the Hand Cricket Simulator. It provides options to start the game or learn how to play.

## Error Handling

- Alerts are used to handle various errors, such as when no number is selected or when the toss choice is not made. 

## Technologies Used

- **React.js**: Core framework for building the application.
- **CSS**: For styling components.
- **Styled-components**: For handling dynamic styling in the NumberSelector component.

## Getting Started

### Prerequisites

- **Node.js** installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hand-cricket-simulator.git
2. **Navigate to the project directory**:
   ```bash
   cd hand-cricket-simulator

3. **Install the dependencies**:
   ```bash
   npm install
 
4. **Start the development server**:
   ```bash
   npm start

5. **Open http://localhost:3000 to view the app in your browser.**



### Screenshots
1. **Home Page**: 

2. **Toss Page**:

3. **Game Play**:

## Future Improvements
1. Add more levels and gameplay modes.
2. Improve the UI for a better experience.
3. Implement multiplayer mode.
