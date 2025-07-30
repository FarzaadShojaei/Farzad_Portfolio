# Portfolio Website - Farzaad Shojaei

A modern, responsive portfolio website built with React.js showcasing professional experience as a Software Development Engineer in Test (SDET) and QA Engineer.

## ✨ Features

- **Single Page Application** with smooth navigation
- **Responsive Design** that works on all devices
- **Modern UI/UX** with gradient backgrounds and glass-morphism effects
- **Animated Subtitle** with blinking text transitions
- **Interactive Sidebar** navigation
- **Blog Integration** - Direct link to Medium blog
- **Professional Sections**:
  - About/Home with animated introduction
  - Experience with company cards
  - Skills organized by categories
  - Education with detailed academic history
  - Contact with multiple communication channels

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `build` folder, ready for deployment.

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **React Icons** - Icon library
- **CSS3** - Modern styling with flexbox and grid
- **HTML5** - Semantic markup
- **JavaScript ES6+** - Modern JavaScript features

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## 🎨 Customization

### Personal Information

Update the following components with your personal information:

1. **Sidebar.js** - Name and title in the sidebar header
2. **Home.js** - Main title, subtitle animations, and about text
3. **Experience.js** - Work experience and company details
4. **Skills.js** - Technical skills and expertise
5. **Education.js** - Academic background
6. **Contact.js** - Contact information and social links

### Styling

The main styling is located in `src/App.css`. Key customization areas:
- **Color scheme** - Update gradient colors and theme colors
- **Typography** - Modify font families and sizes
- **Animations** - Adjust transition timing and effects
- **Layout** - Modify grid layouts and spacing

### Blog Link

Update the blog URL in `src/components/Sidebar.js`:
```javascript
window.open('https://medium.com/@yourusername', '_blank');
```

## 📦 Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── Home.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Education.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Deployment

This project can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the React app and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out through the contact information provided in the website.

---

**Made with ❤️ using React.js** 