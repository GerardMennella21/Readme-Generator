README Generator by Gerard Mennella

# Summary
This application is designed to generate a high quality, professional README.md file using user responses to inqurier prompts in the command line.

# Code Breakdown
The Index.js file requires fs, inquirer, and the generateMarkdown file created in the utils folder. The generateMarkdown.js file contains and exports a function that returns text for the README using dynamic data input where it is required. The questions function in Index.js returns an inquirer prompt containing questions for the user regarding the details of the README. The writeToFile function takes a data parameter and uses the fs.writeFile method to generate a readme file in the dist folder. The questions function is called, the answers are then passed into the imported generateMarkdown function as the data parameter. Finally the generateMarkdown response is passed into the writeToFile function and the README.md file is created in the dist folder.

# Video Walkthrough
