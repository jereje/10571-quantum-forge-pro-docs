# Quantum Forge Pro - Design & Discovery Presentation

An elegant React-based presentation built with Spectacle for the Quantum Forge Pro Design & Discovery project.

## Features

- **Professional Design**: Clean, modern design with a corporate blue color scheme
- **Smooth Animations**: Elegant transitions and appear effects for content
- **Comprehensive Content**: Covers the complete 3-week D&D plan
- **Responsive**: Works well on different screen sizes

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the presentation directory:
```bash
cd quantum-forge-presentation
```

2. Install dependencies:
```bash
npm install
```

### Running the Presentation

Start the development server:
```bash
npm start
```

The presentation will open in your default browser at `http://localhost:3000`.

### Navigation

- **Arrow Keys**: Navigate between slides
- **ESC**: Toggle overview mode
- **F**: Toggle fullscreen
- **S**: Toggle speaker notes (if available)

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `build` directory.

## Presentation Structure

1. **Title Slide**: Introduction to Quantum Forge Pro
2. **Executive Summary**: Overview of the engagement
3. **Timeline Slides**: Detailed week-by-week breakdown
   - Week 0: Project Start
   - Week 1: Discovery Focus
   - Week 2: Complete Discovery & Design
   - Week 3: Design Finalization
4. **Deliverables**: Comprehensive list of project outputs
5. **Team Structure**: Expert roles and responsibilities
6. **Key Milestones**: Critical checkpoints
7. **Next Steps**: Call to action

## Customization

The presentation theme can be customized in `src/theme/quantumTheme.js`. You can modify:
- Colors
- Fonts
- Spacing
- Font sizes

## Technologies Used

- React
- Spectacle (Presentation framework)
- Styled Components