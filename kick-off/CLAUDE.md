# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains the Design & Discovery materials for the Quantum Forge Pro project, including:
- A React-based presentation built with Spectacle
- Project planning documents (SOW, D&D plans, tasks)
- A 3-week design and discovery engagement timeline

## Common Commands

### Presentation App (quantum-forge-presentation/)

```bash
# Navigate to presentation directory
cd quantum-forge-presentation

# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests (React testing)
npm test
```

## Architecture & Structure

### Presentation Application
- **Framework**: React 18.2 with Spectacle presentation library
- **Styling**: Styled Components
- **Build Tool**: Create React App (react-scripts)
- **Structure**:
  - `src/App.js`: Main deck component that orchestrates slides
  - `src/slides/`: Individual slide components (TimelineWeek0-3, Deliverables, etc.)
  - `src/theme/quantumTheme.js`: Centralized theme configuration
  - Each slide is a self-contained React component

### Key Project Context
- **Project Type**: Design & Discovery engagement for enterprise software
- **Timeline**: 3-week structured engagement (Week 0-3)
- **Deliverables**: User personas, object model, architecture design, mockups, style guide, estimation
- **Meeting Structure**: Multiple discovery sessions per week with parallel design work

### Navigation Controls
- Arrow Keys: Navigate slides
- ESC: Toggle overview mode
- F: Toggle fullscreen
- S: Toggle speaker notes

## Development Notes
- The presentation uses Spectacle v9.6.0 for slide functionality
- No linting or formatting scripts are configured in package.json
- Test runner is available but no tests are currently implemented
- The project follows standard Create React App conventions