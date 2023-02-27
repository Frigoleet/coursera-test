

function openFile() {
    const fileUrl = "../media/Jesper-Göthe.vcf"; //revise
    window.open(fileUrl, '_blank');
  }

  function openUrl(url) {
    window.open(url, '_blank');
  }
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })
