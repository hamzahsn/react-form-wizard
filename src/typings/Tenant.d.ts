export interface ITenant {
  fullName?: string
  email?: string
  phoneNumber?: number
  salary?: string
}

export interface ITenantHandlers {
  handleTenantInputs: (event: React.ChangeEvent<HTMLInputElement>, field: keyof ITenant) => void
  nextStep?: () => void
  prevStep?: () => void
}
