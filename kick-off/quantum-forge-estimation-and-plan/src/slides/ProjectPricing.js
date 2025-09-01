import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear } from 'spectacle';

const ProjectPricing = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  const monthlyPricing = [
    { month: 'August 2025', phase: 'Design & Discovery', amount: 25415, color: '#FFD93D' },
    { month: 'September 2025', phase: 'Phase 1 Delivery', amount: 15750, color: '#7B61FF' },
    { month: 'October 2025', phase: 'Phase 2 Delivery', amount: 15750, color: '#00D9FF' },
    { month: 'November 2025', phase: 'Phase 3 Delivery', amount: 15750, color: '#4ECDC4' }
  ];

  const totalAmount = 72665;
  const previousEstimate = 55305;
  const increase = totalAmount - previousEstimate;
  const increasePercentage = ((increase / previousEstimate) * 100).toFixed(1);

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
          padding: '40px',
          margin: 'auto'
        } : { padding: '40px' }}
      >
        <Heading fontSize="h2" color="primary" fontWeight="bold" style={{ marginBottom: '48px' }}>
          Project Investment
        </Heading>

        <Box width="100%" maxWidth="1200px">
          <FlexBox justifyContent="space-between" style={{ gap: '24px', marginBottom: '40px' }}>
            {monthlyPricing.map((month, index) => (
              <Appear key={index}>
                <Box
                  flex="1"
                  style={{
                    background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.9) 0%, rgba(10, 10, 15, 0.9) 100%)',
                    borderRadius: '16px',
                    border: `2px solid ${month.color}40`,
                    padding: '32px',
                    textAlign: 'center',
                    boxShadow: `0 8px 24px ${month.color}20`,
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
                      background: `linear-gradient(90deg, ${month.color} 0%, ${month.color}80 100%)`
                    }}
                  />
                  
                  <Text fontSize="h6" style={{ color: month.color, fontWeight: 'bold', marginBottom: '8px' }}>
                    {month.month}
                  </Text>
                  <Text fontSize="small" color="secondary" style={{ marginBottom: '16px', opacity: 0.8 }}>
                    {month.phase}
                  </Text>
                  <Heading fontSize="h3" color="primary" fontWeight="bold">
                    ${month.amount.toLocaleString()}
                  </Heading>
                </Box>
              </Appear>
            ))}
          </FlexBox>

          <Appear>
            <Box
              style={{
                background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.2) 0%, rgba(0, 217, 255, 0.2) 100%)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                marginBottom: '32px'
              }}
            >
              <Text fontSize="h5" color="secondary" style={{ marginBottom: '8px' }}>
                Total Investment
              </Text>
              <Heading fontSize="h1" color="primary" fontWeight="bold">
                ${totalAmount.toLocaleString()}
              </Heading>
            </Box>
          </Appear>

          <Appear>
            <FlexBox justifyContent="center" alignItems="center" style={{ gap: '40px' }}>
              <Box
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '20px 32px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Text fontSize="small" color="secondary" style={{ marginBottom: '4px' }}>
                  Previous Estimate
                </Text>
                <Text fontSize="h4" color="primary" style={{ opacity: 0.7 }}>
                  ${previousEstimate.toLocaleString()}
                </Text>
              </Box>

              <Box
                style={{
                  background: 'linear-gradient(135deg, rgba(107, 122, 255, 0.2) 0%, rgba(107, 119, 255, 0.1) 100%)',
                  borderRadius: '12px',
                  padding: '20px 32px',
                  border: '1px solid rgba(107, 117, 255, 0.3)'
                }}
              >
                <Text fontSize="small" color="secondary" style={{ marginBottom: '4px' }}>
                  Increase
                </Text>
                <Text fontSize="h4" color="primary" fontWeight="bold">
                  +{increasePercentage}%
                </Text>
              </Box>
            </FlexBox>
          </Appear>

          <Appear>
            <Box 
              marginTop="32px"
              style={{
                textAlign: 'center',
                opacity: 0.7
              }}
            >
              <Text fontSize="small" color="secondary" style={{ fontStyle: 'italic' }}>
                Investment includes all development, project management, architecture support, and UX design
              </Text>
            </Box>
          </Appear>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default ProjectPricing;