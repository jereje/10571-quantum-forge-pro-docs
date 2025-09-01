import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear, UnorderedList, ListItem } from 'spectacle';

const ExecutiveSummary = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  return (
    <Slide backgroundColor="#0A0A0F">
      <FlexBox height="100%" flexDirection="column" padding={isExportMode ? "40px" : "80px"}>
        <Heading fontSize="h2" color="primary" fontWeight="bold" marginBottom={isExportMode ? "20px" : "48px"}>
          Executive Summary
        </Heading>
        
        <Box flex={isExportMode ? "none" : 1}>
          <Text fontSize={isExportMode ? "text" : "h5"} color="text" fontWeight="medium" lineHeight="relaxed" marginBottom={isExportMode ? "16px" : "40px"}>
            A comprehensive 3-week Design & Discovery engagement to define and architect your product vision
          </Text>
          
          <FlexBox justifyContent="center" alignItems={isExportMode ? "flex-start" : "center"} style={isExportMode ? { height: 'auto' } : {}}>
            <Box style={{ 
              background: 'linear-gradient(135deg, rgba(91, 80, 126, 0.05) 0%, rgba(23, 23, 23, 0.05) 100%)',
              borderRadius: '16px',
              padding: '48px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              width: '80%',
              maxWidth: '900px',
              marginTop: isExportMode ? '0px' : '40px',
              height: isExportMode ? 'auto' : undefined
            }}>
            <UnorderedList style={{ margin: '0px' }}>
              <Appear>
                <ListItem>
                  <Text fontSize="text" color="text" lineHeight="relaxed">
                    <strong style={{ color: '#00D9FF' }}>Deep Functional Discovery</strong>
                    <br />
                    <span style={{ opacity: 0.8 }}>Collaborative sessions to understand your business needs</span>
                  </Text>
                </ListItem>
              </Appear>
              
              <Appear>
                <ListItem style={{ marginTop: '24px' }}>
                  <Text fontSize="text" color="text" lineHeight="relaxed">
                    <strong style={{ color: '#00D9FF' }}>User-Centered Design</strong>
                    <br />
                    <span style={{ opacity: 0.8 }}>User Flows, Prototypes, and Style Guide</span>
                  </Text>
                </ListItem>
              </Appear>
              
              <Appear>
                <ListItem style={{ marginTop: '24px' }}>
                  <Text fontSize="text" color="text" lineHeight="relaxed">
                    <strong style={{ color: '#00D9FF' }}>Scalable Architecture</strong>
                    <br />
                    <span style={{ opacity: 0.8 }}>Architecture, Object Model, and Tech Stack</span>
                  </Text>
                </ListItem>
              </Appear>
              
              <Appear>
                <ListItem style={{ marginTop: '24px' }}>
                  <Text fontSize="text" color="text" lineHeight="relaxed">
                    <strong style={{ color: '#00D9FF' }}>Complete Roadmap</strong>
                    <br />
                    <span style={{ opacity: 0.8 }}>Detailed Estimation and Execution Plan</span>
                  </Text>
                </ListItem>
              </Appear>
            </UnorderedList>
            </Box>
          </FlexBox>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default ExecutiveSummary;