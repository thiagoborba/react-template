import { request } from './config'
import { Template } from './models';

export function exempleFunction(): Template {
  request.get('')
  return { ok: true }
}

