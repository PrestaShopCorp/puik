import de from './lang/de'
import en from './lang/en'
import fr from './lang/fr'
import es from './lang/es'
import it from './lang/it'
import nl from './lang/nl'
import pl from './lang/pl'
import pt from './lang/pt'

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

export type Language = {
  name: string
  puik: TranslatePair
}

export const locales = { de, en, fr, es, it, nl, pl, pt }
