# NewsPortal WebApp

Welcome to the **NewsPortal WebApp** repository! This project is a simple web application for viewing and searching news articles. Users can browse news articles by category, search for specific topics, and read full articles from various sources.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/news-portal.git
Navigate to the project directory:

bash
Copy code
cd news-portal
Install the project dependencies:

bash
Copy code
npm install
Create a News API account and obtain an API key.

Create a .env file in the project root directory and add your News API key as follows:

env
Copy code
NEWS_API_KEY=your-api-key-here
Start the server:

bash
Copy code
npm start
Your NewsPortal WebApp should now be running at http://localhost:3000.

Usage
Access the web app by opening a web browser and navigating to http://localhost:3000.
Explore news articles by clicking on categories like Sports, Political, Weather, Arts, Women, and Food in the navigation bar.
Use the search bar to enter a specific query and click "Search" to find articles related to your query.
Click on "Previous" and "Next" buttons to navigate through paginated results.
Project Structure
PP3/: Contains the HTML, CSS, and JavaScript files for the web app.

p3.html: The main HTML file for the web app.
p3.css: The CSS file for styling the web app.
p3.js: The JavaScript file that handles interactions and API requests.
server.js: The Node.js server file that serves static assets and handles API requests.

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.
