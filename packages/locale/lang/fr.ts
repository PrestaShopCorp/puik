export default {
  name: 'fr',
  puik: {
    fileUpload: {
      dropzoneLabel: '<i>Sélectionnez</i> des fichiers ou glissez-les ici',
      errorTitle: 'Erreur',
      removeLabel: 'Supprimer le fichier',
      errors: {
        fileSizeTooBig:
          'Le fichier "{fileName}" est très volumineux. Il doit avoir une taille maximale de 2 Mo ou moins.',
        uploadSizeLimit:
          'Limite de 10 Mo pour la totalité des fichiers uploadés',
        invalidType:
          'Le type de fichier "{fileType}" est invalide, les types acceptés sont : {allowedTypes}',
      },
      helpText: {
        acceptedFormat: 'Formats acceptés : .pdf, .jpg, .png, .doc.',
        uploadSizeLimit: 'Le fichier doit faire 2 Mo ou moins.',
      },
    },
  },
}
