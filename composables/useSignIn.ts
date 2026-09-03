import { ref, computed } from 'vue'

export function useSignIn() {
  const email = ref('')
  const password = ref('')
  const rememberMe = ref(true)
  const showPassword = ref(false)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const isFormValid = computed(() => {
    return email.value.trim().length > 0 && password.value.length > 0
  })

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value
  }

  const handleSignIn = async () => {
    if (!isFormValid.value || isLoading.value) return

    isLoading.value = true
    error.value = null

    try {
      // Simulate API call to authentication endpoint
      await new Promise((resolve) => setTimeout(resolve, 1200))

      alert(`Signed in successfully as ${email.value}`)
    } catch (err: any) {
      error.value = err?.message || 'Authentication failed'
    } finally {
      isLoading.value = false
    }
  }

  const resetForm = () => {
    email.value = ''
    password.value = ''
    rememberMe.value = true
    showPassword.value = false
    isLoading.value = false
    error.value = null
  }

  return {
    email,
    password,
    rememberMe,
    showPassword,
    isLoading,
    error,
    isFormValid,
    toggleShowPassword,
    handleSignIn,
    resetForm
  }
}
