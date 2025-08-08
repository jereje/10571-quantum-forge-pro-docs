import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear, Grid } from 'spectacle';

const KeyMilestones = () => {
  return (
    <Slide backgroundColor="#0A0A0F">
      <FlexBox height="100%" flexDirection="column" padding="80px">
        <Box marginBottom="48px">
          <Heading fontSize="h2" color="primary" fontWeight="bold" marginBottom="16px">
            Critical Milestones
          </Heading>
          <Text fontSize="h5" color="text" fontWeight="medium" style={{ opacity: 0.8 }}>
            Key checkpoints for project success
          </Text>
        </Box>
        
        <FlexBox flex={1} width="100%" justifyContent="center" alignItems="center">
          <Box style={{ width: '70%', maxWidth: '900px' }}>
            <Appear>
            <Box 
              marginBottom="24px"
              style={{
                background: 'rgba(123, 97, 255, 0.05)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Grid gridTemplateColumns="240px 1fr" alignItems="center" style={{ gap: '32px' }}>
                <Box style={{
                  background: 'linear-gradient(135deg, rgba(91, 80, 126, 0.2) 0%, rgba(23, 23, 23, 0.2) 100%)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <Text fontSize="h4" color="secondary" fontWeight="bold">
                    Week 1
                  </Text>
                  <Text fontSize="text" color="secondary">
                    August 8
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ 3 discovery sessions complete
                  </Text>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ Initial flows and prototypes
                  </Text>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ Architecture design started
                  </Text>
                  <Text fontSize="text" color="primary">
                    ✓ User Personas in progress
                  </Text>
                </Box>
              </Grid>
            </Box>
          </Appear>
          
          <Appear>
            <Box 
              marginBottom="24px"
              style={{
                background: 'rgba(123, 97, 255, 0.05)',
                borderRadius: '16px',
                padding: '32px',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Grid gridTemplateColumns="240px 1fr" alignItems="center" style={{ gap: '32px' }}>
                <Box style={{
                  background: 'linear-gradient(135deg, #5b507e 0%, #171717 100%)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <Text fontSize="h4" color="white" fontWeight="bold">
                    Dev Start
                  </Text>
                  <Text fontSize="text" color="white">
                    August 11
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ All discovery sessions complete
                  </Text>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ Architecture documented
                  </Text>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ Object Model defined
                  </Text>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ Initial prototypes ready
                  </Text>
                  <Text fontSize="text" color="primary">
                    ✓ DevOps plan ready
                  </Text>
                </Box>
              </Grid>
            </Box>
          </Appear>
          
          <Appear>
            <Box 
              marginBottom="24px"
              style={{
                background: 'rgba(123, 97, 255, 0.05)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Grid gridTemplateColumns="240px 1fr" alignItems="center" style={{ gap: '32px' }}>
                <Box style={{
                  background: 'linear-gradient(135deg, #5b507e 0%, #171717 100%)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <Text fontSize="h4" color="white" fontWeight="bold">
                    Week 3
                  </Text>
                  <Text fontSize="text" color="white">
                    August 22
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ All D&D deliverables complete
                  </Text>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ Full estimation and project plan
                  </Text>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ Style Guide documented
                  </Text>
                  <Text fontSize="text" color="primary" marginBottom="4px">
                    ✓ Final prototypes
                  </Text>
                  <Text fontSize="text" color="primary">
                    ✓ Complete handoff
                  </Text>
                </Box>
              </Grid>
            </Box>
            </Appear>
          </Box>
        </FlexBox>
     
      </FlexBox>
    </Slide>
  );
};

export default KeyMilestones;