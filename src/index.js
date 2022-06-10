// Render sections based on the "when" output

// This render function renders the description, usage and Contributing.
const renderSection = (sectionTitle, text) => {
  const sectionEl = `##${sectionTitle}
    ${text}    
    `;
};

// This renders the table of contents
const renderTC = (arrayOfAnswers) => {
  console.log("Running renderTC function");
  const arrayOfLinks = [
    `##Table of Contents`,
    `- [Installation](#installation)`,
    `- [Description](#description)`,
    `- [License](#license)`,
    `- [Contributing](#contributing)`,
    `- [Tests](#tests)`,
  ];
  let stringEl = arrayOfLinks[0];
  for (let i = 1; i < arrayOfLinks.length; i++) {
    if (arrayOfAnswers[i - 1]) {
      stringEl = stringEl + "\n" + arrayOfLinks[i];
    }
  }
};

renderTC([true, false, true, true, true]);
