import React, { useState } from "react";
import {
  FloorPlansSection,
  FloorPlansGrid,
  LeftPanel,
  Title,
  TabsContainer,
  TabButton,
  RightPanel,
  FloorImage
} from "./Floorplan.style";

import floorPlan1 from "../../assets/home/floorPlan1.png";


const plans1 = [
  { id: 1, label: "1 BHK, 6500 sqft", image: floorPlan1 },
  { id: 2, label: "2 BHK, 6500 sqft", image: floorPlan1 },
  { id: 3, label: "1 BHK, 10000 sqft", image: floorPlan1 },
  { id: 4, label: "2 BHK, 10000 sqft", image: floorPlan1 },
];

const FloorPlans = ({plans = plans1}) => {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <FloorPlansSection>
      <FloorPlansGrid>
        <LeftPanel>
          <Title>FLOOR PLANS</Title>
          <TabsContainer>
            {plans.map((plan) => (
              <TabButton
                key={plan.id}
                $active={selected.id === plan.id}
                onClick={() => setSelected(plan)}
              >
                {plan.label}
              </TabButton>
            ))}
          </TabsContainer>
        </LeftPanel>
        <RightPanel>
          <FloorImage src={selected.image} alt={selected.label} />
        </RightPanel>
      </FloorPlansGrid>
    </FloorPlansSection>
  );
};

export default FloorPlans;
