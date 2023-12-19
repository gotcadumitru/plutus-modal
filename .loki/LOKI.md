
# Loki UI Testing for Storybook Components

This document provides an overview of how to work with Loki for UI testing of Storybook components in this project. It covers the purpose of Loki, the importance of UI testing, running Loki, comparing UI differences, viewing reports, approving changes, and the requirement of having Docker installed.
## Purpose of Loki and the Importance of UI Testing

Loki is a visual regression testing tool that helps ensure the consistency and correctness of your application's user interface (UI). It does this by taking screenshots of your components in various states and comparing them with reference images. If there are any differences between the new screenshots and the reference images, Loki will report them.

UI testing is important because it helps maintain a consistent user experience, which is crucial for building trust and retaining users. By automating the process of checking for visual differences, Loki saves time and reduces the likelihood of human error. Regularly running UI tests with Loki allows you to catch visual regressions early, making it easier to fix issues before they reach your users.

## Prerequisites
To run Loki, you need to have Docker installed on your system. You can download and install Docker from the official website: [docker](https://www.docker.com/)

## Running Loki
To run Loki, follow these steps:
1. Start Storybook by running the following command:
    ```bash
    yarn storybook
    ```

2. Run the UI tests with Loki using the following command:
    ```bash
    yarn test:ui
    ```
## Handling UI Differences

If there are differences detected after running **yarn test:ui**, you can create a report to review them by running the following command:

```bash
yarn test:ui:report
```
This command will generate a report with the UI differences and open a web page where you can visually review the changes. Additionally, you can access the report by double-clicking the **report.html** file in the **.loki** folder.

## Approving Changes and Updating Reference Images
To approve the UI differences and save the new version of the reference images, run the following command:

```bash
yarn test:ui:ok
```

This will update the reference images with the new changes, and the next time you run the tests, the new images will be used for comparison.

Please refer to this README and the provided code examples for guidance on using Loki for UI testing of Storybook components in this project. If you have any questions or need additional information, consult the [Loki](https://loki.js.org/) and [Storybook](https://storybook.js.org/) documentation.