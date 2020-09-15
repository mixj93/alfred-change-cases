import * as changeCase from 'change-case'
import { lowerCase } from 'lower-case'
import { upperCase } from 'upper-case'

export const CASE_LABELS = [
  'camel',
  'constant',
  'dot',
  'header',
  'lower',
  'no',
  'param',
  'pascal',
  'path',
  'sentence',
  'snake',
  'title',
  'upper',
]

export const CASE_DEFINITIONS = {
  camel: {
    description: '',
    func: changeCase.camelCase,
  },
  constant: {
    description: '',
    func: changeCase.constantCase,
  },
  dot: {
    description: '',
    func: changeCase.dotCase,
  },
  header: {
    description: '',
    func: changeCase.headerCase,
  },
  lower: {
    description: '',
    func: lowerCase,
  },
  no: {
    description: '',
    func: changeCase.noCase,
  },
  param: {
    description: '',
    func: changeCase.paramCase,
  },
  pascal: {
    description: '',
    func: changeCase.pascalCase,
  },
  path: {
    description: '',
    func: changeCase.pathCase,
  },
  sentence: {
    description: '',
    func: changeCase.sentenceCase,
  },
  snake: {
    description: '',
    func: changeCase.snakeCase,
  },
  title: {
    description: '',
    func: changeCase.capitalCase,
  },
  upper: {
    description: '',
    func: upperCase,
  },
}
