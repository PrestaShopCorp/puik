export default {
  name: 'en',
  puik: {
    input: {
      increase: 'Increase',
      decrease: 'Decrease',
    },
    switch: {
      enable: 'Enable',
      disable: 'Disable',
    },
    label: {
      optional: 'Optional',
    },
    select: {
      searchPlaceholder: 'Search',
      noResults: 'No results matched',
    },
    fileUpload: {
      dropzoneLabel: '<i>Select</i> files or drop them right here',
      errorTitle: 'Error',
      removeLabel: 'Delete file',
      errors: {
        fileSizeTooBig:
          'Your file "{fileName}" is too heavy. It must be 2 MB or less.',
        uploadSizeLimit: 'The total files weight cannot exceed 10 MB.',
        invalidType: 'Your file must be a .pdf, .jpg, .png, or .doc.',
      },
      helpText: {
        acceptedFormat: 'Accepted formats: .pdf, .jpg, .png, .doc.',
        uploadSizeLimit: 'File must be 2 MB or less.',
      },
    },
  },
}
