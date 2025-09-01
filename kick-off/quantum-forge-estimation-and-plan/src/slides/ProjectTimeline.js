import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear } from 'spectacle';

const ProjectTimeline = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  const months = [
    {
      month: 'September 2025',
      phase: 'Phase 1 - Core Foundation',
      color: '#7B61FF',
      activities: [
        { name: 'Authentication System', hours: 24 },
        { name: 'Dashboard & Navigation', hours: 56 },
        { name: 'Customer Management', hours: 56 },
        { name: 'Multi-point Inspection', hours: 64 }
      ],
      totalHours: 200,
      support: ['PM (40h)', 'Architecture (40h)', 'UX (10h)']
    },
    {
      month: 'October 2025',
      phase: 'Phase 2 - Customer Contact',
      color: '#00D9FF',
      activities: [
        { name: 'Service Management', hours: 64 },
        { name: 'Parts System', hours: 24 },
        { name: 'SMS Communication', hours: 32 },
        { name: 'Customer Mobile UI', hours: 80 }
      ],
      totalHours: 200,
      support: ['PM (40h)', 'Architecture (40h)', 'UX (10h)']
    },
    {
      month: 'November 2025',
      phase: 'Phase 3 - Advanced Features',
      color: '#4ECDC4',
      activities: [
        { name: 'Estimate Rewinding', hours: 24 },
        { name: 'Notifications System', hours: 48 },
        { name: 'Administration Tools', hours: 104 },
        { name: 'Two-Factor Auth', hours: 24 }
      ],
      totalHours: 200,
      support: ['PM (40h)', 'Architecture (40h)', 'UX (10h)']
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
          Project Timeline
        </Heading>

        <Box width="100%" maxWidth="1400px">
          <Box style={{ width: '100%' }}>
            {months.map((month, index) => (
              <Appear key={index} style={{ width: '100%', display: 'block' }}>
                <Box
                  style={{
                    background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.9) 0%, rgba(10, 10, 15, 0.9) 100%)',
                    borderRadius: '16px',
                    border: `2px solid ${month.color}40`,
                    padding: '24px',
                    boxShadow: `0 8px 24px ${month.color}20`,
                    backdropFilter: 'blur(10px)',
                    width: '100%',
                    marginBottom: index < months.length - 1 ? '24px' : 0
                  }}
                >
                  <FlexBox alignItems="center" justifyContent="space-between" style={{ width: '100%' }}>
                    <Box style={{ flex: '1', minWidth: 0 }}>
                      <FlexBox alignItems="center" style={{ marginBottom: '16px' }}>
                        <Box
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '12px',
                            background: `${month.color}20`,
                            border: `2px solid ${month.color}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '20px'
                          }}
                        >
                          <Text fontSize="h5" fontWeight="bold" style={{ color: month.color }}>
                            {index + 1}
                          </Text>
                        </Box>
                        <Box>
                          <Heading fontSize="h4" color="primary" fontWeight="bold">
                            {month.month}
                          </Heading>
                          <Text fontSize="text" style={{ color: month.color, fontWeight: 'medium' }}>
                            {month.phase}
                          </Text>
                        </Box>
                      </FlexBox>

                      <FlexBox flexWrap="wrap" style={{ gap: '12px', marginBottom: '16px' }}>
                        {month.activities.map((activity, actIndex) => (
                          <Box
                            key={actIndex}
                            style={{
                              background: `${month.color}15`,
                              border: `1px solid ${month.color}30`,
                              borderRadius: '8px',
                              padding: '8px 16px'
                            }}
                          >
                            <Text fontSize="small" color="primary" style={{ opacity: 0.9 }}>
                              {activity.name} ({activity.hours}h)
                            </Text>
                          </Box>
                        ))}
                      </FlexBox>

                      {(month.setup || month.support) && (
                        <FlexBox style={{ gap: '8px', marginTop: '12px' }}>
                          {(month.setup || month.support).map((item, itemIndex) => (
                            <Text 
                              key={itemIndex}
                              fontSize="small" 
                              color="secondary" 
                              style={{ opacity: 0.7 }}
                            >
                              {item} {itemIndex < (month.setup || month.support).length - 1 && '•'}
                            </Text>
                          ))}
                        </FlexBox>
                      )}
                    </Box>

                    <Box
                      style={{
                        width: '140px',
                        flexShrink: 0,
                        textAlign: 'center',
                        background: `linear-gradient(135deg, ${month.color}30 0%, ${month.color}10 100%)`,
                        borderRadius: '12px',
                        padding: '16px',
                        border: `1px solid ${month.color}40`
                      }}
                    >
                      <Text fontSize="h3" color="primary" fontWeight="bold">
                        {month.totalHours}
                      </Text>
                      <Text fontSize="small" color="secondary">
                        dev hours
                      </Text>
                    </Box>
                  </FlexBox>
                </Box>
              </Appear>
            ))}
          </Box>

          <Appear>
            <Box 
              marginTop="32px"
              style={{
                background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.2) 0%, rgba(0, 217, 255, 0.2) 100%)',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Text fontSize="h5" color="primary" fontWeight="bold">
                Total Project: 620 Development Hours • 4 Months • 3 Implementation Phases
              </Text>
            </Box>
          </Appear>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default ProjectTimeline;