# Testing with Jest and React Testing Library
This document provides an overview of how to work with Jest and React Testing Library in this project. It covers running tests, configuring test settings, and mocking various elements of the application.

## Running Tests
To run unit tests, use the following command:
```bash
yarn test:unit
```
## Jest Configuration

The [jest.config.ts](./jest.config.ts) file contains various configuration properties. Some of the key properties are explained below:

### Ignoring Files/Folders in Tests

To ignore specific files or folders in tests, add them to the **coveragePathIgnorePatterns** property in the **jest.config.ts** file.

### Handling SVG and WebP Files

SVG and WebP files are replaced with the contents of the **jestSvgEmptyComponent** and **jestImgEmptyComponent** files, respectively, thanks to the **moduleNameMapper** property in the **jest.config.t**s file.

### Test File Naming Convention

To be considered a test file, the file name must match the patterns in the **testMatch** property in the **jest.config.ts** file.

## Rendering Components in Tests

To render a component in a test, use the [renderWithProviders](../../src/shared/lib/tests/testUtils.tsx) function.
**Important:** If you add a new global provider, don't forget to include it in the **renderWithProviders** function as well.

## Using Mock Data in Tests
Mock data for tests can be found in the [shared/defaults/tests](../../src/shared/defaults/tests) folder.

## Mocking API Requests
To mock API requests, use the **jest-mock-axios** library. Here is an example of how to use it:
```
mockAxios.get.mockResolvedValueOnce({
    data: {
        body: [],
    },
});
```
Please refer to this README and the provided code examples for guidance on using Jest and React Testing Library in this project. If you have any questions or need additional information, consult the documentation for the respective libraries.
