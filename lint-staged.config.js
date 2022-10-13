/** @type {import('lint-staged')} */

module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  '**/*.(ts|tsx|js)': filename => [
    `yarn eslint --fix ${filename.join(' ')}`,
    `yarn prettier --write ${filename.join(' ')}`,
  ],
  '**/*.(md|json)': filename => `yarn prettier --write ${filename.join(' ')}`,
}
