import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>pass in content</p>
      </StepMessage>

      {/* <Steps /> */}
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  //const [test, setTest] = useState({ name: "Jonas" });
  const [isOpen, setIsOpen] = useState(true);
  // the useState is a hook, hook starts with the use keyword
  // useState should only be called at the top
  // the first parameter of the array is the variable name while the
  // second parameter of the array is the function
  // the parameter of the useState is the default value of the variable
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
    // bad practise
    // test.name = "Fred";
    dfahdlsf; // setTest({ name: "Fred" });
  }
  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}

            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how ot ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous{" "}
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3> {children}
    </div>
  );
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
