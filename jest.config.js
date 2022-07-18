module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue2-jest'
    },
    setupFilesAfterEnv: ['./jest-setup.js']
}
