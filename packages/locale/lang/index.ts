import de from './de'
import en from './en'
import fr from './fr'
import es from './es'
import it from './it'
import nl from './nl'
import pl from './pl'
import pt from './pt'

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

export type Language = {
  name: string
  puik: TranslatePair
}

export const locales: Record<string, any> = { de, en, fr, es, it, nl, pl, pt }
