import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear } from 'spectacle';

const ProjectPhases = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  const phases = [
    {
      phase: 'Phase 1',
      month: 'September 2025',
      title: 'Core Foundation',
      features: [
        'User Authentication & Login',
        'Dealer Selection System',
        'Real-time Dashboard',
        'Dealer Configuration',
        'Customer Search & Entry',
        'Vehicle Registration',
        'Multi-point Inspection',
        'Estimate Creation'
      ],
      color: '#7B61FF'
    },
    {
      phase: 'Phase 2',
      month: 'October 2025',
      title: 'Customer Contact',
      features: [
        'Additional Service Requests',
        'Parts Availability System',
        'Parts Pricing Management',
        'Advisor Review Process',
        'SMS Communication',
        'Customer Mobile UI',
        'Digital Signatures',
        'Estimate Approval Flow'
      ],
      color: '#00D9FF'
    },
    {
      phase: 'Phase 3',
      month: 'November 2025',
      title: 'Advanced Features',
      features: [
        'Estimate Rewinding',
        'Read-Only Estimate',
        'Manual Estimate Resend',
        'Real-time Notifications',
        'Notification History',
        'Template Management',
        'User Administration',
        'Two-Factor Authentication'
      ],
      color: '#4ECDC4'
    }
  ];

  return (
    <Slide backgroundColor="#0A0A0F" style={isExportMode ? { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' } : {}}>
      <FlexBox 
        height="100%"
        width="100%"
        flexDirection="column" 
        justifyContent="flex-start" 
        alignItems="center"
        style={isExportMode ? { 
          minHeight: '100vh', 
          height: '100vh',
          display: 'flex',
          position: 'relative',
          padding: '40px',
          margin: 'auto'
        } : { padding: '40px' }}
      >
        <Heading fontSize="h2" color="primary" fontWeight="bold" style={{ marginBottom: '48px', marginTop: '20px' }}>
          Implementation Phases
        </Heading>

        <FlexBox 
          width="100%" 
          maxWidth="1400px" 
          justifyContent="space-between" 
          alignItems="stretch" 
          style={{ 
            gap: '32px',
            flex: 1,
            alignItems: 'center'
          }}
        >
          {phases.map((phase, index) => (
            <Appear key={index}>
              <Box
                flex="1"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.9) 0%, rgba(10, 10, 15, 0.9) 100%)',
                  borderRadius: '20px',
                  border: `3px solid ${phase.color}40`,
                  padding: '32px',
                  boxShadow: `0 10px 30px ${phase.color}25`,
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${phase.color} 0%, ${phase.color}80 100%)`
                  }}
                />
                
                <Box style={{ marginBottom: '24px' }}>
                  <Text 
                    fontSize="h6" 
                    style={{ 
                      color: phase.color,
                      fontWeight: 'bold',
                      marginBottom: '8px'
                    }}
                  >
                    {phase.phase}
                  </Text>
                  <Heading fontSize="h4" color="primary" fontWeight="bold" style={{ marginBottom: '4px' }}>
                    {phase.title}
                  </Heading>
                  <Text fontSize="text" color="secondary" style={{ opacity: 0.8 }}>
                    {phase.month}
                  </Text>
                </Box>

                <Box style={{ marginBottom: '24px' }}>
                  {phase.features.map((feature, featureIndex) => (
                    <Text 
                      key={featureIndex}
                      fontSize="small" 
                      color="primary" 
                      style={{ 
                        marginBottom: '10px',
                        paddingLeft: '20px',
                        position: 'relative',
                        opacity: 0.9,
                        lineHeight: 1.4
                      }}
                    >
                      <span style={{ 
                        position: 'absolute', 
                        left: 0, 
                        color: phase.color,
                        fontSize: '14px'
                      }}>▸</span>
                      {feature}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Appear>
          ))}
        </FlexBox>
      </FlexBox>
    </Slide>
  );
};

export default ProjectPhases;