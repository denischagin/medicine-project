import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const underline = definePartsStyle({
  field: {
    borderBottom: '2px solid',
    borderBottomColor: 'blackAlpha.400',
    borderRadius: 'none',
    color: 'blackAlpha.700',
    bg: 'whiteAlpha.50',
    px: '8px',
    _placeholder: {
      color: 'blackAlpha.600',
    },
  },
})

const outlined = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: 'blackAlpha.900',
    borderRadius: 'lg',
    backgroundColor: 'whiteAlpha.800',
  },
})

export const inputTheme = defineMultiStyleConfig({
  baseStyle: {
    field: {
      fontWeight: 'bold',
    },
  },
  variants: { underline, outlined },
})
