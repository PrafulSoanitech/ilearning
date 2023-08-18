export interface NavListProps {
  navItems: {
    id: string
    label: string
    link?: string
    type?: string
    onClick?: () => void
  }[]
}
