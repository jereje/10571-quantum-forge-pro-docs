import React from 'react';
import { getPrintWeekCalendarStyles, getPrintFlexStyles } from '../utils/printStyles';

// Wrapper component for timeline weeks to handle PDF export styling
export const TimelineWeekWrapper = ({ children, isExportMode }) => {
  return React.Children.map(children, child => {
    if (!child) return null;
    
    // Add export mode prop to all timeline week components
    return React.cloneElement(child, {
      ...child.props,
      isExportMode
    });
  });
};

// HOC to wrap timeline week components with export mode handling
export const withExportMode = (Component) => {
  return (props) => {
    const isExportMode = window.location.search.includes('exportMode=true');
    return <Component {...props} isExportMode={isExportMode} />;
  };
};