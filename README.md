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
   
   ![Screenshot of the App](/public/imgs/ss_1.png)

   This is the Home Page of the Web which asks you an option of play game or how to play.<br><br><br><br><br><br>
   
3. **Toss Page**:

   ![Screenshot of the App](/public/imgs/ss_2.png)

   This is Toss Page where you select a number beytween 1 to 6 and choose odd or eve and press the play button.<br><br><br><br><br><br>
   
   ![Screenshot of the App](/public/imgs/ss_3.png)

   If the sum of your number and computer's number is even/odd and same to which you selected then you won the toss and you can choose to bat or bowl.<br><br><br><br><br><br>
   
   ![Screenshot of the App](/public/imgs/ss_4.png)

   If the sum of your number and computer's number is even/odd and different to which you selected then opponent won the toss and he choose to bat or bowl.<br><br><br><br><br><br>
   
5. **Game Play**:

   Lets assume computer is Batting First!!
   
   ![Screenshot of the App](/public/imgs/ss_5.png)

   It shows innings 1 where the computer who is batting gives a target, Its score increases until your selected number and his number doesn't match if the number matches batsmen gets out.<br><br><br><br><br><br>
   
   ![Screenshot of the App](/public/imgs/ss_6.png)

   It shows that computer is out now and you need to bat and chase the target.<br><br><br><br><br><br>
   
   ![Screenshot of the App](/public/imgs/ss_7.png)

   Now you bat and your score increases until you reaches the target or you get out.<br><br><br><br><br><br>
   
   ![Screenshot of the App](/public/imgs/ss_8.png)

   If you reach the Target Without getting out you Win, if the scores are level the match gets Tied, else you lose the match.  Now here you get an option to play againg which takes you to the toss again.<br><br><br><br><br><br>
   
## Future Improvements
1. Add more levels and gameplay modes.
2. Improve the UI for a better experience.
3. Implement multiplayer mode.
