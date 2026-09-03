<template>
  <button 
    :type="type" 
    :disabled="disabled || loading" 
    :class="[
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? 'w-full' : 'w-auto'
    ]"
    v-bind="$attrs"
  >
    <!-- Loading Spinner -->
    <svg v-if="loading" class="animate-spin -ml-1 mr-2 w-4 h-4 text-current" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>

    <!-- Optional Left Icon Slot -->
    <span v-if="$slots.iconLeft && !loading" class="mr-2 inline-flex items-center">
      <slot name="iconLeft" />
    </span>

    <!-- Button Text Slot -->
    <span>
      <slot />
    </span>

    <!-- Optional Right Icon Slot -->
    <span v-if="$slots.iconRight && !loading" class="ml-2 inline-flex items-center">
      <slot name="iconRight" />
    </span>
  </button>
</template>

<script setup lang="ts">
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    type?: 'button' | 'submit' | 'reset'
    loading?: boolean
    disabled?: boolean
    fullWidth?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    loading: false,
    disabled: false,
    fullWidth: false
  }
)

const baseClasses = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25 border border-cyan-400/30',
  secondary: 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600',
  outline: 'bg-transparent hover:bg-slate-800/60 text-cyan-400 border border-cyan-500/40 hover:border-cyan-400',
  danger: 'bg-rose-500 hover:bg-rose-400 text-slate-950 shadow-lg shadow-rose-500/25',
  ghost: 'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white'
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2.5 text-xs',
  lg: 'px-6 py-3.5 text-sm'
}
</script>
