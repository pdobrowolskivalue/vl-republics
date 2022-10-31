import GoogleDocIcon from '@assets/images/file-type-icons/google-doc.png'
import VideoIcon from '@assets/images/file-type-icons/video-file.png'
import GoogleSlidesIcon from '@assets/images/file-type-icons/google-slides.png'
import { FileTypes } from '@type/fileTypes'

export const fileData: { [key: string]: any } = {
  [FileTypes.google_doc]: {
    name: 'Google doc',
    image: GoogleDocIcon,
  },
  [FileTypes.video_file]: {
    name: 'Video files',
    image: VideoIcon,
  },
  [FileTypes.google_slides]: {
    name: 'Google slides',
    image: GoogleSlidesIcon,
  },
}
