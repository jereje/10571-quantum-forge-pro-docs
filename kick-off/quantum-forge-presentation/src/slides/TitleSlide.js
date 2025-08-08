import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear } from 'spectacle';
import quantumLogo from '../quantum_logo.avif';

const TitleSlide = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  return (
    <Slide backgroundColor="#0A0A0F" style={isExportMode ? { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' } : {}}>
      <FlexBox 
        height="100%"
        width="100%"
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center"
        style={isExportMode ? { 
          minHeight: '100vh', 
          height: '100vh',
          display: 'flex',
          position: 'relative',
          padding: 0,
          margin: 'auto'
        } : {}}
      >
        <Box 
          width="100%" 
          maxWidth="1200px" 
          padding="80px 40px"
          style={{
            background: 'linear-gradient(135deg, rgba(91, 80, 126, 0.1) 0%, rgba(23, 23, 23, 0.1) 100%)',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(91, 80, 126, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '48px'
          }}>
            <Box style={{
              width: '80px',
              height: '80px',
              background: '#171717',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
              boxShadow: '0 4px 15px rgba(91, 80, 126, 0.4)'
            }}>
              <img 
                src={quantumLogo} 
                alt="Quantum Logo" 
                style={{ 
                  width: '72px', 
                  height: '72px', 
                  objectFit: 'contain' 
                }} 
              />
            </Box>
            <Heading 
              fontSize="h1" 
              color="primary" 
              fontWeight="extrabold"
              style={{ letterSpacing: '-0.03em', margin: '0px' }}
            >
              Quantum Forge Pro
            </Heading>
          </Box>
          
 
          
          <Appear>
            <Text 
              fontSize="h3" 
              color="secondary" 
              textAlign="center" 
              fontWeight="medium"
              style={{ marginBottom: '24px' }}
            >
              Design & Discovery
            </Text>
          </Appear>

          
          <Appear>
            <Box 
              marginTop="48px"
              style={{ 
                display: 'flex', 
                justifyContent: 'center',
                gap: '24px'
              }}
            >
              <Box style={{
                padding: '12px 24px',
                background: 'rgba(123, 97, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <Text fontSize="small" color="primary" style={{ opacity: 0.9 }}>
                  3-Week Engagement
                </Text>
              </Box>
              <Box style={{
                padding: '12px 24px',
                background: 'rgba(123, 97, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <Text fontSize="small" color="primary" style={{ opacity: 0.9 }}>
                  Full D&D Process
                </Text>
              </Box>
            </Box>
          </Appear>
        </Box>
        
      </FlexBox>
    </Slide>
  );
};

export default TitleSlide;