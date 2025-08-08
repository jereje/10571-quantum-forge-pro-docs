| Status | Description |
|--------|-------------|
| New Estimate | Estimate has just been created, an Advisor should review it |
| New Inspection | Inspection has just been created, a Technician should do the Inspection |
| Needs P + A | A Parts Person should define the statuses of the Parts |
| Advisor Review | An Advisor should review the Inspection/Estimate and send it to the Customer |
| Estimate Sent | Estimate has been sent to the Customer for Approval/Denial |
| Approved | The Customer has partially or totally approved the Estimate |
| Declined | The Customer has declined the whole Estimate |

# Status diagram (eraser.io format)

```
// Status Flow Diagram
direction down

// Starting points
Start1 [shape: oval, label: \"New Inspection\"]
Start2 [shape: oval, label: \"New Estimate\"]

// Process nodes
TechInspects [shape: rectangle, label: \"Technician inspects\"]
NeedsPA [shape: oval, label: \"Needs P + A\"]
PartsReview [shape: rectangle, label: \"Parts Person reviews\"]
AdvisorReview [shape: oval, label: \"Advisor Review\"]
EstimateSent [shape: oval, label: \"Estimate Sent\"]

// Decision outcomes
Decision Group {
  Approved [shape: oval]
  Declined [shape: oval]
}

// Final steps
TechWork [shape: rectangle, label: \"Technician does the work\"]
AdvisorPrints [shape: rectangle, label: \"Advisor Prints what has been done\"]
Closed [shape: oval]

// Connections
Start1 > TechInspects
TechInspects > NeedsPA
TechInspects > AdvisorReview
Start2 > NeedsPA
Start2 > AdvisorReview
NeedsPA > PartsReview
PartsReview > AdvisorReview
AdvisorReview > EstimateSent: Sends Estimate
EstimateSent > Approved
EstimateSent > Declined
Approved > TechWork
TechWork > AdvisorPrints
Declined > AdvisorPrints
AdvisorPrints > Closed
```