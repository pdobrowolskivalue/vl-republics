import GoogleDocIcon from '../../assets/images/file-type-icons/google-doc.png'
import GoogleSlidesIcon from '../../assets/images/file-type-icons/google-slides.png'
import VideoIcon from '../../assets/images/file-type-icons/video-file.png'

const renderFileTypeIcon = ({ fileType }: { fileType: string }) => {
  switch (fileType) {
    case 'Google doc':
      return GoogleDocIcon
    case 'Video file':
      return VideoIcon
    case 'Google slides':
      return GoogleSlidesIcon
    default:
      return GoogleDocIcon
  }
}

export default renderFileTypeIcon
