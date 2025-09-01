import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear } from 'spectacle';

const ScopeOverview = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  const scopeCategories = [
    {
      title: 'Authentication & Access',
      items: ['User Login', 'Multi-Dealer Support', 'Role-Based Access', 'Two-Factor Authentication'],
      color: '#7B61FF'
    },
    {
      title: 'Inspection Management',
      items: ['Dashboard', 'Customer Search', 'Vehicle Entry', 'Multi-point Inspection', 'Estimate Creation'],
      color: '#00D9FF'
    },
    {
      title: 'Service Management',
      items: ['Additional Services', 'Parts Availability', 'Advisor Review', 'Estimate Rewinding'],
      color: '#FF6B6B'
    },
    {
      title: 'Customer Communication',
      items: ['SMS Delivery', 'Mobile UI', 'Digital Signatures', 'Status Tracking'],
      color: '#4ECDC4'
    },
    {
      title: 'Administration',
      items: ['Dealer Settings', 'Template Management', 'User Management', 'Real-time Notifications'],
      color: '#FFD93D'
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
        <Heading fontSize="h2" color="primary" fontWeight="bold" style={{ marginBottom: '48px' }}>
          Project Scope Overview
        </Heading>

        <Box width="100%" maxWidth="1400px">
          <FlexBox flexWrap="wrap" justifyContent="center" style={{ gap: '24px' }}>
            {scopeCategories.map((category, index) => (
              <Appear key={index}>
                <Box
                  style={{
                    background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.8) 0%, rgba(10, 10, 15, 0.8) 100%)',
                    borderRadius: '16px',
                    border: `2px solid ${category.color}30`,
                    padding: '32px',
                    width: '380px',
                    height: '280px',
                    boxShadow: `0 8px 24px ${category.color}20`,
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Heading 
                    fontSize="h5" 
                    color="primary" 
                    fontWeight="bold" 
                    style={{ 
                      marginBottom: '20px',
                      color: category.color 
                    }}
                  >
                    {category.title}
                  </Heading>
                  <Box>
                    {category.items.map((item, itemIndex) => (
                      <Text 
                        key={itemIndex}
                        fontSize="text" 
                        color="primary" 
                        style={{ 
                          marginBottom: '8px',
                          opacity: 0.9,
                          paddingLeft: '16px',
                          position: 'relative'
                        }}
                      >
                        <span style={{ 
                          position: 'absolute', 
                          left: 0, 
                          color: category.color 
                        }}>•</span>
                        {item}
                      </Text>
                    ))}
                  </Box>
                </Box>
              </Appear>
            ))}
          </FlexBox>

          <Appear>
            <Box 
              marginTop="48px"
              style={{
                background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.2) 0%, rgba(0, 217, 255, 0.2) 100%)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Text fontSize="h4" color="primary" fontWeight="bold">
                Total Scope: 620 Development Hours
              </Text>
              <Text fontSize="text" color="secondary" style={{ marginTop: '8px' }}>
                Delivered across 3 phases over 4 months
              </Text>
            </Box>
          </Appear>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default ScopeOverview;