# Contributing to COS Website

Thank you for your interest in contributing to the COS Website project! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Issues
1. Check existing issues to avoid duplicates
2. Use the issue template if available
3. Provide clear description and steps to reproduce
4. Include screenshots for UI-related issues

### Suggesting Features
1. Open an issue with the "feature request" label
2. Describe the feature and its benefits
3. Discuss implementation approach if you have ideas

### Code Contributions

#### Setup for Development
1. Fork the repository
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/COS_website.git
   cd COS_website
   ```
3. Install development dependencies:
   ```bash
   npm install
   ```
4. Start local development server:
   ```bash
   npm start
   ```

#### Making Changes
1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes following the coding standards
3. Test your changes thoroughly
4. Commit with descriptive messages:
   ```bash
   git commit -m "Add: description of your changes"
   ```

#### Coding Standards

**HTML:**
- Use semantic HTML elements
- Maintain proper indentation (2 spaces)
- Include alt text for images
- Use meaningful class and id names

**CSS:**
- Follow BEM methodology when applicable
- Use consistent naming conventions
- Comment complex styling
- Maintain mobile-first responsive design

**JavaScript:**
- Use ES6+ features when appropriate
- Write clear, self-documenting code
- Add comments for complex logic
- Follow consistent formatting

#### Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify responsive design on different screen sizes
- Check accessibility with screen readers
- Validate HTML and CSS

#### Pull Request Process
1. Push your changes to your fork
2. Create a pull request to the main repository
3. Provide clear title and description
4. Link related issues if applicable
5. Wait for review and address feedback

## Project Structure

```
COS_website/
├── assets/
│   ├── css/          # Stylesheets
│   ├── js/           # JavaScript files
│   └── images/       # Images and icons
├── docs/             # Documentation
├── index.html        # Main HTML file
├── README.md         # Project overview
├── LICENSE          # License file
└── package.json     # Project metadata
```

## Style Guidelines

### Color Palette
- Primary: `#2c3e50` (dark navy)
- Accent: `#27ae60` (green)
- Background: `#f4f4f9` (light gray)
- Text: `#333` (dark gray)
- Light text: `#ecf0f1` (light gray)

### Typography
- Primary font: Arial, sans-serif
- Maintain consistent font sizes
- Use proper heading hierarchy (h1, h2, h3)

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## What We're Looking For

### Priority Areas
- Accessibility improvements
- Performance optimizations
- Cross-browser compatibility
- Mobile responsiveness
- Code documentation
- Additional energy-related content

### Content Contributions
- Research-based energy consumption data
- User-friendly explanations of energy concepts
- Additional appliance categories
- Energy-saving tips and recommendations

## Development Tools

### Recommended Extensions (VS Code)
- Live Server
- Prettier
- HTML CSS Support
- Auto Rename Tag
- Bracket Pair Colorizer

### Useful Commands
```bash
# Start development server
npm start

# Run local server with live reload
npm run dev

# Validate code (if linters are added)
npm run lint
```

## Getting Help

- Create an issue for questions
- Check existing documentation
- Review closed issues for similar problems
- Reach out to maintainers if needed

## Recognition

Contributors will be acknowledged in:
- README.md contributors section
- Release notes for significant contributions
- Project documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make this project better! 🚀