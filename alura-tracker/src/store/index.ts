import type IProjeto from '@/interfaces/IProjeto'
import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex/types/index.js'

interface IAppEstado {
  projetos: IProjeto[]
}

export const key: InjectionKey<Store<IAppEstado>> = Symbol()

export const store = createStore<IAppEstado>({
  state: {
    projetos: [
      {
        id: new Date().toISOString(),
        nome: 'TypeScript',
      },
      {
        id: new Date().toISOString(),
        nome: 'Vue',
      },
      {
        id: new Date().toISOString(),
        nome: 'Vuex',
      },
    ],
  },
})
