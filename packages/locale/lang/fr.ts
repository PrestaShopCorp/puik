export default {
  name: 'fr',
  puik: {
    table: {
      selectLabel: 'Cocher',
      unselectLabel: 'Décocher',
      selectAllLabel: 'Tout cocher',
      unselectAllLabel: 'Tout décocher',
      min: 'Min',
      max: 'Max',
      reset: 'Réinitialiser',
      search: 'Rechercher'
    },
    pagination: {
      ariaLabel: 'Pagination',
      goTo: 'Aller à la page {page}',
      previous: 'Précédent',
      next: 'Suivant',
      small: {
        label: 'Page {page} à {maxPage}'
      },
      medium: {
        label: '{totalItem} résultat(s)'
      },
      large: {
        label: '{totalItem} résultat(s)',
        choosePage: 'Selectionner page',
        jumperDescription: 'sur {maxPage} page(s)'
      },
      loader: {
        label:
          'Vous visualisez {itemCount} produit(s) sur un total de {totalItem}.',
        button: 'Charger plus'
      },
      mobile: {
        label: 'Page {page} à {maxPage}'
      },
      itemPerPageLabel: 'élément(s) par page'
    }
  }
};
