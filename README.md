# Stock Price Tracker

This project is a Stock Price Tracker that fetches stock data from the Polygon API.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Getting Started

### Server

1. Clone the repository:

   ```bash
   git clone https://github.com/subrajeet-maharana/stock-tracker.git
   ```

2. Navigate to the Server Directory:

    ```bash
    cd stock-tracker/server
    ```

3. Install Dependencies:
    ```bash
    npm install
    ```

4. Create .env File with the following content:
    ```bash
    PORT=3001
    POLYGON_API_KEY=your_polygon_api_key
    ```
    Note: Replace your_polygon_api_key with your actual Polygon API key.

5. Run the Server:

    ```bash
    npm start
    ```
    Note: The server will be running at http://localhost:3001.


### Client
6. Navigate to the Client Directory:

    ```bash
    cd stock-tracker/client
    ```

7. Install Dependencies:

    ```bash
    npm install
    ```

8. Run the Client:

    ```bash
    npm start
    ```
    Note: The client will be running at http://localhost:3000.

- Open your browser and go to http://localhost:3000 to view the Stock Price Tracker.
- Note: Ensure you have replaced your_polygon_api_key with your actual Polygon API key. This project integrates with the Polygon API to fetch stock data.