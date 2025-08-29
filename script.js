// Heart Counter
const updateHeartCounter = () => {
  const heartNav = document.getElementById("heart-nav");
  if (heartNav) {
    const currentHeartValue = parseInt(heartNav.innerText);
    heartNav.innerText = currentHeartValue + 1;
  }
};
// Attached Event Listeners to Heart Buttons
const heartButtonIds = [
  "heart-one",
  "heart-two",
  "heart-three",
  "heart-four",
  "heart-five",
  "heart-six",
  "heart-seven",
  "heart-eight",
  "heart-nine",
];

// Function to handle all heart button clicks dynamically
const handleHeartButtonClicks = () => {
  heartButtonIds.forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", updateHeartCounter);
    }
  });
};

// Copy to Clipboard Function - Gives Feedback to the User
const copyToClipboard = async (text, serviceName) => {
  try {
    await navigator.clipboard.writeText(text);
    alert(
      `The number for ${serviceName} has been successfully copied to your clipboard: ${text}`
    );
  } catch (err) {
    console.error("Failed to copy text:", err);
    alert(`Oops! Failed to copy the ${serviceName} number. Please try again.`);
  }
};

// Copy Button Setup - Configures each button to copy the relevant phone number
const copyButtonConfigurations = [
  {
    buttonId: "copy-one",
    textElementId: "national-num",
    serviceName: "National Emergency",
  },
  { buttonId: "copy-two", textElementId: "police-num", serviceName: "Police" },
  {
    buttonId: "copy-three",
    textElementId: "fire-num",
    serviceName: "Fire Service",
  },
  {
    buttonId: "copy-four",
    textElementId: "ambulance-num",
    serviceName: "Ambulance",
  },
  {
    buttonId: "copy-five",
    textElementId: "help-num",
    serviceName: "Women & Child Helpline",
  },
  {
    buttonId: "copy-six",
    textElementId: "anti-corrpt-num",
    serviceName: "Anti-Corruption",
  },
  {
    buttonId: "copy-seven",
    textElementId: "electricity-num",
    serviceName: "Electricity",
  },
  { buttonId: "copy-eight", textElementId: "brac-num", serviceName: "BRAC" },
  {
    buttonId: "copy-nine",
    textElementId: "railway-num",
    serviceName: "Railway",
  },
];

// Dynamically attach event listeners to copy buttons
const initializeCopyButtons = () => {
  copyButtonConfigurations.forEach((config) => {
    const button = document.getElementById(config.buttonId);
    if (button) {
      button.addEventListener("click", () => {
        const numberToCopy = document.getElementById(
          config.textElementId
        ).innerText;
        copyToClipboard(numberToCopy, config.serviceName); // Triggers the copy action
      });
    }
  });
};

// Coin Management System - Handles the logic for coin deduction
const manageCoinBalance = () => {
  const navCoin = document.getElementById("nav-coin");
  if (navCoin) {
    const currentCoinBalance = parseInt(navCoin.innerText);

    // Check if the user has sufficient coins (20 or more)
    if (currentCoinBalance >= 20) {
      navCoin.innerText = currentCoinBalance - 20; // Deduct coins after a successful call
      return true;
    } else {
      navCoin.innerText = 0; // Reset coin balance to 0
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return false;
    }
  }
  return false;
};

// Create an Entry in the Call History Section with Service Name and Number
const addToCallHistory = (serviceName, serviceNumber) => {
  const callHistorySection = document.getElementById("aside-items");
  if (callHistorySection) {
    const callEntry = document.createElement("div");

    callEntry.innerHTML = `
            <div class="w-[300px] mx-auto flex items-center justify-between my-3 p-3 gap-3 bg-[#FAFAFA] rounded-md border border-gray-200">
                <div class="flex flex-col gap-1 whitespace-nowrap">
                    <h3 class="text-[16px] font-semibold text-gray-800">${serviceName}</h3>
                    <p class="text-[14px] text-gray-600 text-left">${serviceNumber}</p>
                </div>
                <div class="text-gray-500 text-[12px]">
                    ${new Date().toLocaleTimeString()} <!-- Time of Call -->
                </div>
            </div>
        `;

    callHistorySection.appendChild(callEntry); // Adds the call history entry
  }
};

// Call Button Configurations - Defines each call button's behavior
const callButtonConfigurations = [
  {
    buttonId: "call-one",
    serviceName: "National Emergency",
    serviceNumber: "999",
    alertMessage: "📞 Dialing National Emergency Service 999...",
  },
  {
    buttonId: "call-two",
    serviceName: "Police Helpline",
    serviceNumber: "999",
    alertMessage: "📞 Dialing Police Helpline Number 999...",
  },
  {
    buttonId: "call-three",
    serviceName: "Fire Service",
    serviceNumber: "999",
    alertMessage: "📞 Dialing Fire Service Number 999...",
  },
  {
    buttonId: "call-four",
    serviceName: "Ambulance Service",
    serviceNumber: "1994-999999",
    alertMessage: "📞 Dialing Ambulance Service 1994-999999...",
  },
  {
    buttonId: "call-five",
    serviceName: "Women & Child Helpline",
    serviceNumber: "109",
    alertMessage: "📞 Dialing Women & Child Helpline 109...",
  },
  {
    buttonId: "call-six",
    serviceName: "Anti-Corruption Helpline",
    serviceNumber: "106",
    alertMessage: "📞 Dialing Anti-Corruption Helpline 106...",
  },
  {
    buttonId: "call-seven",
    serviceName: "Electricity Helpline",
    serviceNumber: "16216",
    alertMessage: "📞 Dialing Electricity Helpline 16216...",
  },
  {
    buttonId: "call-eight",
    serviceName: "Brac Helpline",
    serviceNumber: "16445",
    alertMessage: "📞 Dialing Brac Helpline 16445...",
  },
  {
    buttonId: "call-nine",
    serviceName: "Bangladesh Railway Helpline",
    serviceNumber: "163",
    alertMessage: "📞 Dialing Bangladesh Railway Helpline 163...",
  },
];

// Call Button Event Listeners - Attach the event listeners to all call buttons
const initializeCallButtons = () => {
  callButtonConfigurations.forEach((config) => {
    const button = document.getElementById(config.buttonId);

    if (button) {
      button.addEventListener("click", () => {
        if (manageCoinBalance()) {
          alert(config.alertMessage);
          addToCallHistory(config.serviceName, config.serviceNumber); // Adds service info to history
        }
      });
    }
  });
};

// Clear Call History - Clears all call history entries
const clearCallHistory = () => {
  const clearHistoryButton = document.getElementById("clear-btn");

  if (clearHistoryButton) {
    clearHistoryButton.addEventListener("click", (event) => {
      event.preventDefault();
      const callHistorySection = document.getElementById("aside-items");
      if (callHistorySection) {
        callHistorySection.innerHTML = ""; // Clears the call history
      }
    });
  }
};

// Initialize All Functions
const initializeApp = () => {
  handleHeartButtonClicks(); // Set up heart button listeners
  initializeCopyButtons(); // Set up copy button listeners
  initializeCallButtons(); // Set up call button listeners
  clearCallHistory(); // Enable clear call history functionality
};

// Run initialization once the DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp);
