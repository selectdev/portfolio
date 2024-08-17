// @ts-check
const { skeleton } = require('@skeletonlabs/tw-plugin');
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/**/*.{html,js,svelte,ts}',
        require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    theme: {
        extend: {
            fontFamily: {
                monocraft: ['Monocraft', 'sans-serif'],
                cursive: [
                    '"Cursive"', 
                    'Times', 
                    'serif', 
                    '"Segoe Script"', // Windows cursive fallback
                    '"Comic Sans MS"', // Another common cursive font
                    '"Apple Chancery"', // macOS cursive fallback
                    'Droid Arabic Kufi', // For Arabic script
                    '"Noto Sans"', // Noto family supports multiple languages
                    '"Noto Serif"', 
                    'serif'
                ],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        skeleton({
            themes: {
                preset: [
                    'skeleton',
                    'wintry',
                    'modern',
                    'rocket',
                    'seafoam',
                    'vintage',
                    'sahara',
                    'hamlindigo',
                    'gold-nouveau',
                    'crimson'
                ]
            }
        })
    ]
};
