import { useState } from "react";

const ProfileDetails = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLearningFocus, setShowLearningFocus] = useState(false);
  const handleHideOptionalDetails = () => {
    setShowEmail(false);
    setShowLearningFocus(false);
  };
  const handleToggleDetails = () => {
    setShowDetails((currentShowDetails) => {
      if (currentShowDetails) {
        handleHideOptionalDetails();
      }
      return !currentShowDetails;
    });
  };
  const handleToggleEmail = () => {
    setShowEmail((currentShowEmail) => !currentShowEmail);
  };
  const handleToggleLearningFocus = () => {
    setShowLearningFocus(
      (currentShowLearningFocus) => !currentShowLearningFocus,
    );
  };

  return (
    <section>
      <h2>Profile Details</h2>
      <button onClick={handleToggleDetails}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && (
        <div>
          <p>Name: John Doe</p>
          <button onClick={handleToggleEmail}>
            {showEmail ? "Hide email" : "Show email"}
          </button>
          {showEmail && <p>Email: john.doe@example.com</p>}
          <button onClick={handleToggleLearningFocus}>
            {showLearningFocus ? "Hide learning focus" : "Show learning focus"}
          </button>
          {showLearningFocus && <p>Learning Focus: React and TypeScript</p>}
          {(showEmail || showLearningFocus) && (
            <button onClick={handleHideOptionalDetails}>
              Hide optional details
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default ProfileDetails;
