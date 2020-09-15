'use strict'
import cp from 'child_process'
import alfy from 'alfy'
import { upperCaseFirst } from 'upper-case-first'
import { CASE_LABELS, CASE_DEFINITIONS } from './consts'

const clipText =
  cp.spawnSync('pbpaste', {
    encoding: 'utf8',
  }).stdout || ''

const inputText = alfy.input.trim().toLowerCase()

const output = alfy.matches(inputText, CASE_LABELS).map((caseLabel) => ({
  title: `${upperCaseFirst(caseLabel)} Case`,
  subtitle: CASE_DEFINITIONS[caseLabel].func(clipText),
  arg: CASE_DEFINITIONS[caseLabel].func(clipText),
}))

alfy.output(output)
