import 'app/styles/main.scss'
import { FC } from 'react'

import 'react-toastify/dist/ReactToastify.css'
import { checkIsLokiRunning } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'

export const StyleDecorator = (StoryComponent: FC) => (
  <>
    {checkIsLokiRunning() && (
      <style>
        {`
        .app,
        .auth-page,
        #plutus-root,
        html,
        body {
            min-height: 812px;
        }
        `}
      </style>
    )}
    <StoryComponent />
  </>
)
