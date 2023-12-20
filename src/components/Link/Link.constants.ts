const LINK_VARIANTS = {
    DEFAULT: 'default',
    DARK_BACKGROUND_DEFAULT: 'dark-background-default',
    ICON: 'icon',
    CONTAINED: 'contained',
    CONTAINED_LIGHT: 'contained-light',
    CONTAINED_DARK: 'contained-dark',
    OUTLINED: 'outlined',
} as const;

const LINK_COMPONENT = {
    A: 'a',
    BUTTON: 'button',
} as const;

const LINK_WIDTH = {
    FULL: 'full',
    FIT_CONTENT: 'fit-content',
} as const;

const LINK_DEVICE_DISPLAY = {
    MOBILE: 'mobile',
    DESKTOP: 'desktop',
    ALL: 'all',
} as const;

export { LINK_VARIANTS, LINK_COMPONENT, LINK_WIDTH, LINK_DEVICE_DISPLAY };
