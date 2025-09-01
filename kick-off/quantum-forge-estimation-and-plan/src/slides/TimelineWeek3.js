import React from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear, Grid, UnorderedList, ListItem } from 'spectacle';

const TimelineWeek3 = () => {
  const isExportMode = window.location.search.includes('exportMode=true');
  
  return (
    <Slide backgroundColor="#0A0A0F">
      <FlexBox height="100%" flexDirection="column" padding={isExportMode ? "40px" : "80px"} style={isExportMode ? { height: 'auto' } : {}}>
        <Box marginBottom={isExportMode ? "16px" : "32px"}>
          {/* Calendar Week Header */}
          <Grid gridTemplateColumns="repeat(7, 1fr)" style={{ gap: isExportMode ? '2px' : '4px', marginBottom: isExportMode ? '16px' : '24px' }}>
            {[
              { day: 'Mon', date: '18' },
              { day: 'Tue', date: '19', isHighlight: true },
              { day: 'Wed', date: '20'},
              { day: 'Thu', date: '21', isHighlight: true },
              { day: 'Fri', date: '22' },
              { day: 'Sat', date: '23' },
              { day: 'Sun', date: '24' }
            ].map((item, idx) => (
              <Box 
                key={idx}
                style={{
                  background: item.isHighlight ? 'linear-gradient(135deg, #5b507e 0%, #171717 100%)' : 'rgba(255, 255, 255, 0.05)',
                  border: item.isHighlight ? '2px solid rgba(255, 255, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: isExportMode ? '4px 2px' : '8px 4px',
                  textAlign: 'center',
                  minHeight: isExportMode ? '40px' : 'auto'
                }}
              >
                <Text fontSize={isExportMode ? "8px" : "10px"} color={item.isHighlight ? 'white' : 'secondary'} fontWeight="bold">
                  {item.day}
                </Text>
                <Text fontSize={isExportMode ? "12px" : "14px"} color={item.isHighlight ? 'white' : 'primary'} fontWeight="bold">
                  {item.date}
                </Text>
              </Box>
            ))}
          </Grid>
          
          <Heading fontSize={isExportMode ? "h3" : "h2"} color="primary" fontWeight="bold" marginBottom="8px">
            Week 3: Design Finalization
          </Heading>
          <Text fontSize={isExportMode ? "text" : "h5"} color="secondary" fontWeight="medium">
            August 18-22
          </Text>
        </Box>
        
        <FlexBox justifyContent="center" alignItems="center" flex={1}>
          <Grid gridTemplateColumns="1fr 1fr" gridTemplateRows="1fr" style={{ gap: '32px', alignItems: 'stretch' }}>
            <Appear>
            <Box 
              style={{
                background: 'rgba(123, 97, 255, 0.05)',
                borderRadius: '16px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
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
                2
              </Box>
              <Heading fontSize="h4" color="primary">
                Final Meetings
              </Heading>
            </Box>
            <UnorderedList style={{ margin: '0px' }}>
              <ListItem>
                <Text fontSize="text" color="primary">
                  <strong>Monday (Aug 18):</strong> Final Review Meeting + Estimation Presentation
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: '12px' }}>
                <Text fontSize="text" color="primary">
                  <strong>Thursday (Aug 21):</strong> Developer Handoff
                </Text>
              </ListItem>
            </UnorderedList>
            </Box>
            </Appear>
            
            <Appear>
            <Box 
              style={{
                background: 'rgba(123, 97, 255, 0.05)',
                borderRadius: '16px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
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
                fontSize: '20px'
              }}>
                ✨
              </Box>
              <Heading fontSize="h4" color="primary">
                Final Deliverables
              </Heading>
            </Box>
            <UnorderedList style={{ margin: '0px' }}>
              <ListItem>
                <Text fontSize="text" color="primary">
                  Style Guide documentation
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: '12px' }}>
                <Text fontSize="text" color="primary">
                  Final prototypes refinement
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: '12px' }}>
                <Text fontSize="text" color="primary">
                  Complete estimation document
                </Text>
              </ListItem>
            </UnorderedList>
            </Box>
            </Appear>
          </Grid>
        </FlexBox>
        
        <Appear>
          <Box 
            marginTop="32px"
            style={{
              background: 'linear-gradient(135deg, #5b507e 0%, #171717 100%)',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center'
            }}
          >
            <Text fontSize="h5" color="white" fontWeight="bold">
              🎯 Complete handoff to development team by August 21
            </Text>
          </Box>
        </Appear>
      </FlexBox>
    </Slide>
  );
};

export default TimelineWeek3;