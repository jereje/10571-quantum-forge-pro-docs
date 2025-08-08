import React, { useState, useEffect } from 'react';
import { Slide, Heading, Text, FlexBox, Box, Appear, Grid } from 'spectacle';
import { getPrintStyles, getPrintFlexStyles, getPrintCalendarDayStyles } from '../utils/printStyles';

const ScheduleCalendar = () => {
  // Check if we're in export mode
  const isExportMode = window.location.search.includes('exportMode=true');
  const initialEvents = {
    'w0-d1': ['Kickoff'],
    'w1-d4': ['Discovery 1'],
    'w1-d6': ['Discovery 2'],
    'w1-d8': ['Discovery 3 + UX Review'],
    'w2-d11': ['Dev Start'],
    'w2-d13': ['Prototype Review'],
    'w3-d19': ['Final Review + Estimation Presentation'],
    'w3-d21': ['Developer Handoff']
  };

  const [events, setEvents] = useState(initialEvents);
  const [dragging, setDragging] = useState(null);
  const [draggedOver, setDraggedOver] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const saved = localStorage.getItem('calendar-events');
    if (saved) {
      setEvents(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      if (dragging && draggedOver && dragging.dayId !== draggedOver) {
        const newEvents = { ...events };
        
        // Remove from source day
        newEvents[dragging.dayId] = (newEvents[dragging.dayId] || []).filter(ev => ev !== dragging.event);
        if (newEvents[dragging.dayId].length === 0) {
          delete newEvents[dragging.dayId];
        }
        
        // Add to target day
        newEvents[draggedOver] = [...(newEvents[draggedOver] || []), dragging.event];
        
        setEvents(newEvents);
        localStorage.setItem('calendar-events', JSON.stringify(newEvents));
      }
      setDragging(null);
      setDraggedOver(null);
    };

    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragging, draggedOver, events]);

  const CalendarDay = ({ date, label, dayId, isWeekend }) => {
    const dayEvents = events[dayId] || [];
    const isHighlight = dayEvents.length > 0;
    const isDraggedOver = draggedOver === dayId;
    
    return (
      <Box 
        onMouseEnter={() => {
          if (dragging && !isExportMode) {
            setDraggedOver(dayId);
          }
        }}
        onMouseLeave={() => {
          if (dragging && draggedOver === dayId && !isExportMode) {
            setDraggedOver(null);
          }
        }}
        style={getPrintCalendarDayStyles(isExportMode, {
          background: isHighlight ? 'linear-gradient(135deg, #5b507e 0%, #171717 100%)' : 
                      isWeekend ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.05)',
          border: isDraggedOver ? '2px solid #00D9FF' : 
                   isHighlight ? '2px solid rgba(255, 255, 255, 0.8)' : '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '6px',
          padding: isExportMode ? '4px' : '8px',
          minHeight: isExportMode ? '60px' : '84px',
          position: 'relative',
          transition: 'all 0.3s ease',
          cursor: isExportMode ? 'default' : 'default',
          transform: isDraggedOver ? 'scale(1.02)' : 'scale(1)'
        })}
        className={isHighlight ? 'styled-box' : ''}
      >
        <Text fontSize={isExportMode ? "12px" : "14px"} color={isHighlight ? 'white' : 'secondary'} fontWeight="bold">
          {date}
        </Text>
        {label && (
          <Text fontSize={isExportMode ? "10px" : "11px"} color={isHighlight ? 'white' : 'primary'} style={{ marginTop: '2px', opacity: 0.8 }}>
            {label}
          </Text>
        )}
        {dayEvents.map((activity, idx) => (
          <Box 
            key={`${dayId}-${activity}-${idx}`}
            onMouseDown={(e) => {
              e.preventDefault();
              setDragging({ event: activity, dayId });
            }}
            style={{ 
              marginTop: '4px',
              cursor: dragging && dragging.event === activity && dragging.dayId === dayId ? 'grabbing' : 'grab',
              opacity: dragging && dragging.event === activity && dragging.dayId === dayId ? 0.5 : 1,
              padding: '2px 4px',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transition: 'opacity 0.2s ease',
              userSelect: 'none'
            }}
            onMouseEnter={(e) => {
              if (!dragging) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <Text 
              fontSize={isExportMode ? "12px" : "16px"} 
              color={isHighlight ? 'white' : '#00D9FF'} 
              fontWeight="medium"
              style={{ 
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              {activity}
            </Text>
          </Box>
        ))}
      </Box>
    );
  };

  const WeekHeader = ({ weekNum, dates }) => (
    <Box style={{ 
      background: 'rgba(91, 80, 126, 0.1)', 
      padding: '8px 12px', 
      borderRadius: '6px',
      marginBottom: '8px'
    }}>
      <Text fontSize="text" color="primary" fontWeight="bold">
        Week {weekNum}
      </Text>
      <Text fontSize="12px" color="secondary">
        {dates}
      </Text>
    </Box>
  );

  return (
    <Slide backgroundColor="#0A0A0F">
      <FlexBox height="100%" flexDirection="column" padding={isExportMode ? "40px" : "60px 80px"} style={getPrintFlexStyles(isExportMode)}>
        <Box marginBottom={isExportMode ? "16px" : "24px"}>
          <Heading fontSize={isExportMode ? "h4" : "h3"} color="primary" fontWeight="bold" marginBottom="8px">
            Project Calendar
          </Heading>
          <Text fontSize={isExportMode ? "small" : "text"} color="text" fontWeight="medium" style={{ opacity: 0.8 }}>
            3-Week Design & Discovery Timeline • August 2025
          </Text>
        </Box>
        
        <Box flex={1} width="100%" style={{ position: 'relative', ...getPrintStyles(isExportMode) }}>
          {/* Floating drag preview - hide in export mode */}
          {dragging && !isExportMode && (
            <Box
              style={{
                position: 'fixed',
                left: mousePos.x - 40,
                top: mousePos.y - 15,
                pointerEvents: 'none',
                zIndex: 1000,
                backgroundColor: 'rgba(91, 80, 126, 0.9)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              {dragging.event}
            </Box>
          )}

          {/* Day headers */}
          <Grid gridTemplateColumns="repeat(5, 1fr)" style={{ gap: '6px', marginBottom: '12px' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
              <Box key={day} style={{ textAlign: 'center' }}>
                <Text fontSize="small" color="secondary" fontWeight="bold">
                  {day}
                </Text>
              </Box>
            ))}
          </Grid>

          {/* Week 0 */}
          <Appear>
            <Box marginBottom="16px">
              <WeekHeader weekNum="0" dates="July 28 - Aug 3" />
              <Grid gridTemplateColumns="repeat(5, 1fr)" style={{ gap: '6px' }}>
                <CalendarDay date="28" label="Jul" isWeekend={false} dayId="w0-d28" />
                <CalendarDay date="29" isWeekend={false} dayId="w0-d29" />
                <CalendarDay date="30" isWeekend={false} dayId="w0-d30" />
                <CalendarDay date="31" isWeekend={false} dayId="w0-d31" />
                <CalendarDay date="1" label="Aug" dayId="w0-d1" />
              </Grid>
            </Box>
          </Appear>

          {/* Week 1 */}
          <Appear>
            <Box marginBottom="16px">
              <WeekHeader weekNum="1" dates="August 4 - 10" />
              <Grid gridTemplateColumns="repeat(5, 1fr)" style={{ gap: '6px' }}>
                <CalendarDay date="4" dayId="w1-d4" />
                <CalendarDay date="5" isWeekend={false} dayId="w1-d5" />
                <CalendarDay date="6" dayId="w1-d6" />
                <CalendarDay date="7" isWeekend={false} dayId="w1-d7" />
                <CalendarDay date="8" dayId="w1-d8" />
              </Grid>
            </Box>
          </Appear>

          {/* Week 2 */}
          <Appear>
            <Box marginBottom="16px">
              <WeekHeader weekNum="2" dates="August 11 - 17" />
              <Grid gridTemplateColumns="repeat(5, 1fr)" style={{ gap: '6px' }}>
                <CalendarDay date="11" dayId="w2-d11" />
                <CalendarDay date="12" isWeekend={false} dayId="w2-d12" />
                <CalendarDay date="13" isWeekend={false} dayId="w2-d13" />
                <CalendarDay date="14" dayId="w2-d14" />
                <CalendarDay date="15" dayId="w2-d15" />
              </Grid>
            </Box>
          </Appear>

          {/* Week 3 */}
          <Appear>
            <Box>
              <WeekHeader weekNum="3" dates="August 18 - 24" />
              <Grid gridTemplateColumns="repeat(5, 1fr)" style={{ gap: '6px' }}>
                <CalendarDay date="18" dayId="w3-d18" />
                <CalendarDay date="19" isWeekend={false} dayId="w3-d19" />
                <CalendarDay date="20" isWeekend={false} dayId="w3-d20" />
                <CalendarDay date="21" dayId="w3-d21" />
                <CalendarDay date="22" dayId="w3-d22" />
              </Grid>
            </Box>
          </Appear>
        </Box>
      </FlexBox>
    </Slide>
  );
};

export default ScheduleCalendar;