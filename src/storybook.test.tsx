import initStoryshots from '@storybook/addon-storyshots'
import path from 'path'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

// function to customize the snapshot location
const getMatchOptions: any = ({ context: { fileName } }: any) => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join(path.dirname(fileName), 'storyshots')
  return { customSnapshotsDir: snapshotPath,     failureThreshold: 0.2,
    failureThresholdType: 'percent', }
}

let storybookUrl = 'http://localhost:6006'

if (process.env.CI) {
  // if in CI environment point to static build
  storybookUrl = `file://${path.join(__dirname, '../storybook-static')}`
}

initStoryshots({
  suite: 'Image Storyshots',
  test: imageSnapshot({
    storybookUrl,
    getMatchOptions,
  }),
})
