import { useState } from "react";

const StepBar = () => {
  const [activeStep, setActiveStep] = useState("Education");

  const steps = ["Education", "First Role", "Mid Role", "Unicorn Role"];

  const handleClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="flex items-center justify-center mt-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`cursor-pointer flex items-center ${
            activeStep === step ? "text-blue-500" : "text-white-500"
          }`}
          onClick={() => handleClick(step)}
        >
          <div className="h-3 w-3 rounded-full bg-current"></div>
          <span className="ml-2 text-2xl font-normal">{step}</span>
          {index !== steps.length - 1 && (
            <div className="h-px w-9 bg-white mx-3"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepBar;