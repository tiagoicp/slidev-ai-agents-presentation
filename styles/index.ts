// Import UnoCSS configurations
import { defineUnoSetup } from '@slidev/types'

// Define UnoCSS setup for the theme
export default defineUnoSetup(() => {
  return {
    shortcuts: [
      // Custom shortcuts for the theme
      { 'bg-main': 'bg-gradient-to-b from-[#3B00B9] to-[#1E005D]' },
      { 'bg-secondary': 'bg-gradient-to-b from-[#522785] to-[#3B00B9]' },
      { 'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-r from-[#29ABE2] to-[#ED1E79]' },
    ],
    theme: {
      colors: {
        // Main colors
        infinite: '#3B00B9',
        'dark-infinite': '#1E005D',
        
        // Secondary colors
        'picton-blue': '#29ABE2',
        meteorite: '#522785',
        razzmatazz: '#ED1E79',
        flamingo: '#F15A24',
        'sea-buckthorn': '#FBB03B',
        
        // Neutral colors
        dfblack: '#181818',
        dfwhite: '#FFFFFF',
      },
      fontFamily: {
        sans: 'Circular, "Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        mono: '"Fira Code", monospace',
      },
    },
  }
})
