const { dataform } = require("@dataform/core");

dataform.projectConfig = {
  defaultProject: "of-scheduler-proj",
  defaultLocation: "US",
  defaultSchema: "eros_staging",
  defaultAssertionDataset: "eros_assertions"
};

module.exports = dataform;
