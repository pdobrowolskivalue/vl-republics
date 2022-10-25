const renderFileTypeIcon = ({ fileType }: { fileType: string }) => {
  switch (fileType) {
    case 'Google doc':
      return '/assets/image/file-type-icons/google-doc.png'
    case 'Video file':
      return '/assets/image/file-type-icons/video-file.png'
    case 'Google slides':
      return '/assets/image/file-type-icons/google-slides.png'
    default:
      return '/assets/image/file-type-icons/google-doc.png'
  }
}

export default renderFileTypeIcon
