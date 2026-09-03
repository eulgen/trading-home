import { ref, computed } from 'vue'

export type AccountType = 'individual' | 'institutional'

export function useSignUp() {
  const accountType = ref<AccountType>('individual')
  const fullName = ref('')
  const email = ref('')
  const password = ref('')
  const agreeTerms = ref(false)
  const showPassword = ref(false)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const passwordStrength = computed(() => {
    if (password.value.length >= 12) return 'Strong'
    if (password.value.length >= 8) return 'Medium'
    return 'Weak'
  })

  const isFormValid = computed(() => {
    return (
      fullName.value.trim().length > 0 &&
      email.value.trim().length > 0 &&
      password.value.length >= 8 &&
      agreeTerms.value
    )
  })

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value
  }

  const handleSignUp = async () => {
    if (!agreeTerms.value || isLoading.value) return

    isLoading.value = true
    error.value = null

    try {
      // Simulate API call to backend service
      await new Promise((resolve) => setTimeout(resolve, 1400))

      alert(`Account created successfully for ${fullName.value} (${email.value})`)
    } catch (err: any) {
      error.value = err?.message || 'Failed to create account'
    } finally {
      isLoading.value = false
    }
  }

  const resetForm = () => {
    accountType.value = 'individual'
    fullName.value = ''
    email.value = ''
    password.value = ''
    agreeTerms.value = false
    showPassword.value = false
    isLoading.value = false
    error.value = null
  }

  return {
    accountType,
    fullName,
    email,
    password,
    agreeTerms,
    showPassword,
    isLoading,
    error,
    passwordStrength,
    isFormValid,
    toggleShowPassword,
    handleSignUp,
    resetForm
  }
}
