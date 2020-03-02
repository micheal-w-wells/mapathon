import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: 'none'
  }
}))

const PhotoUploader = () => {
  const classes = useStyles()

  const handleUpload = e => {
    for (const file of e.target.files) {
      const formData = new FormData()
      formData.append('photo', file)

      window.fetch('/photo', {
        method: 'POST',
        body: formData // This is your file object
      }).then(
        response => response.json() // if the response is a JSON object
      ).then(
        success => console.log(success) // Handle the success response object
      ).catch(
        error => console.log(error) // Handle the error response object
      )
    }
  }

  return (
    <>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={handleUpload}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="default"
          aria-label="upload picture"
          component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </>
  )
}

export default PhotoUploader
