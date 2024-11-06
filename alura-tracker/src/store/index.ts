import type IProjeto from '@/interfaces/IProjeto'
import type { InjectionKey } from 'vue'
import { createStore, Store, useStore as vuexUseStore } from 'vuex'

export interface IAppEstado {
  projetos: IProjeto[]
}

export const key: InjectionKey<Store<IAppEstado>> = Symbol()

export const store = createStore<IAppEstado>({
  state: {
    projetos: [],
  },
  mutations: {
    ADICIONAR_PROJETO(state, pNomeDoProjeto: string) {
      const lProjeto: IProjeto = {
        id: new Date().toISOString(),
        nome: pNomeDoProjeto,
      }
      state.projetos.push(lProjeto)
    },
  },
})

export function useStore(): Store<IAppEstado> {
  return vuexUseStore(key)
}
