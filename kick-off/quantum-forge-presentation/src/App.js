import React from 'react';
import {
  Deck,
  Box,
  FlexBox,
  FullScreen,
  Progress,
  DefaultTemplate
} from 'spectacle';
import { quantumTheme } from './theme/quantumTheme';
import wpLogo from './wp_logo.png';

// Import slide components
import TitleSlide from './slides/TitleSlide';
import ExecutiveSummary from './slides/ExecutiveSummary';
import ScheduleCalendar from './slides/ScheduleCalendar';
import TimelineWeek0 from './slides/TimelineWeek0';
import TimelineWeek1 from './slides/TimelineWeek1';
import TimelineWeek2 from './slides/TimelineWeek2';
import TimelineWeek3 from './slides/TimelineWeek3';
import Deliverables from './slides/Deliverables';
import KeyMilestones from './slides/KeyMilestones';

const CustomTemplate = ({ slideNumber, numberOfSlides }) => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width="100%"
    padding="20px 40px"
    backgroundColor="rgba(10, 10, 15, 0.9)"
  >
    <Box>
      <FullScreen />
    </Box>
    <Box flex={1} margin="0 20px">
      <Progress />
    </Box>
    <Box>
      <img 
        src={wpLogo} 
        alt="WhitePrompt Logo" 
        style={{ 
          height: '30px', 
          objectFit: 'contain',
          opacity: 0.8
        }} 
      />
    </Box>
  </FlexBox>
);

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const exportMode = urlParams.get('export') !== null || urlParams.get('exportMode') !== null;

  // Set export mode on body for CSS targeting
  React.useEffect(() => {
    if (exportMode) {
      document.body.setAttribute('data-export-mode', 'true');
    }
    return () => {
      document.body.removeAttribute('data-export-mode');
    };
  }, [exportMode]);

  console.log('To export as PDF: Add ?export or ?exportMode=true to the URL');

  return (
    <Deck 
      theme={quantumTheme}
      template={exportMode ? <DefaultTemplate /> : <CustomTemplate />}
    >
      <TitleSlide />
      <ExecutiveSummary />
      <ScheduleCalendar />
      <TimelineWeek0 />
      <TimelineWeek1 />
      <TimelineWeek2 />
      <TimelineWeek3 />
      <Deliverables />
      <KeyMilestones />
    </Deck>
  );
}

export default App;