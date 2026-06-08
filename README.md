# 3D Shirt Customizer

## Overview

3D Shirt Customizer is an interactive web application that allows users to design and customize 3D shirt models in real-time. It integrates with Google's Gemini API to generate custom textures and logos, offering an advanced AI-powered design workflow.

## Architecture

The project follows a standard client-server architecture:
- **Client**: A frontend built with React and Vite, responsible for rendering the 3D environment and providing the user interface for customization.
- **Server**: An Express.js backend that securely interfaces with the Google Gemini API to process image generation requests.

## Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Three.js / React Three Fiber (for 3D rendering)
- Framer Motion

### Backend
- Node.js
- Express.js
- @google/genai SDK (gemini-3.1-flash-image model)

## Prerequisites

Before running the application, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (Node Package Manager)
- A valid Google Gemini API Key with access to the `gemini-3.1-flash-image` model.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/deepanmpc/3D-shirt_customizer.git
cd 3D-shirt_customizer
```

2. Install client dependencies:
```bash
cd client
npm install
cd ..
```

3. Install server dependencies:
```bash
cd server
npm install
cd ..
```

## Environment Configuration

You must provide your Gemini API key to the backend server. 

1. Navigate to the `server` directory.
2. Create a file named `.env`.
3. Add your API key to the file as follows:

```env
GEMINI_API_KEY="your_api_key_here"
```

## Running the Application

To start the application, you need to run both the frontend and backend servers concurrently in separate terminal instances.

### Starting the Backend Server
```bash
cd server
npm start
```
The backend server will start on `http://localhost:8080`.

### Starting the Frontend Client
```bash
cd client
npm run dev
```
The client will provide a local URL (e.g., `http://localhost:5173`) which you can open in your web browser to view the application.

## Usage

1. Open the application in your web browser.
2. Select base colors for the 3D shirt model.
3. Use the AI prompt interface to request a custom pattern or logo.
4. The application will contact the Gemini API to generate the requested design and project it onto the 3D model.
5. You can download the final customized shirt design directly from the interface.

## License

This project is open-source and available under the ISC License.
