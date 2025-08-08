import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear, Grid } from 'spectacle';

const DeliverableCard = ({ title, items, emoji }) => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  return (
    <Appear>
      <Box 
        style={{
          background: 'rgba(123, 97, 255, 0.05)',
          borderRadius: '16px',
          padding: '32px',
          height: '100%',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        className="styled-box"
      >
      <Box style={{
        width: '48px',
        height: '48px',
        background: 'linear-gradient(135deg, #5b507e 0%, #171717 100%)',
        borderRadius: '10px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
      }}>
        {emoji}
      </Box>
      <Heading fontSize="h5" color="primary" marginBottom="20px" fontWeight="bold" textAlign="left">
        {title}
      </Heading>
      {items.map((item, index) => (
        <Text key={index} fontSize="large" color="primary" marginBottom="8px" style={{ opacity: 0.8 }}>
          • {item}
        </Text>
      ))}
    </Box>
  </Appear>
  );
};

const Deliverables = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  return (
    <Slide backgroundColor="#0A0A0F">
      <FlexBox height="100%" flexDirection="column" padding={isExportMode ? "40px" : "80px"}>
        <Heading fontSize={isExportMode ? "h3" : "h2"} color="primary" fontWeight="bold" marginBottom={isExportMode ? "8px" : "16px"}>
          Project Deliverables
        </Heading>
        <Text fontSize={isExportMode ? "text" : "h5"} color="text" fontWeight="medium" style={{ opacity: 0.8, marginBottom: isExportMode ? '20px' : '48px' }}>
          Comprehensive documentation and assets for your success
        </Text>
        
        <FlexBox justifyContent="center" alignItems="center" flex={isExportMode ? "none" : 1} flexDirection="column" style={{ gap: isExportMode ? '32px' : '48px', width: '100%' }}>
          <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: isExportMode ? '24px' : '32px', alignItems: 'center' }}>
            <Grid gridTemplateColumns="repeat(3, 1fr)" style={{ gap: '24px', width: '140%', maxWidth: '1400px', margin: '0 auto' }}>
              <DeliverableCard 
                title="Discovery"
                emoji="🔍"
                items={[
                  'Functional Scope',
                  'User Personas',
                  'Competitor Analysis',
                  'Feature Prioritization'
                ]}
              />
              
              <DeliverableCard 
                title="Design"
                emoji="🎨"
                items={[
                  'User Flows',
                  'Interactive Prototypes',
                  'Style Guide'
                ]}
              />
              
              <DeliverableCard 
                title="Technical"
                emoji="⚙️"
                items={[
                  'Architecture Diagram',
                  'Object Model',
                  'Tech Stack',
                  'DevOps Strategy',
                  'Documentation'
                ]}
              />
            </Grid>
            
            <Box style={{ width: '140%', maxWidth: '1400px', margin: '0 auto' }}>
              <Appear>
                <Box 
                  style={{
                    background: 'linear-gradient(135deg, rgba(91, 80, 126, 0.1) 0%, rgba(23, 23, 23, 0.1) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '16px',
                    padding: '32px',
                    width: '100%'
                  }}
                >
                <Grid gridTemplateColumns="1fr 1fr" style={{ gap: '48px' }}>
                  <Box>
                    <Heading fontSize="h5" color="secondary" marginBottom="16px" fontWeight="bold" textAlign="left">
                      Project Planning
                    </Heading>
                    <Text fontSize="large" color="primary" marginBottom="8px">
                      • Detailed estimation in hours
                    </Text>
                    <Text fontSize="large" color="primary" marginBottom="8px">
                      • Execution plan & timeline
                    </Text>
                    <Text fontSize="large" color="primary">
                      • Resource allocation
                    </Text>
                  </Box>
                  <Box>
                    <Heading fontSize="h5" color="secondary" marginBottom="16px" fontWeight="bold" textAlign="left">
                      Risk Management
                    </Heading>
                    <Text fontSize="large" color="primary" marginBottom="8px">
                      • Identified risks & mitigations
                    </Text>
                    <Text fontSize="large" color="primary" marginBottom="8px">
                      • Project assumptions
                    </Text>
                    <Text fontSize="large" color="primary">
                      • Out-of-scope items
                    </Text>
                  </Box>
                </Grid>
                </Box>
              </Appear>
            </Box>
          </Box>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
};

export default Deliverables;