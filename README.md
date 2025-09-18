# Appliance Energy Website

A modern, responsive website providing insights into appliance energy consumption, with a focus on televisions and other household appliances.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Single Page Application**: Smooth navigation between sections without page reloads
- **Modern UI**: Clean, professional design with an intuitive interface
- **Energy Insights**: Information about television and appliance energy consumption
- **Interactive Navigation**: Dynamic page switching with active state management

## 🚀 Demo

[Live Demo](https://danlucy.github.io/COS_website/) *(Replace with your actual GitHub Pages URL)*

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Danlucy/COS_website.git
   cd COS_website
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` if using a local server
   - Or directly open the `index.html` file in your browser

## 📁 Project Structure

```
COS_website/
│
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── script.js           # JavaScript functionality
├── PowerIcon.png       # Logo/icon image
├── README.md           # Project documentation
├── LICENSE             # License file
└── package.json        # Project metadata
```

## 🎨 Customization

### Adding New Pages
1. Add a new section in `index.html`:
   ```html
   <section id="new-page" class="page">
     <h1>Your New Page</h1>
     <p>Your content here...</p>
   </section>
   ```

2. Add navigation link:
   ```html
   <li><a href="#" id="nav-new-page" onclick="showPage('new-page')">New Page</a></li>
   ```

### Styling
- Modify `style.css` to change colors, fonts, and layout
- The color scheme uses:
  - Primary: `#2c3e50` (dark navy)
  - Accent: `#27ae60` (green)
  - Background: `#f4f4f9` (light gray)

### Content
- Update the Lorem ipsum text in `index.html` with your actual content
- Replace `PowerIcon.png` with your own logo
- Modify the footer information

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select source: Deploy from a branch
4. Choose `main` branch and `/ (root)`
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Other Hosting Options
- **Netlify**: Drag and drop your project folder
- **Vercel**: Connect your GitHub repository
- **GitHub Codespaces**: Use for development and testing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Daniel Ong Zhi En**
- GitHub: [@Danlucy](https://github.com/Danlucy)

## 🙏 Acknowledgments

- Code generated with assistance from GenAI
- Icons and design inspiration from modern web practices
- Built with vanilla HTML, CSS, and JavaScript for maximum compatibility

## 📞 Support

If you have any questions or need help with setup, please [open an issue](https://github.com/Danlucy/COS_website/issues) on GitHub.

---

⭐ Don't forget to give this project a star if you found it helpful!