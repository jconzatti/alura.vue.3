<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Projetos',
  data() {
    return {
      nomeDoProjeto: '' as string,
    }
  },
  methods: {
    salvarProjeto() {
      this.store.commit('ADICIONAR_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = ''
    },
  },
  setup() {
    const store = useStore()
    return {
      store,
      projetos: computed(() => store.state.projetos),
    }
  },
})
</script>

<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvarProjeto">
      <div class="field">
        <label for="nome-projeto" class="label">Nome do projeto</label>
        <input type="text" class="input" id="nome-projeto" v-model="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lProjeto in projetos" :key="lProjeto.id">
          <td>{{ lProjeto.id }}</td>
          <td>{{ lProjeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="css" scoped>
.projetos {
  padding: 1.25rem;
}
table {
  margin-top: 2rem;
}
</style>
