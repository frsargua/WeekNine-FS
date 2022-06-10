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
  return stringEl;
};

// This renders the table of contents
const renderInstallation = (arrayEL) => {
  console.log("Running renderInstallation function");

  let stringEl = "";

  for (let i = 0; i < arrayEL.length; i++) {
    stringEl = stringEl + "\n" + arrayEL[i];
  }

  const installationEl = `##Installation
  \`\`\`
  Please enter your project installation:
  ${stringEl}
  \`\`\`ˆ
  `;
  console.log(installationEl);
  return installationEl;
};
