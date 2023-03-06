import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const num: number = parseInt(core.getInput('number'))
    core.debug(`숫자 ${num} 입력받음`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    const output: number = num + 1
    core.debug(`숫자 증가 : ${output}`)
    core.setOutput('value', output)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
