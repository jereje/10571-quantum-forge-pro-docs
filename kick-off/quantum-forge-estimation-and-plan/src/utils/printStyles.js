// Print-specific utilities for PDF export
export const getPrintStyles = (isExportMode) => {
  if (!isExportMode) return {};
  
  return {
    // Force specific dimensions for print
    '@media print': {
      height: 'auto !important',
      minHeight: 'auto !important',
      maxHeight: 'none !important',
      overflow: 'visible !important'
    }
  };
};

export const getPrintFlexStyles = (isExportMode) => {
  if (!isExportMode) return {};
  
  return {
    height: 'auto',
    minHeight: 'auto',
    flex: 'none'
  };
};

export const getPrintGridStyles = (isExportMode) => {
  if (!isExportMode) return {};
  
  return {
    display: 'grid',
    height: 'auto',
    minHeight: 'auto'
  };
};

export const getPrintCalendarDayStyles = (isExportMode, baseStyles = {}) => {
  if (!isExportMode) return baseStyles;
  
  return {
    ...baseStyles,
    minHeight: '60px',
    height: 'auto',
    fontSize: '12px'
  };
};

export const getPrintWeekCalendarStyles = (isExportMode) => {
  if (!isExportMode) return {};
  
  return {
    padding: '4px',
    minHeight: '40px',
    height: 'auto'
  };
};