import { Button } from '@components/atoms'
import { Box, styled, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { InfoCardProps } from './InfoCard.type'

const StyledBox = styled(Box)(({ theme }) => {
  return {
    maxWidth: '300px',
    height: '400px',
    padding: '10px',
    // '& :hover': {
    //     boxShadow
    // }
  }
})

const MediaBox = styled(Box)(({ theme }) => {
  return {
    width: '200px',
    height: '200px',
  }
})

const EventsBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    columnGap: '10px',
    padding: '10px',
  }
})

const InfoCard = ({ title, detail, media, events }: InfoCardProps) => {
  return (
    <StyledBox>
      {media?.imageUrl && (
        <MediaBox>
          <Image src={media?.imageUrl} alt={media?.altText || ''} fill />
        </MediaBox>
      )}
      <Typography mb="20px">{title}</Typography>
      {detail && <Typography>{detail}</Typography>}

      <EventsBox>
        {events?.onViewHandler && (
          <Button onClick={events.onViewHandler}>View</Button>
        )}
        {events?.onEditHandler && (
          <Button onClick={events.onEditHandler}>Edit</Button>
        )}
        {events?.onDeleteHandler && (
          <Button onClick={events?.onViewHandler}>Delete</Button>
        )}
      </EventsBox>
    </StyledBox>
  )
}

export default InfoCard
