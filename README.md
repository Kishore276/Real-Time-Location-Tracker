# Real-Time Location Tracker

A Node.js web application for real-time location tracking and mapping using Express.js, Socket.io, and interactive maps. This application allows users to share their live location and view others' locations in real-time on an interactive map interface.

## Features

- 🌍 Real-time location sharing
- 🗺️ Interactive map interface
- 🚀 WebSocket-based communication
- 📱 Responsive design
- 🚶‍♂️ Multiple transport mode icons (walking, bus, car, motorcycle)
- 🔄 Live route tracking

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript, EJS
- **Real-time Communication**: Socket.io
- **Maps**: Interactive map integration
- **Development**: Nodemon for hot reloading

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Kishore276/Real-Time-Location-Tracker.git
cd try_node
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Open the application in your web browser
2. Allow location permissions when prompted
3. Your location will be shared in real-time with other connected users
4. View other users' locations on the interactive map
5. Different transport modes are represented with appropriate icons

## Project Structure

```
try_node/
├── index.js              # Main server file
├── package.json          # Project dependencies and scripts
├── requirements.txt      # Python dependencies (if needed)
├── views/
│   └── index.ejs         # Main template file
├── public/
│   ├── css/
│   │   └── style.css     # Stylesheets
│   └── js/
│       └── script.js     # Client-side JavaScript
└── new_maps/
    ├── *.html            # Various map interface files
    └── *-icon.png        # Transport mode icons
```

## API Endpoints

- `GET /` - Main application page

## Socket Events

- `send-location` - Client sends location data
- `recive-location` - Server broadcasts location to all clients
- `user-disconnected` - Handle user disconnection

## License

This project is licensed under the MIT License.

## Repository

🔗 **GitHub Repository**: [https://github.com/Kishore276/Real-Time-Location-Tracker.git](https://github.com/Kishore276/Real-Time-Location-Tracker.git)

## Developed By

**G.Yuva Kishore Reddy**  
Passionate about AI, automation, and building impactful tech solutions.

## Contact

📧 **Email**: g.yuvakishorereddy@gmail.com   
📱 **WhatsApp Channel**: https://whatsapp.com/channel/0029Vb3la9V7NoZtA1GUI00d

---

⭐ **Star this repo if you found it helpful!**

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Thanks to the open-source community for the amazing libraries
- Special thanks to contributors and testers

---

*Happy Coding! 🚀*