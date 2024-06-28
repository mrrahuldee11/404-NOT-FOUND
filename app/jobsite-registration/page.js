"use client"
import React, { useState } from "react";
import { Stepper, Button, Group, Text } from "@mantine/core";
import DropzoneButton from "./DropzoneButton"; // Assuming DropzoneButton is imported and adjusted for CSV files
 
export default function Page() {
  const [active, setActive] = useState(1);
  const [csvFile, setCsvFile] = useState(null); // State to hold CSV file
  const [csvContent, setCsvContent] = useState(""); // State to hold CSV content
 
  // Function to handle file selection
  const handleFileChange = (file) => {
    setCsvFile(file);
 
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      setCsvContent(text);
    };
    reader.readAsText(file);
  };
 
  // Function to handle navigation to next step
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
 
  // Function to handle navigation to previous step
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
 
  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="Job Location" description="Enter job location">
          Step 1 : Enter job location
          <DropzoneButton onDrop={handleFileChange} />
          {csvFile && (
            <Text mt="sm" ta="center">
              Uploaded CSV File: {csvFile.name}
            </Text>
          )}
        </Stepper.Step>
        <Stepper.Step label="Required Skills" description="Enter the required skills">
          Step 2 : Enter the required skills
        </Stepper.Step>
        <Stepper.Step label="Duration" description="Duration of project">
          Step 3 : Enter the duration of project
        </Stepper.Step>
        <Stepper.Completed>
          Completed!
        </Stepper.Completed>
      </Stepper>
 
      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep} color="rgb(210,5,30)">
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}