# Storybook Documentation
This document provides an overview of how to work with Storybook in this project. It covers running Storybook, mocking API requests, working with stories, and using decorators.

## Running Storybook
To run Storybook, use the following command:
```bash
yarn storybook 
```

## Mocking API Requests

To mock API requests, use the **axios-mock-adapter** library. Mocks should be written in the [mocks.ts](./mocks.ts) file.

## Working with Stories
For a file to be considered a story, its name must meet the condition specified in the **stories** property of the [main.js](./main.js) file (i.e., the file name should include **.stories.**)

## Decorators in Storybook
The following decorators are used in Storybook:

1. [ReduxStoreDecorator](../../src/shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator.tsx): Decorator for mocking the Redux store.
2. [SalesforceActionsDecorator](../../src/shared/config/storybook/SalesforceActionsDecorator/SalesforceActionsDecorator.tsx): Decorator for mocking Salesforce remote actions.
3. [StyleDecorator](../../src/shared/config/storybook/StyleDecorator/StyleDecorator.tsx): Decorator for loading global styles from the main.scss file.

## Emitting Actions (Hover/Click) on Elements
To emit actions such as hover or click on an element in the page, use the **@storybook/addon-interactions** library. Actions should be written in the **play** function, as shown in the example below:
```
export const Car: Story = {
  play: decoratePlayFunctionForLoki(async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(() => {
      const enableCheckbox = canvas.getAllByTestId('toggle-status')[0]
      userEvent.click(enableCheckbox)
    })
  }),
}
```

The [decoratePlayFunctionForLoki](../../src/shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki.ts) function is used so that Loki can correctly capture the image after the interaction with the element has taken place.

Please refer to this README and the provided code examples for guidance on using [Storybook](https://storybook.js.org/) in this project. If you have any questions or need additional information, consult the Storybook documentation.