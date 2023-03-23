import React from "react";
import Service from "./Service";

type Props = {};

function Services({}: Props) {
  const services = [
    {
      id: "1",
      name: " Identity",
      about:
        " Creating a visual identity system that includes the brand's logo, color palette, typography, imagery, and other design elements that will be used across all brand touchpoints.",
    },

    {
      id: "2",
      name: "Communication",
      about:
        "Developing a brand communication plan that outlines how the brand will communicate its message to its target audience across different channels, such as social media, advertising, PR, and content marketing.",
    },
    {
      id: "3",
      name: "Strategy",
      about:
        " Developing a comprehensive branding strategy that includes defining the brand's unique selling proposition, target audience, brand messaging, brand voice, and positioning in the market.",
    },
    {
      id: "4",
      name: "Audit",
      about:
        "Conducting a comprehensive analysis of a company's current brand identity and communication strategies to identify strengths, weaknesses, opportunities, and threats. ",
    },
  ];

  return (
    <div className="py-4 w-full flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {services.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </div>
  );
}

export default Services;
