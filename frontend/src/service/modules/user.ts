import axios from '@/service/http'
import qs from 'qs'
import { sleep } from '@/tools'

import type { UserFormType } from '@/views/login/types'
export function login(params: UserFormType): any {
  return axios({
    url: '/alert-plugin-instances',
    method: 'get',
    params,
  })
}

export function logout(params: any): any {
  return axios({
    url: '/logout',
    method: 'get',
    params,
  })
}
