// const axios = require('axios');

// // TestRail API configuration
// const testRailUrl = 'https://karamyanv.testrail.io/';
// const apiKey = 'HLlMkZKAdEjPdwRTZKuN-ANVPC643hCKy8qJkjt5o';
// // const projectId = 1; // Replace with the actual TestRail project ID

// // Create a new test run in TestRail
// // async function createTestRun(name, description, testCaseIds) {
// //   const url = `${testRailUrl}/index.php?/api/v2/add_run/${projectId}`;
// // // "https://karamyanv.testrail.io/index.php?/api/v2/add_run/1"
// //   try {
// //     const response = await axios.post(url, {
// //       suite_id: null, // Replace with the actual suite ID if needed
// //       name,
// //       description,
// //       case_ids: testCaseIds,
// //     }, {
// //       auth: {
// //         username: apiKey,
// //         password: '',
// //       },
// //     });

// //     return response.data;
// //   } catch (error) {
// //     console.error('Error creating test run:', error);
// //     return null;
// //   }
// // }

// // Update test result in TestRail
// async function updateTestResult(runId, testCaseId, status, comment) {
//   const url = `${testRailUrl}/index.php?/api/v2/add_result_for_case/${runId}/${testCaseId}`;

//   try {
//     const response = await axios.post(url, {
//       status_id: getStatusId(status),
//       comment,
//     }, {
//       auth: {
//         username: apiKey,
//         password: '',
//       },
//     });

//     console.log('Test result updated successfully:', response.data);
//   } catch (error) {
//     console.error('Error updating test result:', error);
//   }
// }

// // Helper function to get TestRail status ID
// function getStatusId(status) {
//   switch (status) {
//     case 'passed':
//       return 1;
//     case 'blocked':
//       return 2;
//     case 'untested':
//       return 3;
//     case 'retest':
//       return 4;
//     case 'failed':
//       return 5;
//     default:
//       return 3; // Default to 'untested' status
//   }
// }

// module.exports = {
// //   createTestRun
//   updateTestResult
// };


const axios = require('axios');

// TestRail API configuration
const testRailUrl = 'https://karamyanv.testrail.io/';
const apiKey = 'HLlMkZKAdEjPdwRTZKuN-ANVPC643hCKy8qJkjt5o'
const projectId = 1; // Replace with the actual TestRail project ID

// Update test run status in TestRail
async function updateTestRunStatus(runId, status) {
  const url = `${testRailUrl}/index.php?/api/v2/update_run/${runId}`;

  try {
    const response = await axios.post(url, {
      include_all: false,
      case_ids: [40], // Add specific test case IDs if necessary
      status_id: getStatusId(status),
    }, {
      auth: {
        username: apiKey,
        password: 'Vsvn_0403',
      },
    });

    console.log('Test run status updated successfully:', response.data);
  } catch (error) {
    console.error('Error updating test run status:', error);
  }
}

// Helper function to get TestRail status ID
function getStatusId(status) {
  switch (status) {
    case 'passed':
      return 1;
    case 'blocked':
      return 2;
    case 'untested':
      return 3;
    case 'retest':
      return 4;
    case 'failed':
      return 5;
    default:
      return 3; // Default to 'untested' status
  }
}

module.exports = {
  updateTestRunStatus,
};
