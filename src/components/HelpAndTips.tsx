import React from "react";

interface Tip {
  title: string;
  description: string;
}

const tips: Tip[] = [
  {
    title: "Agent Creation",
    description:
      'Admins are responsible for creating their agents. Navigate to the "Settings" section, where you can view, create, delete, or edit agent details.',
  },
  {
    title: "Managing Emergency Reports",
    description:
      'Go to the "Complaints" to view submitted reports. Each report contains details like, the location (with or without the location coordinates), report descriptions, the attached image, and the details of the  user who submitted it.',
  },
  {
    title: "Responding to an Emergency",
    description:
      "Once a report is recieved, assign the necessary responders (Police, Fire, or Medical). You can mark a report as resolved for the sender to know that his or her repport has been taken care of.",
  },
  {
    title: "Real-time Notifications",
    description:
      "Make sure to enable real-time notifications to stay updated on new reports. Notifications will appear as soon as a new report is submitted by citizens.",
  },
  {
    title: "Editing User Information",
    description:
      'To edit user details, visit the "Settings" section. Select the user, make necessary changes, and save. The system will send an automatic success notification .',
  },
];

const HelpAndTips: React.FC = () => {
  return (
    <div className="help-and-tips">
      <h2 className="text-2xl font-bold mb-4">Help and Tips</h2>
      <ul className="space-y-4">
        {tips.map((tip, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-semibold">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpAndTips;
