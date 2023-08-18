export interface InfoCardProps {
  title: string
  detail?: string
  media?: {
    imageUrl: string
    altText: string
  }
  events: {
    onViewHandler?: () => void
    onEditHandler?: () => void
    onDeleteHandler?: () => void
  }
}
