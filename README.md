#Combinatorics Solver Web Application


##Overview
This project is a full-stack web application that provides solutions to various combinatorics problems, including:

Traveling Salesman Problem (TSP)
Knapsack Problem
Graph Coloring Problem
Hamiltonian Cycle Problem
Bin Packing Problem
Maximum Independent Set Problem
Partitions
The frontend is built with React and deployed on Vercel, while the backend is developed using Flask and deployed on Render. User authentication is handled through Auth0 to ensure secure access.


##Table of Contents
Architecture
Setup Instructions
Usage Guidelines
API Endpoints
Contributing
License


##Architecture
###Frontend
Technology: React
Deployment: Vercel
Key Features: User input forms, result display, integration with the backend via Axios, and user authentication with Auth0.

###Backend
Technology: Flask
Deployment: Render
Key Features: Combinatorics problem-solving algorithms, API endpoints for different problems, and communication with the frontend.

###Data Flow
User inputs data through the frontend.
The frontend sends this data to the backend via RESTful API requests.
The backend processes the data and solves the specified combinatorics problem.
Results are sent back to the frontend for display.


##Setup Instructions
###Prerequisites
Node.js and npm (for the frontend)
Python 3.x and pip (for the backend)
Git

###Frontend Setup
1. Clone the repository:
git clone https://github.com/your-username/combinatorics-solver.git
cd combinatorics-solver/combinatorics-solver-frontend
2. Install dependencies:
npm install
3. Create a .env file to include environment variables (e.g., Auth0 keys, API base URL):
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
REACT_APP_API_BASE_URL=https://your-backend-url.com/api
4. Start the development server:
npm start
5. Visit http://localhost:3000 to view the application.


##Backend Setup
1. Clone the repository (if not already done):
git clone https://github.com/your-username/combinatorics-solver.git
cd combinatorics-solver/backend
2. Create and activate a virtual environment:
python3 -m venv venv
source venv/bin/activate
3. Install dependencies:
pip install -r requirements.txt
4. Set environment variables in a .env file:
FLASK_APP=app.py
FLASK_ENV=development
AUTH0_DOMAIN=your-auth0-domain
AUTH0_API_AUDIENCE=your-api-audience
5. Start the backend server:
flask run
6. The backend will be accessible at http://localhost:5000.


##Usage Guidelines
1. Authentication: Users must log in via Auth0 to access the application.
2. Problem Selection: Select a combinatorics problem to solve from the list on the homepage.
3. Input Data: Enter the required data for the chosen problem.
4. Submit: Click the submit button to send the data to the backend.
5. View Results: The results will be displayed on the frontend once processed.


##API Endpoints
###Base URL
The base URL for the API is:
https://combinatorics-solver.onrender.com

###Endpoints
1. Traveling Salesman Problem (TSP)
URL: /api/tsp
Method: POST
Description: Solves the Traveling Salesman Problem. Given a list of cities and the distances between them, find the shortest possible route that visits each city exactly once and returns to the starting city. 
Request Body:
{
  "cities": [[x1, y1], [x2, y2], ...]
}
Response:
{
  "optimal_path": [city_index1, city_index2, ...],
  "minimum_distance": total_distance
}

2. Knapsack Problem
URL: /api/knapsack
Method: POST
Description: Solves the 0/1 Knapsack Problem. Given a set of items, each with a weight and a value, determine the subset of items that has the maximum total value without exceeding a given weight capacity.
Request Body:
{
  "weights": [w1, w2, ...],
  "values": [v1, v2, ...],
  "capacity": max_capacity
}
Response:
{
  "selected_items": [item_index1, item_index2, ...],
  "total_value": total_value
}

3. Graph Coloring Problem
URL: /api/graph-coloring
Method: POST
Description: Solves the Graph Coloring Problem. Given a graph, assign a color to each vertex such that no adjacent vertices have the same color. The goal is to use the minimum number of colors.
Request Body:
{
  "adjacency_matrix": [[0, 1, 0], [1, 0, 1], ...]
}
Response:
{
  "coloring": [color1, color2, ...],
  "number_of_colors": num_colors
}

4. Hamiltonian Cycle Problem
URL: /api/hamiltonian-cycle
Method: POST
Description: Finds a Hamiltonian cycle in a graph.  Given a graph, find a cycle that visits each vertex exactly once.
Request Body:
{
  "adjacency_matrix": [[0, 1, 0], [1, 0, 1], ...]
}
Response:
{
  "cycle": [vertex1, vertex2, ...]
}

5. Bin Packing Problem
URL: /api/bin-packing
Method: POST
Description: Solves the Bin Packing Problem. Given a set of items with different sizes and a set of bins with fixed capacities, determine the minimum number of bins required to pack all the items.
Request Body:
{
  "items": [item1, item2, ...],
  "bin_capacity": capacity
}
Response:
{
  "bins": [[item_index1, item_index2], ...],
  "number_of_bins": num_bins
}

6. Maximum Independent Set Problem
URL: /api/maximum-independent-set
Method: POST
Description: Finds the maximum independent set in a graph. Given a graph, find a set of vertices such that no two vertices in the set are adjacent. The goal is to find the largest possible independent set.
Request Body:
{
  "adjacency_matrix": [[0, 1, 0], [1, 0, 1], ...]
}
Response:
{
  "independent_set": [vertex1, vertex2, ...],
  "set_size": size
}

7. Partitions Problem
URL: /api/partitions
Method: POST
Description: Finds partitions of a set. A partition of a positive integer n is a way of writing n as a sum of positive integers. For example, the number 5 can be partitioned as 5, 4+1, 3+2, 3+1+1, 2+2+1, 2+1+1+1, or 1+1+1+1+1.
Request Body:
{
  "set": [element1, element2, ...],
  "number_of_partitions": n
}
Response:
{
  "partitions": [[subset1], [subset2], ...]
}


##Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.


##License
This project is licensed under the MIT License. See the LICENSE file for more details.
