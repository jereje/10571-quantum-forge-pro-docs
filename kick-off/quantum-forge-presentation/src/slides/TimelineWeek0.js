import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear, Grid } from 'spectacle';

const TimelineWeek0 = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  return (
    <Slide backgroundColor="#0A0A0F">
      <FlexBox height="100%" flexDirection="column" alignItems="center" padding="80px">
        <Box style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box marginBottom="32px">
            {/* Calendar Week Header */}
            <Grid gridTemplateColumns="repeat(7, 1fr)" style={{ gap: isExportMode ? '2px' : '4px', marginBottom: isExportMode ? '16px' : '24px' }}>
              {[
                { day: 'Mon', date: '28', month: 'Jul' },
                { day: 'Tue', date: '29' },
                { day: 'Wed', date: '30' },
                { day: 'Thu', date: '31' },
                { day: 'Fri', date: '1', month: 'Aug', isHighlight: true },
                { day: 'Sat', date: '2' },
                { day: 'Sun', date: '3' }
              ].map((item, idx) => (
                <Box 
                  key={idx}
                  style={{
                    background: item.isHighlight ? 'linear-gradient(135deg, #5b507e 0%, #171717 100%)' : 'rgba(255, 255, 255, 0.05)',
                    border: item.isHighlight ? '2px solid rgba(255, 255, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '8px 4px',
                    textAlign: 'center'
                  }}
                >
                  <Text fontSize="10px" color={item.isHighlight ? 'white' : 'secondary'} fontWeight="bold">
                    {item.day}
                  </Text>
                  <Text fontSize="14px" color={item.isHighlight ? 'white' : 'primary'} fontWeight="bold">
                    {item.date}
                  </Text>
                  {item.month && (
                    <Text fontSize="9px" color={item.isHighlight ? 'white' : 'tertiary'}>
                      {item.month}
                    </Text>
                  )}
                </Box>
              ))}
            </Grid>
            
            <Heading fontSize="h2" color="primary" fontWeight="bold" marginBottom="8px" textAlign="left">
              Week 0: Project Start
            </Heading>
            <Text fontSize="h5" color="secondary" fontWeight="medium">
              Friday, August 1
            </Text>
          </Box>
          
          <FlexBox justifyContent="center" alignItems="center" flex={1} flexDirection="column" style={{ gap: '32px', width: '100%' }}>
            <Box style={{ width: '100%', maxWidth: '720px' }}>
              <Appear>
                <Box 
                  style={{
                    background: 'rgba(123, 97, 255, 0.05)',
                    borderRadius: '16px',
                    padding: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  className="styled-box"
                >
                <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <Box style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #5b507e 0%, #171717 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}>
                    1
                  </Box>
                  <Heading fontSize="h4" color="primary">
                    Kickoff Meeting
                  </Heading>
                </Box>
                <Text fontSize="small" color="tertiary" fontWeight="semibold" marginBottom="12px">
                  1 hour session
                </Text>
                <Text fontSize="text" color="text" lineHeight="relaxed">
                  Present the Team. Present deliverables. Project schedule and Project roadmap definition.
                </Text>
                </Box>
              </Appear>
            </Box>
            
            <Box style={{ width: '100%', maxWidth: '720px' }}>
              <Appear>
                <Box 
                  style={{
                    background: 'linear-gradient(135deg, #5b507e 0%, #171717 100%)',
                    borderRadius: '16px',
                    padding: '32px',
                    color: 'white',
                    width: '100%'
                  }}
                >
                  <Text fontSize="h5" fontWeight="bold" marginBottom="16px">
                    Parallel Work Begins:
                  </Text>
                  <Grid gridTemplateColumns="1fr 1fr" gridGap={24}>
                    <Text fontSize="text">
                      • Analyzing context information
                    </Text>
                    <Text fontSize="text">
                      • Starting competitor analysis
                    </Text>
                  </Grid>
                </Box>
              </Appear>
            </Box>
          </FlexBox>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default TimelineWeek0;