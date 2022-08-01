async function onSelectedImageChanged(uri) {
  const img = await faceapi.fetchImage(uri)
  const imgEl = document.getElementById('inputImg')
  imgEl.src = img.src
  // $(`#inputImg`).get(0).src = img.src
  updateResults()
}

async function loadImageFromUrl(url) {
  const imgUrlInputEl = document.getElementById('imgUrlInput')
  const img = await requestExternalImage(imgUrlInputEl.value)
  
  const imgEl = document.getElementById('inputImg')
  imgEl.src = img.src

  // $('#inputImg').get(0).src = img.src
  updateResults()
}

async function loadImageFromUpload() {
    const imgFileEl = document.getElementById('queryImgUploadInput')
    const imgFile = imgFileEl.files[0]
    // const imgFile = $('#queryImgUploadInput').get(0).files[0]
    const img = await faceapi.bufferToImage(imgFile)

    const inputImgEl = document.getElementById('inputImg')
    inputImgEl.src = img.src
    // $('#inputImg').get(0).src = img.src
    updateResults()
}

function renderImageSelectList(selectListId, onChange, initialValue, withFaceExpressionImages) {
  let images = [1, 2, 3, 4, 5].map(idx => `bbt${idx}.jpg`)

  if (withFaceExpressionImages) {
    images = [
      'happy.jpg',
      'sad.jpg',
      'angry.jpg',
      'disgusted.jpg',
      'surprised.jpg',
      'fearful.jpg',
      'neutral.jpg'
    ].concat(images)
  }

  function renderChildren(select) {
    images.forEach(imageName =>
      renderOption(
        select,
        imageName,
        imageName
      )
    )
  }

  renderSelectList(
    selectListId,
    onChange,
    initialValue,
    renderChildren
  )
}

function initImageSelectionControls(initialValue = 'bbt1.jpg', withFaceExpressionImages = false) {
  renderImageSelectList(
    '#selectList',
    async (uri) => {
      await onSelectedImageChanged(uri)
    },
    initialValue,
    withFaceExpressionImages
  )

  const inputImgEl = document.getElementById('selectList')
  const selectEl = inputImgEl.getElementsByTagName('select')
  const selectElValue = selectEl[0].value

  onSelectedImageChanged(selectElValue)
  //onSelectedImageChanged($('#selectList select').val())
}