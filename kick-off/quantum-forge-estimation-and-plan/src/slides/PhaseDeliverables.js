import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear } from 'spectacle';

const PhaseDeliverables = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  const deliverables = [
    {
      phase: 'Phase 1 - Core Foundation',
      month: 'September 2025',
      color: '#7B61FF',
      deliverables: [
        {
          title: 'Authentication System',
          description: 'Secure login with role-based access and multi-dealer support'
        },
        {
          title: 'Real-time Dashboard',
          description: 'Live status updates with sortable/filterable estimate and inspection views'
        },
        {
          title: 'Customer Management',
          description: 'Search, and create customer profiles with vehicle data'
        },
        {
          title: 'Multi-point Inspection',
          description: 'Template-driven vehicle inspection with real-time collaboration'
        },
        {
          title: 'Estimate Creation',
          description: 'Standalone estimates for phone quotes and walk-ins'
        }
      ]
    },
    {
      phase: 'Phase 2 - Customer Contact',
      month: 'October 2025',
      color: '#00D9FF',
      deliverables: [
        {
          title: 'Service Management',
          description: 'Add additional services and Items on Estimate-only'
        },
        {
          title: 'Parts System',
          description: 'Availability tracking and pricing for items'
        },
        {
          title: 'SMS Communication',
          description: 'Send estimate SMS via Twilio integration'
        },
        {
          title: 'Customer Mobile UI',
          description: 'Responsive interface for estimate review and approval'
        },
        {
          title: 'Digital Signatures',
          description: 'Secure signature capture with terms acceptance'
        }
      ]
    },
    {
      phase: 'Phase 3 - Advanced Features',
      month: 'November 2025',
      color: '#4ECDC4',
      deliverables: [
        {
          title: 'Estimate Rewinding',
          description: 'Update estimates after partial approval with new items'
        },
        {
          title: 'Real-time Notifications',
          description: 'Role-specific alerts for important estimate events'
        },
        {
          title: 'Template Management',
          description: 'Customizable inspection templates per dealer'
        },
        {
          title: 'User Administration',
          description: 'Comprehensive user and dealer management tools'
        },
        {
          title: 'Two-Factor Authentication',
          description: 'Enhanced security with TOTP-based 2FA'
        }
      ]
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
        <Heading fontSize="h4" color="primary" fontWeight="bold" style={{ marginBottom: '24px' }}>
          Phase Deliverables
        </Heading>

        <Box width="100%" maxWidth="1400px">
          <FlexBox flexDirection="column" style={{ gap: '20px' }}>
            {deliverables.map((phase, phaseIndex) => (
              <Appear key={phaseIndex}>
                <Box>
                  <FlexBox alignItems="center" style={{ marginBottom: '12px' }}>
                    <Text fontSize="h6" style={{ color: phase.color, fontWeight: 'bold', marginRight: '10px' }}>
                      {phase.phase}
                    </Text>
                    <Text fontSize="small" color="secondary" style={{ opacity: 0.8 }}>
                      {phase.month}
                    </Text>
                  </FlexBox>

                  <FlexBox flexWrap="wrap" style={{ gap: '10px' }}>
                    {phase.deliverables.map((deliverable, delIndex) => (
                      <Box
                        key={delIndex}
                        style={{
                          flex: '1 1 calc(50% - 5px)',
                          minWidth: '260px',
                          background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.8) 0%, rgba(10, 10, 15, 0.8) 100%)',
                          borderRadius: '8px',
                          border: `1px solid ${phase.color}30`,
                          padding: '10px 14px',
                          borderLeft: `3px solid ${phase.color}`,
                          transition: 'transform 0.2s ease',
                          cursor: 'default'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      >
                        <Text 
                          fontSize="text" 
                          color="primary" 
                          fontWeight="bold" 
                          style={{ marginBottom: '2px', fontSize: '16px' }}
                        >
                          {deliverable.title}
                        </Text>
                        <Text 
                          fontSize="small" 
                          color="primary" 
                          style={{ opacity: 0.8, lineHeight: 1.2, fontSize: '13px' }}
                        >
                          {deliverable.description}
                        </Text>
                      </Box>
                    ))}
                  </FlexBox>
                </Box>
              </Appear>
            ))}
          </FlexBox>

          <Appear>
            <Box 
              marginTop="20px"
              style={{
                textAlign: 'center',
                padding: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Text fontSize="small" color="secondary" style={{ fontStyle: 'italic', opacity: 0.7, fontSize: '12px' }}>
                All deliverables include comprehensive documentation, testing, and deployment support
              </Text>
            </Box>
          </Appear>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default PhaseDeliverables;